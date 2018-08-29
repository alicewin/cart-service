// contents of src/app.js
const express = require('express')
const app = express()

app.get('/shipping', (request, response) => {
  response.send('It works!')
})

app.listen(3000, () => console.log('ShippingService is listening on port 3000'))