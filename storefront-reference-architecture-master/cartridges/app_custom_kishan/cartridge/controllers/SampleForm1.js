/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
'use strict';
var CSRFProtection = require('*/cartridge/scripts/middleware/csrf');
var URLUtils = require('dw/web/URLUtils');

var server = require('server');

server.get(
    'Show',
    server.middleware.https,
    CSRFProtection.generateToken,
    function (req, res, next) {
        var actionUrl = URLUtils.url('SampleForm1-Handler');
        var newsletterForm = server.forms.getForm('newsletter');
        newsletterForm.clear();

        // eslint-disable-next-line linebreak-style
        res.render('/newsletter/newslettersignup', {
            actionUrl: actionUrl,
            newsletterForm: newsletterForm
        });
        next();
    }
);
server.post(
    'Handler',
    CSRFProtection.validateAjaxRequest,
    server.middleware.https,
    function (req, res, next) {
        var newsletterForm = server.forms.getForm('newsletter');

        if (newsletterForm.valid) {
            res.json({
                success: true,
                redirectUrl: URLUtils.url('SampleForm1-Success').toString()
            });
        } else {
            res.setStatusCode(500);
            res.json({
                success: false,
                error: error
            });
        }
        next();
    }
);
server.get(
    'Success',
    server.middleware.https,
    function (req, res, next) {
        var continueUrl = dw.web.URLUtils.url('SampleForm1-Show');
        res.render('/newsletter/newslettersuccess', {
            continueUrl: continueUrl,
            newsletterForm: server.forms.getForm('newsletter')
        });
        next();
    }
);

module.exports = server.exports();
