/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const router = require('./routes');
require('express-async-errors');

const app = express();

app.use(express.json());
app.use(router);

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Http Server Running!'));
