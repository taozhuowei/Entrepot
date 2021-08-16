# DOM核心知识点

## 事件流

DOM2级事件规定，事件具有如下三个阶段：

- 捕获阶段： 事件由document元素向下逐级传递至目标元素
- 目标阶段： 事件到达目标元素
- 冒泡阶段： 事件由目标元素向上逐级冒泡至document元素

## 事件绑定与处理

- 标签上绑定事件（DOM0）

`<div onclick="handleClick">`

- 调用事件方法（DOM0）

`document.getElementById('#div').onclick = handleClick;`

- 使用addEventListener

element.addEventListener(event , handler , isCapture)

- event 事件名（没有on）
- handler 事件处理回调函数
- isCapture true 在捕获阶段添加 ；false 在冒泡阶段添加

使用addEventListener在同一个元素上监听同一事件，使用多个handler，触发的顺讯按照书写顺序执行，其他方法对于同一元素同一事件只能绑定一个handler

**解绑事件：**

前两种将handler设置为null，第三种调用`removeEventListener(handler)`

handler必须是命名函数，才能正确删除

## target 和 currentTarget 的区别

target只处于事件流的目标阶段，而currentTarget处于事件流的捕获、目标和冒泡阶段

当处于目标阶段时，二者指向相同

处于捕获和冒泡阶段时，target指向触发事件的对象，而currentTarget指向事件活动对象