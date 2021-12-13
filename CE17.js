const isOdd = num => num % 2 !== 0;
const someRecursive = (array, col) => {
    if (array.length === 0) return false;
    return col(array[0]) ? true : someRecursive(array.slice(1), col);
}
console.log(someRecursive([1, 2, 3, 4], isOdd));