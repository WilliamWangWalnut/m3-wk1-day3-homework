var express = require('express');
var path = require ('path');
var app = express();
var pug = require('pug');

app.get('/', function(req, res){
  res.render('content');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(3000);