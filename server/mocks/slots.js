/*jshint node:true*/
var id = 0;

module.exports = function(app) {
  var express = require('express');
  var slotsRouter = express.Router();

  slotsRouter.get('/', function(req, res) {
    res.send({
      'slots': []
    });
  });

  slotsRouter.post('/', function(req, res) {
    res.send({
      'data': {
        id: id++,
        type: 'slot'
      }
    });
  });

  slotsRouter.get('/:id', function(req, res) {
    res.send({
      'slots': {
        id: req.params.id
      }
    });
  });

  slotsRouter.put('/:id', function(req, res) {
    res.send({
      'slots': {
        id: req.params.id
      }
    });
  });

  slotsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/slots', require('body-parser').json());
  app.use('/api/slots', slotsRouter);
};
