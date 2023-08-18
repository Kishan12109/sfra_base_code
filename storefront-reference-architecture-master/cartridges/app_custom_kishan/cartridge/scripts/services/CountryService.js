/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

// service.rest.refarch.country
function getCountryDetailService(svcID) {

    var getCountrySvcObj = LocalServiceRegistry.createService(svcID, {
        createRequest: function (svc, params) {
            var nameOfCountry = params.name;
            // Update the API URL
            var apiURL = svc.getURL();
            svc.setURL(apiURL + nameOfCountry);
            // Set the HTTP method for API call
            svc.setRequestMethod('GET');
            // To return API request data
            // return dataObject
        },
        parseResponse: function (svc, respObj) {
            return respObj;
        }
    });
    return getCountrySvcObj;
}


module.exports = {
    getCountryDetailService: getCountryDetailService
};
