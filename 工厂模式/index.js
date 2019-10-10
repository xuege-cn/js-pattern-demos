// 工厂模式
// 应用场景
    // 1.类似统一入口
    // 2.隔离消费者。React.createElement

class jQuery{
    constructor(name){
        this.name = name;
    }
}

function $(name){
    return new jQuery(name);
}

let obj1 = $('xuqiang');
let obj2 = $('liusiqi');
console.log(obj1);
console.log(obj2);