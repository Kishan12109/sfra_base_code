/* eslint-disable linebreak-style */
'use strict';

/**
 * @namespace Home
 */

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var base = module.superModule;
server.extend(base);
/**
 * Any customization on this endpoint, also requires update for Default-Start endpoint
 */
/**
 * Home-Show : This endpoint is called when a shopper navigates to the home page
 * @name Base/Home-Show
 */
server.replace('Show', consentTracking.consent, cache.applyDefaultCache, function (req, res, next) {
    res.render('home/homePage');
    next();
});


module.exports = server.exports();
