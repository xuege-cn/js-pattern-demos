// 使用装饰器模式来实现单例模式
// 应用场景
    // react的高阶组件等
// 注意事项
    // 装饰器模式目前还需要babel的babel-plugin-transform-decorators-legacy做支持，先用babel编译

function decoratorHoc(target){
    target.getInstance = new Function(`return new ${target}()`);
}

@decoratorHoc
class Person{
    eat(){
        console.log('i am eating');
    }
}

let obj = Person.getInstance();
console.log(obj);
obj.eat();