var express = require('express');
var path = require('path');
var logger = require('morgan');

//svar routes = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
