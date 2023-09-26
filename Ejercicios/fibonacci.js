// fibonacci = (n) => n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);

function fibonacci(n) {
  let result;

  if (typeof n === "string" || Math.floor(n) !== n || n < 0) {
    result = "Error";
  } else {
    result = n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

  console.log("result ", typeof result, result);
  return result;
}

module.exports = fibonacci;
