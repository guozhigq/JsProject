/*
 * @Author: guozhigq
 * @Date: 2021-11-18 17:07:25
 * @LastEditTime: 2021-11-20 14:31:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/手写代码/数组/shuffle.js
 */


// 乱序

// 为什么不直接使用Math.random，在v8引擎中的sort排序规则是，对于长度为10以下的数组采用插入排序，否则采用插入和快速排序混合。
// 但是在使用插入排序的时候，当前指针所指向的待排序的元素，找到正确的位置后，不会再向前进行比较，导致乱序的不够彻底


function shuffle(arr) {
    let x, j, i;
    for( i = arr.length; i; i--){
        j = Math.floor(Math.random()*i);
        x = arr[i-1]
        arr[i-1]= arr[j]
        arr[j] = x
    }
    return arr
}

// 11.20

function shuffle(arr) {
    let x,i,j;
    for(i = arr.length; i; i--){
        j = Math.floor(Math.random()*i)
        x = arr[i]
        arr[i-1] = arr[j]
        arr[j] = x
    }
    return arr 
}