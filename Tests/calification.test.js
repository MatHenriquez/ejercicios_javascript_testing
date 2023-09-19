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
});

describe("Debe retornar 'Insuficiente' si n es 3 o 4:", () => {
  test("Debe retornar 'Insuficiente' si n es 3", () => {
    expect(calification(3)).toBe("Insuficiente");
  });

  test("Debe retornar 'Insuficiente' si n es 4", () => {
    expect(calification(4)).toBe("Insuficiente");
  });
});

describe("Debe retornar 'Suficiente' si n es 5 o 6", () => {
  test("Debe retornar 'Suficiente' si n es 5", () => {
    expect(calification(5)).toBe("Suficiente");
  });
  test("Debe retornar 'Suficiente' si n es 6", () => {
    expect(calification(6)).toBe("Suficiente");
  });
});

describe("Debe retornar 'Bien' si n es 7 u 8", () => {
  test("Debe retornar 'Bien' si n es 7", () => {
    expect(calification(7)).toBe("Bien");
  });

  test("Debe retornar 'Bien' si n es 8", () => {
    expect(calification(8)).toBe("Bien");
  });
});

describe("Debe retornar 'Sobresaliente' si n es 9 o 10", () => {
  test("Debe retornar 'Sobresaliente' si n es 9", () => {
    expect(calification(9)).toBe("Sobresaliente");
  });

  test("Debe retornar 'Sobresaliente' si n es 10", () => {
    expect(calification(10)).toBe("Sobresaliente");
  });
});

describe("Manejo de errores:", () => {
  test("Debe existir la función 'calification'", () => {
    expect(calification).toBeDefined();
  });
  test("Debe mostrar un mensaje de error si n no es un número", () => {
    expect(calification("Hola, mundo!")).toBe("n debe ser de tipo number");
  });
  test("Debe mostrar un mensaje de error si n es menor que 0", () => {
    expect(calification(-1)).toBe("n debe ser mayor o igual que 0");
  });

  test("Debe mostrar un mensaje de error si n es mayor que 10", () => {
    expect(calification(11)).toBe("n debe ser menor o igual que 10");
  });
});
