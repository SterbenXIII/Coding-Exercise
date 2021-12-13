const someRecursive = (array, col) => {
    if (array.length === 0) return false;
    return col(array[0]) ? true : someRecursive(array.slice(1), col);
}