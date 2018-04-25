const express = require('express');
const bodyParser = require('body-parser');
const dbhelper = require('./dbHelper');

// Create our app
let app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

dbhelper.init();
require('./routes')(app);


app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up on port 3000');
});
