class Puber{
    constructor(name){
        this.name = name;
        this.listener = {};
        this.startInterval();
    }

    startInterval(){
        setInterval(() => {
            for(let prop in this.listener){
                if(this.listener.hasOwnProperty(prop)){
                    this.emit(prop);
                }
            }
        }, 3000);
    }

    sub(evt, cb){
        if(!this.listener[evt]){
            this.listener[evt] = [];
        }
        this.listener[evt].push(cb);
    }

    emit(evt){
        if(this.listener[evt]){
            let cbs = this.listener[evt];
            for(let cb of cbs){
                cb && cb();
            }
        }
    }
}

class Suber{
    constructor(name){
        this.name = name;
        this.puber = new Puber('徐强');
    }

    getPuber(){
        console.log(`我是${this.name}，我的牛奶配送员是${this.puber.name}`);
    }

    sub(evt, cb){
        this.puber.sub(evt, cb);
    }
}

let customer1 = new Suber('刘思琪');
customer1.getPuber();
customer1.sub('牛奶', () => {
    console.log('牛奶送至未来科技城，收件人：刘思琪');
});

let customer2 = new Suber('徐大大');
customer2.getPuber();
customer2.sub('牛奶', () => {
    console.log('牛奶送至空港新城，收件人：徐大大');
});