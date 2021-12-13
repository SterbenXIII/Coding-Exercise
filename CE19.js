const capitalizeWords = (arr = []) => {

    const makeCapital = (str) => {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }
    return arr.length > 0 ? [makeCapital(arr.shift())].concat(capitalizeWords(arr)) : arr


}

console.log(capitalizeWords(['car', 'taco', 'banana']));