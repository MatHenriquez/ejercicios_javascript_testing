import { describe, it, expect } from '@jest/globals';
const dniChar = require('../Ejercicios/dniChar');

describe('dniChar', () => {
  it('Debe devolver la letra correcta para un número de DNI válido', () => {
    const dni = 123456789;
    const expectedLetter = 'B';
    const actualLetter = dniChar(dni);
    expect(actualLetter).toBe(expectedLetter);
  });
});