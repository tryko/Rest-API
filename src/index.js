/* eslint-disable no-console */

import express from 'express';
import bodyParser from 'body-parser';

import Name from './test.model.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const router = express.Router();

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('listening to: ', PORT);
  }
});
