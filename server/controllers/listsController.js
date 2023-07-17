/**
 * Controladores de API REST para listas de deseos
 * @author Mariangelica Rodriguez <gromarant.com> 
 * @namespace ListsController    
 */
const Lists = require('../models/listsModel');


/**
 * Esta función busca las listas del usuario por nombre o todas al a vez
 * @memberof ListsController
 * @method getLists Http request GET
 * @exports getLists
 * @async 
 * @param {string} name de la lista
 * @return {Object} Devuelve un array de objetos que corresponden a cada lista con sus productos
 */
const getLists = async(req,res) => {
  try {
    let list;
    
    if (req.query.name) {
      list = await Lists.getListByName(req.query.name);
    }
    else {
      list = await Lists.getAllLists();
    }
    res.status(200).json(list);
  }
  catch(error) {
    res.status(400).json({
      msj: `${error}`
    });
  }
};


/**
 * Esta función crea una Lista nueva en base de datos PostgreSQL
 * @memberof ListsController
 * @method createList Http request POST
 * @exports createList
 * @async 
 * @param {string} name de la lista
 * @param {Object}  
 * <pre>
    {
      name: "Nombre de la lista"
    }
  </pre>
*/
const createList = async(req,res) => {
  try {
    let lists;
    const bodyData = req.body;
    
    if (bodyData.name) {
      await Lists.createList(bodyData);
      lists = await res.status(201).json({
        message: (`Lista ${req.body.name} creada`)
      });
    }
    else {
      lists = await res.status(400).json({
        message: (`Debe agregar un nombre para crear la lista`)
      });
    };
  }
  catch(error) {
    res.status(400).json({
      msj: `${error}`
    });
  };
};


/**
 * Esta función actualiza una Lista en base de datos PostgreSQL
 * @memberof ListsController
 * @method updateList Http request PUT
 * @exports updateList
 * @async 
 * @param {string} name de la lista
 * @param {Object}  
 * <pre>
    {
      name: currentname,
      newName: newListName
    }
  </pre>
*/
const updateList = async(req,res) => {
  let lists;

  try {
    const bodyData = req.body;
    
    if (bodyData.newName) {
      lists = await Lists.updateListName(bodyData);
    }
    else if (bodyData.products) {
      lists = await Lists.updateListProducts(bodyData);
    }
    res.status(200).json({
      message: `Lista ${bodyData.name} actualizada`
    });
  }
  catch(error) {
    console.log(error),
    res.status(400).json({
      msj: `${error}`
    });
  };
};


/**
 * Esta función borra una Lista en base de datos PostgrePostgreSQL
 * @memberof ListsController
 * @method deleteList Http request DELETE
 * @exports deleteList
 * @async 
 * @param {string} name de la lista
 * @param {String} name de la lista
*/
const deleteList = async(req,res) => {
  try {
    const listsData = req.query;
    if (req.query.name) {
      await Lists.deleteListModel(listsData);
      res.status(200).json({message: `Se ha borrado ${listsData.name} `});
    }
  }
  catch(error) {
    res.status(400).json({
      msj: `${error}`
    });
  };
};

module.exports = {
  getLists,
  createList,
  updateList,
  deleteList,
};