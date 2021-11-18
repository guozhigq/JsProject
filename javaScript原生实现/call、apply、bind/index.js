/*
 * @Author: your name
 * @Date: 2021-05-30 22:56:43
 * @LastEditTime: 2021-11-18 12:07:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/javaScript原生实现/call、apply、bind/index.js
 */

// call 函数的实现步骤：
// 1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
// 2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
// 3. 处理传入的参数，截取第一个参数后的所有参数。
// 4. 将函数作为上下文对象的一个属性。
// 5. 使用上下文对象来调用这个方法，并保存返回结果。
// 6. 删除刚才新增的属性。
// 7. 返回结果。


// call函数实现

Function.prototype.myCall = function(context) {
    if (typeof this !== 'function') {
        console.error("type error")
    }

    // 获取参数
    let args = [...arguments].slice(1);
    let result = null;

    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this;
    // 调用函数
    result = context.fn(...args);
    // 将属性删掉
    delete context.fn;
    return result;

}

var foo = {
  value: 1
}
function bar() {
  console.log(this.value)
}
bar.myCall(foo)
// apply 函数的实现步骤：
// 1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
// 2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
// 3. 将函数作为上下文对象的一个属性。
// 4. 判断参数值是否传入
// 5. 使用上下文对象来调用这个方法，并保存返回结果。
// 6. 删除刚才新增的属性
// 7. 返回结果


// apply 函数实现

Function.prototype.myApply = function(context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
      throw new TypeError("Error");
    }
    let result = null;
    // 判断 context 是否存在，如果未传入则为 window
    context = context || window;
    // 将函数设为对象的方法
    context.fn = this;
    // 调用方法
    if (arguments[1]) {
      result = context.fn(...arguments[1]);
    } else {
      result = context.fn();
    }
    // 将属性删除
    delete context.fn;
    return result;
  };


// bind 函数的实现步骤：
// 1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
// 2. 保存当前函数的引用，获取其余传入参数值。
// 3. 创建一个函数返回
// 4. 函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。


// bind 函数实现
Function.prototype.myBind = function(context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
      throw new TypeError("Error");
    }
    // 获取参数
    var args = [...arguments].slice(1),
        fn = this;
    return function Fn() {
      // 根据调用方式，传入不同绑定值
      return fn.apply(
        this instanceof Fn ? this : context,
        args.concat(...arguments)
      );
    };
};

// 
Function.prototype.myCall = function(context){
  let context = context || window;
  let res;
  let args = Array.from(arguments)
  context.fn = this;
  res = context.fn(...args);
  delete context.fn;
  return res
}

Function.prototype.apply  = function(context,arr){
  let context = context || window;
  let res ;
  context.fn = this;
  res = context.fn(...arr)
  delete context.fn
  return res
}

Function.prototype.myBind = function(context) {
  const self = this;
  let args = [...args].slice[1]
  let fun = function() {}
  let bind =  function() {
    let bindArgs = [...arguments]
    return self.apply(this instanceof fun ? this : context,args.concat(bindArgs))
  }
  fun.prototype = this.prototype;
  bind.prototype = new fun()
  return bind
}