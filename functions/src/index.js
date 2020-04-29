const functions = require('firebase-functions');
const express = require('express');
const app = express();
const apiRouter = require('./routes/router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', apiRouter);

exports.api = functions.region('asia-northeast1').https.onRequest(app);
