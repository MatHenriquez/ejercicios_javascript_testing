const calification = require("../Ejercicios/calification");

describe("Funcionamiento lógico:", () => {
  test("Debe retornar 'muy deficiente' if n is 0", () => {
    expect(calification(0)).toBe("Muy deficiente");
  });

  test("Debe retornar 'muy deficiente' if n is 1", () => {
    expect(calification(1)).toBe("Muy deficiente");
  });

  test("Debe retornar 'muy deficiente' if n is 2", () => {
    expect(calification(2)).toBe("Muy deficiente");
  });
});
