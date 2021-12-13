const capitalizeWords = (arr = []) => {

    const makeCapital = (str) => {
        return str.toUpperCase()
    }
    return arr.length > 0 ? [makeCapital(arr.shift())].concat(capitalizeWords(arr)) : arr


}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));