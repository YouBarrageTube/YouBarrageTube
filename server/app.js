var express = require('express');
var bodyParser = require('body-parser');
var dbhelper = require('./dbhelper');

// Create our app
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

dbhelper.init();
require('./routes')(app);


app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up on port 3000');
});