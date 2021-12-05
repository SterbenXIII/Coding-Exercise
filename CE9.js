


const l = (str) => {
    let seen = {};
    let start = 0;
    let maxLength = 0;
    [...str].map((itm, i) => {
        if (itm in seen && start <= seen[itm]) {
            start = seen[itm];
            maxLength = Math.max(i - start, maxLength)
        }
        seen[itm] = i
    })
    return maxLength
}

console.log(l("rithmschool"))