/**
 * 模拟new操作符
 * new 一个函数时，会在内部创建一个对象，然后将这个对象的引用赋给this（使用call改变this指向）
 * 通过this将构造函数中的属性赋给这个对象
 * 之后会进行原型绑定，将对象的[[prototype]]属性指向构造函数的prototype
 * 最后如果构造函数中没有返回其他对象，则返回这个对象
 * 当构造函数中的返回值是基本类型，则忽略这个返回值
 * 如果是对象，则new操作符无效
 * @param {function} func 
 * @param  {...any} args 
 * @returns new新建的对象
 */
const myNew = (constructor , ...args) => {
    if (typeof constructor !== 'function') throw 'parameter 1 is not a function';
    const obj = Object.create(constructor); // 创建对象，完成原型指向
    const res = constructor.call(obj , ...args); //  完成this绑定
    const isObject = typeof res === 'object' && obj !== null;
    const isFunction = typeof res === 'function';
    return isObject || isFunction ? res : obj;
}
