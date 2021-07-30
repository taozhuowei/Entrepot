/**
 * 模拟实现instanceof
 * 逐层向上查找prototype，直到最终原型为null，查找到返回true，否则返回false
 * @param {*} obj  对象（instanceof 左边操作数）
 * @param {*} prototype 验证的原型（instanceof 右边操作数）
 * @returns boolean prototype是否是obj的原型
 */
const myInstanceof = (obj , prototype) => {
    if (typeof obj !== 'object' || obj === null) return false;
    const proto = Object.getPrototypeOf(obj);
    while(true) {
        if (proto === prototype.prototype) return true;
        if (proto === null) return false;
        proto = Object.getPrototypeOf(proto);
    }
}