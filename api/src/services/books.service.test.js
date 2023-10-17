const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: {
      $oid: '652b2da6811167ed66e5e48a',
    },
    name: 'Harry Potter',
  },
  {
    _id: {
      $oid: '652b2e0c811167ed66e5e48b',
    },
    name: 'Lord of the rings',
  },
];

const mongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => mongoLibStub));
describe('Pruebas para book service', () => {
  let services;
  beforeEach(() => {
    // Antes de cada prueba creamos una instancia del servicio
    services = new BooksService();
    jest.clearAllMocks();
  });

  describe('Mthod getBooks', () => {
    // Arrange
    // Act
    test('Should return an array of books', async () => {
      const booksResponse = await services.getBooks({});
      console.log(booksResponse);
      expect(booksResponse.length).toEqual(2);
      // Assert
    });
  });
});
