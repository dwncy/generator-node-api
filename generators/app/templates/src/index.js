require('dotenv').config();

import http from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import busboy from 'connect-busboy';

import routes from './routes';
import initializeDb from './db';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// insert the busboy middle-ware
app.use(busboy({
  highWaterMark: 5 * 1024 * 1024, // Set 5MiB buffer
}));

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text());

// connect to db
initializeDb(db => {
  db.on('error', console.error.bind(console, 'connection error:'));

  app.use('/', routes);

  app.server.listen(process.env.PORT, () => {
    console.log(`Started on port ${app.server.address().port}`);
  });
});

export default app;
