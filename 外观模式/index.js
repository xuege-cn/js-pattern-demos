// 外观模式
// 应用场景
    // 后端向前端提供接口时，可以使用外观模式

function winAlert(title, message, buttons, cb){
    if(cb === undefined){
        cb = buttons;
        buttons = null;
    }

    console.log(title);
    console.log(message);
    console.log(buttons);
    console.log(cb);
}

winAlert('提示', '操作完成', ['确认', '取消'], () => {});

winAlert('提示', '操作完成', () => {});