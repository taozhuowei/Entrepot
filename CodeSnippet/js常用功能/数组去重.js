/**
 * 数组去重
 * @param {array} arr 
 * @returns 去重后的数组
 */
const removeDup = arr => {
    const res = [];
    const map = new Map();

    for (let el of arr) {
        if (!map.has(el)) {
            map.set(el , 1);
            res.push(el);
        }
    }

    return res;
}

const arr = [1, 2, 3, 5, 3, 2, 1, 4];
console.log(removeDup(arr));