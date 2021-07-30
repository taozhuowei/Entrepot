/**
 * 数组扁平化
 * @param {array} arr 
 * @returns 拍扁的数组
 */
const flatArr = (arr) => {
    let res = [];
    for (let el of arr) {
        if (Array.isArray(el)) {
            res = res.concat(flatArr(el));
        } else {
            res.push(el);
        }
    }
    return res;
}

const arr = [1, 2, 3, [4, 5, [6]]];
console.log(flatArr(arr));