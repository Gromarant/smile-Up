const pool = require('../utils/db_sql');
const queries = require('../queries/poducts.queries');

// GET
const getProductByTitle = async (title) => {
  let client, result;

  try {
      client = await pool.connect();
      const data = await client.query(queries.getProductByTitle, [title]);
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


const getAllProducts = async () => {
  let client, result;

  try {
      client = await pool.connect(); 
      const data = await client.query(queries.getAllproducts);
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

const getProductByCategory = async (category) => {
    let client, result;
  
    try {
        client = await pool.connect(); 
        const data = await client.query(queries.getProductByCategory, [category]);
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

const Products = {
    getProductByTitle,
    getAllProducts,
    getProductByCategory,
};

module.exports = Products;