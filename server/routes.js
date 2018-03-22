var apiVersion = '/v1';
var dbhelper = require('./dbhelper');
module.exports = function (app) {

    app.post(apiVersion + '/comments', function (req, res) {
        console.log(req);
        dbhelper.getComments(req.body.videoUrl, function (comments) {
            //console.log(comments);
            res.send(comments);
        });
    });

    app.post(apiVersion + '/comment', function (req, res) {
        console.log(req);
        dbhelper.insertComment(req.body.videoUrl, req.body.comment, req.body.videoTime);
        res.send('Comment inserted');
    });

    //TODO:just for initial form
    app.post('/message', function (req, res) {
        console.log(req);
        var message = req.body.message;
        res.send('Server sent back the message: ' + message + ' at ' + new Date());
    });

};