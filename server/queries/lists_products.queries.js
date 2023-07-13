const queries = {
  createRelation: `
  INSERT INTO Lists_products (list_id, product_id, product_quantity)
  VALUES ($1, $2, $3)
  `,
  cleanListRegisters: `
  DELETE FROM table_name WHERE condition;
  `
}