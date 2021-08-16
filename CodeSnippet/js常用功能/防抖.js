/**
 * 防抖，如果重复执行则重置定时器，直到定时器走完delay时间，执行函数
 * 防抖类似技能读条，后释放的技能会打断先释放的技能
 * @param {function} fn 
 * @param {number} delay 
 * @returns 
 */
const debonce = (fn , delay) => {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this , args);
        } , delay);
    }
}
