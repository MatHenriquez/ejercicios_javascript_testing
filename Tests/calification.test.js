const calification = require("../Ejercicios/calification");

describe("Debe retornar 'muy deficiente' si n es 0, 1 o 2:", () => {
  test("Debe retornar 'muy deficiente' si n es 0", () => {
    expect(calification(0)).toBe("Muy deficiente");
  });

  test("Debe retornar 'muy deficiente' si n es 1", () => {
    expect(calification(1)).toBe("Muy deficiente");
  });

  test("Debe retornar 'muy deficiente' si n es 2", () => {
    expect(calification(2)).toBe("Muy deficiente");
  });
});
