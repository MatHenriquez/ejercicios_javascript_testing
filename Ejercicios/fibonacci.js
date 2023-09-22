// fibonacci = (n) => n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);

function fibonacci(n) {

    if(typeof n == 'String' || Math.floor(n) !== n || n < 0) return 'Error';

    return n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

module.exports = fibonacci;