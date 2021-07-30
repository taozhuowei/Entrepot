/**
 * 插入排序
 * 原地排序，稳定
 * 默认第一个元素已排序，从第二个元素开始，遍历它之前的元素，找到合适的位置插入它
 * 即，如果当前元素的前一个元素大于（或小于）它，则前一个元素后移一位，直到满足条件，再将当前元素插入到该位置
 * 记得提前保存当前元素
 * @param {array} arr 
 * @returns 排序后数组
 */
const insertSort = arr => {
    const length = arr.length;

    if (length < 2) return arr;

    for (let i = 1 ; i < length ; i++) {
        let pre = i-1;
        const cur = arr[i];
        while (pre >= 0 && cur < arr[pre]) {
            arr[pre+1] = arr[pre];
            pre--;
        }
        if (pre != i-1) {
            arr[pre+1] = cur;
        }
    }

    return arr;
}


const arr = [1, 2, 3, 6, 5, 4, 8, 9, 10];
console.log(insertSort(arr));