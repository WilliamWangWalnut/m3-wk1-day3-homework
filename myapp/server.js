var express = require('express');
var path = require ('path');
var app = express();
var pug = require('pug');

app.get('/', function(req, res){
  res.render('content');
});

app.set('views', path.join(__dirname, 'views'));
//use middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static("images"));
app.set('view engine', 'pug');

app.listen(3000);