/* eslint-disable linebreak-style */
'use strict';


var server = require('server');

server.get('Show', function (req, res, next) {
    res.render('/product/components/city');

    next();
});


module.exports = server.exports();
