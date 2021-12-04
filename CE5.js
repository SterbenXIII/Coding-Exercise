function averagePair(a, b) {
    let s = 0;
    let e = a.length - 1;

    while (s < e) {
        if (a[start] + a[end] / 2 === b) return true;
        s++;
        e--;
    }
    return false;
}

console.log(averagePair([], 4))