// 迭代器模式
    // 应用场景
        // es的自定义迭代器

let obj = {
    name: 'xuqiang',
    age: 20,
    [Symbol.iterator]: () => {
        let props = Object.keys(obj), i = props.length;
        return {
            next(){
                if(i > 0){
                    i = i - 1;
                    return {
                        value: obj[props[props.length - i - 1]],
                        done: false
                    };
                }else{
                    return {
                        value: '',
                        done: true
                    };
                }
            }
        };
    }
}

for(let prop of obj){
    console.log(prop);
}