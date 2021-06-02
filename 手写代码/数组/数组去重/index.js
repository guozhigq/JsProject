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

