#JavaScript数据结构与算法

## 单向链表

* Node类 : 用于表示结点

  `function Node(element){`

  ​	`this.element=element;`	//当前节点元素

  ​	`this.next=null;` //下一个节点链接

  `}`

* LinkList类 ：提供对链表进行操作的方法

  `function LinkList(){`

  ​	`this.head=new Node('head');`//头结点

  ​	`this.find=find;`//查找节点方法

  ​	`this.insert=insert；`//插入节点方法

  ​	`this.remove=remove;`//删除节点方法

  ​	`this.findPrev=findPrev;`//查找节点的前一个节点方法

  ​	`this.display=display;`//显示链表方法

  `}`

  * find方法

    `function find(target){`

    ​	`var currNode=this.head;`

    ​	`while (currNode.element != target){`

    ​		`currNode=currNode.next;`

    ​	`}`

    ​	`return currNode;`

    `}`

  * insert 方法

    `function insert(newElement , target){`

    ​	var newNode=new Node(newElement);

    ​	`var currNode=this.find(target);`

    ​	`newNode.next=currNode.next;`

    ​	`currNode.next=newNode`

    `}`

  * display方法

    `function display(){`

    ​	`var currNode=this.head;`

    ​	`while (!(currNode.next.element)){`

    ​		console.log(currNode.next.element);

    ​		`currNode=currNode.next;`

    ​	`}`

    `}`

  * findPrev方法

    `function findPrev(target){`

    ​	`var currNode=this.head;`

    ​	`while (!(currNode.next==null) && (currNode.next.element!=target)){`

    ​		`currNode=currNode.next;`

    ​	`}`

    ​	`return currNode;`

    `}`

  * remove方法

    `function remove(target){`

    ​	`var prevNode=this.findePrev(target);`

    ​	`if (!(prevNode.next==null)){`

    ​		`prevNode.next=prevNode.next.next;`

    ​	`}`

    `}`
    
    

##双向链表

* Node类

  `function Node(element){`

  ​	`this.element=element;`

  ​	`this.next=null;`

  ​	`this.previous=nul;`

  `}`

* insert

  `function insert(newElement , target){`

  ​	`var newNode=new Node(newElement);`

  ​	`var currNode=this.find(target);`

  ​	`newNode.previous=currNode;`

  ​	`newNode.next=currNode.next;`

  ​	`currNode.next=newNode;`

  `}`

* remove

  `function remove(target){`

  ​	`var currNode=this.find(target);`

  ​	`if (!(currNode.next==null)){`

  ​		`currNode.previous.next=currNode.next;`

  ​		`currNode.next.previous=currentNOde.previous;`

  ​		`currNode.previous=null;`

  ​	`}`

  `}`
  
  

##循环链表

最后一个结点的next指向头结点



##[二叉树](https://blog.csdn.net/rth362147773/article/details/77996814)



## [排序算法](https://www.jianshu.com/p/7b5b770ab524)





