'use strict';

const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const messages = require('./app/routes/classifieds');

app.use(express.static(path.join(__dirname, '/app/public')));

app.use(bodyParser.json());

app.use('/classifieds', messages);

app.use('*', function(req, res, _next) {
  res.sendFile('index.html', {root: path.join(__dirname, '/app/public')});
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
