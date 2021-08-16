const PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected'

class MyPromise {
    constructor(excutor) {
        this.state = PENDING; // promise状态
        this.value = undefined; // 状态为fulfilled时返回的结果
        this.reason = undefined; // 状态为rejected时返回的原因
        this.successCallBacks = []; // 成功回调
        this.failCallBacks = []; // 失败回调
        /**
         * excutor参数1
         * 调用时状态由pending变更为fulfilled
         * 遍历所有成功回调并执行
         * @param {any} value 
         */
        function resolve(value) {
            if (this.state === PENDING) {
                this.state = FULFILLED;
                this.value = value;
                this.successCallBacks.forEach(fn => fn(value));
            }
        }
        /**
         * excutor参数2
         * 调用时状态由pending变更为rejected
         * 遍历所有失败回调并执行
         * @param {any} reason 
         */
        function reject(reason) {
            if (this.state === PENDING) {
                this.state = REJECTED;
                this.reason = reason;
                this.failCallBacks.forEach(fn => fn(reason));
            }
        }
        try {
            excutor(resolve, reject);
        } catch (e) {
            reject(e);
        }

    }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
    // 保存this，指向当前的Promise对象
    const _this = this;

    // 如果参数不是函数，则需要继续向下传递值（链式调用）
    onFulfilled = isFunction(onFulfilled) ? onFulfilled : value => value;
    onRejected = isFunction(onRejected) ? onRejected : reason => { throw reason };

    // 要返回的新Promise对象
    const nextPromise = new MyPromise((resolve, reject) => {
        // 当状态为pending时，将参数放入回调队列
        if (_this.state === PENDING) {
            
            _this.successCallBacks.push(() => {
                setTimeout(() => {
                    try {
                        const res = onFulfilled(_this.value);
                        resolvePromise(nextPromise, res, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });

            _this.failCallBacks.push(() => {
                setTimeout(() => {
                    try {
                        const res = onRejected(_this.reason);
                        resolvePromise(nextPromise, res, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        }

        // 如果状态时fulfilled，执行onFulfilled回调，并传入value参数
        else if (_this.state === FULFILLED) {
            setTimeout(() => {
                try {
                    const res = onFulfilled(_this.value);
                    resolvePromise(nextPromise, res, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        }

        // 如果状态时rejected，执行onRejected回调，并传入reason参数
        else if (_this.state === REJECTED) {
            setTimeout(() => {
                try {
                    const res = onRejected(_this.reason);
                    resolvePromise(nextPromise, res, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        }
    });

    return nextPromise;
}


/**
 * 接受一个新的promise对象和上一次的操作结果res
 * 如果res是一个thenable对象，即具有then方法
 * 则这个函数会接受res的状态
 * @param {Promise} nextPromise 
 * @param {Promise} res 
 * @param {function} resolve 
 * @param {function} reject 
 * @returns 
 */
function resolvePromise(nextPromise , res , resolve , reject) {
    // 如果res和nextPromise指向同一对象，则报错
    if (nextPromise === res) reject(new TypeError('chaining cycle'));

    if (res && isObject(res) || isFunction(res)) {
        let used;
        try {
            let then = res.then; // 如果这步赋值错误会被catch捕获，直接reject
            if (isFunction(then)) {
                // 如果res有then方法，且是函数，则用call将then的this指向res调用
                then.call(res ,
                    // 传递给then的参数1，resolvePromise 
                    (value) => {
                        if (used) return;
                        used = true;
                        resolvePromise(nextPromise , value , resolve , reject);
                    },

                    // 传递给then的参数2，rejectPromise
                    (reason) => {
                        if (used) return;
                        used = true;
                        reject(reason);
                    }
                )
            } else {
                // 如果then不是一个函数，则以res为参数执行promise
                if (used) return;
                used = true;
                resolve(res);
            }
        } catch (e) {
            if (used) return;
            used = true;
            reject(e);
        }
    } else {
        // 如果res不是对象或者函数，则以res为参数执行promise
        // 即普通值直接传递给下一个then
        resolve(res);
    }
}


function isFunction(fn) {
    return typeof fn === 'function';
}

function isObject(obj) {
    return typeof obj === 'object';
}