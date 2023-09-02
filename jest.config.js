// jest.config.js
module.exports = {
    // Archivos con pruebas (tests)
    testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  
    // Directorios donde buscar los módulos
    moduleDirectories: ["node_modules", "src"],
  
    // Transformar archivos de JavaScript con Babel antes de ejecutar las pruebas
    transform: {
      "^.+\\.js$": "babel-jest",
    },
  };
  