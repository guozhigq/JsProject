<!--
 * @Author: guozhigq
 * @Date: 2021-11-16 21:36:12
 * @LastEditTime: 2021-11-16 21:54:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/问答/var、let、const区别.md
-->


var 是ES5之前变量声明的方式，存在很多缺陷：
+ 通过var声明的变量,会被自动添加到就近到上下文，如果变量未经声明就被初始化，则会被自动添加到全局上下文
+ 因为var存在变量提升，所以如果我们在给变量赋值之前访问这个变量，会输入undefined，而不会报错，像let、const因为存在暂时性死区，所以只能声明后再使用


