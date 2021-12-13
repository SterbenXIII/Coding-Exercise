const flatten = (arr) => {
    let sArray = []
    for (let i = 0; i < arr.length; i++) {
        Array.isArray(arr[i]) ? sArray = sArray.concat(flatten(arr[i])) : sArray.push(arr[i])

    }
    return sArray;
}

console.log(flatten([1, 2, 3, [4, 5] ]));