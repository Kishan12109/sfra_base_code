/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
'use strict';

var base = module.superModule;
var decorators = require('*/cartridge/models/product/decorators/index');

module.exports = function fullProduct(product, apiProduct, options) {
    base.call(this, product, apiProduct, options);
    decorators.cityOrigin(product, apiProduct);
    // eslint-disable-next-line new-cap
    decorators.Cloth(product, apiProduct);
    return product;
};