const queries = {
  getProductByTitle: `
  SELECT product_id, title, price, description, category, image
  FROM products
  WHERE title ilike $1||'%';
  `,
  getProductByCategory: `
  SELECT product_id, title, price, description, category, image
  FROM products
  WHERE category ilike $1;
  `,
  getAllproducts: ` 
  SELECT product_id, title, price, description, category, image
  FROM products;`,
}

module.exports = queries;