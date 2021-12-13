const fib = (num) => {
    return num <= 2 ? 1 : fib(num - 1) + fib(num - 2);
}



console.log(fib(30));