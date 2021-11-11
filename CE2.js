function countUniqueValues(a) {
    console.log([...new Set(a)].length);
    return [...new Set(a)].length;
}


countUniqueValues([1, 2, 3, 4, 4, 7, 7, 12, 12, 13])