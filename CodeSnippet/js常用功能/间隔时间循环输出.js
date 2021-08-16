/**
 * 间隔3s输出yellow
 * 间隔2s输出red
 * 间隔1s输出blue
 */

function yellow() {
    console.log('yellow');
}

function red() {
    console.log('red');
}

function blue() {
    console.log('blue');
}

/**
 * 内部维护执行函数队列，返回Promise
 * 在time时间后resolve
 * @param {number} i 
 * @param {number} time 
 * @returns 
 */
 function runner(i , time) {
    const queue = [yellow , red , blue];
    return new Promise ((resolve) => {
        setTimeout(() => {
            queue[i]();
            resolve();
        } , time);
    })
}

/**
 * async函数实现循环间隔时间输出
 */
async function async1() {
    let i = 0;
    while (true) {
        i = i > 2 ? i % 3 : i;
        const time = (3 - i) * 1000;
        await runner(i , time);
        i++;
    }
    
}

async1();




