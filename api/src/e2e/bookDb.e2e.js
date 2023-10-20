/* eslint-disable import/no-extraneous-dependencies */
const {MongoClient} = require('mongodb');
const request = require('supertest');
const {generateManyBooks } = require('../fakes/book');
const createApp = require('../app');
const {config} = require('../config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;


describe('Test for books server', () => {
  let app = null;
  let server = null;
  let dataBase = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3000);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    dataBase = client.db(DB_NAME);
  });

  // Test here
  describe('Test for [GET] /api/v1/books', () => {
    test('Should return a list books', async () => {
      // Arrange
      const generatedBooks = generateManyBooks(10);
      console.log('Books: ', generatedBooks);
      const seedData = await dataBase.collection('books').insertMany(generatedBooks);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          //console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
  afterAll(async () => {
    await server.close();
    await dataBase.dropDatabase();
  });
});
