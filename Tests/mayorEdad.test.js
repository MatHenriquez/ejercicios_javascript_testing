const readline = require('readline');

// Crea una interfaz para leer desde la entrada estándar (teclado)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pregunta al usuario y espera su respuesta
rl.question('Escribe algo: ', (respuesta) => {
  console.log(`Has escrito: ${respuesta}`);
  
  // Cierra la interfaz después de recibir la respuesta
  rl.close();
});

// Este evento se dispara cuando la interfaz se cierra
rl.on('close', () => {
  console.log('¡Adiós!');
  process.exit(0); // Termina la ejecución del programa
});
