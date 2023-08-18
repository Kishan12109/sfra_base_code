/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
'use strict';

// eslint-disable-next-line valid-jsdoc
/**
 * To get the Country Code from Session
 */
function getSessionCountry() {
    // eslint-disable-next-line no-undef
    var reqGeoLoc = request.getGeolocation();
    var country = reqGeoLoc.getCountryName();
    var city = reqGeoLoc.getCity();
    var countryCode = reqGeoLoc.getCountryCode();
    var obj = {
        Country: country,
        CountryCode: countryCode,
        City: city
    };
    return obj;
}

module.exports = {
    getSessionCountry: getSessionCountry
};
