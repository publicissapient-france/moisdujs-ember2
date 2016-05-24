/*jshint node:true*/
var themes = {
    data: [
        {
            type: 'theme',
            id: 1,
            attributes: {
                title: 'Project Bootstrapping'
            },
            relationships: {
                'slots': {
                    data: []
                }
            }
        },
        {
            type: 'theme',
            id: 2,
            attributes: {
                title: 'Les 4 fantastiques framework Front'
            }
        },
        {
            type: 'theme',
            id: 3,
            attributes: {
                title: 'Qualité et performances Javascript'
            }
        },
        {
            type: 'theme',
            id: 4,
            attributes: {
                title: 'Le cabinet de curiosité Javascript'
            }
        }
    ]
};

module.exports = function (app) {
    var express = require('express');
    var themesRouter = express.Router();

    themesRouter.get('/', function (req, res) {
        res.send(themes);
    });

    themesRouter.post('/', function (req, res) {
        res.status(201).end();
    });

    themesRouter.get('/:id', function (req, res) {
        res.send({
            data: themes.data[req.params.id - 1]
        });
    });

    themesRouter.put('/:id', function (req, res) {
        res.send({
            'themes': {
                id: req.params.id
            }
        });
    });

    themesRouter.delete('/:id', function (req, res) {
        res.status(204).end();
    });

    // The POST and PUT call will not contain a request body
    // because the body-parser is not included by default.
    // To use req.body, run:

    //    npm install --save-dev body-parser

    // After installing, you need to `use` the body-parser for
    // this mock uncommenting the following line:
    //
    //app.use('/api/themes', require('body-parser').json());
    app.use('/api/themes', themesRouter);
};
