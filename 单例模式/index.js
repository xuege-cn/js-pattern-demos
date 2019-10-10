// 单例模式
// 比如登陆，然后用户对象

class SingleClass{
    constructor(name){
        this.name = name;
    }
}

SingleClass.getInstance = (function(){
    let instance;
    return () => {
        if(!instance){
            instance = new SingleClass('xuqiang');
        }
        return instance;
    }
})();


let obj1 = SingleClass.getInstance();
let obj2 = SingleClass.getInstance();
console.log(obj1);
console.log(obj2);
