# JavaScript 核心知识点

## JS 数据类型及区别

* **基本数据类型**

  boolean、string、number、null、undefined、symbol（es6）

* **引用数据类型**

  Object、Function、Array、Date、RegExp

**区别**

基本数据类型存放在栈内存中，自动分配内存空间

引用数据类型的引用地址存放在栈内存中，值存放在堆内存中，堆内存动态分配空间

## 判断数据类型的方法

* `typeof`

  `typeof null`会返回`object`

* `instanceof`

* `constructor`

  返回目标的构造函数

* `Object.prototype.toString().call()`

* `isArray()`

* `Object.is()`

  该方法接收两个参数，判断两个两个参数的值是否为同一个值

  满足以下条件会返回`true`：

  * 都是undefined
  * 都是null
  * 都是true或false
  * 都是长度相同且相同字符按相同顺序排列的字符串
  * 都是同一个对象的引用
  * 都是数字且
    * 都是+0或都是-0
    * 都是NaN
    * 都是非0且非NaN且是同一个值

## 隐式类型转换

以下三种情况会发生隐式的类型转换：**运算、比较和判断**

* **运算**

  * 对于基本数据类型

    * 加法运算会先统一将加号两侧的变量转为number类型，不包括string，string类型在遇到加法时会将其他基本数据类型转为string，即使是NaN、undefined、null。

    * 减法运算会将减号两侧的变量转为number类型

  * 对于引用数据类型

    首先调用`valueOf()`方法，并判断返回值是否是基本数据类型，如果是，则进行运算

    如果不是，则调用`toString()`方法，将其转为string再运算

* **比较**

  即使用`==`操作符，会将其他基本数据类型转为number，再进行比较

  引用数据类型会先转string，再转number

  其中，`undefined == null`返回`true`，`NaN == NaN`返回`false`

* **判断（比较)**

  出现判断的情况有

  * `if()`、`while()`
  * `for()`的第二个参数
  * 非`!`、与`&&`、或`||`

  以上三种情况会将其他类型转为boolean

## 基本包装类型

在实际操作中，我们可以用基本数据类型来调用某些方法

例如`string.split('')`方法

但是实际上的基本数据类型并没有属性和方法

因此，在使用时，JS会创建一个对应的基本包装类型的实例，然后通过该实例调用方法，之后销毁这个实例，以此来实现基本数据类型调用方法的操作

## == 和 === 的区别

## i = i++ 的结果

```
let i = 0;
i = i++;
console.log(i) // 0
```

上述结果为0，原因如下：

第一行代码声明了一个变量i，并赋值为0

第二行代码从右往左执行，首先执行i++，此时，i的值为1，之后将i++的返回值赋给i，而i++的返回值是0，因此i此时是0

第三行代码输出i的值为0

## isNaN() 和 Number.isNaN() 的区别

- 当调用`isNaN()`时，内部会调用`Number()`构造函数尝试对参数进行类型转换，并返回转换结果
- `Number.isNaN()`会判断参数是否严格等于NaN

## 0.1 + 0.2 === 0.3 结果是 false 的原因

由于JavaScript中的浮点数以64位二进制数来表示的，结构为：

**1位符号位 + 11位指数位 + 52位尾数位**

这种设计会造成精度缺失。即由于0.1转为二进制是一个无线循环数，JS会进行长度截断，因此在运算上会出现精度缺失的现象。

## console.log(0.1) 为什么不会发生精度缺失

`console.log()`会将二进制转十进制并取近似值，再转字符串输出到控制台。

## Promise 与 Async

## 箭头函数与普通函数的区别

## this的指向

> this指向最后调用它的对象

### this 绑定的四种情况

* new绑定

  this指向new操作返回的对象实例

* 显示绑定

  由`call()`、`apply()`、`bind()`方法显式改变this指向，this指向方法的第一个参数

  三个方法的不同点： 

  * `call()`接收的参数没有数量限制，第一个参数是this要绑定的对象，之后的参数是传入函数的参数
  * `apply()`接收两个参数，第一个参数是this要绑定的对象，第二个参数是一个数组，数组中是传入函数的参数
  * `bind()`的参数与`call()`的一致，不同的是，它会返回一个绑定了this的函数

* 隐式绑定

  当一个函数作为某个对象的方法被调用时，this会指向调用这个方法的对象。

* 默认绑定

  this默认指向全局对象，在浏览器中是window对象，在严格模式下this是undefined

## new关键字做了什么

## 对象字面量、new 和 `Object.create(null) `创建的对象有什么区别

对象字面量和new创建的对象会继承Object的方法和属性，它们的隐式原型[[prototype]]会指向Object.prototype

`Object.create(null)`创建的对象的原型为null

## 原型、原型链

## 继承

### 原型继承

```javascript
function Parent() {
    this.name = 'John';
}

function Child() {
    this.name = 'Jack';
}

Child.prototype = new Parent();
```

### 构造函数继承

```javascript
function Parent(name) {
    this.name = name;
}

function Child() {
    Parent.call(this , 'Jack');
}
```

### 寄生组合式继承

```javascript
function Parent(name) {
    this.name = name;
}

function Child(name) {
    Parent.call(this , name);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```

### ES6继承

```javascript
class Parent {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor(name) {
        super(name);
    }
}
```

## 数据属性与访问器属性

## 作用域、作用域链

## 执行上下文、执行栈

### 执行上下文Execution Context

> 执行上下文是当前JavaScript代码被解析和执行时所在环境的抽象概念，即JavaScript任何代码都在执行上下文中运行。

#### 执行上下文的类型

* 全局执行上下文

  全局执行上下文是最基础的、默认的上下文，不在任何函数中的代码都在全局执行上下文中

  全局执行上下文负责创建全局对象（Global对象，在浏览器中是window对象）和将this指向这个全局对象（this的默认绑定）

* 函数执行上下文

  每次调用函数，JS会创建一个新的执行上下文，每个函数拥有自己的执行上下文

  只有函数被调用时，才会创建函数执行上下文，程序中的上下文数量是没有限制的

* eval执行上下文

  运行在`eval()`中的代码拥有自己的上下文

#### 执行上下文生命周期

执行上下文会经历如下阶段：**创建阶段、执行阶段和回收阶段**

* 创建阶段

  该阶段处于函数被调用，但尚未执行代码的时间点

  这个阶段会执行如下操作：

  * 创建变量对象

    创建并赋值arguments对象、提升函数声明并赋值

    提升变量声明不赋值、提升函数表达式声明不赋值

  * 创建作用域链

  * 确定this指向

* 执行阶段

* 回收阶段

### 执行栈 Execution Stack

> 执行栈用于管理执行上下文。

首先JS会创建全局执行上下文，压入栈底

每当执行一个函数，就会创建该函数的执行上下文，并将其压入栈，当函数执行结束后，当前函数的执行上下文出栈，并等待垃圾回收

全局上下文永远在栈底，当前执行的函数的执行上下文在栈顶，浏览器关闭时，全局上下文出栈

## 

