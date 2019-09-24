var express = require('express');
var authRoutes = require('./routes/authRoute');
var bodyParser = require('body-parser')

app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

port = process.env.PORT || 3500;

authRoutes(app);
app.listen(port, () => console.log('Message RESTful API server started on: ' + port));
