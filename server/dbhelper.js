var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbName = 'YouBarrageTube';
var collectionName = "comments";

exports.init = function () {

    MongoClient.connect(url + dbName, function (err, db) {
        if (err) throw err;
        console.log("Database Created");
        db.close();
    });
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.createCollection(collectionName, function (err, res) {
            if (err) throw err;
            console.log("Collections Created");
            db.close();
        });
    });
};

exports.insertComment = function (videoUrl, comment, videoTime) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        var query = {_id: videoUrl};
        var newvalues = {$push: {comments: {comment: comment, videoTime: videoTime}}};
        var options = {upsert: true};
        dbo.collection(collectionName).updateOne(query, newvalues, options, function (err, res) {
            if (err) throw err;
            console.log(res);
            db.close();
        });
    })
};

exports.getComments = function (videoUrl,fn) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        var query = {_id: videoUrl};
        var options = {'_id': false};
        dbo.collection(collectionName).find(query).project(options).toArray(function (err, result) {
            if (err) throw err;
            if (result.length){
                var comments = result[0].comments;
                comments.sort(function (a,b) {
                    return parseFloat(a.videoTime)-parseFloat(b.videoTime);
                });

            }
            else comments = [];
            db.close();
            fn(comments);
        });
    });
};