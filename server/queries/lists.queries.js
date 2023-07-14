const queries = {
  getListByName: `
  SELECT l.name, p.title, p.price, p.description, p.category, p.image, lp.product_quantity
  FROM lists as l
      INNER JOIN lists_products as lp
          ON lp.list_id = l.list_id
      INNER JOIN products as p
          ON p.product_id = lp.product_id
      WHERE l.name ILIKE $1;`,
  getAllLists: ` 
  SELECT lists.name, lists.list_id
  FROM lists
  ORDER BY lists.list_id DESC;`,
  createList: `
  INSERT INTO Lists (name) 
  VALUES ($1)`,
  updateList: `
  UPDATE lists
    SET name=$1
    WHERE name ilike $2;
  DELETE FROM lists_products
      WHERE list_id = (SELECT list_id FROM lists WHERE name ilike $3);
  INSERT INTO lists_products (list_id, product_id, product_quantity)
  VALUES ((SELECT list_id FROM lists WHERE name ilike $4),
         (SELECT product_id FROM products WHERE title ilike $5), 2);`,
  deleteList: `
  DELETE FROM public.lists
	WHERE name ILIKE $1`
};

module.exports = queries;