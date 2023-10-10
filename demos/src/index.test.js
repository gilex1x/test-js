const { sum, multiply, divide } = require("./index.js");

//test: el nombre del test que estamos corriendo

test("adds 3 + 2 to equal 5", () => {
  const response = sum(3, 2);
  //expect: la hipotesis de lo que quiero
  expect(response).toBe(5);
});

test("adds 3 * 2 to equal 6", () => {
  const response = multiply(3, 2);
  //expect: la hipotesis de lo que quiero
  expect(response).toBe(6);
});

test("20 / 4 to equal 5", () => {
  const response = divide(20, 4);
  //expect: la hipotesis de lo que quiero
  expect(response).toBe(5);
});

test("any  to be null", () => {
  const response = divide(20, 0);
  //expect: la hipotesis de lo que quiero
  expect(response).toBeNull();
  const response2 = divide(20, 0);
  //expect: la hipotesis de lo que quiero
  expect(response2).toBeNull();
  const response3 = divide(20, 0);
  //expect: la hipotesis de lo que quiero
  expect(response3).toBeNull();
});
