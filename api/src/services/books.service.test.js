const BooksService = require('./books.service');

describe('Pruebas para book service', () => {
  let services;
  beforeEach(() => {
    // Antes de cada prueba creamos una instancia del servicio
    services = new BooksService();
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
