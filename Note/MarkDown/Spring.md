[toc]

# Spring

## 控制反转 IoC，Inversion of Control

> 控制反转意味着将Java对象交给容器控制，而不是在对象内部直接控制
>
> 传统应用程序，是由对象主动去控制获取依赖的对象
>
> 控制反转则是使用容器控制对象的创建和依赖

**谁控制谁？** IoC容器控制对象

**控制什么？** 控制了外部资源获取

**为什么是反转？** 因为控制权在容器手中而不是对象本身手中

**好处：**

使得对象之间松散耦合，方便测试，利于功能复用

## 依赖注入 DI，Dependency Injection

> 依赖注入是控制反转的实现方式的一种，指的是组件之间的依赖关系由容器在运行期决定，由容器动态的将某个依赖关系注入到组件中

**谁依赖于谁？** 应用程序依赖于IoC容器

**为什么需要依赖？** 应用程序需要IoC容器提供对象需要的外部资源（对象、资源、常量数据）

**谁注入谁？** IoC容器注入应用程序的某个对象

**注入了什么？** 注入了某个对象所需要的外部资源

## 面向切面编程 AOP，Aspect Oriented Programming

> 面向切面编程是一种编程模式，这种模式将程序中影响多个类的行为功能称为切面，比如日志输出和权限管理，将这些功能模块化后，不需要在每个类中单独写功能，而是调用类时自动调用这些切面功能

## Bean的作用域

* **单例Singleton**（默认）

  只实例化一次，这个实例可以无限重复注入

* **原型Prototype**

  可以实例化多次，每个实例只注入一次

* **请求Request**

  一个请求周期内，实例可以重复注入

  超过一个请求周期，需要重新创建实例

* **会话Session**

  一个会话周期内，实例可以重复注入

  超过一个会话周期，需要重新创建实例

## 基于XML的Bean注入方式

* **接口注入Interface Injection**（Spring4 废弃）

* **Setter方法注入Setter Injection**

  容器调用无参构造方法或无参静态工厂方法实例化bean后，调用bean的setter方法实现依赖注入

* **构造器注入Constructor Injection**

  通过容器触发一个类的构造器来实现

* **静态工厂注入**

* **实例工厂**

## 构造器注入和Setter方法注入的区别

* 构造器注入不能部分注入；Setter注入可以
* Setter注入将覆盖构造器注入；构造器注入无法覆盖Setter注入
* 构造器注入修改后会创建新实例；Setter注入不会
* 构造器注入适合设置很多属性；Setter注入适合设置少量属性


