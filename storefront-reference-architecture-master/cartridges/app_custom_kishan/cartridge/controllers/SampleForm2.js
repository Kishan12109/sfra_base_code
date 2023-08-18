/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');
var CSRFProtection = require('*/cartridge/scripts/middleware/csrf');

server.get(
    'Show',
    server.middleware.https,
    CSRFProtection.generateToken,
    function (req, res, next) {
        var actionUrl = URLUtils.url('SampleForm2-Handler');
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
    server.middleware.https,
    CSRFProtection.validateAjaxRequest,
    function (req, res, next) {
        var newsletterForm = server.forms.getForm('newsletter');
        var CustomObjectMgr = require('dw/object/CustomObjectMgr');

        if (newsletterForm.valid) {
            var transaction = require('dw/system/Transaction');

            transaction.wrap(function () {
                var CustomObject = CustomObjectMgr.createCustomObject('CustomerSubscription', newsletterForm.email.value);
                CustomObject.custom.firstName = newsletterForm.fname.value;
                CustomObject.custom.lastName = newsletterForm.lname.value;

                res.json({
                    success: true,
                    redirectUrl: URLUtils.url('SampleForm2-Success').toString()
                });
            });
        } else {
            res.render('/newsletter/newslettererror');
        }
        next();
    }
);

module.exports = server.exports();
