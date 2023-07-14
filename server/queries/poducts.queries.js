const queries = {
  getProductByTitle: `
  SELECT title, price, description, category, image
  FROM products
  WHERE title ilike $1||'%';
  `,
  getProductByCategory: `
  SELECT title, price, description, category, image
  FROM products
  WHERE category ilike $1;
  `,
  getAllproducts: ` 
  SELECT title, price, description, category, image
  FROM products;`,
}

module.exports = queries;