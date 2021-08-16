/**
 * 字符串转义
 * 利用正则表达式和replace实现
 * @param {string} str 
 * @returns 
 */
const transfer = str => {
    if (!str || typeof str !== 'string') return str;

    return str.replace(/&/g , '&amp')
                .replace(/</g , '&lt')
                .replace(/>/g , '&gt')
                .replace(/[""]/g , '&quot')
                .replace(/([\\\/])/g , '\\$1');
}

console.log(transfer('123<html></html>""&'));