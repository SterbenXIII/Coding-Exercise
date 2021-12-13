const isPalindrome = (str) => {
    const strLen = str.length;
    if (strLen < 2) return true;

    return str[0] === str[strLen - 1] ? isPalindrome(str.slice(1, strLen - 1)) : false
};

console.log(isPalindrome('lal'));