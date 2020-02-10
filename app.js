'use strict';

const Express = require('express'),
      Consign = require('consign'),
      app = Express();

Consign()
  .include('config')
  .include('controllers')
  .then('routes')
  .into(app);

module.exports = app;
