const calification = require("../Ejercicios/calification");

describe("Debe retornar 'muy deficiente' si n es 0, 1 o 2:", () => {
  test("Debe retornar 'Muy deficiente' si n es 0", () => {
    expect(calification(0)).toBe("Muy deficiente");
  });

  test("Debe retornar 'Muy deficiente' si n es 1", () => {
    expect(calification(1)).toBe("Muy deficiente");
  });

  test("Debe retornar 'Muy deficiente' si n es 2", () => {
    expect(calification(2)).toBe("Muy deficiente");
  });

  test("Debe retornar 'Suficiente' si n es 5", () => {
    expect(calification(2)).toBe("Muy deficiente");
  });
  test("Debe retornar 'Suficiente' si n es 6", () => {
    expect(calification(0)).toBe("Muy deficiente");
  });

  test("Debe retornar 'Suficiente' si n es 1", () => {
    expect(calification(1)).toBe("Muy deficiente");
  });

  test("Debe retornar 'muy deficiente' si n es 2", () => {
    expect(calification(2)).toBe("Muy deficiente");
  });
});

describe("Debe retornar 'Insuficiente", () => {
  test("Debe retornar 'Insuficiente' si n es 3", () => {
    expect(calification(0)).toBe("Muy deficiente");
  });

  test("Debe retornar 'Insuficiente' si n es 4", () => {
    expect(calification(1)).toBe("Muy deficiente");
  });
});
