# 《JavaScript高级程序设计》读书笔记

---

## 壹：变量

### 一、数据类型

#### 1. 基本数据类型（6个）

Number	String	Boolean	Null	Undefined	Symbol（ES6)

> 基本数据类型指==数据段==，按值访问，可以操作保存在变量中实际的值

#### 2. 引用数据类型

Object	Array	Function

> 引用数据类型指==那些可能有多个值构成的对象==，值是保存在内存中的对象，~~不能直接操作对象的内存空间~~，实际操作的是对象的引用（当复制保存着对象的某个变量时操作的是这个对象的引用，而为对象添加属性时操作的是实际的对象、
>
> 引用类型的值（对象）是引用类型的一个实例。引用类型是一种==数据结构==，用于将数据和功能组织在一起（常被称为类，但JavaScript没有类的概念）。
>
> 引用类型也被称为==对象定义==。

***只能给引用类型值动态添加属性***

### 二、详细

#### 1. Undefined

* 对未声明变量只能执行typeof

* 在严格模式下 ， delete 未声明变量会报错

* typeof 未声明或未赋值的变量返回undefined

* `undefined == null // true`

#### 2. Boolean

<table border='1' style='text-align:center'>
    <tr><td rowspan='5'>转换为true</td></tr>
    <tr><td>true</td></tr>
    <tr><td>非空字符串</td></tr>
    <tr><td>非零数值</td></tr>
    <tr><td>任何对象</td></tr>
    <tr><td rowspan='6'>转换为false</td></tr>
    <tr><td>false</td></tr>
    <tr><td>""</td></tr>
    <tr><td>0</td></tr>
    <tr><td>NaN</td></tr>
    <tr><td>undefined</td></tr>
</table>
#### 3. Number

* 10.0会被转换成整数10

* 3.125e7  => 31250000

  3e-3  => 0.0003

  ***小数点后6个0以上的浮点数会自动转换成科学计数法***

* 浮点数最高精度17位

  ***0.1+0.2=0.30000000000000004***

##### ①数值范围

* 最小的数保存在==Number.MIN_VALUE==中，在大部分浏览器中其值为5e-324

* 最大的数保存在==Number.MAX_VALUE==中，其值为1.7976931348623157e+306

* 超出范围的数返回==Infinity/-Infinity==

* 任何数除以0返回==Infinity/-Infinity==

  0除以0返回==NaN==

* `NaN == NaN // false`

##### ②数值转换

1. Number()

   任意类型 => 数值

   |      转换前      |                  转换后                  |
   | :--------------: | :--------------------------------------: |
   |       true       |                    1                     |
   |      false       |                    0                     |
   |      number      |                  number                  |
   |       null       |                    0                     |
   |    undefined     |                   NaN                    |
   | 包含数字的字符串 | 忽略前导零后的数字，可识别正确的十六进制 |
   |        “”        |                    0                     |
   |    其他字符串    |                   NaN                    |

2. parseInt()

   字符串 => 数值

   |   转换前   |  转换后  |
   | :--------: | :------: |
   | “1234blue” |   1234   |
   |     “”     |   NaN    |
   |   “0xA”    | 十进制10 |
   |   “070”    | 十进制56 |
   |   “22.5”   |    22    |
   |    “70”    |    70    |

   ***parseInt(字符串 , 进制)可将字符串转换成对应进制下的数字***

3. parseFloat()

   ***解析第一个有效的浮点数，始终忽略前导零***

   `parseFloat(“23.45.56”) // 23.45`

#### 4.String

* ***字符串不可变，一旦创建，其值不可更改，改变会销毁原来的字符串，用新字符串填充该变量***

* ***除null和undefined外每个值都有一个==toString()==方法，该方法将其它类型转换为字符串类型，(字符串的==toString()==返回这个字符串的副本)***
* ==toString(num)==方法将值按num转换成对应进制的字符串（num为有效的进制数，如2代表二进制，num为空则为十进制）
* ==String()==方法（转型函数）可以将任意类型值转成字符串
  * 如果值有==toString()==方法，则调用
  * null 返回 “null”
  * undefined 返回 “undefined“

### 三、检测类型

#### 1. typeof

* `typeof 变量/数值字面量`
* typeof是==操作符==而不是~~函数~~
* `typeof null // object`  (null 被认为是一个空对象的引用)
* `typeof regExp // function` (before Safari 5 / Chrome 7)
* `typeof regExp // object` ( 其他浏览器)

#### 2.instanceof

* `result = variable instanceof constructor`
* ==instanceof==根据==原型链==识别变量是否是给定引用类型的实例
* 所有引用类型都是==Object==的实例
* ==instanceof==检测==基本类型==时始终返回==false==

### 四、复制变量

> 如果从一个变量想另一个变量复制==基本类型的值==，会在变量对象上==创建一个新值==，然后把该值==复制到为新变量分配的位置上==。

> 当从一个变量向另一个变量赋值==引用类型的值==时，同样也会讲存储在变量对象中的值复制一份放到为新变量分配的内存空间中。这个值的副本实际上是一个指针，指向存储在==堆==中的一个对象，复制操作结束后，两个变量实际上==引用同一个对象==，改变会==相互影响==（浅拷贝）。

***==基本类型==保存在==栈内存==中，==引用类型==保存在==堆内存==中***

##贰：操作符

###一、一元操作符

***一元操作符 ==+==会将非数值转换成数值类型***

***一元操作符 ==-==会将非数值转换成数值类型的负数***

> 上述两种情况称为隐式类型转换 

### 二 、位操作符

* 按位非 ~  

* 按位与 &  

* 按位或 |  

* 按位异或 ^  

* 左移 <<  

* 无符号右移 >>

* 有符号右移 >>>   

### 三、布尔操作符

#### 1. 逻辑非 ！

1. 返回false的情况
   * 对象
   * 非空字符串
   * 非零数值（包括Infinity）
2. 返回true的情况
   * 空字符串
   * 0
   * null
   * NaN
   * undefined

#### 2. 逻辑与 &&

* 如果==第一个操作数==是==false==，则返回==false==（短路操作）
* 如果==第一个操作数==是==对象== ，则返回==第二个操作数==
* 如果==第二个操作数==是==对象==，则只有在==第一个操作数==的求值结果为==true==时返回该对象
* 如果==两个操作数==都是==对象== ，则返回==第二个操作数==
* 有==null==返回==null==
* 有==NaN==返回==NaN==
* 有==undefined==返回==undefined==

#### 3. 逻辑或 ||

* 如果==第一个操作数==是==true==，则返回==true==（短路操作）
* 如果==第一个操作数==是==对象== ，则返回==第一个操作数==
* 如果==第一个操作数==求值结果是==false==，则返回==第二个操作数==
* 如果==两个操作数==都是==对象== ，则返回==第一个操作数==
* 有==null==返回==null==
* 有==NaN==返回==NaN==
* 有==undefined==返回==undefined==

***==||==常用于避免为变量赋null或undefined值，如：***

`var myObject = preferredObject || backupObject`

###四、乘性操作符

#### 1. 乘法 *

* 乘==NaN==得==NaN==

* ==Infinity*0==结果为==NaN==

  ==Infinity*非零数==结果为==Infinity/-Infinity==

  ==Infinity*Infinity==结果为==Infinity==

* 操作数不是数值，则后台调用==Number()==将其转换为数值

#### 2. 除法 /

* 除==NaN==得==NaN==
* ==Infinity/Infinity==结果是==NaN==
* ==0/0==结果是==NaN==
* ==非零有限数/0==结果是==Infinity/-Infinity==
* ==Infinity/非零数==结果是==Infinity/-Infinity==
* 操作数不是数值，则后台调用==Number()==将其转换为数值

#### 3. 求模 %

* 被除数==无穷大==得到NaN

  被除数==有限大==，除数是==0==，得NaN

  被除数==有限大==，除数是==无穷大==，得被除数

  被除数是==0==，结果是==0==

* ==Infinity%Infinity==结果是==NaN==

* 操作数不是数值，则后台调用==Number()==将其转换为数值

###  五、加性操作符

#### 1. 加法 +

* 有==NaN==返回==NaN==

* ==Infinity== + ==Infinity== == ==Infinity==

  ==-Infinity== + ==- Infinity==  ==  ==-Infinity==

  ==Infinity== + ==-Infinity== == ==NaN==

* ==+0== + ==+0== == ==+0==

  ==-0== + ==-0== == ==-0==

  ==+0== + ==-0== == ==+0==

* 都为字符串则==拼接==字符串，若有非字符串则调用==toString()==(null 和 undefined 调用==String()==)

#### 2. 减法 -

* 有==NaN==返回==NaN==

* ==Infinity== - ==Infinity== == ==NaN==

  ==-Infinity== - ==- Infinity==  ==  ==NaN==

  ==Infinity== - ==-Infinity== == ==Infinity==

  ==-Infinity== - ==Infinity== == ==-Infinity==

* ==+0== - ==+0== == ==+0==

  ==-0== - ==-0== == ==+0==

  ==+0== - ==-0== == ==-0==

* 如果有操作数是==字符串==、==布尔值==、==nulll==或==undefined==，则调用==Number()==转成数值

  如果有操作数是==对象==，则调用==valueOf()==取得表示该对象的数值，如果得到==NaN==则结果为==NaN==，如果对象没有==valueOf()==则调用==toString()==并将得到字符串转成数值

### 六、关系操作符

* 都是==数值==比较==数值大小==
* 都是==字符串==比较对应的==编码值==，而非比较在~~字母表中的顺序~~
* 有一个==数值==，则将另一个==转换成数值==
* 有一个==对象==则调用==valueOf()==，没有==valueOf()==调用==toString()==
* 有一个==布尔值==则先将其==转换成数值==再比较

### 七、相等操作符

* ==相等和不相等== ：先转换再比较（强制转型）
* ==全等和不全等== ： 仅比较不转换

#### 1.相等和不相等    ==   &  !=

转换规则 ：

* 有==布尔值== ，则==true==为==1==， ==false== 为==0==
* 一个是==字符串==，一个是==数值==，则==字符串转数值==
* 一个是==对象==，另一个不是，则调用对象的==valueOf()==方法
* ==null== == ==undefined==
* ==NaN==与任何值不相等，==NaN== != ==NaN==
* 如果两个操作数都是==对象==，则比较其是否指向同一个对象

#### 2. 全等和不全等     ==\=   &   !\==

`null !== undefined // true`

### 八、条件操作符

​	`expression ？true_value ： false_value`

### 九、赋值操作符 =

### 十、逗号操作符

`var num = ( 5, 4 , 3 , 2 , 1);   console.log(num); // 1`

***赋值时逗号操作符总是返回表达式最后一项***

## 叁：语句

### 一、基础

* if-else
* for
* while
* do-while
* break
* continue

### 二、for-in

#### 1. 用途

用于枚举对象的属性

#### 2. 语法

```javascript
for ( [var] property in expression ) {

		statement;
}
```

***循环将对象==expression==中的每一个==属性名==赋值给==property==，==var==非必须但推荐使用。***

***对象的属性==没有顺序==，因此==for-in==输出的属性名的顺序无法预测***

### 三、with

#### 1.用途

用于将代码的作用域设置到一个特定的对象中

#### 2.语法

```javascript
with (expression) {
    statement;
}
```

#### 3.示例

***==with==的主要目的是为了简化多次编写同一个对象的工作***

* 使用with前

```javascript
var qs = location.search.substring(1);
var hostname = location.hostname;
var url = location.href;
```

* 使用with后

```javascript
with (location){
	var qs = search.substring(1);
	var hostname = hostname;
	var url = href;
}
```

### 四、switch-case

***==switch==中可以使用任意数据类型***

***==case==的值可以是变量、常量、表达式***

***==switch==在比较值时使用==全等==操作符，不会进行类型转换***

## 肆：执行环境及作用域

### 一、执行环境（执行上下文）

> 执行环境（execution context）定义了变量或函数有权访问的其他数据，决定了他们各自的行为。每个执行环境都有一个与之关联的变量对象（variable object），环境中定义的所有变量和函数都保存在这个对象中。（无法访问，但解析器后台会使用）。

***全局执行环境是最外围的一个执行环境，在==浏览器==中是==window对象==，在==node.js==中是==global对象==***

***所有全局变量和函数都是作为==window对象==的属性和方法创建的（浏览器中），某个执行环境中的所有代码执行完毕后，该环境被销毁，其中的变量和函数也随之销毁。（应用退出时，例如关闭网页或浏览器）***

> 每个函数都有自己的==执行环境== 。当执行流进入一个函数是，函数的环境就会被推入一个==环境栈==中，在函数执行之后， 栈将其环境弹出，把控制权返回给之前的执行环境。

### 二、作用域

#### 1.作用域链

> 当代码在一个环境中执行时，会创建变量对象的一个==作用域链==。其用途是保证对执行环境有权访问的所有变量和函数的有序访问。

***作用域链的前端始终是当前执行的代码所在环境的变量对象，如果这个环境是函数，则将其==活动对象（active object）==作为变量对象***

***活动对象最开始只包含一个变量，即==arguments==（arguments在全局环境不存在）***

***作用域链中的下一个变量对象来自包含（外部）环境，再下一个变量对象来自下一个包含环境，直到全局执行环境，即全局执行环境的变量对象始终是作用域链的最后一个对象***

***==标识符解析==是沿着作用域链一级一级地搜索标识符的过程***

***作用域链只能向上搜索，不能向下，函数参数被当做变量对待，规则相同，即无法从外向内访问变量***

#### 2. 延长作用域链

***有些语句可以在作用域链的前端临时添加一个变量对象***

1. try-catch中的==catch==

2. with语句

   ##### 举例

   ```javascript
   function buildUrl () {
       var qs = "?debug=true";
       
       with (location) {
           var url = href + qs;
       }
       
       return url; // 此处可以访问到url变量
   } 
   ```

### 三、没有块级作用域

***使用==var==声明的变量会自动被添加到最接近的环境中，如果初始化变量时没有使用==var==声明，则该变量会自动被添加到全局环境（不建议这么做，会引发未知错误）。在严格模式下，初始化未经声明的变量会导致错误***

***在==if==，==for==等语句中用==var==声明的变量在外部仍然可访问，推荐使用==let==声明变量***

## 伍：垃圾收集

> JavaScript具有自动垃圾收集机制。JavaScript会找出那些不再继续使用的变量，然后释放其占用的内存。为此，垃圾收集器会按照固定的时间间隔（或代码执行中预定的收集时间）周期性执行这一操作。

### 一、函数中局部变量的声明周期

>  局部变量只在函数执行的过程中存在，而在这个过程中，会为局部变量在==栈（堆）==内存上分配相应的空间，直至函数执行结束。此时局部变量就没有存在的必要了，因此可以释放他们的内存以供将来使用。***垃圾收集器必须跟踪那个变量有用，哪个变量没用，对不再有用的变量打上标记，以便将来收回其占用的内存。***

### 二、标记清除（mark-and-sweep）

***JavaScript最常用的垃圾收集方式是==标记清除==***

> 当变量进入环境（例如在函数中声明一个变量）时，就将这个变量标记为“进入环境”。当变量离开环境时，则将其标记为“离开环境”。
>
> 垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，因为环境中的变量已经无法访问到这些变量了。最后，垃圾收集器完成内存清除工作，。销毁那些带标记的值并回收它们所占用的内存空间。

### 三、引用计数

> 引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加一。
>
> 相反，如果包含对这个值引用的变量又取得了另一个值，则引用次数减一。
>
> 当引用次数为0时，则可将其回收。

#### 严重的问题——循环引用

```javascript
function problem () {
    var objA = new Object();
    var objB = new Object();
    
    //objA 和 objB通过各自的属性互相引用，则它们的引用计数一直是2
    objA.someOtherObject = objB;
    objB.anotherObject = objA;
}　　
```

***为避免这个问题，最好是在变量不使用时手动将其值赋值为null，这一做法称为==解除引用==（这一做法适用于大多数全局变量和全局对象的属性。局部变量会在它们离开执行环境时自动解除引用***

### 四、回收临界值

> 如果垃圾收集例程回收的内存分配量==低于15%==，则变量、字面量和数组元素的临界值就会加倍。如果例程回收了==85%==的内存分配量，则各种临界值恢复默认。

## 陆：Function

> 函数实际上是对象。每个函数都是Function类型的实例，而且具有属性和方法。
>
> 函数名实际上是一个指向函数对象的指针。
>
> 一个函数可能有多个名字。

###一、函数声明与函数表达式

> 解析器会先读取函数声明，并使其在执行任何代码之前可用（可访问）。这一过程成为function declaration hoisting，函数声明提升。
>
> 函数表达式必须等到解析器执行到它所在的代码行，才会真正被解析执行。

***严格模式限制***

* 不能把函数命名为==eval==和==arguments==

* 不能把参数命名为==eval==和==arguments==

* 不能出现两个参数同名的情况

  

1. 函数声明

   ```javascript
   function funName ( arguments... ) {
       statement;
   }
   ```

2. 函数表达式

   ```javascript
   var funName = function ( arguments... ) {
       statement;
   };
   ```

   ***注意这种方式的末尾有==；==***

   ***在以这种方式初始化的函数之前调用此函数会报错：unexpected identifier***

### 二、作为值的函数

***函数可以作为参数传递给另一个函数，也可以作为另一个函数的返回值***

***要访问函数的指针而不执行函数，必须去掉函数名后的圆括号***

### 三、传递参数

> JavaScript中所有函数的参数都是==按值传递==的，把函数外部的值复制给函数内部的参数等同于把值从一个变量复制到另一个变量。

* 传递==基本类型== 

  被传递的==值==会被复制给一个局部变量（即命名参数，或称arguments对象中的一个元素）

* 传递==引用类型==

  把这个==值在内存中的地址==复制给一个局部变量

***==基本类型==函数内部变化与外部无关，==引用类型==内部变化会反映在函数外部***

### 四、arguments

> JavaScript内部以==数组==方式表示参数，传递的参数的数量和类型不受限制。（即使定义了2个参数，仍然可以为其传递任意数量的参数），函数体内可以用==arguments==对象访问==参数数组==。

***==arguments==对象只是与数组==类似==，~~而不是Array的实例~~，可以用==[ ]==来访问元素（第一个元素为arguments[0]），可以使用==length==属性确定==参数个数==***

***==arguments==的值与==对应的命名参数的值==保持同步，但~~并不是保存在同一块内存空间~~***

***==arguments==对象的长度由==传入==的参数个数决定，~~不是由定义函数是的命名参数个数决定~~***

***JavaScript没有真正意义上的==重载==，多个重名函数只有最后一个有效***

***arguments有一个名为==callee==的属性，该属性是一个指针，指向拥有这个arguments对象的函数（严格模式下访问会报错）***

```JavaScript
function factorial ( num ) {
    return num*factorial( num-1 );
}
//经典阶乘函数（简化写法），一旦函数名（引用）更改，会影响内部实现

//改进版
function factorial ( num ) {
    return num*arguments.callee( num-1 );
}
//可以更改函数名，而不会影响内部实现
```

### 五、this

> this引用的是函数据以执行的环境对象，或者也可以说是this值（当在网页的全局作用域中调用函数时， this对象引用的就是window）。

***this的绑定规则：***

1. 在一般函数中，this指向==window（全局对象）==

   **严格模式下，全局对象无法使用默认绑定**

2.  作为对象方法调用，this指代==上级对象==

3. 作为构造函数调用，this指代==new的对象==

4. apply()/call()/bind()，this指代==第一个参数==

5. 箭头函数不产生this，沿用父级作用域的this

###六、caller

> caller保存着调用当前函数的函数的引用。

***严格模式访问arguments.caller属性在严格模式下会导致错误，非严格模式下这个属性是undefined***

***严格模式下不能为函数的caller属性赋值***

### 七、length

> length属性表示函数希望接收的命名参数的个数。

### 八、prototype

> 对于引用类型而言，prototype是保存它们实例方法的真正所在。
>
> 诸如`toString()`，`valueOf()`等方法实际上都保存在prototype名下，只不过是通过各自对象的实例访问。
>
> prototype属性不可枚举，使用for-in无法发现

### 九、apply() & call() & bind()

> 每个函数都包含两个非继承而来的方法：`apply()` 和 `call()`。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内this的值。

1.  `apply( func , argArr )`

    * 参数：
      * func：在其中运行函数的作用域
      * argArr：参数数组（可以是Array的实例也可以是arguments数组）

2. `call( func , args. , ... )`

   与`apply()`的区别是参数需要一一列举

3.  `bind( target )`

    * 参数 ： this值要绑定的对象
    * 返回值：绑定this后的函数的实例

    ```javascript
    window.color = "red";
    
    var o = { color : "blue" };
    
    function sayColor () {
        alert( this.color );
    }
    
    var objectSayColor = sayColor.bind( o );
    objectSayColor(); // blue
    ```

## 柒：Object

> 大多数引用类型都是Object类型的实例。

### 一、创建一个对象

```javascript
//调用Object构造函数
var obj1 = new Object();

//对象字面量表示法（不会调用构造函数）
var obj2 = {
    key : value, //属性
    func () { //方法
        
    },
}
```

***`var obj = new Object()`等同于`var obj = {}`***

### 二、 访问对象属性

```javascript
var propertyName =  obj.key; //点表示法
var propertyName1 = obj[key]; //方括号表示法
```

***`obj[key]`中的==key==可以是变量，可以是包含非字母非数字或者空格的字符串（如“first name”）。如果属性名中包含导致语法错误的字符，或者属性名使用的是关键字或保留字，则推荐使用此表示法***

***除非必须使用变量来访问属性，否则推荐使用点表示法***

### 三、对象方法

***所有对象都具有以下原生方法***

1. toLocaleString()
2. toString()
3. valueOf()

## 捌：面向对象

### 一、属性类型

> JavaScript定义了只有内部采用的特性（attribute），描述了属性（property）的各种特征。
>
> JavaScript有两种属性类型：==数据属性==和==访问器属性==。

#### 1. 数据属性

> 数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有4个描述其行为的特性。

* [[Configurable]]

  表示能否通过`delete`删除属性从而重新定义属性，

  能否修改属性的特性，

  或者能否把属性修改为访问器属性。

  默认值为true。（对于直接在对象上定义的属性，下同）

  一旦把属性定义为不可配置的，则无法把它变为可配置的。

* [[Enumerable]]

  表示能否通过`for-in`循环返回属性。

  默认值为true。

* [[Writable]]

  表示能否修改属性的值。

  默认值为true。

* [[Value]]

  包含这个属性的数据值。

  读取属性值的时候，从这个位置读；

  写入属性值的时候，把新值保存在这个位置。

  默认值为undefined。

#### 2.访问器属性

> 访问器属性不包含数据值，它们 包含一对==getter==和==setter==函数（非必须）。
>
> 在读取访问器属性时，会调用getter函数，这个函数负责返回有效的值。
>
> 在写入访问器属性时，会调用setter函数并传入新值，这个函数负责决定如何处理属性。

***访问器属性有如下四个特性：***

* [[Configurable]

  表示能否通过`delete`删除属性从而重新定义属性，

  能否修改属性的特性，

  或者能否把属性修改为访问器属性。

  默认值为true。

* [[Enumerable]]

  表示能否通过`for-in`循环返回属性。

  默认值为true。

* [[Get]]

  在读取属性时调用的函数，默认值为undefined

* [[Set]]

  在写入属性时调用的函数，默认值为undefined

***常用`_属性名`表示只能通过对象方法访问的属性***

#### 3.操作属性方法

1. ***修改属性默认的特性，需使用`Object.defineProperty()`方法***

   `Object.defineProperty( obj , name , descriptor )`

   * 参数：

     * obj：属性所在的对象

     * name：属性的名字

     * descriptor：描述符对象

       ***descriptor的属性必须是configurable、enumerable、writable、value中的一个或多个值，他们在不指定的情况下的默认值是false***

2. ***定义多个属性，使用`Object.defineProperties()`方法***

   ```javascript
   Object.defineProperties ( obj , {
       propertyName : {
           Configurable : true,
           Writable : true,
           ...
           get : function () { return propertyName; }
           set : function ( value ) {
               ...	
          }
       }
   })
   ```

3. ***读取属性的特性，使用`Object.getOwnPropertyDescriptor()`***

   `Object.getOwnPropertyDescriptor( obj , propertyName )`

### 二、创建对象

#### 1. 工厂模式

```javascript
function createPerson ( name , age , job ) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    
    o.sayName = function () {
        alert ( this.name ) ;
    }
    
    return o;
}

var person1 = createPerson( "Nicholas" , 29 , "Software Engineer" );
var person2 = createPerson( "Greg" , 27 , "Doctor" );
```

***这个模式解决了创建多个相似对象的问题，但却没有解决对象识别的问题，即无法得知一个对象的类型***

#### 2.构造函数模式

```javascript
function Person ( name , age , job ) {
    this.name = name;
    this.age = age;
    this.job = job;
    
    this.sayName = function() {
        alert( this.name );
    };
}

var person1 = new Person( "Nicholas" , 29 , "Software Engineer" );
var person2 = new Person( "Greg" , 27 , "Doctor" );
```

***构造函数的函数名应大写开头***

***以这种方式调用构造函数实际上经历了以下4个步骤：***

* 创建一个新对象
* 将构造函数的作用域赋给新对象（因此this指向了这个新对象）
* 执行构造函数中的代码（为这个新对象添加属性）
* 返回新对象

***这个方法相较工厂模式，胜在可以将它的实例标识为一种特定的类型，但在==创建多个实例时也会创建多个相同的函数==***

***任何函数都可以是构造函数，在不使用`new`操作符调用时，函数中的属性会被绑定到全局对象上***

#### 3.原型模式

```javascript
function Person () {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";

Person.prototype.sayName = function() {
    alert( this.name ); 
};

var person1 = new Person();
```

***这个方法创建的实例具有相同的属性和方法***

***对于属性是引用类型的情况，共享同一个属性会导致修改一个实例，另一个实例也发生变化***

***所有原生的引用类型都是采用这种模式创建的，可以从原型上获取或修改（不建议）对应的原生方法***

==更简单的原型语法==

```javascript
Person.prototype = {
    name : "Nicholas",
    age  : 29,
    job  : "Software Engineer",
    sayName : function() {
        alert( this.name );
    }
};
```

***这样做的constructor属性不再指向Person，而是指向Object，仍然可以用instanceof判断类型，但无法通过constructor判断类型。可以显式的设置`constructor : Person`来让其指向Person（这么做会让其[[Enumerable]]为true，建议使用`Object.defineProperty()`***

#### 4.（常用）构造函数模式+原型模式

```javascript
function Person ( name , age , job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype.sayName = function() {
    alert( this.name );
}
```

#### 5.动态原型模式

```javascript
function Person (name , age , job) {
    this.name = name;
    this.age = age;
    this.job = job;
    
    if (typeof this.sayName != "function") {
        Person.prototype.sayName = function () {
            alert(this.name);
        };
    }
}
```

***在第一次调用构造函数时才会创建`sayName`方法，`if`语句检查的可以是任何在初始化后应该存在的属性或方法，不必判断所有的属性或方法。也可使用`instanceof`确定类型***

#### 6.寄生构造函数模式

```javascript
function Person (name , age , job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        alert(this.name);
    }
    return o;
}

//与工厂模式不同
var person = new Person ( "Nicholas" , 29 , "Software Engineer");
```

#### 7.稳妥构造函数模式

***==稳妥对象==指没有公共属性，而且其他方法也不引用`this`的对象。其最适合在一些安全的环境中，或者放置数据被其他应用程序改动时使用。***

```javascript
function Person (name , age , job) {
    var o = new Object();
    
    //可以在这里定义私有变量和函数
    
    //添加方法
    o.sayName = function () {
        alert(this.name);
    }
    
    return o;
}

var person = Person("Nicholas" , 29 , "Software Engineer");
```

***以这种模式创建的对象除了`sayName`方法外没有其他办法访问`name`的值***

***与寄生构造函数不同的是：***

* 新创建对象的实例方法不引用this
* 不使用new操作符调用构造函数

## 玖：继承——原型与原型链

> 许多OO语言都支持两种继承方式：***接口继承***和***实现继承***。
>
> JavaScript只支持***通过原型链实现继承。***

### 一、实现原型链的基本模式

```javascript
function SuperType() {
    this.prop = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.prop;
}

function SubType() {
    this.prop = false;
}

/**
将SubType的prototype属性指针指向SuperType的实例
本质是重写原型对象，代之以一个新的实例
*/
SubType.prototype = new SuperType();
```

###二、理解原型对象

1. 任何==函数==都有一个==prototype==属性，这个属性是一个==指针==，指向函数的==原型对象==

2. 默认情况下，所有==原型对象==都会自动获得一个==constructor==属性（构造函数属性），这个属性包含一个==指向prototype属性所在函数==的指针。

   即`Person.prototype.constructor === Person `为true

3. 在对象中有一个==\_\_proto\_\_==属性，指向==其构造函数的prototype==

   即`person1.__proto__ === Person.prototype`为true。

***对象实例可以访问原型中的值，但却无法通过它修改这个值，同名的属性会创建在实例中，屏蔽原型对象中的属性***

###三、原型方法

1. `obj.isPrototypeOf( anotherObj )`
   * 参数：任意对象实例
   * 返回值：如果参数中的对象anotherObj的\_\_proto\_\_属性指向调用这个方法的对象obj，则返回true，否则返回false
   * 用途：用于确认某个对象是否是另一个对象的原型对象

2. `Object.getPrototypeOf( obj )`

   * 参数：任意对象
   * 返回值：返回参数对象的\_\_proto\_\_的值，即他的原型对象

3. `hasOwnProperty( property )`

   * 参数：某个对象的属性
   * 返回值：当给定属性存在于对象实例中时，返回true，否则返回false
   * 用途：用于检测一个属性是存在于实例中还是原型中


###四、in操作符

使用方式：

* `for ( let prop in obj ){}` 

  遍历所有能通过对象访问的、可枚举的属性，无论属性存在于obj或其原型中。

  ***在原型中不可枚举，但实例中存在的同名属性也会被遍历。***

* `prop in obj` 

  如果prop存在于obj中或obj的原型对象中，返回true，否则返回false

***使用`Object.keys( obj )`可以返回一个包含obj的所有可枚举属性的字符串数组***

###五、原型的动态性

> 实例与原型之间存在松散连接关系。
>
> 由于在原型中查找值的过程是一次搜索，因此我们对原型对象所做的任何修改都能够立即从实例上反映出来，即使是先创建了实例后修改原型。
>
> 但在重写原型的情况下，等同于切断了构造函数与最初原型之间的联系。

### 六、原型链的弊端

####1.包含引用类型的原型属性会被所有实例共享

```javascript
function SuperType() {
    this.colors = ["red" , "blue" , "green"];
}

function SubType() {}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);

var instance2 = new SubType();
alert(instance2.colors); //"red blue green black"
```

#### 2.不能向超类型的构造函数中传递参数

没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数。

实践中很少会单独使用原型链。

### 七、实现继承的模式

####1.借用构造函数

***借用构造函数有时也叫做伪造对象或经典继承\***

#####弊端的改进

```javascript
 function SuperType() {
     this.colors = ["red" , "blue" , "green"];
 }
 
 function SubType() {
     SuperType.call(this);//继承了SuperType，也可以使用apply
 }
 
 var instance1 = new SubType();
 instance1.colors.push("black");
 alert(instance1.colors);
 
 var instance2 = new SubType();
 alert(instance2.colors); //"red blue green"
```

#####传递参数

```javascript
 function SuperType( name ) {
     this.name = name;
 }
 
 function SubType() {
     SuperType.call(this , "Nicholas"); //继承同时传递参数
     this.age = 29; //实例属性
 }
 
 var instance = new SubType();
 alert(instance.name); //Nicholas
```

***为了确保SuperType的构造函数不会重写子类型的属性，可以在调用超类型的构造函数后，再添加应该在子类型的中定义的属性\***

#####弊端

***方法都在构造函数中定义，无法实现函数复用\***

***在超类型的原型中定义的方法，对子类型而言也是不可见的\***

####2.（常用）组合继承（伪经典集成）

```javascript
 function SuperType ( name ) {
     this.name = name;
     this.colors = ["red" , "blue" , "green"];
 }
 
 SuperType.prototype.sayName = function() {
     alert(this.name);
 };
 
 function SubType(name , age) {
     SuperType.call(this, name); //第二次调用SuperType()
     this.age = age;
 }
 
 SubType.prototype = new SuperType(); //第一次调用SuperType()
 SubType.prototype.constructor = SubType;
 SubType.prototype.sayAge = function () {
     alert(this.age);
 }
 
 var instance1 = new SubType("Nicholas" , 29);
 instance1.colors.push("black");
 alert(instance1.colors); //red  blue green black
 instance1.sayName(); //Nicholas
 instance1.sayAge(); //29
 
 var instance2  = new SubType("Greg" , 27);
 alert(instance2.colors); //red blue green
 instance2.sayName(); //Greg
 instance2.sayAge(); //27
```

***这种方式会调用两次超类型的构造函数：第一次在创建子类型原型时，第二次在子类构造函数内部***

####3.原型式继承

```javascript
 function object ( o ) {
     function F() {};
     F.prototype = o;
     return new F();
 }
```

***`Object.creat()`方法用于规范化原型式继承\***

```javascript
Object.creat(SuperType , [newPropObj])
```

* 参数：
  * SuperType：作为原型对象的对象
  * [newPropObj]：为新对象定义额外属性的对象
* 返回值：新对象

```javascript
 var person = {
     name : "Nicholas",
     friends : ["Shelby" , "Court" , "Van"]
 }
 
 var anotherPerson = Object.create(person , {
     name : {
         value : "Greg"
     }
 });
```

####4.寄生式继承

```javascript
 function createAnother( original ) {
     var clone = object(original); //调用函数创建一个对象
     clone.sayHi = function () { //增强对象
         alert("Hi");
     };
     return clone; //返回这个对象
 }
```

#### 5.寄生组合式继承

***为了解决组合继承模式会调用两次超类型构造函数的缺陷，可以使用寄生组合式继承——即通过狗构造函数来继承属性，通过原型链的混成形式来继承方法***

```javascript
function inheritPrototype( subType , superType ) {
    var prototype = object (superType.prototype); //创建超类型原型的一个副本
    prototype.constructor = subType; //为创建的副本添加constructor属性，弥补因为重写原型而丢失的constructor
    subType.protoType = prototype; //将新创建的对象赋值给子类型的原型
}

function SuperType ( name ) {
     this.name = name;
     this.colors = ["red" , "blue" , "green"];
 }
 
 SuperType.prototype.sayName = function() {
     alert(this.name);
 };
 
 function SubType(name , age) {
     SuperType.call(this, name); //第二次调用SuperType()
     this.age = age;
 }

inheritPrototype( SubType , SuperType );
SubType.prototype.sayAge = function() {
    alert(this.age);
}
```

##拾、Array

> JavaScript的数组的每一项可以保存==任意类型==的数据，长度==动态调整==。

###一、 创建一个数组

```javascript
var arr = new Array(); //调用构造函数
var arr1 = new Array(20); //创建已知大小的数组
var arr2 = new Array(item1 , item2 , item3);//创建数组并初始化
//以上的new可以省略

var arr3 = [item1 , item2 , item3]; //数组字面量表示法
```

###二、获取数组元素

```javascript
var item = arr[index];
```

###三、length

***数组的length并非只读，可以设置这个属性以从数组末尾移除元素或添加元素***

***使用`arr[arr.length] = newItem`的方法可以为数组添加新元素***

###四、 数组方法

1. isAarry()

   判断某个值是否是数组。

   > `value instanceof Array`方法也可以做到判断是否是数组。但如果网页中包含多个框架，则实际上存在多个全局执行环境，从而存在多个不同版本的Array构造函数，如果从一个框架向另一个框架传入一个数组，那么传入的数组和第二个框架中的原生数组分别具有不同的构造函数。

2. `toString()`

   将数组中每个值的字符串形式以逗号分隔，拼接成字符串。

3. `valueOf()`

   返回该数组。

4. `toLocaleString()`

   默认和toString()返回的值相同。（在针对时间日期和货币等字符串时会根据地区出现不同的变化）

5. `join( [separator] )`

   * 参数 ： [分隔符]（[ ]表示参数可省略）
   * 用途 ： 将数组以给定的分隔符创建字符串（默认是逗号）。

   

   ==栈方法==

6. `push( newItem )`

   * 参数 ： 任意数量的新元素
   * 返回值 ： 数组新长度
   * 用途 ： 将新元素添加到数组末尾

7. `pop()`

   * 返回值 ： 数组最后一项
   * 用途 ： 删除数组末尾项 ，减少length

   

   ==队列方法==

8. `shift()`

   * 返回值 ： 数组第一项
   * 用途 :  删除数组第一项

9. `unshift( newItem )`

   * 参数 ： 任意数量新元素
   * 返回值 ： 数组新长度
   * 用途 ： 在数组前端添加新元素

   

   ==重排序方法==（不会生成新数组）

10. `reverse()`

    反转数组

11. `sort( [compare] )`

    * 参数 ： [比较函数]

    * 用途 ： 排序数组（参数为空则按升序排列），比较的是字符串（即使数组中的元素是数值）

      ***3 > 24 因为3在2前***

    * 比较函数 ： 

      ***想让a在b后返回1 ， a在b前返回-1***

      下例为升序排列

      ```javascript
      function compare ( a , b ) {
          if ( a > b ) {
              return 1;
          }
          else if ( a < b ) {
              return -1;
          }
          else {
              return 0;
          }
      }
      ```

      简化后

      ```javascript
      function simpleCompare ( a , b ) {
          return a-b;
      }
      ```

      ***简化写法适用于数值类型或其valueOf()方法会返回数值类型的对象类型***

      

    ==操作方法==（会生成新数组）

12. `concat( [anotherArray] )`

    * 参数 ： [任意数量的数组]
    * 返回值 ： 合并后的新数组，参数为空则返回该数组副本
    * 用途 ： 将多个数组拼接成一个数组
    * 过程 ： 先创建当前数组的副本，然后将接收到的参数添加到这个参数的末尾，最后返回新构建的数组

13. `slice( start  ,  [end] )`

    * 参数
      * start：截取的起始位置
      * [end]：截取的结束位置
    * 返回值 ： 从start到end-1的所有项。如果没有end，则返回start到数组末尾的所有项
    * 用途 ： 截取字符串

14. `splice(start , deleteCount , [newItem] )`

    * 参数 

      * start：删除元素的起始位置
      * deleteCount：删除元素的个数，为0则不删除
      * [newItem]：任意数量的新增元素

    * 返回值 ：从原始数组删除的项（没删除则返回空数组）

    * 用途：

      * 删除元素：指定start和deleteCount
      * 插入元素：指定start和newItem并将deleteCount设置为0
      * 替换元素：指定所有参数，newItem的个数可以大于deleteCount

      

    ==位置方法==

15. `indexOf( target , [start] )`

    * 参数 
      * target：要查找的项
      * [start]：查找的起始位置
    * 返回值：target的位置，没找到返回-1
    * 用途：从前向后查找元素位置

    ***查找使用全等操作符，lastIndexOf()也一样***

16. `lastIndexOf( target , [start] )`

    与`indexOf()`查找方向相反

    

    ==迭代方法==

    ***以下每个方法都接收两个参数：***

    * func：要在每一项上运行的函数
    * [obj]：运行该函数的作用域对象，会影响this的值

    ***==func==函数接收三个参数：***

    * item：数组项的值
    * index：数组项的位置
    * array：数组对象本身

17. `every()`

    如果数组的每一项运行==func==后返回true，则返回true

18. `filter()`

    返回运行==func==后返回true的项组成的数组

19. `foreach()`

    为数组每一项运行==func==，无返回值

20. `map()`

    返回每次运行==func==的结果组成的数组

21. `some()`

    如果数组的任意一项运行==func==后返回true，则返回true

    

    ==归并方法==

22. `reduce( func ,  [value] )`

    * 参数
      * func：在每一项上调用的函数，该函数接收四个参数
        * prev：前一个值(func每一次执行后的值，第一次为数组的第一个值，即数组的迭代首次发生在数组的第二项上)
        * cur：当前值
        * index：项的索引
        * array：数组对象
      * [value]：作为归并基础的初始值
    * 返回值 ： 所有项运行函数后的最终值
    * 用途：从前向后遍历数组为其运行函数

    ```javascript
    //求数组所有值的和
    var arr = [1 , 2 , 3 , 4];
    function getSum( prev , cur , index , arrray ) {
        return prev+cur;
    }
    var sum = arr.reduce()
    ```

23. `reduceRight()`

    与`reduce()`遍历方向相反

##拾壹、Date

###一、创建一个日期对象

`var now = new Date()`

***指定参数则now为指定日期，不指定参数则now为当前时间***

接受的时间格式：

* 月/日/年
* 英文月 日，年
* 英文星期 英文月 日 年 时:分:秒 时区
* YYYY-MM-DDTHH:mm:ss:sssZ

###二、日期方法

1. `toString()`

2. `toLocaleString()`

3. `Date.now()`

   获取当前日期时间的毫秒数

4. `valueOf()`

   返回日期的毫秒表示，可用于比较日期

   

   ==日期格式化方法==

5. `toDateString()`&`toLocaleDateString()`

6. `toTimeString()`&`toLocaleTimeString()`

7. `toUTCString()`

  

   ==日期/时间组件方法==

8. `get/set[UTC]Time/FullYear/Time/Month/Date/Day/Hours/Minutes/Seconds/Milliseconds`

   ***Date表示日期（一个月中的第几天），Day表示星期（0——星期日，6——星期六）***

  ***Month的值为0-11；Hours的值为0-23 ；Minutes和Seconds的值为0-59***

9. `getTimeZoneOffset()`

   返回本地时间与UTC时间相差的分钟数

##拾贰、RegExp——正则表达式

***RegExp的每个实例都下列属性：***

* global：boolean，是否设置了g
* ignoreCase：boolean，是否设置了i
* lastIndex：int，开始搜索下一个匹配项的字符位置，从0起
* multiline：boolean，是否设置了m
* source：正则表达式的字符串表示，按照字面量形式返回

###一 、RegExp实例方法

1. `exec( str )`

   * 参数：要应用模式的字符串

   * 返回值：包含第一个匹配项信息的数组，没有匹配返回null

     ***返回的数组包含两个额外的属性：==index==和==input==***

     * index：匹配项在字符串的位置
     * input：应用正则表达式的字符串

     ***数组中的第一项是==与整个模式匹配的字符串==，其他项是==模式中的捕获组==匹配的字符串（没有捕获组则数组只有一项***

     > 对于exec()方法，即使使用全局标志g，它每次也只返回一个匹配项。
     >
     > 在不设置g时，对同一个字符串使用始终返回第一个匹配项的信息
     >
     > 设置g时，会继续查找新的匹配项

2. `test( str )`

   * 参数：字符串
   * 返回值：模式与参数匹配返回true；否则返回false
   * 用途：在只想知道目标字符串与某个模式是否匹配，但不需要知道其文本内容的情况下，使用此方法。常被用在if语句中

###二、RegExp构造函数属性

> 这些属性适用于作用域所有正则表达式，并且基于所执行的最近一次正则表达式的操作而变化。
>
> 这些属性有长属性名和短属性名（Opera不支持短属性名）。
>
> 使用`RegExp[短属性名]`来访问。


|         长属性名         | 短属性名 | 说明                   |
| :----------------------: | :------: | :--------------------: |
|        input        |   $_   | 最近一次要匹配的字符串 |
|    lastMatch    |   $&   | 最近一次的匹配项       |
|    lastParen    |   $+   | 最近一次的捕获组 |
|  leftContext  |   $`   | input中lastMatch之前的文本 |
| rightContext |    $‘    | input中lastMatch之后的文本 |
|    multiline    |    $*    | boolean，是否所有表达式都使用多行模式（IE,Opera不支持） |

***`$1,$2…$9`等短属性用于访问第一到第九个匹配的捕获组***

###三、不支持的特性

***JavaScript不支持正则表达式以下高级特性***

* 匹配字符串开始和结尾的\A和\Z锚（但支持^ 和 $）
* 向后查找
* 并集和交集类
* 原子组
* Unicode支持（支持单个字符）
* 命名的捕获组（支持编号的捕获组）
* s（single，单行）和x（free-spacing，无间隔）匹配模式
* 条件匹配
* 正则表达式注释

##拾叁：基本包装类型 Boolean & String & Number

> 每当读取一个基本类型值时，后台就会创建一个对应的基本包装类型的对象，从而可以调用一些方法来操作这些数据。

> 使用new操作符创建的引用类型的实例在执行流离开当前作用域之前都一直保存在内存中。
>
> 而自动创建的基本包装类型的对象，则只存在与一行代码的执行瞬间，然后立即被销毁。
>
> 不能在运行时为基本类型值添加属性和方法。

***可以显示调用Boolean、String、Number来创建基本类型的对象。但不要这么做，对基本类型的实例调用typeof会返回object，所有的基本包装类型的对象都会被转换为布尔值***

***Object构造函数会像工厂方法一样根据传入的值的类型返回相应的基本包装类型的实例***

```javascript
var obj = new Object ( "some text" );
alert( obj instanceof String ); //true
```

***使用new调用基本包装类型的构造函数，与直接调用同名的转型函数不同***

```javascript
var value = 25;
var number = Number( value ); //转型函数
alert ( typeof number ); //number

var obj = new Number( value );
alert( typeof obj ); //object 
```

###一 、Boolean

####1.创建一个Boolean对象

`var booleanObject = new Boolean(true)`

####2.方法

* `valueOf()`返回基本类型值的true和false
* `toString()`返回字符串类型的“true”和“false”

***布尔表达式中的任何对象都会被转换为true***

```javascript
var falseObject = new Boolean( false );
var result = falseObject && true; //falseObject是对象，被视为true，即使他的值是false
alert( result );
```

###二、Number

####1.创建一个Number对象

`var numberObject = new Number( 10 )`

####2.方法

* `valueOf()`返回基本类型的数值

* `toString()`&`toLocaleStirng()`返回字符串形式的数值

  

  ==格式化数值==

* `toFixed( n )` 

  * 参数：指定的小数位数
  * 返回值：返回n位小数的数值的**字符串形式**（常用于处理货币）

* `toExponential( n )`

  * 参数：指定的小数位数
  * 返回值：返回n位的以指数表示法（e表示法）表示的数值的**字符串形式**

* `toPrecision( n )`

  * 参数：指定的所有数字的位数（不包括指数部分）
  * 返回值：视情况返回固定大小（fixed）格式或指数（exponential）格式

###三、String

####1.创建一个String对象

`var stringObject = new String( "hello world ")`

####2.方法

* `valueOf`,`toString()`&`toLocaleString()`返回对象所表示的基本字符串值(即使字符串中包含双字节字符，仍算一个字符。双字节字符即占两个字节的ASCII字符)

  

  ==字符方法==

* `charAt( n )`

  * 参数：字符位置（从0起）
  * 返回值：给定位置的字符（字符串形式）

* `charCodeAt( n )`

  * 参数：字符位置
  * 返回值：返回指定位置的字符的字符编码

* `string[ n ]`

  返回指定位置的字符

  

  ==字符串操作方法==（不修改原字符串）

* `concat( anotherString )`

  * 参数：其他任意数量字符串
  * 返回值：拼接后的字符串

* `slice( start , [end] )`

  * 参数：

    * start：截取字符串的起始位置
    * [end]：截取字符串的结束位置（不包含该位置的字符），忽略则从start截取到字符串末尾

    ***参数为负值时，将参数与字符串长度相加作为参数进行截取***

  * 返回值：从start到end-1截取的字符串

* `substring( start , [end] )`

  * 参数：

    * start：截取字符串的起始位置
    * [end]：截取字符串的结束位置（不包含该位置的字符），忽略则从start截取到字符串末尾

    ***参数为负值时，会将该参数转换为0***

  * 返回值：从start到end-1截取的字符串

* `substr( start , [num] )`

  * 参数：

    * start：截取字符串的起始位置
    * [num]：截取的字符个数，忽略则从start截取到字符串末尾

    ***第一个参数为负值时，该参数加字符串长度作为新的参数；第二个参数为负值时，该参数转换为0***

  * 返回值：从start开始截取num长度的字符串

    

  ==字符串位置方法==

* `indexOf( str )`

  * 参数：要搜索的子字符串
  * 返回值：子字符串的位置，没找到返回-1

* `lastIndexOf( str )`

  与`indexOf( )`搜索方向相反

  

* `trim()`

  创建一个字符串的副本，删除字符串前后的所有空格

  

  ==字符串大小写转换方法==

* `toLowerCase()`&`toLocaleLowerCase()`

  将字符串转成全小写

* `toUpperCase()`&`toLocaleUpperCase()`

  将字符串转成全大写

  

  ==字符串模式匹配方法==

* `match( regExp )`

  * 参数：一个正则表达式或RegExp对象
  * 返回值：一个数组，第一项是与整个模式匹配的字符串，其他项为捕获组匹配的字符串

* `search( regExp )`

  * 参数：一个正则表达式或RegExp对象
  * 返回值：字符串中第一个匹配项的索引，没有匹配返回-1

* `replace( regExp/str ,  str/func )`

  * 参数：

    * regExp/str：一个RegExp对象或一个字符串（不会被转换成正则表达式）
    * str/func：一个字符串或一个函数

    ***第二参数如果是函数，且只有一个匹配项时，则这个函数接受三个参数：***

    1. match：模式的匹配项
    2. pos：模式匹配项在字符串中的位置
    3. originalText：原始字符串

    ***当定义了多个捕获组时，则参数为匹配项，第一个捕获组匹配项，第二个捕获组匹配项，…***

  * 返回值：用第二个参数替换第一个参数后的字符串

  ***如果第一个参数是字符串，则只替换第一个子字符串。要想替换所有子字符串，需提供一个正则表达式并制定全局标志（g）***

  ***第二个参数可以使用一些特殊的的字符序列，将正则表达式操作得到的值插入到结果中***

  | 字符序列 | 替换文本                                                     |
  | -------- | ------------------------------------------------------------ |
  | $$       | $                                                            |
  | $&       | 匹配整个模式的子字符串                                       |
  | $‘       | 匹配子字符串之前的子字符串                                   |
  | $`       | 匹配子字符串之后的子字符串                                   |
  | $n       | 匹配第n个捕获组的子字符串，n∈[0,9]，没有捕获组则使用空字符串 |
  | $nn      | 匹配第nn个捕获组的子字符串，n∈[01,99]，没有捕获组则使用空字符串 |

* `split( separator  , [arrLength] )`

  * 参数：
    * separator：分隔符（或RegExp对象）
    * [arrLength]：指定的数组大小
  * 返回值：基于指定的分隔符分隔的子字符串的数组

* `str1.localeCompare( str2 )`

  * 参数：另一个需要比较的 字符串
  * 返回值：
    * str1在字母表中排在str2前，返回负数（大多数情况返回-1）
    * str1等于str2，返回0
    * str1在字母表中排在str2后，返回整数（大多数情况返回1）

* `fromCharCode( code )`

  * 参数：任意数量的字符编码
  * 返回值：编码对应的字符 构成的字符串

##拾肆、单体内置对象

> 内置对象即不依赖于宿主环境的对象，这些对象在程序执行之前就已经存在了。

###一、Global

> Global对象某种意义上是作为一个终极的“兜底对象”。
>
> 不属于任何其他对象的属性和方法，最终都是它的属性和方法。
>
> 所有全局作用域中定义的属性和函数， 都是Global对象的属性。

####1.Global方法/全局方法：

* `isNaN()`

* `isFinite()`

* `parseInt()`

* `parseFloat()`

* `encodeURI()`

  对整个URI进行编码，不会对本身属于URI中的特殊字符进行编码（例如:  : / ? #)

* `encodeURIComponnent()`

  对URI中的某一段进行编码，对它发现的任何非标准字符进行编码

* `decodeURI()`

  解码用`encodeURI()`编码的字符

* `decodeURIComponent()`

  解码用`encodeURIComponent()`编码的所有字符

* `escape()`&`unescape()`已废弃

* `eval()`

  将传入的参数当做实际的JavaScript语句解析，然后把执行结果插入到原位置。

  ***通过`eval()`执行的代码被认为是包含该次调用的执行环境的一部分，一次被执行的代码具有与该执行环境相同的作用域链，即可以引用包含环境中定义的变量***

  ***在`eval()`创建的任何变量和函数都不会被提升，严格模式下无法访问其中创建的任何变量或函数***

####2. Global属性

undefined	NaN	Infinity

Object	Array	Function	Boolean	String	Number

Date	RegExp

Error	EvalError	RangeError	ReferenceError	SyntaxError	TypeError	URIError

####3.window对象

***在web浏览器中，全局作用域中声明的所有的变量和函数都成为了window对象的属性***

###二、Math

####1.Math属性

Math.E

Math.LN10	Math.LOG2E	Math.LOG10E	

Math.PI

Math.SQRT1_2（2的平方根的倒数）	Math.SQRT2

####2.Math方法

* `Math.min( n1 , n2 , ...)`

* `Math.max(n1 , n2 , ...)`

* `Math.ceil( num )`

  向上舍入

* `Math.floor( num )`

  向下舍入

* `Math.round( num )`

  四舍五入

* `Math.random()`

  返回一个0-1的随机数

  `Math.floor( Math.random()*m+n )`生成一个[n,m+n-1]的随机数，n为随机数的起始，m为随机数的可能值总数

* `Math.abs( num )`

* `Math.exp( n )`

  返回e的n次幂

* `Math.log( num )`

  返回num的自然对数

* `Math.pow( a , n)`

* `Math.sqrt( num )`

* `Math.acos( x )/asin( x )/atan( x )`

* `Math.atan2( y , x )`

  返回y/x的反正切值

* `Math.cos( x )/sin( x )/tan( x )`

