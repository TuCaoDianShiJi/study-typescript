// never类型
function loopForever(): never {
    // 无限循环
    while (true) {

    }
}

function terminateWithError($msg: string): never {
    throw new Error($msg);
}

// never没有返回，不期待

// 1. 无限循环，代码不可到达
// 2. 抛出异常

// void: 有返回值，期待返回

// 可以简单理解为返回的类型为空，代码可能继续运行