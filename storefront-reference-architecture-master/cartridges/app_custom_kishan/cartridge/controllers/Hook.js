/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
'use strict';

/**
 * @namespace SampleHook
 */

var server = require('server');

server.get('Country', function (req, res, next) {
    var HookMgr = require('dw/system/HookMgr');
    var hookResult = {};
    if (HookMgr.hasHook('app.custom.getcountrydetail.service')) {
        hookResult = HookMgr.callHook('app.custom.getcountrydetail.service', 'getSessionCountry');
    }
    res.render('sample', {
        HookResult: hookResult
    });
    next();
});

module.exports = server.exports();
