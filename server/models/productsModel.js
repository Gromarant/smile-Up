// const pool = require('../utils/db_sql'); // Conexión a la BBDD
// const queries = require('../queries/poducts.queries');

// GET
const getproductById = async (name) => {
  let client, result;

  try {
      client = await pool.connect(); 
      const data = await client.query(queries.getproductById, [name])
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


const getAllProducts = async () => {
  let client, result;

  try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.getAllProducts)
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