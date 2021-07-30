/**
 * 模拟Object.create创建一个以参数为原型的对象
 * @param {*} obj 原型
 * @returns 以obj为原型的对象
 */
const myCreate = obj => {
    function F() {}
    F.prototype = obj;
    return new F();
}
