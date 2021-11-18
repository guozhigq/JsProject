/*
 * @Author: guozhigq
 * @Date: 2021-11-17 09:24:32
 * @LastEditTime: 2021-11-18 12:28:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/手写代码/其他/iterator.js
 */

// 手写实现一个迭代器
function createIterator(items) {
    function addIterator(items) {
        let i = 0;
        let done = false
        return{
            next() {
                done = i >= items.length;
                return {
                    value: item[i++],
                    done
                }
            }
        }
    }
    let iterator = addIterator(items)
    iterator[Symbol.iterator] = () => addIterator(items)
    return iterator
}
// 迭代器就是一个具有next()方法的对象，
//每次调用next()都会返回一个结果对象，
// 该结果对象有两个值，一个是value表示当前值，一个是done表示遍历是否结束


// 当一个数据结构部署了 Iterator 接口，我们则认为他是可遍历的
// ES6规定，默认的 Iterator 接口默认部署在 Symbol.iterator 属性上，即只有数据接口有这个属性，我们便可以认为是可遍历的

// ES6为数组、set、map内置了三种迭代器
// entries() 返回一个遍历器对象，用来遍历【键名：键值】组成的数组
// keys() 返回一个遍历器对象，用来遍历所有的键名
// values() 用来遍历所有的键值
// Set的键名与键值相等
// 数组、set默认使用的迭代器是values() 方法、 Map默认使用的迭代器是entries()方法


function createIterator() {
    function addIterator(obj) {
        let len = obj.length;
        let done = false
        let i = 0;
        return {
            next() {
                done = i >= length;
                return {
                    value: obj[i++],
                    done
                }
            }
        }
    }
    let iterator = addIterator(items)
    iterator[Symbol.iterator] = () => addIterator(items)
    return iterator
}

function debounce(fn, delay, immediate) {
    var time,result;
    return function(){
        var context = this;
        var args = arguments;
        clearTimeout(time)
        if(immediate){
            var vallNow = !timeout
            timeout = setTimeout(()=>{
                timeout = null
            },delay)
            if(vallNow) result = fn.apply(context,args)
        }
        else{
            time = setTimeout(function(){
               result = fn,apply(context, args)
            }, delay)
        }
        return result
    }
}


function debounce(fn, delay, immediate) {
    var timeout,result;
    return function(){
        var context = this;
        var args = arguments;
        clearTimeout(timeout)
        if(immediate){
            let callNow = !timeout
            if(callNow){
                timeout = setTimeout(function(){
                    result = fn.apply(context, args)
                },delay)
                setTimeout(()=>{
                    timeout = null
                },delay)
            }
        }else{
            timeout = setTimeout(function(){
                result = fn.apply(context,args)
            },delay)
        }
        return result
        
    }
}

function throttle(fn, wait) {
    var data = 0;
    var now = new Date()

    if(data - new Date()){
        return function(){
            var context = this;
            var args = arguments;
            if(now - data > wait){
                fn.apply(context,args)
                data = now
            }
        }
    }
}

// 定时器版本
function throttle(fn, delay) {
    var timeout;
    if(!timeout){
        timoeut = setTimeout(function(){
            timeout = null;
            fn.apply(context,args)
        },wait)
    }
}

function instance_of(left, right){
    let rightProto = right.prototype;
    var leftProto = Object.getPrototypeOf(left)
    while(leftProto){
        if(rightProto === leftProto){
            return true
        }
        leftProto = Object.getPrototypeOf(leftProto)
    }
    return false



}


//防抖
function debounce(fn, wait, immediate) {
    let timeout,res;
    return function(){
        let context = this;
        var args = arguments;
        clearTimeout(timeout);
        if(immediate){
            let callNow = !timeout
            if(callNow){
                res = fn.apply(context,args)
            }
            setTimeout(function(){
                timeout = null
            },wait)
        }else{
            timeout = setTimeout(function(){
                res = fn.apply(context,args)
            },wait)
        }
        return res
    }
}

// 截流  时间戳版本
function throttle(fn, wait){
    var context, args;
    var per = 0;
    return function(){
        let now = +new Date();
        context = this;
        args = arguments
        if(now - per > wait){
            fn.apply(this,args);
            per = now
        }
    }
}
// 节流 定时器版本
function throttle(fn, wait) {
    let context, args, timeout;
    return function() {
        context = this;
        args = arguments;
        if(!timeout){
            timeout = setTimeout(function(){
                fn.apply(context,args)
                clearTimeout(timeout)
            },wait)
        }
        
    }
}