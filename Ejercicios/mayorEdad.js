// Pide la edad y si es mayor de 18 años indica que ya puede conducir.
// const readlineSync = require("readline-sync"); Para leer entrada por teclado

function mayorEdad(testAge) {
  // const inputAge = () => {  Para leer entrada por teclado
  //   return readlineSync.question("Ingrese su edad: ");
  // };
  let legalAge = 18;
  // let inputNumber = inputAge(); Para leer entrada por teclado
  let message = "";

  if (typeof testAge !== "number") {
    message = "El dato es inválido";
  } else {
    testAge < legalAge
      ? (message = "Usted es menor de edad")
      : (message = "Usted es mayor de edad");
  }

  return message;
}

module.exports = mayorEdad;
