/**
 * 折半插入
 * 原地排序，稳定
 * 判断当前元素在它之前的片段中处于低半区还是高半区
 * 经过多次折半查找，最后low指针的位置就是要插入的位置
 * @param {array} arr 
 * @returns 排序后数组
 */
const binaryInsertSort = arr => {
    const length = arr.length;

    if (length < 2) return arr;

    for (let i = 1 ; i < length ; i++) {
        let low = 0 , high = i-1;
        const cur = arr[i];


        while (low <= high) {
            let mid = (low + high) >> 1; // 等同于除2取整
            if (arr[i] >= arr[mid]) { // 值大于等于中点，切换到高半区
                low = mid + 1;
            } else { // 否则切换到低半区
                high = mid -1;
            }
        }

        // 插入点之后的元素全部后移一位
        for (let j = i ; j > low ; j--) {
            arr[j] = arr[j - 1];
        }

        // 插入元素
        arr[low] = cur;
    }

    return arr;
}


const arr = [1, 2, 3, 6, 5, 4, 8, 9, 10];
console.log(binaryInsertSort(arr));
