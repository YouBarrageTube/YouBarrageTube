const MongoClient = require('mongodb').MongoClient;
const videlHelper = require('./videoHelper');
var url = "mongodb://localhost:27017/";
var dbName = 'YouBarrageTube';
var commentCollection = "comments";
var commentNumCollection = "comments_num"
var top10MostComments = [];

exports.init = function () {

    MongoClient.connect(url + dbName, function (err, db) {
        if (err) throw err;
        console.log("Database Created");
        db.close();
    });
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.createCollection(commentCollection, function (err, res) {
            if (err) throw err;
            console.log("Collections Created");
            db.close();
        });
    });
};

exports.insertComment = function (videoId, comment, videoTime) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        var query = {_id: videoId};
        var newvalues = {$push: {comments: {comment: comment, videoTime: videoTime}}};
        var options = {upsert: true};
        dbo.collection(commentCollection).updateOne(query, newvalues, options, function (err, res) {
            if (err) throw err;
            console.log(res);
            db.close();
            this.addOneRecord(videoId);
        });
    })
};

exports.getComments = function (videoId, fn) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        var query = {_id: videoId};
        var options = {'_id': false};
        dbo.collection(commentCollection).find(query).project(options).toArray(function (err, result) {
            if (err) throw err;
            if (result.length) {
                var comments = result[0].comments;
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

exports.addOneRecord = function (videoId) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        var query = {_id: videoId};
        dbo.collection(commentNumCollection).findOne(query, function (err, result) {
            if (err) throw err;
            if (result) {
                console.log(result);
                var currnetNum = parseInt(result.num);
                var newValues = {$set: {num: currnetNum + 1}};
                dbo.collection(commentNumCollection).updateOne(query, newValues, function (err, res) {
                    if (err) throw err;
                    console.log("1 document updated");
                    db.close();
                });
            }
            else {
                videlHelper.searchById(videoId, function (response) {
                    console.log(response);
                    var newValues = response;
                    newValues._id = newValues.id;
                    delete newValues.id;
                    newValues.num = 1;
                    console.log(newValues);
                    dbo.collection(commentNumCollection).insertOne(newValues, function (err, res) {
                        if (err) throw err;
                        console.log("1 document insert");
                        db.close();
                    });
                });

            }
            //fn(comments);
        });
    });
};