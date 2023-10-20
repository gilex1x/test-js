/* eslint-disable import/no-extraneous-dependencies */
const request = require('supertest');

const createApp = require('../app');

describe('Test for hello server', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  // Test here
  describe('Test for [GET]', () => {
    test('Should return hello world!', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
  afterAll(async () => {
    await server.close();
  });
});
