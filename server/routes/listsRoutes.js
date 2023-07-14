const express = require('express');
const listsController = require('../controllers/listsController');
const listsRouter = express.Router();

listsRouter.get('/:name?', listsController.getLists);
listsRouter.post('/', listsController.createList);
listsRouter.put('/', listsController.updateList);
listsRouter.delete('/', listsController.deleteList);

module.exports = listsRouter;