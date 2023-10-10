const { sum, multiply, divide,calcularPesoEnOtroPlaneta } = require("./index.js");

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


test("Tu peso en otro planeta (luna y marte)",()=>{
    const gravedadMarte = 3.72076; // Gravedad en Marte
    const gravedadLuna = 1.625; // Gravedad en la Luna
    expect(calcularPesoEnOtroPlaneta(50,gravedadLuna)).toBe(81.25);
    expect(calcularPesoEnOtroPlaneta(50,gravedadMarte)).toBe(186.03799999999998);
});
