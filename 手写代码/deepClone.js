/*
 * @Author: guozhigq
 * @Date: 2021-11-18 17:12:26
 * @LastEditTime: 2021-11-18 18:03:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/手写代码/deepClone.js
 */

// 手写实现一个深拷贝
function deepClone(origin, map = new WeakMap()) {
    if (origin == undefined || origin !== 'object') {
        return origin
    }

    if (origin instanceof Date) {
        return new Date(origin)
    }

    if (origin instanceof RegExp) {
        return new RegExp(origin)
    }

    let hashMap = map.get(origin)

    if (hashMp) {
        return hashMap
    }

    let target = new origin.contrcutor();
    map.set(origin, target)
    
    for (let k in origin) {
        if (origin.hasOwnPrototype(k)) {
            target[k] = deepClone(origin[k], map)
        }
    }
    return target
}