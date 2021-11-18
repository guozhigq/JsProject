/*
 * @Author: guozhigq
 * @Date: 2021-11-16 17:57:45
 * @LastEditTime: 2021-11-18 11:48:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/手写代码/循环/index.js
 */

function foreach(arr) {
    if(!arr.length){return}
    var index = -1
    while(++index < arr.length){

    }
}

// for循环和forEach循环的区别

// for循环可以使用breaak跳出，foreach不可以，可以使用try...catch
// for循环可以控制循环的起点/终止点，foEach不可控制
// for循环循环过程中支持修改索引，forEach不可控制，只能从0开始自增

// 每隔5秒重复一次，重复三次
let n = 3;
let counter = 0;
function reTry(){
    if(counter<3){
        setTimeout(()=>{
            counter++
            reTry()
        },5000)
    }
}