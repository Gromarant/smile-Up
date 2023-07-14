// ('Rain Jacket Women Windbreaker Striped Climbing Raincoats', 39.99, 'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn''t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.', 'women''s clothing', 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'),
// ('MBJ Women''s Solid Short Sleeve Boat Neck V ', 9.85, '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem', 'women''s clothing', 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'),
// ('Opna Women''s Short Sleeve Moisture', 7.95, '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort', 'women''s clothing', 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'),
// ('DANVOUY Womens T Shirt Casual Cotton Short', 12.99, '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.', 'women''s clothing', 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg');

/*        const getElementIdSubQuery = (Name_Id, tableName, columnName, elementName) => `(SELECT ${Name_Id} FROM ${tableName} WHERE ${columnName} ILIKE '${elementName}')`;
        const listIdSubQuery = getElementIdSubQuery('list_id', 'lists', 'name', newName)

        const formattedProducts = products.map(product => {
            const productIdSubQuery = getElementIdSubQuery('product_id', 'products', 'title', product.title)
            return `(${listIdSubQuery}, ${productIdSubQuery}, ${product.product_quantity})`
        }).join(',\n')

        const builtInsertProductsQuery = `
            ${queries.insertNewProducts}
            ${formattedProducts};`

        listUpdateSteps.push(builtInsertProductsQuery);*/

    // result = data.rowCount

//update structure
{
  "name": "Regalos de cumple",
  "newName": "Cumple",
  "products": [
    {
      "title": "Mens Cotton Jacket",
      "product_quantity": 1
    }
  ]
}