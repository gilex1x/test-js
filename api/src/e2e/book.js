/* eslint-disable import/no-extraneous-dependencies */
const mockSpyGetAll = jest.fn();
const request = require('supertest');
const { generateOneBook, generateManyBooks } = require('../fakes/book');

const createApp = require('../app');

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => {},
})));
describe('Test for books server', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  });

  // Test here
  describe('Test for [GET] /api/v1/books', () => {
    test('Should return a list books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(2);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(2);
        });
    });
  });
  afterAll(async () => {
    await server.close();
  });
});
