const supertest = require('supertest')
const server = require('../index');
const request = supertest(server);
const postgreSql = require('../utils/db_sql');


describe('Test method GET of all products', () => {

  it('Testing endpoint /', async() => {
    await request
      .get('/lists')
      .expect(200);
  });
});