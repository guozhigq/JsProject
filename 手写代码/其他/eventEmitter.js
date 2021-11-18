/*
 * @Author: guozhigq
 * @Date: 2021-11-17 22:49:15
 * @LastEditTime: 2021-11-18 11:48:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/手写代码/其他/eventEmitter.js
 */

// 发布订阅
class eventEmitter{
    onstructor() {
        this.event = Object.create(null)
    }
    on(eventName, cb){
        let callBack = this.event[eventName] || [];
        callBack.push(cb)
        this.ecent[eventName] = callBack
    }

    emit(eventName, ...args){
        let callBack = this.event[eventName]
        callBack.forEach(item=>item.cb(...args))
    }

    off(eventName, callback){
        let callback = this.event[eventName];
        let newCallBack = callback.filter(listener=>listener !== callback && listenr.listen !== callback)
        this.event[eventName] = newCallBack
    }
}

let obj = {
    tag: 'DIV',
    attrs:{
    id:'app'
    },
    children: [
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] }
        ]
      },
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] },
          { tag: 'A', children: [] }
        ]
      }
    ]
}
// 虚拟dom转真实dom
function domTrans(target) {
    let doc = document.createElement(target.tag)
    if(doc.attrs){
        Objcet.keys(doc.attrs).forEach(key=>{
            doc.setAttribute(key, doc.attrs[key])
        })
    }
    if(doc.children){
        doc.children.forEach(item=>{
            doc.appendChild(domTrans(item))
        })
    }
    return doc
}

// 虚拟dom转真实dom
function domchange(target) {
    let dom = document.createElement(target.tag)
    if(dom.attrs){
        Objcet.keys(dom.attrs).forEach((key)=>{
            dom.setattribute(key,dom.attrs[key])
            

        })
    }
    if(dom.children){
        dom.childern.forEach(item=>{
            dom.appendChild(domchange(item))
        })
    }
    return dom
}