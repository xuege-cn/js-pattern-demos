// 代理模式
// 应用场景
    // vue的computed
    // 事件委托

class Vue{
    constructor(data){
        let _data =  data;

        return new Proxy(this, {
            get(target, key){
                console.log(key);
                return _data[key];
            },
            set(target, key, val){
                console.log(key);
                _data[key] = val;
                // return true;
            }
        });
    }
}

let obj = new Vue({
    name: 'xuqiang',
    age: 20
});

console.log(obj.name);
obj.name = 'liusiqi';
console.log(obj.name);
    