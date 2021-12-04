let isSubsequence = (s, t) => {

    if (s.length === 0) return true;

    let sIndex = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[sIndex]) {
            sIndex++;
            if (sIndex === s.length) return true;
        }
    }
    return false;
};

console.log(isSubsequence('abc', 'abcccccc'));
console.log(isSubsequence('abc', 'acbccccc'));