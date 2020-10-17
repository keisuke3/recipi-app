const functions = require('firebase-functions');
const jsonServer = require('json-server');
const express = require('express');
const app = express();
const apiRouter = require('./routes/router');

// CORS設定
const middlewareForAllowOrigin = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
};

app.use(middlewareForAllowOrigin);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', apiRouter);

// json-serverの設定
const server = jsonServer.create();
const router = jsonServer.router('mock.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  if (req.method !== 'GET') {
    req.method = 'GET';
  }
  next();
});

server.use(router);

exports.mock = functions.region('asia-northeast1').https.onRequest(server);
exports.api = functions.region('asia-northeast1').https.onRequest(app);
