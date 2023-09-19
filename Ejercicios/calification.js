/*
Pide una nota (número). Muestra la calificación según la nota:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/

function calification(n) {
  let message;

  switch (n) {
    case 0:
    case 1:
    case 2:
      message = "Muy deficiente";
      break;
    case 3:
    case 4:
      message = "Insuficiente";
      break;
    case 5:
    case 6:
      message = "Suficiente";
      break;
    case 7:
    case 8:
      message = "Bien";
      break;
    case 9:
    case 10:
      message = "Sobresaliente";
      break;
  }

  return message;
}

function validateCalification(n) {
  if (typeof n !== "number") {
    throw new Error("n debe ser de tipo number");
  }

  if (n < 0) {
    throw new Error("n debe ser mayor o igual que 0");
  }

  if (n > 10) {
    throw new Error("n debe ser menor o igual que 10");
  }
}

module.exports = calification;