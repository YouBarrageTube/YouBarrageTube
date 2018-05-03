const MongoClient = require('mongodb').MongoClient;
const videlHelper = require('./videoHelper');
const url = "mongodb://localhost:27017/";
const dbName = 'YouBarrageTube';
const commentCollection = "comments";
const commentNumCollection = "comments_num";
let top10MostComments = [];

exports.init = function () {

  MongoClient.connect(url + dbName, function (err, db) {
    if (err) throw err;
    console.log('Database Linked');
    db.close();
  });
  initTop10MostComments();
};

exports.insertComment = function (videoId, comment, videoTime) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    const query = {_id: videoId.toString()};
    const newvalues = {$push: {comments: {comment: comment, videoTime: parseInt(videoTime)}}};
    const options = {upsert: true};
    dbo.collection(commentCollection).updateOne(query, newvalues, options, function (err, res) {
      if (err) throw err;
      db.close();
      addOneRecord(videoId);
    });
  })
};

exports.getComments = function (videoId, fn) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    const query = {_id: videoId.toString()};
    const options = {'_id': false};
    let comments;
    dbo.collection(commentCollection).find(query).project(options).toArray(function (err, result) {
      if (err) throw err;
      if (result.length) {
        comments = result[0].comments;
        comments.sort(function (a, b) {
          return parseFloat(a.videoTime) - parseFloat(b.videoTime);
        });
      }
      else comments = [];
      db.close();
      fn(comments);
    });
  });
};

function addOneRecord(videoId) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    const query = {_id: videoId.toString()};
    dbo.collection(commentNumCollection).findOne(query, function (err, result) {
      if (err) throw err;
      // if record exists
      if (result) {
        const currentNum = parseInt(result.num);
        //plus one to current comment num
        result.num = currentNum + 1;
        const newValues = {$set: {num: currentNum + 1}};
        dbo.collection(commentNumCollection).update(query, newValues, function (err, res) {
          if (err) throw err;
          db.close();
          result.num = currentNum + 1;
          updateTop10MostComments(currentNum + 1, result);
        });
      }
      else {
        videlHelper.getById(videoId, function (response) {
          // add new record with one comment num
          let newValues = response;
          newValues._id = newValues.id;
          delete newValues.id;
          newValues.num = 1;
          dbo.collection(commentNumCollection).insertOne(newValues, function (err, res) {
            if (err) throw err;
            console.log("1 document insert");
            db.close();
            updateTop10MostComments(1, newValues);
          });
        });

      }
      //fn(comments);
    });
  });
}

exports.getTop10MostComments = function (fn) {
  fn(top10MostComments);
};

function initTop10MostComments() {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    const query = {};
    const options = {
      "limit": 10,
      "sort": "[['num','desc'], ['title','asc']]"
    };
    //fetch top 10 records
    dbo.collection(commentNumCollection).find(query, options).toArray(function (err, result) {
      top10MostComments = result;
      top10MostComments.forEach(function (item) {
        item.id = item._id;
        delete item._id;
      });
      top10MostComments.sort(function (a, b) {
        return b.num - a.num;
      });
      db.close();
    });
  });
}

function updateTop10MostComments(newNum, newValues) {
  newValues.id = newValues._id;
  delete newValues._id;
  //if video already exists in top 10
  for (let i = 0; i < top10MostComments.length; i++) {
    if (top10MostComments[i].id == newValues.id) {
      top10MostComments[i].num = newNum;
      top10MostComments.sort(function (a, b) {
        return b.num - a.num;
      });
      return;
    }
  }
  // if top 10 hasn't 10 records
  if (top10MostComments.length < 10)
    top10MostComments.push(newValues);
  else if (top10MostComments.slice(-1)[0].num < newNum) {
    //Pop last element in top 10, push the new one then sort
    top10MostComments.pop();
    top10MostComments.push(newValues);
    top10MostComments.sort(function (a, b) {
      return b.num - a.num;
    });
  }
}