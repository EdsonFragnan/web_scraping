'use strict';

const winston = require('winston');
const fs = require('fs');

if(!fs.existsSync('logs')){
  fs.mkdirSync('logs');
}

module.exports = winston.createLogger({
  transports : [
    new winston.transports.File({
      level:"info",
      filename:"logs/web_scraping.log",
      maxFile: 10
    })
  ]
 });
