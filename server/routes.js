var apiVersion = '/v1';
var dbhelper = require('./dbHelper');
var videoHelper = require('./videoHelper');
module.exports = function (app) {

    /**
    Comment endpoints
     */
    app.get(apiVersion + '/comments', function (req, res) {
        dbhelper.getComments(req.query.videoUrl, function (comments) {
            res.send(comments);
        });
    });

    app.post(apiVersion + '/comment', function (req, res) {
        dbhelper.insertComment(req.body.videoUrl, req.body.comment, req.body.videoTime);
        res.send('Comment inserted');
    });

    /**
    Video endpoints
     */
    var apiPath = '/video';
    app.get(apiVersion + apiPath + '/popular', function (req, res) {
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

};