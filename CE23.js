const collectStrings = (obj) => {
    let newArray = [];
    for (let key in obj) {
        typeof obj[key] === 'string' ? newArray.push(obj[key]) : typeof obj[key] === 'object' ? newArray = newArray.concat(collectStrings(obj[key])) : null;


    }
    return newArray;
}



const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])