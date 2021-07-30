/**
 * 冒泡排序
 * 原地排序（不适用额外空间），稳定（相等元素保持原位置顺序）
 * 相邻两元素比较，满足条件则交换位置，重复n次
 * 如果某次比较没有发生交换，则说明已排序，直接跳出循环
 * @param {array} arr 
 * @returns 排序后数组
 */
const bubbleSort = arr => {
    const length = arr.length;

    if (length < 2) return arr;

    for (let i = 0; i < length - 1; i++) {
        let hasChanged = false;

        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                hasChanged = true;
            }
        }

        if (!hasChanged) break;
    }

    return arr;
}

const arr = [1, 2, 3, 6, 5, 4, 8, 9, 10];
console.log(bubbleSort(arr));