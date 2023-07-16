const Products = require('../models/productsModel')

//GET PORT/products
//GET PORT/products?id=idNumber
const getProducts = async (req, res) => {
  try {
    let product;

    if (req.query.title) {
      product = await Products.getProductByTitle(req.query.title);
    }
    else if (req.query.category) {
      console.log("getProductByCategory");
      console.log(req.query.category);
      product = await Products.getProductByCategory(req.query.category);
    }
    else {
      product = await Products.getAllProducts();
    }
    res.status(200).json(product);
  }
  catch(error) {
    console.error(`Error: ${error}`);
    res.status(400).json({
      msj: `ERROR: ${error}`
    });
  }
}

module.exports = {
  getProducts,
}