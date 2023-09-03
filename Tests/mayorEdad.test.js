const mayorEdad = require("../Ejercicios/mayorEdad");

describe("Funcionamiento de lógica", () => {
  test('Debe retornar "Es menor de edad" al ingresar una edad menor a 18', () => {
    expect(mayorEdad(17)).toBe("Usted es menor de edad");
  });

  test('Debe retornar "Es mayor de edad" al ingresar una edad mayor a 18', () => {
    expect(mayorEdad(20)).toBe("Usted es mayor de edad");
  });

  test('Debe retornar "Es mayor de edad" al ingresar una edad igual a 18', () => {
    expect(mayorEdad(18)).toBe("Usted es mayor de edad");
  });
});

describe("Manejo de errores mínimo", () => {
  test("Debe arrojar un error al ingresar un dato inválido", () => {
    expect(mayorEdad("Hola")).toBe("El dato es inválido");
  });
});
