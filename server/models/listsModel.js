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
      client = await pool.connect(); // Espera a abrir conexion
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


const buildInsertProductsQuery = () => {
    
}

//UPDATE
const updateList = async (list) => {
  const { name, newName, products } = list;
  let client, result;

  try {
      client = await pool.connect();

    console.log('---- Ejecutando :updateListName');
    await client.query(queries.updateListName, [newName, name])
    console.log('---- Ejecutado :updateListName');
    console.log('---- Ejecutando :deleteListProducts');
    await client.query(queries.deleteListProducts, [newName])
    console.log('---- Ejecutado :deleteListProducts');
      
      if(products.length) {
        console.log('---- Ejecutando :insertNewProducts');
        await Promise.all(products.map(product => {
            const insert_product = {
                // give the query a unique name
                name: 'insert-product',
                text: queries.insertNewProducts,
                values: [newName, product.title, product.product_quantity],
              }
            return client.query(insert_product)
        }))
        console.log('---- Ejecutado :insertNewProducts');
    
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
const deleteList = async (list) => {
  const { name } = list;
  let client, result;

  try {
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
  updateList,
  deleteList
}

module.exports = Lists;