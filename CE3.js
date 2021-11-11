function sameFrequency(a, b) {
    if(a.length !== b.length) return false
    let aa = String(a).split('').sort().join('')
    let bb = String(b).split('').sort().join('')
    console.log(aa === bb)
    return aa === bb
}


sameFrequency(123, 321)
sameFrequency(123, 3211)
sameFrequency(1230, 3210)
sameFrequency('1230', 'a')