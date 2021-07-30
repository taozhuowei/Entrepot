/**
 * 快速排序
 * 原地排序，不稳定
 * 选定一个基准值（通常是中间的元素），遍历数组，将比基准值小的元素放在左边，比基准值大的元素放在右边
 * 递归调用排序，直到排序到长度小于等于1的部分
 * 拼接每一段排序好的数组
 * @param {array} arr 
 * @returns 排序后的数组
 */
const quickSort = arr => {
    if (arr.length <= 1) return arr;

    const mid = arr.length >> 1; // 取中点
    const midValArr = arr.splice(mid, 1); // 删除中点的值
    const midVal = midValArr[0]; // 保存中点的值为基准值
    const smaller = []; // 存放比基准值小的值
    const bigger = []; // 存放比基准值大的值

    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] < midVal) smaller.push(arr[i]);
        else bigger.push(arr[i]);
    }

    return quickSort(smaller).concat(midVal , quickSort(bigger));
}


const arr = [1, 2, 3, 6, 5, 4, 8, 9, 10];
console.log(quickSort(arr));