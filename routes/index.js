'use strict';

module.exports = app => {
  const controller = app.controllers;

  app.post('/scraping', (req, res) => {
    controller.saveCommands.saveScraping(res);
  });

  app.get('/scraping_commands', (req, res) => {
    controller.listCommands.commands(res);
  });
  
  // Validation to route not found.
  const message = 'Route not found!';

  app.get('*', function(req, res){
    res.status(404).json({message: message});
  });

  app.post('*', function(req, res){
    res.status(404).json({message: message});
  });

  app.delete('*', function(req, res){
    res.status(404).json({message: message});
  });

  app.put('*', function(req, res){
    res.status(404).json({message: message});
  });

  app.patch('*', function(req, res){
    res.status(404).json({message: message});
  });

};