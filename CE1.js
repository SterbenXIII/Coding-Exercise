function validAnagram(a, b) {
    let a1 = a.length;
    let b1 = b.length;
    if (a1 !== b1) return console.log('Invalid Input');
    a1 = a.split('').sort().join('');
    b1 = b.split('').sort().join('');

    a1 === b1 ? console.log("True") : console.log("False")

}
validAnagram('aaa', 'aa')
validAnagram('aaa', 'aaa')


