<!--
 * @Author: guozhigq
 * @Date: 2021-11-20 23:51:43
 * @LastEditTime: 2021-11-21 00:05:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/问答/虚拟dom.md
-->


### 介绍一下虚拟dom

#### 为什么会出现虚拟dom

在虚拟dom出现之前，我们要对页面内容进行增加、删除，都需要通过dom API来对dom结构、内容进行操作，比如appendChild、removeChild、inseretBefore等等，虽然之后有了jquery，可以简化操作dom的流程，但是dom操作依旧很复杂，对于开发人员来说，维护起来太困难，包袱重。而我们的业务开发中对dom的操作是不可避免的，当然最省心的办法是直接对dom进行全量更新，但是很不现实，所以有没有一种可以自动更新有变动的dom内容的方式呢，通过对比更新前后的dom内容来进行差量更新。于是虚拟dom出现了


#### 虚拟dom

虚拟dom是用js对象对真实dom对象对一种实现，虚拟dom有着更少的成员，所以创建一个虚拟dom的成本是要小于真实dom的。
有了虚拟dom，当我们每次对页面数据或内容进行修改后，可以将本次对虚拟dom与上次对进行对比，找出真实变化对部分，再将更新内容反应在真实dom上，所以虚拟dom最大对优势就是在减少来开发人员手动操作dom的同时，又提供来还过的去的性能。

+ 减少操作DOM的代码逻辑，这是实现数据驱动的重要部分
+ 最少范围操作DOM，只更新差异，减少页面重绘、回流，降低浏览器消耗

再着，因为现在虚拟dom对于dom的