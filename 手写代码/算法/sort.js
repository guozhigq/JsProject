/*
 * @Author: guozhigq
 * @Date: 2021-11-16 18:20:37
 * @LastEditTime: 2021-11-16 21:35:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/手写代码/算法/sort.js
 */

// 排序算法
var arr = [1,2,543,63,2,54,24,634,13,54,3,23,5]

// 冒泡排序
function sort(arr) {
    if(!arr.length) return
    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j< arr.length; j++){
            var temp;
            if(arr[i]> arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
}

// 快速排序
function sort(arr) {
    if(arr.length <= 1) return
    let left = [];
    let right = []
    let mid = Math.floor((0+arr.length)/2);
    for(let i =0 ; i< arr.length; i++){
        if(arr[i]<arr[mid]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return sort(left).concat(arr[mid]).concat(sort(right))
}

// 插入排序
function insertSort(arr) {
    var first = arr[0];
    while(arr[1]>first){
        
    }
};

// 选择排序
function chooseSort(arr) {
    let length = arr.length;
    let mid, temp;
    for(let i = 0 ;i <length-1; i++){
        mid = 1
        for(let j = i + 1; j < length; j++){
            if(arr[j] < arr[mid]){
                mid = j
            }
        }
        temp = arr[i];
        arr[i] = arr[mid];
        arr[mid] = temp
    }
    return arr
}

// 归并排序