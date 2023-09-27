function applyIva(price: number, iva: number = 0.21): number {
  return Math.floor(price * (1 + iva));
}

module.exports = applyIva;
