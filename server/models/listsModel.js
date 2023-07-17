const pool = require('../utils/db_sql'); 
const queries = require('../queries/lists.queries');

// GET
const getListByName = async (name) => {
  let client, result;

  try {
      client = await pool.connect(); 
      const data = await client.query(queries.getListByName, [name])
      result = data.rows;
  } 
  catch (err) {
      console.log(err);
      throw err;
  } 
  finally {
      client.release();
  };
  return result;
};


const getAllLists = async () => {
  let client, result;

  try {
      client = await pool.connect(); 
      const data = await client.query(queries.getAllLists)
      result = data.rows;
  } 
  catch (err) {
      console.log(err);
      throw err;
  } 
  finally {
      client.release();
  };
  return result
};


// CREATE
const createList = async (list) => {
  const { name } = list;
  let client, result;

  try {
      client = await pool.connect();
      const data = await client.query(queries.createList, [name])
      result = data.rowCount
  } 
  catch (err) {
      console.log(err);
      throw err;
  } 
  finally {
      client.release();
  };
  return result
};


//UPDATE
const updateListName = async (list) => {
  const { name, newName } = list;
  let client, result;

  try {
    client = await pool.connect();
    await client.query(queries.updateListName, [newName, name])
  } 
  catch (err) {
      console.log(err);
      throw err;
  } 
  finally {
      client.release();
  };
  return result
};

//UPDATE
const updateListProducts = async (list) => {
  const { name, products } = list;
  let client, result;

  try {
    client = await pool.connect();
    await client.query(queries.deleteListProducts, [name])
      
      if(products.length) {
        await Promise.all(products.map(product => {
            const insert_product = {
                
                name: 'insert-product',
                text: queries.insertNewProducts,
                values: [name, product.title],
              }
            return client.query(insert_product)
        }))
    }
  } 
  catch (err) {
      console.log(err);
      throw err;
  } 
  finally {
      client.release();
  };
  return result
};


// DELETE 
const deleteListModel = async (list) => {
  const { name } = list;
  let client, result;

  try {

    console.log('modelo-name', name);

      client = await pool.connect();
      const data = await client.query(queries.deleteList,[name])
      result = data.rowCount
  } 
  catch (err) {
      console.log(err);
      throw err;
  } 
  finally {
      client.release();
  };
  return result
};


const Lists = {
  getListByName,
  getAllLists,
  createList,
  updateListName,
  updateListProducts,
  deleteListModel
}

module.exports = Lists;