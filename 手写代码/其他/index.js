
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