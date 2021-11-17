/*
 * @Author: guozhigq
 * @Date: 2021-11-17 09:24:32
 * @LastEditTime: 2021-11-17 09:40:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JsProject/手写代码/其他/iterator.js
 */

// 手写实现一个迭代器
function createIterator(items) {
    function addIterator(items) {
        let i = 0;
        let done = false
        return{
            next() {
                done = i >= items.length;
                return {
                    value: item[i++],
                    done
                }
            }
        }
    }
    let iterator = addIterator(items)
    iterator[Symbol.iterator] = () => additerator(items)
    return iterator
}
// 迭代器就是一个具有next()方法的对象，
//每次调用next()都会返回一个结果对象，
// 该结果对象有两个值，一个是value表示当前值，一个是done表示遍历是否结束


// 当一个数据结构部署了 Iterator 接口，我们则认为他是可遍历的
// ES6规定，默认的 Iterator 接口默认部署在 Symbol.iterator 属性上，即只有数据接口有这个属性，我们便可以认为是可遍历的

// ES6为数组、set、map内置了三种迭代器
// entries() 返回一个遍历器对象，用来遍历【键名：键值】组成的数组
// keys() 返回一个遍历器对象，用来遍历所有的键名
// values() 用来遍历所有的键值
// Set的键名与键值相等
// 数组、set默认使用的迭代器是values() 方法、 Map默认使用的迭代器是entries()方法
