class MVVM {
    constructor(el, data) {
        this.el = document.querySelector(el);
        this._data = data;
        this.domPool = {};
        this.init();
    }

    init() {
        this.initData();
        this.initDom();
    }

    // 将数据转换为响应式
    initData() {
        const _this = this
        this.data = {};

        // Object.defineProperty 实现
        // for (let key in this._data) {
        //     Object.defineProperty(this.data, key, {
        //         get() {
        //             console.log('获取数据：' + key + _this._data[key]);
        //             return _this._data[key];
        //         },
        //         set(newValue) {
        //             console.log('设置数据：' + key + ':' + newValue);
        //             _this.domPool[key].innerHTML = newValue
        //             _this._data[key] = newValue;
        //         }
        //     })
        // }

        // Proxy 实现

        this.data = new Proxy(this.data, {

            get(target, key) {
                return Reflect.get(target, key);
            },
            set(target, key, value) {
                _this.domPool[key].innerHTML = value;
                return Reflect.set(target, key, value);
            }
        })

        // console.log(this.data['name']) // get()拦截
        // this.data['name'] = 'test' // set() 拦截
    }

    initDom() {
        this.bindDom(this.el)
        this.bindInput(this.el)
        // console.log(this.domPool)
    }

    bindDom(el) {
        const childNodes = el.childNodes;
        childNodes.forEach( item => {
           
            if(item.nodeType === 3) {
                const _value = item.nodeValue;
                if(_value.trim().length) {
                    let _isValid = /\{\{(.+?)\}\}/.test(_value)
                    if(_isValid) {
                        const _key = _value.match(/\{\{(.+?)\}\}/)[1].trim();
                       
                        this.domPool[_key] = item.parentNode;
                        item.parentNode.innerText = this.data[_key] || undefined
                    }
                }
            }
            item.childNodes && this.bindDom(item)
        })
    }

    bindInput(el) {
        const _allInput = el.querySelectorAll('input');

        _allInput.forEach(input => {
            const _vModel = input.getAttribute('v-model');
            // 简易判断
            if (_vModel) {
                input.addEventListener('keyup', this.handleInput.bind(this, _vModel, input), false);
            }
        })
    }

    handleInput(key, input) {
        const _value = input.value;
        this.data[key] = _value;
    }

    setData(key, value) {
        this.data[key] = value
    }
}

/**
 *
 * 1. 数据 -> 响应式的数据 Object.defineProperty Proxy
 * 2. input -> input/keyup -> 事件处理函数 -> 改变数据
 * 3. 相关的DOM -> 数据 -> 绑定 操作数据的某个属性对应的DOM改变
 * 4. 
 */

