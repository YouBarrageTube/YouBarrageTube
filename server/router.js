module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('Hello world');
    });
    app.get('/customer', function(req, res){
        res.send('customer page');
    });
    app.get('/admin', function(req, res){
        res.send('admin page');
    });
    app.post('/message', function (req, res) {
        //console.log(req);
        var message = req.body.message;
        res.send('Server sent back the message: ' + message + ' at ' + new Date());
    });
};
