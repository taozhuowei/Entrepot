[TOC]

# Vue

## MVVM

M是Model，数据模型；V是View，UI组件。VM是ViewModel，是连接View和Model的桥梁

数据会绑定到ViewModel层并渲染到页面，当数据更新时，通知View更新

视图View更新时，会通知ViewModel层更新Model中的数据

## v-if & v-show

* v-if 是动态的，通过向DOM中添加或删除DOM元素控制显示和隐藏，过程消耗性能
* v-show的元素会被渲染一次，只后通过使用**display**属性控制元素的显示与否，
* 如果需要频繁的隐藏和显示，使用v-show

## v-for 与 v-if不能连用的原因

v-for的优先级高于v-if，连用时，v-if会判断数组中的每一个元素，会影响速度、消耗性能，尤其是只有一小部分需要渲染的时候。

可以将v-if放在外层，或使用计算属性

## key的作用

key的作用是尽可能的复用DOM元素

当新旧节点只有顺序不同的时候，为了优化性能，最佳操作是通过移动元素位置来更新

而key则是作为节点的唯一标识让Vue来判断是否可以复用

## 组件中的data为什么是一个函数

Vue中的组件会被复用多次，也就会被创建多个实例，共用一个构造函数

data如果是对象，则多个实例的data共用一个地址，互相影响

data是函数的话组件的多个实例之间互相不会冲突

## v-model原理

v-model的本质是语法糖，可以用`v-bind:value` + `v-on:input`的方式实现

## Computed & Watch

* Computed是计算属性，具有缓存，只有当依赖的数据发生变化的时候才会重新计算，否则将直接使用缓存，不能实现异步操作，适用于计算比较消耗性能的场景，当表达式过于复杂时，为了方便模板的维护，可以将复杂的逻辑放入计算属性中处理

* Watch是侦听器，不具备缓存，起到观察的作用，可以监听某些数据执行回调，支持异步操作。

  通过将**deep**属性设置为true，可以对对象进行深度监听，但会带来性能问题，可以使用字符串形式监听来优化

  不在组件内的watch最好使用unwatch注销

## keep-alive

keep-alive可以实现组件缓存，当组件切换时会保存当前组件的状态

**属性**

* include 满足条件的组件会被缓存
* exclude 满足条件的组件不会被缓存

**生命周期**

* activated 当前组件处于活跃状态
* deactivated 当前组件处于非活跃状态

keep-alive使用LRU——最近最久未使用算法来淘汰数据，核心思想是：“如果数据最近被访问过，那么将来被访问的几率也更高”。具体实现是： 

* 将新数据插入到链表头部
* 当缓存命中，也就是被访问时，将其移动到头部
* 当链表满了之后，移除末尾数据

## 响应式数据原理（2.0）

### 简略

Vue会遍历data对象中的属性，使用`Obejct.defineProperty()`方法为属性添加getter和setter

当页面使用属性时会触发getter，在里面进行依赖收集

当属性变动时会触发setter进行更新

### 详细

**核心是使用`Object.defineProperty()`为属性添加getter  \ setter**

**过程分为两条路线：**

* new Vue() —-> Obeserver数据劫持 —-> 绑定Dep —-> 通知Watcher —-> 更新视图
* new Vue() —-> Compile —-> 初始化视图，绑定Watcher

1. **实现Observer——数据监听器**

   * 当执行new Vue()，也就是Vue的初始化时，Observer会遍历data中的所有属性

     同时初始化Dep——消息订阅器

   * Observer会判断传入的数据的类型

     * 如果是数组，则改造数组，通过修改原型链，劫持7种数组变异方法：

       `pop() \ push() \ shift() \ unshift() \ reverse() \ sort() \ splice()`

       并遍历数组的每一项（只遍历第一层），为其添加getter \ setter；

     * 如果是对象，则调用`walk()`方法遍历对象的每一个属性

       再使用`defineReactive()`方法为对象的每一个属性加入getter和setter

   * `defineReactive()`方法内部会使用`Object.defineProperty()`为属性添加getter \ setter

     在getter中收集依赖，在setter中响应更新

2. **Dep——消息订阅器**

   * Dep是一个消息订阅器，内部维护了一个数组，用于存放所有的Watcher——订阅者
   * 当数据发生变化时，调用`notify()`方法通知所有的Watcher

3. **Watcher——订阅者**

   * Watcher是Oberserver和Compile——指令解析器之间的桥梁
   * 当数据改变时，Dep会通知Watcher，Watcher会使用`update()`方法触发Compile中绑定的回调，更新视图

4. **Compile——指令解析器**

   * Compile负责解析模板指令，将模板中的变量替换成数据，初始化渲染页面

     同时，他也负责绑定更新函数，添加Watcher

   * 为了提高性能，避免多次操作DOM，Compile会将Vue中的el转成文档碎片fregment进行解析操作

     解析完成后，再将fregment添加回DOM中

## 如何检测数组变化

Vue2.0通过重写数组的原型链，劫持数组的`pop、push、shift、unshift、splice、reverse、sort`七种方法，实现监测数组变化。如果数组中有引用类型，则递归遍历进行深度监控。

## 生命周期

* `beforeCreate`

  `new Vue()`（实例初始化）之后，**组件创建、数据观测和event\watch事件配置**之前触发

  **data、methods、computed、watch**上的数据和方法不能被访问

  **data**和**ref**均为undefined

* `created`

  实例创建完成后触发，完成了**数据观测、属性和方法的运算、event\watch事件回调**

  未渲染HTML模板，**data对象**已经存在，可以使用、更改数据，更改数据不会触发`updated`

  可以做初始数据的获取，**ref**是undefined，无法与DOM进行交互，但可以用`vm.$nextTick`访问DOM

  可以将数据初始化和初始化页面请求放到这里，结束loading

* `beforeMount`

  页面挂载之前触发，**template模板*已经导入**render函数**编译

  HTML元素未渲染，**data**初始化完成，**ref**不能操作

  虚拟DOM创建完成，更改数据不会触发`updated`

* `mounted`

  页面挂载之后触发，真实的DOM挂载完毕，**el**被新创建的`vm.$el`替换

  可以操作**ref**，一般组件初始请求数据放在这里，filters过滤器在这里生效

  可以拿到数据和节点，不会保证所有的子组件也都一起被挂载

  使用vm.$nextTick在整个视图渲染完毕后进行操作

* `beforeUpdated`

  数据更新时、虚拟DOM打补丁前触发

  可以将更新前的数据保存，或访问现有的DOM，比如手动移除已有的监听器

* `updated`

  虚拟DOM重新渲染和打补丁之后触发

  组件DOM已经更新，但不保证所有子组件也都一起被重绘

  使用`vm.$nextTick`在整个视图渲染完毕后进行操作

* `beforeDestroy`

  实例销毁之前调用

  ref可以操作，实例完全可用

  可以在这里做清除定时器等优化操作

* `destroyed`

  实例销毁之后调用

  ref不存在，Vue实例所有指令被解绑，所有事件监听器被移除，所有子实例被销毁



**接口请求一般放在`created`中**

放在`mounted`中在初始渲染时会渲染一次，获取数据之后会触发视图更新，还会渲染一次

**服务器端渲染只有`beforeCreated`和`created`**

### Watch & Updated

watch是监控特定数据的变化，updated是监控组件里所有数据的变化

### 组件生命周期调用顺序

* **加载渲染过程**

  父beforeCreate –> 父created –> 父beforeMounte –> 子beforeCreate –> 子created –> 子beforeMount

  –> 子mounted –> 父mounted

* **子组件更新过程**

  父beforeUpdate –> 子beforeUpdate –> 子updated –> 父updated

* **父组件更新过程**

  父beforeUpdate –> 父updated

* **销毁过程**

  父beforeDestroy –> 子beforeDestroy –> 子destroyed –> 父destroyed

## 组件通信方式

### 父子组件

子组件通过`props`属性接收父组件传来的数据

子组件通过`$emit`触发自定义事件并携带数据，父组件通过`$on`来监听这个事件并获得数据

### 兄弟组件

使用Event Bus，即创建一个空的Vue实例用作事件总线

也可以使用Vuex

### 跨级组件通信

首选Vuex

可以使用`$attrs`，`$listeners`^①^

provide \ inject ^②^



①

* `$attrs`包含了父作用域中不作为**prop**被识别获取的**特性（attributes）**绑定（class和style除外）

  当组件没有声明任何**prop**时，除了class和style的所有父作用域的绑定通过`v-bind="$attrs"`插入内部组件

* `$listeners`包含了父作用域中的`v-on`事件监听器（不包括`.native`修饰的）

  通过`v-on="$listeners"`传入内部组件

② provide / inject 选项需要一起使用，用来让祖先组件向其所有后代组件注入一个依赖，无论层次多深，并在其上下游关系成立时永久有效

* 父组件中提供**provide**，值是一个对象或返回对象的函数
* 子组件中引入**inject**，值是一个字符串数组或一个对象，对象的key是本地的绑定名

## $nextTick

Vue在更新DOM时是异步执行的，只要侦听到数据变化，Vue就会开启一个队列，并缓冲在同一事件循环中的所有的数据变更。

如果同一个Watcher被触发多次，则只会被推入到队列中一次，这样可以避免不必要的运算和DOM操作。

在下一个事件循环**tick**中，Vue会刷新队列并执行实际工作

Vue在内部会根据当前环境依次选择`Promise.then、MutationObserver`和`setImmediate`，如果都不支持则使用`setTimeout`（由于宏任务运行时间大于微任务，所以优先Promise.then）

## 事件绑定原理

* 原生事件：通过`addEventListener`绑定给真实元素
* 组件事件绑定通过Vue自定义的`$on`实现

## 模板编译原理

* 首先进行模板解析，生成**AST——抽象语法树**，用JavaScript对象的形式来描述DOM节点。之后用大量的正则表达式对标签、文本进行解析
* 虽然Vue数据是响应式的，但不是模板中的所有数据都是响应式的，有一些数据是静态的，即一次渲染之后就不会发生变化。Vue会针对这些静态节点进行优化，通过标记他们从而跳过对他们的比对来提高效率
* 最后，Vue会将优化后的**AST**转换为可执行的代码

## 虚拟DOM（Virtual DOM ）

源码中是VNode类，用JavaScript描述一个DOM节点，是对真实DOM的一层抽象

虚拟DOM映射到真实DOM需要经历**create、diff、patch**等阶段

## Diff算法

**过程**

* 先比较同级，再比较子节点

* 先判断一方有子节点另一方没有的情况

  如果新的没有子节点，将旧的子节点移除

* 比较都有子节点的情况（核心）

* 递归比较子节点

>  Vue中的Diff算法经过了优化，使用了**双端比较**
>
> 即同时从新旧子节点的两端进行比较，通过**key**值找到可复用的节点，再进行相关操作

## 服务器渲染（SSR）的优缺点

SSR是将Vue在服务端完成渲染并将HTML返回给客户端的过程

**优点**

SSR具有更好的SEO，并且首屏加载速度更快

**缺点**

* SSR只有`beforeCreate`和`created`两个钩子

* 服务器负载大，服务端渲染程序需要处于Node.js环境下

* 处理一些外部扩展库是需要特殊处理









