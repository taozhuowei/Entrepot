[toc]

# CSS

## 盒子模型

> 盒子模型包括：**内容Content、内边距Padding、边框Border**和**外边距Margin**
>
> **标准盒**模型的**width**和**height**属性设置的是**Content**的宽高
>
> **IE盒模型**的**width**和**height**属性设置的是**Content+Padding+Border**的宽高

## 清除浮动的方式

1. 父元素最后添加一个空的div，设置`clear:both`
2. 父元素伪类`:after`，设置`content: “”;  display:block; clear:both`
3. 父元素触发BFC

## 居中

### 水平居中

1. 固定宽度的块级元素使用`margin:0 auto`或`position:absolute`，之后将**top、bottom、left、right**都设为0，再设置`margin:auto`
2. 不定宽度，外层元素设置`text-align: center`，内层设置`display:inline-block`
3. 先`display:table-cell`，再`vertical-align: middle`

### 垂直居中

1. 先`display:table-cell`，再`verticle-align: middle`
2. 行内元素设置**line-height**为父元素高度

### 水平垂直居中

1. 父元素设置`position: relative`，子元素设置`position:absolute`，再设置`left:50%; top:50%`

   之后再反向移动子元素宽度的一半，可以使用：

   * 子元素的**上外边距**和**左外边距**各为其宽高的一半
   * 子元素`transform: translate(-50% , -50%)`

2. **flex布局**

   父元素设置`display: flex; justify-content:center; align-items: center;`

## BFC

> BFC（Block Formattin Context），块级格式化上下文是一块独立的俄渲染区域，并用一套独立的渲染规则，内外布局互不干扰。

### 布局规则

* 内部盒子垂直相邻放置
* 盒子垂直方向距离由margin决定，同一个BFC的两个相邻盒子的margin会重叠
* 内部子元素的左外边距与外部父元素的左内边距相连，即使子元素浮动
* BFC不与浮动元素重叠
* 浮动元素也参与BFC计算高度

### 创建BFC

**满足以下任意一个条件即可**

* 浮动
* 脱离文档流，**position**不是**static**或**relative**
* **diplay**的值是**inline-block、table-cell、flex**
* **overflow**的值不是**visible**

### 作用

* 防止Margin重叠
* 自适应两栏布局
* 清除浮动

## 外边距重叠

> **相邻元素**垂直方向上的外边距会重叠
>
> 正值取最大，一正一负取和，负值取绝对值最大

> **父子元素**，如果子元素设置了**margin**且父元素的**border、padding**都是0的情况下会发生外边距重叠

解决方法： BFC