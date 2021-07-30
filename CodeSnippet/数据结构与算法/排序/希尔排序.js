/**
 * 希尔排序
 * 原地排序，不稳定
 * 通过数组长度确定一个分区间隔gap
 * 首先每隔gap个元素，将数组分为不同分区，在每个分区内进行直接插入排序
 * 缩小间隔重复上述操作，直到间隔为1，即将数组整体再进行一次直接插入排序
 * @param {array} arr 
 * @returns 排序后的数组
 */
const shellSort = arr => {
    const length = arr.length;
    

    // 根据数组长度确定分组间隔gap
    let gap = 1;
    while (gap < length / 3) {
        gap = gap * 3 + 1;
    }

    while (gap > 0) {
        for (let i = gap ; i < length ; i++) {
            const temp = arr[i];
            let j = i-gap;

            while (j >= 0 && arr[j] > temp) {
                arr[j + gap] = arr[j]; 
                j -= gap;
            }

            arr[j + gap] = temp;
        }

        gap = Math.floor(gap / 3);
    }

    return arr;
}


const arr = [1, 2, 3, 6, 5, 4, 8, 9, 10];
console.log(shellSort(arr));