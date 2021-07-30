const deepClone = obj => {
    let cloneObj;
    
    if (typeof obj !== 'object') return obj;
    
    if (obj && typeof obj === 'object') {
        cloneObj = Array.isArray(obj) ? [] : {};

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === 'object') cloneObj[key] = deepClone(obj[key]);
                else cloneObj[key] = obj[key];
            }
        }
    }

    return cloneObj;
}

const foo = {
    a: '1'
}

const bar = deepClone(foo);

bar.a = 2;

console.log(foo);
console.log(bar);