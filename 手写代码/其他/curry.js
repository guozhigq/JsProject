/*
 * @Author: guozhigq
 * @Date: 2021-11-18 14:41:16
 * @LastEditTime: 2021-11-20 14:24:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/手写代码/其他/curry.js
 */

// 函数柯里化
function curry(fn) {
    let args = [].slice.call(arguments)
    
    let inner = function () {
        args.push(...arguments)
        return inner
    }

    inner.toString = function() {
        return args.reduce(function(a,b){
            return a+b
        })
    }
    return inner
}
