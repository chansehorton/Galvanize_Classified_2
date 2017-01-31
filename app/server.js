'use strict';

const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const messages = require('./routes/classifieds');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/classifieds', messages);

app.use('*', function(req, res, _next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
