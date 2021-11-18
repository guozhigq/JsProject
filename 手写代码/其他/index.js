/*
 * @Author: guozhigq
 * @Date: 2021-06-02 21:40:43
 * @LastEditTime: 2021-11-17 17:41:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/手写代码/其他/index.js
 */

// 实现模板字符串


// 深拷贝 es5

function deepClone(origin, target) {
    var tar = target || {}
    for(var k in origin) {
        if(origin.hasOwnProperty(k)){
            if(typeof origin[k] === 'object' && typeof origin[k] !== null){
                target[k] = Object.prototype.toString.call(origin[k]) === '[object Array]' ? [] : {}
                deepClone(origin, target)
            }
            target[k] = origin[k]
        }
    }

    return tar
};


function deepClone2(origin, hashMap = new WeakMap()) {
    if(origin == undefined || typeof origin !== 'object'){
        return origin
    }

    if(origin instanceof Date){
        return new Date(origin)
    }

    if(origin instanceof RegExp) {
        return new RegExp(origin)
    }
    let hashKey = hashMap.get(origin)
    if(hashKey){
        return hashKey;
    }
    var target = new origin.constructor()
    hashMap.set(origin, target)
    for(let k in origin){
        if(origin.hasOwnProperty(k)){
            target[k] = deepClone2(origin[k],hashMap)
        }
    }
    return target
}

// instanceof 根据什么判断的类型 
// 与typeof 有什么区别


// typeof 一般可以用来判断基本类型的数据，
// 在判断object类型的数据，比如 数组、对象、Date、RegExp、null 都会返回objct类型


// call   1 
// apply  1
// bind   1
// new    1
// 防抖    0
// 节流    0
// 函数柯里化
// 深拷贝    0
// JSON.stringify
// 数组去重      1  
// 数组扁平化    1
// 排序算法      0
// 手写promise
// 8种继承
// url参数解析
// 发布订阅模式
// reduce、forEach
// 虚拟dom转真实dom
// 事件总线
// 双向绑定

// vue 双向绑定原理
// vue defindProxy和proxy
// vue 生命周期
// vue 组件通信
// vue 父子组件生命周期
// vue 路由模式
// vuex


// 事件委托机制
// 冒泡
// 浏览器缓存
// 输入url发生了什么
// 垃圾回收机制
// this指向
// 原型、原型链
// 闭包
// for in、for of