/**
 * 模拟bind
 * @param {object} context 
 * @returns 
 */
const myBind = (context) => {
    if (typeof this !== 'function') throw 'caller must be a function';
    const _this = this;
    const args = Array.prototype.slice.call(arguments , 1);
    const fn = function() {
        const fnArgs = Array.prototype.slice.call(arguments);
        _this.apply(this instanceof _this ? this : context , args.concat(fnArgs));
    }
    fn.prototype = Object.create(_this.prototype);
    return fn;
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

const sayNameBind = foo.sayName.bind(bar);
sayNameBind();