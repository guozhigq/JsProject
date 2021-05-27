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