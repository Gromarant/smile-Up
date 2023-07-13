const queries = {
  getListByName: `
  SELECT lists.name
  FROM lists
  WHERE lists.name ILIKE $1%;`,
  getAllLists: ` 
  SELECT lists.name, lists.list_id
  FROM lists
  ORDER BY lists.list_id DESC;`,
  createList: `
  INSERT INTO Lists (name) 
  VALUES ($1)`,
  updateList: `
  UPDATE public.lists
	SET name=$1,
	WHERE id=$2;`,
  deleteList: `
  DELETE FROM public.authors
	WHERE email=$1
  ON DELETE CASCADE`
};

module.exports = queries;