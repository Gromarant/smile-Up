express = require('express');
const productsController = require('../controllers/productsController');
const productRouter = express.Router();

productRouter.get('/', productsController.getProducts);

module.exports = productRouter;