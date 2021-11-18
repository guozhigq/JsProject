/*
 * @Author: guozhigq
 * @Date: 2021-11-18 12:28:50
 * @LastEditTime: 2021-11-18 14:16:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/手写代码/数组/flat.js
 */


// 数组扁平化

var arr = [1,2,3,4,[5,6,[7,8]]]

// 方法 1
// Array.flat()

// 方法 2
// function flat(arr){
//     while(arr.some(item=>Array.isArray(item))){
//         arr = [].concat(...arr)
//     }
//     return arr
// }
console.log(flat(arr))

// 方法 3
// function flat(arr) {
//    var result = [];
//    for(var i = 0; i < arr.length; i++){
//        if(Array.isArray[arr[i]]){
//          result = result.concat(flat(arr[i]))
//        }else{
//            result.push(arr[i])
//        }
//    }
//    return result
// }

// 方法 4 
// function flat(arr) {
//     return arr.reduce((pre,next) => {
//         return pre.concat(Array.isArray(next) ? flat(next) : next)
//     },[])
// }
// console.log(flat(arr))

// 方法5
function flat(arr){
    let stack = [...arr];
    let res = [];
    while(stack.length){
        let next = stack.pop();
        if(Array.isArray(next)){
            stack.push(...next)
        }else{
            res.push(next)
        }
    }
    return res.reverse()
}
console.log(flat(arr))