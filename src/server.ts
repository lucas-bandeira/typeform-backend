/* eslint-disable */
require('dotenv').config();

import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import routes from './routes';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 8080, () => {
  console.log('Server started on port 8080!');
});
