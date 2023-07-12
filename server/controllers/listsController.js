// const lists = require{***modelo de lista***}

//[GET] PORT/lists
//[GET] PORT/lists?id=idNumber
const getLists = async(req,res) => {

  try {
    let lists;

    if (req.query.id) {
      lists = await res.status(200).json(`Controller says: get the list with id: ${req.query.id}`); //model call
    }
    else {
      lists = await res.status(200).json('Controller says: get your lists'); //model call
    }
  }
  catch(error) {
    console.error(`Error: ${error}`);
  }
};

const allLists = [
  {
    "name": "Regalos de cumple",
    "id": 1
  },
  {
    "name": "Viaje a Alicante",
    "id": 2
  },
  {
    "name": "Cosas para los peques",
    "id": 3
  },
  {
    "name": "Hobbies",
    "id": 3
  },
];

const listNameAlredyExists = (lists, listNameToCompare) => {
  return lists.some(list => list.name?.toLowerCase() === listNameToCompare?.toLowerCase())
};

//[POST] PORT/lists
const createList = async(req,res) => {
  
  try {
    let lists;
    const bodyData = req.body;

    if (!bodyData.name) {
      lists = await res.status(200).json('debe agregar un nombre para crear la lista');
    }
    else if (listNameAlredyExists(allLists, bodyData.name)) {
      lists = await res.status(200).json('Esta lista ya existe');
    }
    else {
      lists = await res.status(201).json({
        message: (`Controller says: CREATED list ${req.body.name} here`)
      });
    }
  }
  catch(error) {
    res.status(400).json({
      msj: `ERROR: ${error}`
    });
  }
};


//[PUT] PORT/lists
// const updateList = async(req,res) => {
  
//   try {
//     let lists;
//     const bodyData = req.body;
    
    
//     if (exist) { //name

//       if (bodyData.name === bodyData.newName) {

//         lists = await res.status(200).json(`se mantendrá el nombre: ${bodyData.name}, si no agregas uno nuevo`);
//       }
//       else if (bodyData.newName) {
//         const listAlreadyExists = listNameAlredyExists(allLists, bodyData.newName);

//         if (!listAlreadyExists) {

//           lists = await res.status(201).json({
//             message: (`Lista ${bodyData.newName} actualizada`)
//           });
//         }
//         else {
//           lists = await res.status(201).json({
//             message: (`Lista ${bodyData.newName} actualizada`)
//           });
//         }
//       }
//     }
//     else if (!exist) {

//       if(bodyData.newName) {
//         console.log("3. name existe", !bodyData.name);
//         console.log("3. newName existe", !bodyData.newName);
//         lists = await res.status(200).json(`¿Quieres crear la lista ${bodyData.name}?`); //respuesta crear, crea la lista
//       }
//     }
//     else {
//       console.log("4. name existe", !bodyData.name);
//       console.log("4. newName existe", !bodyData.newName);
//       lists = await res.status(200).json('No hay lista seleccionada');
//     }
//     res.status(200).json(lists);
//   }
//   catch(error) {
//     res.status(400).json({
//       msj: `ERROR: ${error}`
//     });
//   }
// };


//[DELETE] PORT/lists
const deleteList = async(req,res) => {
  
  try {
    const listsData = req.body; // {name}
    // const response = await authors.deleteAuthor(listsData);
    res.status(200).json({message: `Se ha borrado ${listsData.name} `});
  }
  catch(error) {
    res.status(400).json({
      msj: `ERROR: ${error}`
    });
  }
};


module.exports = {
  getLists,
  createList,
  // updateList,
  deleteList,
}