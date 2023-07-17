const Lists = require('../models/listsModel');

//[GET] PORT/lists
//[GET] PORT/lists?name=listName
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


//[POST] PORT/lists
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
    }
  }
  catch(error) {
    res.status(400).json({
      msj: `${error}`
    });
  }
};


//[PUT] PORT/lists
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
    console.log('req.body.name', req.body.name);
    console.log(error),
    res.status(400).json({
      msj: `${error}`
    });
  }
};

//[PUT] PORT/lists
const updateListProducts = async(req,res) => {
  let lists;

  try {
    const bodyData = req.body;
    

    res.status(200).json({
      message: `Lista actualizada`
    });
  }
  catch(error) {
    console.log(error),
    res.status(400).json({
      msj: `${error}`
    });
  }
};

//[DELETE] PORT/lists
const deleteList = async(req,res) => {
  
  try {
    const listsData = req.body;
    await Lists.deleteList(listsData);
    res.status(200).json({message: `Se ha borrado ${listsData.name} `});
  }
  catch(error) {
    res.status(400).json({
      msj: `${error}`
    });
  }
};


module.exports = {
  getLists,
  createList,
  updateList,
  updateListProducts,
  deleteList,
}