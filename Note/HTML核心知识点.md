# **HTML**

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

## readonly 和 disabled 的区别

二者都禁止用户修改表单内容

- readonly仅适用于表单中的文本域，如input和textarea；

disabled适用于所有表单元素

- 在发送GET或POST请求时，设置了disabled的表单元素的值不会传递，而readonly会传递
