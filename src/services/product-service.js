// src/services/product-service.js
var axios = require('axios')

module.exports = {
  getProductWeight: async function (productId) {
    return axios
      .get('https://mycluster.icp:8899/products/' + productId)
      .then(response => {
        if (response.data && !Number.isNaN(parseFloat(response.data.weightLB))) {
          return response.data.weightLB
        } else {
          return Promise.reject('Invalid response object')
        }
      })
      .catch( (err) => {
        throw new Error(err)
      })
  }
}