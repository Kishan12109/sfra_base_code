/* eslint-disable linebreak-style */
'use strict';


module.exports = function (object, apiProduct) {
    Object.defineProperty(object, 'clothtype', {
        enumerable: true,
        value: apiProduct.custom.clothtype
    });

    Object.defineProperty(object, 'clothmaterial', {
        enumerable: true,
        value: apiProduct.custom.clothmaterial
    });
};
