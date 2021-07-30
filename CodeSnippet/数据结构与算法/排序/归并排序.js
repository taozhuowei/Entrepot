/**
 * 归并排序
 * 非原地排序，稳定
 * 将数组一分为二，递归分割，直到不能再分，比较分割的两部分的大小，放入结果数组
 * @param {array} arr 
 * @returns 排序后数组
 */
const mergeSort = arr => {
    const length = arr.length;

    if (length < 2) return arr;

    const mid = length >> 1;
    const left = arr.slice(0 , mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left) , mergeSort(right));
}

const merge = (left , right) => {
    const res = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }

    while(left.length) res.push(left.shift());
    while(right.length) res.push(right.shift());

    return res;
}


const arr = [1, 2, 3, 6, 5, 4, 8, 9, 10];
console.log(mergeSort(arr));