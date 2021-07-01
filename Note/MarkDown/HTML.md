[toc]

# HTML

## 行内（inline）元素特点

* 所有元素在一行显示，排满后换行
* 无法设置高度，宽度为文字宽度
* 只能设置垂直方向margin，无法设置水平方向margin

## 常见的行内元素

a \ b \ em \ i  \ span  \ strong …

## 块级（block）元素特点

* 元素独占一行
* 可以设置宽度高度，默认宽度为父元素宽度
* 垂直、水平方向上的margin均生效

## 常见块级元素

div \ p \ ul \ ol \ li \ h1-h6

## 行内块（inline-block）元素特点

* 所有元素在一行显示，排满后换行
* 可以设置宽度高度，默认宽度为父元素宽度
* 垂直、水平方向上的margin均生效

 ## 常见行内块元素

img \ input \ select \ button \ label …

## HTML5的新特性

* 增加了语义化标签

  header \ footer \ aside \ nav \ section \ article …

* 扩展了表单`<input>`的type类型

  color \ date \ time \ datetime \ email …

* 新增了表单元素

  datalist \ keygen \ output

* 新增了表单属性

  placeholder \ required \ pattern \ min \ max …

* 音视频支持

* Canvas

* SVG

* 拖放API

* Web Worker

* Web Socket

* Web Storage

## LocalStorage & SessionStorage & Cookie

**相同点**

* 用于存储用户临时信息
* 只能存字符串（可以存其他类型，但是浏览器不支持）
* 不同浏览器间无法共享

**不同点**

* LocalStorage 生命周期为永久，除非用户显式清除，否则永远存在

  SessionStorage生命周期为当前窗口或标签页，一旦关闭，则消失

  Cookie在浏览器关闭后失效

* 相同浏览器，同源的不同页面可以共享LocalStorage，不可以共享SessionStorage

  一个标签页包含多个同源iframe，则可以共享SessionStorage

* LocalStorage 、SessionStorage 可以存5M的数据

  Cookie只能存4K左右的数据

* LocalStorage 、SessionStorage仅在浏览器中保存，不与服务器通信

  Cookie会包含在HTTP头中

* LocalStorage 、SessionStorage可以直接调用`setItem \ getItem`方法

  Cookie需要自己封装

## Cookie & Session

* Cookie存在浏览器上

  Session存在服务器上

* Cookie不安全（XSS攻击）

  Session安全

* Session会影响服务器性能

  Cookie可以减轻服务器压力

* Cookie有大小限制（4K）

  Session没有

* Cookie的信息客户端服务器都可以知道

  Session的信息只被服务器知道

* Cookie存字符串

  Session存对象

* Cookie可以区分路径，同一个网站不同路径下Cookie无法访问

  Session不能区分路径

