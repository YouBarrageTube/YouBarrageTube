var apiVersion = '/v1';
var dbhelper = require('./dbHelper');
var videoHelper = require('./videoHelper');
module.exports = function (app) {

    /**
     Comment endpoints
     */
    app.get(apiVersion + '/comments', function (req, res) {
        dbhelper.getComments(req.query.videoId, function (comments) {
            res.send(comments);
        });
    });

    app.post(apiVersion + '/comment', function (req, res) {
        dbhelper.insertComment(req.body.videoId, req.body.comment, req.body.videoTime);
        res.send('Comment inserted');
    });

    /**
     Video endpoints
     */
    var videoApiPath = '/video';

    app.get(apiVersion + videoApiPath + '/popular', function (req, res) {
        if (req.query.resultNum) {
            videoHelper.getPopular(parseInt(req.query.resultNum), function (response) {
                res.send(response);
            });
        }
        else {
            //default fetch 10 results
            videoHelper.getPopular(10, function (response) {
                res.send(response);
            });
        }
    });

    app.get(apiVersion + videoApiPath + '/search', function (req, res) {
        if (!req.query.keyword) {
            res.status(400).send('Required parameter: keyword');
        }
        else if (req.query.resultNum) {
            videoHelper.seachByKeyword(req.query.keyword, parseInt(req.query.resultNum), function (response) {
                res.send(response);
            });
        }
        else {
            //default fetch 10 results
            videoHelper.seachByKeyword(req.query.keyword, 10, function (response) {
                res.send(response);
            });
        }
    });

    app.get(apiVersion + videoApiPath + '/test', function (req, res) {
        /*videoHelper.searchById(req.query.id, function (response) {
            res.send(response);
        });*/
        dbhelper.addOneRecord("jPEYpryMp2s");
    });

};