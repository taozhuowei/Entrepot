[toc]

# Java

## 基本数据类型

|  类型   |   位   |  字节  |
| :-----: | :----: | :----: |
|  byte   |   8    |   1    |
|  short  |   16   |   2    |
|   int   |   32   |   4    |
|  long   |   64   |   8    |
|  float  |   32   |   4    |
| double  |   64   |   8    |
|  char   |   16   |   2    |
| boolean | 不一定 | 不一定 |

##数据类型存储位置
> 基本数据类型存在栈中
>
> 引用数据类型的引用地址存在栈中，对象存放在堆中

## 权限修饰符

* **private** 只限当前类访问
* **default** 只限当前类和同包类访问
* **protected** 只限当前类、同包类和子类（即使不同包）访问
* **public** 任何类都可以访问
## == & equals & hashCode 的区别
### ==

* **基本数据类型**
   比较他们两边的值
* **引用数据类型（类、接口、数组）**
   比较他们在内存中的存放地址
   只有同一个new出来的对象比较结果为true

### equals

> 任何一个对象都有`equals()`方法，用于比较两个对象的地址
>
> Sting、Integer、Double等重写了该方法，对值比较

### hashCode
>  对象拥有`key`和`value`，可以根据`key`计算`hashCode`值，在据此存储在不同的存储区域
>
> 将两个对象比较时先比较`hashCode`再使用`equals`
>
> 重写equals时也要重写hashCode

## int & Integer
* Integer是int的包装类；int是基本数据类型
* Integer变量需要实例化；int变量不需要
* 当new一个Integer时，会生成一个指针指向此对象，变量中存储的是对象的引用；而int则存的是值
* Integer默认值是null；int默认值是0
* 两个通过new生成的Intege变量不相等，即使值相同
* Integer变量和int变量比较，Java会拆包，将Integer变为int，再比较值
* 非new生成的Integer变量指向的是常量池中的对象，如果值在-128到127之间且值相等，则`==`返回true，不在范围内即使值相等也返回false
* Java对于-128-127的数会进行缓存，当声明`Integer i = 127`时，会将127进行缓存，之后再写`Integer j= 127`时不会new，而是直接取缓存
## 多态
> 多态体现为父类引用可以指向子类对象
>
> 使用多态后的父类引用变量调用的是子类重写后的方法，但成员变量是父类的

## 向上转型
> `Father f = new Son();`
>
> 适用于不需要面对子类类型，或用父类的功能就能完成操作的场景

## 向下转型
> `Son s = (Son)new Father();`
>
> 适用于需要使用子类特定功能的场景

## String & StringBuffer & StringBuilder
* String被final修饰，长度不可变，对其修改会创建新的对象；StringBuffer和StringBuilder可以修改，不会创建新对象
* StringBuilder的执行效率高于StringBuffer，高于String
* StringBuffer用了synchronized关键字修饰，是线程安全的；StringBuilder是线程不安全的，不能同步访问
## 内部类
* **成员内部类**，定义在一个类中，可以访问外部类所有属性和方法，同名属性和方法优先访问内部类的（隐藏现象），不能有静态属性和方法
* **局部内部类**，定义在方法或作用于中，仅可以访问方法或作用于中的变量
* **匿名内部类**，没有名字的内部类
* **静态内部类**，使用static修饰，不依赖外部类的实例化，==不能与外部类类名相同==，不能访问外部类普通成员变量，可以访问静态成员变量和静态方法
## 抽象类 & 接口
* 抽象类要被子类继承（extends）；接口要被实现（implements）
* 抽象类可以声明方法并实现（可以有抽象方法和普通方法）；接口只能声明方法（抽象方法）
* 抽象类中可以有变量和常量；接口中只能有public和static修饰的常量（final）
* 抽象类只能单继承；接口可以多继承
* 抽象类主要用来抽象类别；接口主要用来抽象功能
## 静态属性和静态方法的重写和继承
父类的静态方法和静态属性不能被重写，可以被继承

## 重载 Overload

> **同一个类**中的多个方法，他们**方法名相同**，**参数列表（参数个数、参数顺序、参数类型）不同**的情况，称为**重载**
>
> 与**返回值**和**访问类型**以及**抛出的异常**无关

## 重写 Override

> 存在于**父子关系**的两个类中，**子类中的方法**与**父类中的方法**的**方法名、参数列表以及返回值完全相同**的情况，称为**重写**
>
> 重写的方法的**访问权限**要**大于等于**父类的方法，**抛出的异常**的范围要**小于等于**父类的方法

## final & finally & finalize

* **final** 用于修饰属性、方法或类，表示属性不可变、方法不可覆盖、类不可继承
* **finally** 用于异常处理，无论是否发生异常，总是执行
* **finalize**，是Object类的一个方法，在垃圾收集器执行时，被回收对象的该方法会被调用，可以覆盖此方法来回收其他资源
## 集合Collection
> Collection是List、Set、Quene的最基本的接口

## List

> List是有序的Collection

### ArrayList
* 内部通过数组实现。缺点：元素之间不能有间隔，当数组大小不满足时需要将已有数组复制到新的存储空间
* 可以对元素进行快速随机访问
* 插入、删除、移动代价较高
### Vector
* 通过数组实现
* 区别于ArrayList，其支持线程同步，访问速度比ArrayList慢
### LinkList
* 链表结构存储
* 适合数据的动态插入和删除
* 随机访问和遍历速度慢
* 提供操作表头、表尾元素的方法
## Set
> Set是无序（存取顺序不一致）的，内部值不能重复

### HashSet
* 存哈希值
* 通过哈希值确定元素存放位置，一个hashCode位置上可能有多个元素
### TreeSet
* 用二叉树原理对新增对象排序
* 自定义类对象需要实现Comparable接口并重写compareTo方法
### LinkHashSet
* 继承于HashSet，基于LinkedHashMap实现
* 使用LinkedHashMap保存元素，操作方法与HashSet相同
## Map
> Map是将key和value进行关联映射的容器，key不可以重复，value可以

### HashMap
* 根据key的哈希值存储数据
* Java 8 使用数组+链表+红黑树组成
* 访问速度快，遍历顺序不确定
* 只允许最多一条记录的key为null，允许多条记录的value为null
* 线程不安全
### HashTable
* 继承自Dictionary类
* 线程安全
### TreeMap
* 实现了SortedMap接口
* 根据key排序（默认升序）
* key必须实现了Comparable接口或者传入自定义Comarator到构造函数，否则抛出异常
### LinkHashMap
* HashMap的子类
* 保存了记录的插入顺序
## Throwable
> Throwable是所有错误和异常的超类，有两个子类Error和Exception

## Error
> Error表示程序中无法处理的错误

**常见错误：**

* VirtualMachineError 虚拟机运行错误
* NoClassDefFoundError 类定义错误
* OutOfMemoryError 内存不足错误
* StackOverflowError 栈溢出错误

**出现错误后JVM将终止进程**

## Exception

> Exception表示程序本身可以捕获并且可以处理的异常，分为运行时异常和编译时异常

### 运行时异常

> Java编译器不会去检查它，即使没有throws声明或try-catch捕获，仍然会编译通过

**常见运行时异常：**

* NullPointerException 空指针异常
* ArrayIndexOutOfBoundException 数组下标越界异常
* ClassCastException 类型转换异常
* ArithmeticException 算数异常
### 编译时异常
> Java编译器会检查它，需要通过throws声明抛出或try-catch进行捕获，否则无法通过编译

**常见编译时异常：**

* IOException IO流异常
* ClassNotFoundException 指定类未找到异常

## 多线程

**实现多线程的两种方式： **

* 继承Thred类、
* 实现Runable接口

## 进程 & 线程

* 进程是操作系统资源分配的基本单位；线程是处理器任务调度和执行的基本单位
* 一个进程内包含至少一个线程
* 进程切换开销大，拥有独立的代码和数据空间；线程切换开销小，多个线程共享代码和数据空间
* 统一进程中的不同线程共享地址空间和资源
* 线程不能独立执行

## 线程的生命周期

新建—>就绪—>运行—>阻塞—>死亡

## IO流

**从方向上分为：** 输入流和输出流

**从读取方式上分为：** 字节流和字符流



