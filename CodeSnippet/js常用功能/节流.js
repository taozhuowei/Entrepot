/**
 * 节流，函数以固定频率执行
 * 节流类似技能冷却，在冷却时间内无法使用技能
 * @param {function}} fn 
 * @param {number} interval 
 * @returns 
 */
const throttle = (fn , interval) => {
    let flag = true;
    return function(...args) {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this , args);
            flag = true;
        } , interval);
    }
}