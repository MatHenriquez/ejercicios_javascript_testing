const fibonacci = require("../Ejercicios/fibonacci");

describe("Debe retornar el número de la serie de Fibonacci según la posición:", () => {
  test("Debe retornar 0 si n es 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  test("Debe retornar 1 si n es 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  test("Debe retornar 1 si n es 2", () => {
    expect(fibonacci(2)).toBe(1);
  });

  test("Debe retornar 2 si n es 3", () => {
    expect(fibonacci(3)).toBe(2);
  });

  test("Debe retornar 3 si n es 4", () => {
    expect(fibonacci(4)).toBe(3);
  });

  test("Debe retornar 5 si n es 5", () => {
    expect(fibonacci(5)).toBe(5);
  });

  test("Debe retornar 8 si n es 6", () => {
    expect(fibonacci(6)).toBe(8);
  });
});

describe("Manejo de errores:", () => {
  test("Debe existir la función 'fibonacci'", () => {
    expect(fibonacci).toBeDefined();
  });

  test("Debe lanzar un error si n no es un número", () => {
    expect(() => fibonacci("a")).toBe("Error");
  });

  test("Debe lanzar un error si n es menor que 0", () => {
    expect(() => fibonacci(-1)).toBe("Error");
  });

  test("Debe lanzar un error si n es mayor que 10", () => {
    expect(() => fibonacci(11)).toBe("Error");
  });

  test("Debe lanzar un error si n no es un número entero", () => {
    expect(() => fibonacci(1.5)).toBe("Error");
  });
});
