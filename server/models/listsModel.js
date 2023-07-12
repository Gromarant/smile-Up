// const pool = require('../utils/db_sql'); // Conexión a la BBDD
// const queries = require('../queries/lists.queries');

// GET
const getListByName = async (name) => {
  let client, result;

  try {
      client = await pool.connect(); 
      const data = await client.query(queries.getlistbyName, [name])
      result = data.rows[0]
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


const getAllLists = async () => {
  let client, result;

  try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.getAllLists)
      result = data.rows
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


//UPDATE
const updateList = async (list) => {
  const { name, newName, products } = list;
  let client, result;

  try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.updateList, [name, newName, products])
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


// DELETE 
const deleteList = async (list) => {
  const { name } = list;
  let client, result;

  try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.deleteAuthor,[email])
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


const lists = {
  getListByName,
  getAllLists,
  createList,
  updateList,
  deleteList
}