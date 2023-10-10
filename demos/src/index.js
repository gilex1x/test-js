function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function calcularPesoEnOtroPlaneta(peso, gravedadPlaneta) {
  // La fórmula para calcular el peso en otro planeta es:
  // peso_en_otro_planeta = peso_en_la_tierra * gravedad_del_otro_planeta
  const pesoEnOtroPlaneta = peso * gravedadPlaneta;
  return pesoEnOtroPlaneta;
}
module.exports = {
  sum, multiply, divide, calcularPesoEnOtroPlaneta,
};
