/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/**
 * A simple form controller.
 *
 */

'use strict';
var server = require('server');


server.get('CountryDetails', function(req, res, next) {
    res.render('country');
    next();
});

server.get('FindCountryAjax', function(req, res, next) {
    //var notify = server.forms.getForm('notification');
    var qStr = req.querystring;
    //Value provided by user
    var country = qStr.country;
    //Require the file where service is configured
    var CountryService = require('*/cartridge/scripts/services/CountryService');
    var countrySvcObj = CountryService.getCountryDetailService('service.rest.refarch.country');
    //Make the service call and capture result
    var result = countrySvcObj.call({
        name: country
    });
    //Handle the APi response
    if (result.ok) {
        res.json({
            countryObj: result.object.text
        });
    } else {
        res.json({
            countryObj: result.errorMessage
        });
    }
    next();
});

module.exports = server.exports();
