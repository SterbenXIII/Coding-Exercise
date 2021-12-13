const nestedEvenSum = (obj) => {
    let sum = 0;

    const nestedEvenSumH = (obj) => {
        let values = Object.values(obj);
        values[0] instanceof Object ? nestedEvenSumH(values[0]) : values[0] % 2 === 0 ? sum += values[0] : null
        delete obj[Object.keys(obj)[0]];
        if (Object.keys(obj).length === 0) return;
        return (nestedEvenSumH(obj));
    }
    nestedEvenSumH(obj);
    return sum;
}

const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

const obj2 = {
    a: 2,
    b: {
        b: 2,
        bb: {
            b: 3,
            bb: {
                b: 2
            }
        }
    },
    c: {
        c: {
            c: 2
        },
        cc: 'ball',
        ccc: 5
    },
    d: 1,
    e: {
        e: {
            e: 2
        },
        ee: 'car'
    }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10