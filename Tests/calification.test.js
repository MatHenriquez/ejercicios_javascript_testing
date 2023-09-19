const calification = require("../Ejercicios/calification");

describe("Funcionamiento lógico:", () => {
  test("Debe retornar 'muy deficiente' if n is 0, 1 or 2", () => {
    expect(calification(0)).toBe("Muy deficiente");
  });
});
