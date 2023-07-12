// const products = require('***modelo de producto***')

//GET PORT/products
//GET PORT/products?id=idNumber
const getProducts = async (req, res) => {
  try {
    let response;

    if (req.query.id === 256) {
      response = await res.send(`Controller says: get the product with id: ${req.query.id}`);
    }
    else {
      response = await res.send('Controller says: get your products');
    }
  }
  catch(error) {
    console.error(error);
  }
}

module.exports = {
  getProducts,
}