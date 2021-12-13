const recursiveRange = (num) => {
    return num === 0 ? 0 : recursiveRange(num - 1)
}

console.log(recursiveRange(6));