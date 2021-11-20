/*
 * @Author: guozhigq
 * @Date: 2021-11-18 16:57:11
 * @LastEditTime: 2021-11-20 23:36:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/promise实现/promise.js
 */

// promise 状态
const STATUS = {
    PENDING: 'pending',
    FUFILLED: 'fufilled',
    REJECTED: 'rejected'
}

class myPromise {
    constructor(executor) {
        executor(this.resolve, this.reject)
    }

    status = STATUS.PENDING

    value = null; 

    reason = null;

    onFufilledCallback = [];

    onRejectedCallback = [];

    resolve = value => {
        if(this.status == STATUS.PENDING){
            this.status = STATUS.FUFILLED
            this.value = value

            while(this.onFufilledCallback.length){
                this.onFufilledCallback.shift()(value)
            }
        }
        
    }

    reject = value => {
        if(this.status = STATUS.PENDING){
            this.status = STATUS.REJECTED
            this.reason = value

            while(this.onRejectedCallback.length){
                this.onRejectedCallback.shift()(value)
            }
        }
        
    }

    then(onFufilled, onRejected) {
        const realOnFufilled = typeof onFufilled === 'funciton' ? onFufilled : value=> value
        const realOnRejected = typeof onRejected === 'function' ? onRejected : error=> {throw error}
        
        const promise2 = new myPromise((resolve, reject)=>{

            const fufilledMicroTask = () => {
                queueMicrotask(()=>{
                    try{
                        const x = realOnFufilled(this.value)
                        resolvePromise(promise, x, resolve, reject)
                    }catch(error){
                        reject(error)
                    }
                })
            }

            const rejectMicroTask = () => {
                queueMicrotask(()=>{
                    try {
                        const x = realOnRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(error){
                        reject(error)
                    }
                })
            }

            if(this.status = STATUS.PENDING){
                this.onFufilledCallback.push(fufilledMicroTask)
                this.onRejectedCallback.push(rejectMicroTask)

            }else if(this.status == STATUS.FUFILLED){
                realOnFufilled()
            }else if(this.status == STATUS.REJECTED){
                realOnRejected()
            }

        })
        return promise2
    }
}

function resolvePromise(promise, x, resolve, reject) {
    if(promise === x){
        return reject(new TypeError())
    }

    if(typeof x === 'function' || typeof x === 'object'){
        if(x === null){
            return resolve(x)
        }
        let then;

        try{
            then = x.then
        }catch(error){
            return reject(error)
        }

        if(typeof then === 'function'){
            let called = false;
            try{
                then.call(x,y => {
                    if(called) return;
                    called = true;
                    resolvePromise(promise, x, resolve, reject)
                }, err=>{
                    if(called) return;
                    called = true;
                    reject(err)
                })
            }catch(error) {
                if(called) return;
                reject(error)
            }
        }else{
            resolve(x)
        }
    }else{
        resolve(x)
    }
}

const STATUS = {
    PENDING: 'pending',
    FUFILLED: 'fufilled',
    REJECTED: 'rejected'
}

class myPromise {
    constructor (exector) {
        exector(this.resolve, this.reject)
    }
    status = STATUS.PENDING
    value = null;
    reason = null;

    // 
    fulfilledCallback = [];
    rejectedCallback = []

    resolve(value) {
        if(this.status === STATUS.PENDING){
            this.status = STATUS.FUFILLED;
            this.value = value

            while(this.fulfilledCallback.length){
                this.fulfilledCallback.shift()(value)
            }
        }
    }

    reject(value){
        if(this.status === STATUS.PENDING){
            this.status = STATUS.REJECTED;
            this.reason = value

            while(this.rejectedCallback.length){
                this.rejectedCallback.shift()(value)
            }
        }
    }
    then(onFufilled, onRejected) {
        let realOnFufilled = typeof onFufilled === 'function' ? onFufilled : value=> value;
        let realOnRejected = typeof onRejected === 'function' ? onRejected : error => {throw error()}
        
        let promise2 = new myPromise((resolve, reject) => {
            const fufilledMicroTask = () => {
                queueMicrotask(()=>{
                    try{
                        const x = realOnFufilled(this.value);
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        reject(e)
                    }
                })
            }
            
            const rejectedMicroTask = () =>{
                queueMicrotask(()=>{
                    try{
                        const x = realOnRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        reject(e)
                    }
                })
            }

            if(this.status === STATUS.PENDING){
                this.fulfilledCallback.push(fufilledMicroTask)
                this.rejectedCallback.push(rejectedMicroTask)
            }
            if(this.staus === STATUS.FUFILLED){
                realOnFufilled()
            }
            else if(this.staus === STATUS.REJECTED){
                realOnRejected()
            }
            
        })
        
        return promise2
    }

    resolvePrimise(promise2, x, resolve, reject){
        if(promise2 === x){
            return reject(new TypeError())
        }

        if(typeof x == 'objct' || typeof x == 'function'){
            if(x === null){
                return resolve(x)
            }

            let then
            try{
                then = x.then
            }catch(e) {
                return reject(e)
            }

            if(typeof then === 'function'){
                let called = false;
                
                try{
                    then.call(x,y=>{
                        if(called) return;
                        called = true;
                        resolvePromise(promise, x, resolve, reject)
                    },err=>{
                        if(called) return;
                        called = true;
                        reject(err)
                    })
                }catch(error){
                    if(called) return;
                    reject(erroe)
                }
            }else{
                resolve(x)
            }

        }else{
            resolve(e)
        }
    }
}