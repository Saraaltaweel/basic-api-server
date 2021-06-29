'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const routFood=require('./routes/food')
const app = express();
app.use(logger);
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

app.use(logger);
app.use(routFood);


app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};