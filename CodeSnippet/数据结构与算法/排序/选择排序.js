/**
 * 选择排序
 * 原地排序，不稳定
 * 每次找到数组中未排序的部分中的最大（或最小）值，将其放到已排序部分的末尾
 * 每次找的都是未排序部分中第i小（第i大）的元素
 * @param {array} arr 
 * @returns 排序后数组
 */
const selectSort = arr => {
    const length = arr.length;

    if (length < 2) return arr;

    for (let i = 0 ; i < length ; i++) {
        let min = i;

        for (let j = i+1 ; j < length ; j++) {
            if (arr[j] < arr[min]) min = j;
        }

        [arr[i] , arr[min]] = [arr[min] , arr[i]];
    }

    return arr;
}


const arr = [1, 2, 3, 6, 5, 4, 8, 9, 10];
console.log(selectSort(arr));