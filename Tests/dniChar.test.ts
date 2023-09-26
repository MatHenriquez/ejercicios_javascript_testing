import { describe, it, expect } from '@jest/globals';
const dniChar = require('../Ejercicios/dniChar');

describe('dniChar', () => {
  it('Debe devolver la letra correcta para un número de DNI válido', () => {
    const dni = 123456789;
    const expectedLetter = 'T';
    const actualLetter = dniChar(dni);
    expect(actualLetter).toBe(expectedLetter);
  });

  xit('Debe devolver la letra correcta para un número de DNI de dos dígitos', () => {
    const dni = 12;
    const expectedLetter = 'Y';
    const actualLetter = dniChar(dni);
    expect(actualLetter).toBe(expectedLetter);
  });

  xit('Debe devolver la letra correcta para un número de DNI de un dígito', () => {
    const dni = 1;
    const expectedLetter = 'T';
    const actualLetter = dniChar(dni);
    expect(actualLetter).toBe(expectedLetter);
  });

  xit('Debe devolver una cadena vacía para un número de DNI no válido', () => {
    const dni = '1234567890';
    const actualLetter = dniChar(dni);
    expect(actualLetter).toBe('');
  });
});