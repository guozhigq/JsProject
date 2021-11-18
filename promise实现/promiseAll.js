/*
 * @Author: guozhigq
 * @Date: 2021-05-26 15:15:25
 * @LastEditTime: 2021-11-18 16:56:51
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/promise实现/promiseAll.js
 */
function promiseAll(array) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(array)){return reject(new Error())};
        let len = array.length;
        let res = [];
        let count = 0;
        for(let i = 0; i < len; i++){
            Promise.resolve(array[i]).then( value => {
                count ++;
                res[i] = value;
                if(count = len){
                    resolve(res);
                }
            }).catch( e => reject(e));
        }
    })
}

// 
 
function promiseAll(array) {
    if(!Array.isArray(array)) {return reject(new Error())}
    return new Promise((resolve, reject)=>{
        let len = array.length;
        let count = 0;
        let res = [];
        for(let i = 0; i< len; i++){
            Promise.resolve(array[i]).then(value=>{
                count++;
                res[i] = value
                if(count = len){
                    resolve(res)
                }
            }).catch(err=>reject(err))
        }
    })
}