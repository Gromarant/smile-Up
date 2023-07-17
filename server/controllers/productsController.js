/**
 * Controladores de API REST para productos
 * @author Mariangelica Rodriguez <gromarant.com> 
 * @namespace productsController    
 */
const Products = require('../models/productsModel')


/**
 * Esta función busca las listas del usuario por nombre o todas al a vez
 * @memberof productsController
 * @method getProducts Http request GET
 * @exports getProducts
 * @async 
 * @param {string} title de la lista
 * @return {Object} Devuelve un array de objetos que corresponden a cada producto de la base de datos
 */
const getProducts = async (req, res) => {
 
  try {
    let product;

    if (req.query.title) {
      product = await Products.getProductByTitle(req.query.title);
    }
    else if (req.query.category) {
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
  };
};

module.exports = {
  getProducts,
};