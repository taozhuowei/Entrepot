/**
 * 模拟实现call(apply同理)
 * @param {object} context 
 * @returns 函数执行结果
 */
const myCall = (context) => {
    if (typeof this !== 'function') throw 'caller must be a function';

    if (context === null || context === undefined) {
        context = window;
    }

    context._fn = this; // 绑定隐式this
    const args = [...arguments].flat().slice(1); // 将剩余参数列表展开
    const res = context._fn(...args); // 调用函数，传递参数
    Reflect.deleteProperty(context , _fn); // 删除临时属性——fn
    return res; // 返回结果
}

function Foo(name) {
    this.name = name;
}

Foo.prototype.sayName = function() {
    console.log('My name is '+this.name);
}

function Bar(name) {
    this.name = name;
}

const foo = new Foo('tom');
const bar = new Bar('jack');

foo.sayName.call(bar);