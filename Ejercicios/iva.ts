function applyIva(price: number, iva: number = 0.21): number {
  return Math.floor(price * (1 + iva));
}
console.log(applyIva(100, 0.1));
module.exports = applyIva;
