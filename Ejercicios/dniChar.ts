// En el siguiente ejercicio repasaremos el uso del condicional switch y la validación de la letra del DNI

// Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

function dniChar(dni: number): string {
  class Char {
    constructor(module: number) {
      this.module = module;
    }

    public module: number;
    public dictionary = {
      0: "T",
      1: "R",
      2: "W",
      3: "A",
      4: "G",
      5: "M",
      6: "Y",
      7: "F",
      8: "P",
      9: "D",
      10: "X",
      11: "B",
      12: "N",
      13: "J",
      14: "Z",
      15: "S",
      16: "Q",
      17: "V",
      18: "H",
      19: "L",
      20: "C",
      21: "K",
      22: "E",
    };

    charGetter(module: number): string {
      return;
    }
  }
  const module: number = dni % 23;
  return "Hola";
}
