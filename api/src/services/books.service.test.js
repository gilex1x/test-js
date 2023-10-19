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
const mockSpyGetAll = jest.fn();

// const mongoLibStub = {
//   getAll: mockSpyGetAll,
//   create: () => {},
// };

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => {},
})));
describe('Pruebas para book service', () => {
  let services;
  beforeEach(() => {
    // Antes de cada prueba creamos una instancia del servicio
    services = new BooksService();
    jest.clearAllMocks();
  });

  describe('Mthod getBooks', () => {
    // Arrange
    mockSpyGetAll.mockResolvedValue(fakeBooks);
    // Act
    test('Should return an array of books', async () => {
      const booksResponse = await services.getBooks({});
      expect(booksResponse.length).toEqual(2);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
      // Assert
    });
  });
});
