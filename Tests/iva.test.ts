import { describe, it, expect } from "@jest/globals";

const applyIva = require("../Ejercicios/iva");

describe("Funcionamiento:", () => {
  it("Debe devolver el precio con IVA incluido", () => {
    const price: number = 100;
    const expectedPrice: number = 121;
    const actualPrice: number = applyIva(price);
    expect(actualPrice).toBe(expectedPrice);
  });
  it("Debe devolver el precio con IVA incluido", () => {
    const price: number = 100;
    const iva: number = 0.1;
    const expectedPrice: number = 110;
    const actualPrice: number = applyIva(price, iva);
    expect(actualPrice).toBe(expectedPrice);
  });
});
