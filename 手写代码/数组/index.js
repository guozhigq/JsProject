var arr = [1,2,3,4,5,6,7,3,4]

// 数组去重主要思想
// 1. 数组元素值不相同 for嵌套、indexOf()、includes()
// 2. 数组也是一种对象，利用key不同


// ES6 set() 去重
// 无法去重 {} 空对象
var res = new set(arr)

// for indexOf() 去重
// NAN 和 {} 无法去重
var res = []
for(let i = 0; i < arr.length; i++) {
    if(res.indexOf(arr[i]) === -1){
        res.push(arr[i])
    }
}

// for includs() 去重
// {} 无法去重
var res = []
for(let i = 0; i < arr.length; i++) {
    if(!res.includes(arr[i])){
        res.push(arr[i])
    }
}

// for 循环嵌套，splice去重
// NAN 和 {} 无法去重
for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++) {
        if(arr[i] == arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}


// map + hasOwnProperty 去重
// NaN {} 可去重
var map = {};
var res = [];
for(let i = 0; i < arr.length; i++){
    if(!map.hasOwnProperty([arr[i]])) {
        map[arr[i]] = 1;
        res.push(arr[i])
    }
}

// 递归去重

var res = arr.filter((item, idx, arr) => {
    return arr.indexOf(item) === idx
})

var arr=[12, 5, 8, 8, 130, 44,130,'a','b','a']
var obj={};
arr.forEach(function(item){
obj[item]=item;
})
Object.keys(obj)
console.log(Object.keys(obj))



// 数组扁平化

let arr = [1, [2, [3, [4, [5 ]]]], 6];

// 数组扁平化1
arr = arr.flat(Infinity);

// 数组扁平化2
const res = [];
const fn = function(arr) {
    for(let i = 0; i < arr.length; i ++ ) {
        if (Array.isArray(arr[i])) {
            fn(arr[i]);
        } else {
            res.push(arr[i])
        }
    }
}

// 数组扁平化3
function flatten(arr) {
    if(!Array.isArray(arr)){return}
    var res = []
    for(let i = 0; i< arr.lrngth; i ++){
        if(Array.isArray[arr[i]]){
            res = res.concat(flatten(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return arr
}

// 数组扁平化4
function flatten(arr) {
    return arr.reduce((pre,next)=>{
        return pre.concat(Array.isArray[next] ? flatten(next) : next)
    },[])
};

// 数组扁平化5
function flatten(arr) {
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr;
};

// 数组扁平化6
function flatten(input) {
    var stack = [...arr];
    var res = [];
    if(stack.length){
        let next = stack.pop();
        if(Array.isArray[next]){
            res.push(...next)
        }else{
            res.push(next)
        }
    }
    return res.reverse();
}

// forEach实现
function foreach() {};


function unique(arr) {
    let res = [];
    for(let i=0;i<arr.length;i++){
        if(res.indexOf(arr[i]) == -1){
            res.push(arr[i])
        }
    }
    return res
}

function unique(arr) {
    let res = [];
    for(let i=0;i<arr.length;i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}

function unique(arr) {
    let map = new Map();
    let res = []
    for(let i = 0 ;i<arr.length; i++){
        if(!map.hasOwnProperty(arr[i])){
            map.set(arr[i],1)
            res.push(arr[i])
        }
    }
}

function unique(arr){
    let res = arr.filter((item, index, arr) =>{
        return arr.indexOf(item) === index
    })
    return arr
} 