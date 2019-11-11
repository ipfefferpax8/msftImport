"use strict";

// external
const _ = require('lodash');
const chalk = require('chalk');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const mainRouter = require('express-promise-router')();

// node
const path = require('path');

// internal
const log = require('./services/log');
const C = require('./services/constant');
const HttpErrorHandler = require('./services/httpErrors').HttpErrorHandler;
const app = express();

const ENABLED_MODULES = [
  require('./microsoft')
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, '../ui/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(morgan('combined'));

_.each(ENABLED_MODULES, module => module(mainRouter));
app.use(mainRouter);
app.use(HttpErrorHandler);
app.listen(C.PORT, createBanner);

function createBanner() {
  log.info(chalk.green('================================'));
  log.info(chalk.green('\tMicrosoft-Import-Mock-Server'));
  log.info(chalk.green(''));
  log.info(chalk.green(`Environment:\t${C.NODE_ENV}`));
  log.info(chalk.green(`Port:\t\t${C.PORT}`));
  log.info(chalk.green('================================'));
}