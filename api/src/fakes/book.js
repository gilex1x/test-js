const falso = require("@ngneat/falso");

const generateOneBook = () => ({
  _id: falso.randUuid({ length: 5 }),
  name: falso.randProductName(),
});

const generateManyBooks = (size) => {
  const limit = size || 10;
  const books = [];
  for (let i = 0; i < limit; i += 1) {
    books.push(generateOneBook());
  }
  return [...books];
};

module.exports = { generateOneBook, generateManyBooks };
