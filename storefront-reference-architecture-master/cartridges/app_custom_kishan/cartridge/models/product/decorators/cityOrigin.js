/* eslint-disable linebreak-style */
'use strict';


module.exports = function (object, apiProduct) {
    Object.defineProperty(object, 'cityOrigin', {
        enumerable: true,
        value: apiProduct.custom.cityOrigin
    });

    Object.defineProperty(object, 'zipCode', {
        enumerable: true,
        value: apiProduct.custom.zipCode
    });

    Object.defineProperty(object, 'isSustainable', {
        enumerable: true,
        value: apiProduct.custom.isSustainable
    });

    Object.defineProperty(object, 'batteryType', {
        enumerable: true,
        value: apiProduct.custom.batteryType
    });
};
