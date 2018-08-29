var sinon = require('sinon');

var productService = require('../services/product-service')
function ShippingController() {}

const REGULAR_PRICE = 0.1, OVERNIGHT_PRICE = 1

ShippingController.prototype.getItemShipping = async function(item) {
  var shippingAmount = await productService.getProductWeight(item.id)
  return shippingAmount * REGULAR_PRICE
}

module.exports = ShippingController;