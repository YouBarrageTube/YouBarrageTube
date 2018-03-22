var express = require('express');
var bodyParser = require('body-parser');
var dbhelper = require('./dbhelper.js');

// Create our app
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

dbhelper.init();

var comments= dbhelper.getComments('123',function(comments){
    console.log(comments);
});


app.post('/message', function (req, res) {
    //console.log(req);
    var message = req.body.message;
    res.send('Server sent back the message: ' + message + ' at ' + new Date());
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up on port 3000');
});