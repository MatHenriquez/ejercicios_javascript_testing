// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
function askForNumbers() {
  let total: number = 0;
  let input: string;
  do {
    input = prompt("Introduce un número") || "";
    let inputNumber: number = parseInt(input);
    if (inputNumber) total *= inputNumber;
  } while (input !== "");

  return total;
}
