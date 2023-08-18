/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
'use strict';

var server = require('server');


server.get(
    'Show',
    server.middleware.https,
    function (req, res, next) {
        var actionUrl = dw.web.URLUtils.url('SampleForm-Handler');
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
    function (req, res, next) {
        var newsletterForm = server.forms.getForm('newsletter');
        var continueUrl = dw.web.URLUtils.url('SampleForm-Show');

        if (newsletterForm.valid) {
            res.render('/newsletter/newslettersuccess', {
                continueUrl: continueUrl,
                newsletterForm: newsletterForm
            });
        } else {
            res.render('/newsletter/newslettererror', {
                continueUrl: continueUrl
            });
        }
        next();
    }
);

module.exports = server.exports();
