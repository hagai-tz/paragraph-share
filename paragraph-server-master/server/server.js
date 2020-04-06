//SERVER
const express = require('express');
const app = express();
const path = require('path');
const api = require('./routes/api');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// DEVELOPMENT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '...', 'node_modules')));

//MongoDB setup
const mongoURL =
  process.env.NODE_ENV == 'production'
    ? process.env.MONGODB_PRODUCTION
    : process.env.MONGODB_LOCAL;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// PRODUCTION
app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Origin',
    process.env.NODE_ENV == 'production'
      ? 'https://paragraph-client.herokuapp.com'
      : 'http://localhost:3000'
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );

  next();
});

app.use('/', api);

const port = process.env.NODE_ENV == 'production' ? process.env.PORT : 8000;
app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
