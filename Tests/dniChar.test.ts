import { describe, it, expect } from "@jest/globals";
const validateDni = require("../Ejercicios/dniChar");

describe("Funcionamiento:", () => {
  it("Debe devolver la letra correcta para un número de DNI válido", () => {
    const dni = 123456789;
    const expectedLetter = "B";
    const actualLetter = validateDni(dni);
    expect(actualLetter).toBe(expectedLetter);
  });
});

describe("Errores:", () => {
  it("Debe devolver un error si el DNI no es un número", () => {
    const dni = "123456789";
    const expectedError = "El DNI debe ser un número";
    const actualError = validateDni(dni);
    expect(actualError).toBe(expectedError);
  });
  it("Debe devolver un error si el DNI es un número negativo", () => {
    const dni = -123456789;
    const expectedError = "El DNI debe ser un número positivo";
    const actualError = validateDni(dni);
    expect(actualError).toBe(expectedError);
  });
  it("Debe devolver un error si el DNI es un número decimal", () => {
    const dni = 123456789.5;
    const expectedError = "El DNI debe ser un número entero";
    const actualError = validateDni(dni);
    expect(actualError).toBe(expectedError);
  });
  it("Debe devolver un error si el DNI es un número muy grande", () => {
    const dni = 123456789123456789;
    const expectedError = "El DNI debe ser un número de 6 a 8 dígitos";
    const actualError = validateDni(dni);
    expect(actualError).toBe(expectedError);
  });
  it("Debe devolver un error si el DNI es un número muy pequeño", () => {
    const dni = 12345;
    const expectedError = "El DNI debe ser un número de 6 a 8 dígitos";
    const actualError = validateDni(dni);
    expect(actualError).toBe(expectedError);
  });
});
