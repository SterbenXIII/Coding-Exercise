const productOfArray = ([num, ...end]) => {
    return num === undefined ? 1 : num * productOfArray(end)
}

console.log(productOfArray([1, 2, 3, 10]));