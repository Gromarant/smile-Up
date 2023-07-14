// const products = require('***modelo de producto***')

//GET PORT/products
//GET PORT/products?id=idNumber
const getProducts = async (req, res) => {
  try {
    let response;

    if (req.query.name === 'popo') {
      response = await res.send(`Controller says: get the product with id: ${req.query.name}`);
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