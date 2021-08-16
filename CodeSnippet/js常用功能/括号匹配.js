/**
 * 检查括号是否匹配
 * 遇到左括号入栈，遇到右括号则与栈顶元素匹配
 * 如果匹配则出栈
 * 如果循环结束后栈为空，则返回true，否则返回false
 * @param {string} str 
 * @returns boolean
 */
const checkBracket = (str) => {
    let temp = str;
    const stack = [];

    for (let c of temp) {
        if (isLeftBracket(c)) stack.push(c);
        
        if (isRightBracket(c)) {
            const top = stack[stack.length - 1];
            if (match(top , c)) stack.pop();
        }
    }

    return stack.length === 0;
}

/**
 * 判断是否是左括号
 * @param {string} bracket 
 * @returns boolean
 */
function isLeftBracket(bracket) {
    return /[\(\[\{]/.test(bracket);
}

/**
 * 判断是否是右括号
 * @param {string} bracket 
 * @returns boolean
 */
function isRightBracket(bracket) {
    return /[\)\]\}]/.test(bracket);
}

/**
 * 判断左右括号是否匹配
 * @param {string} left 
 * @param {string} right 
 * @returns boolean
 */
function match(left , right) {
    return (left === '(' && right === ')') ||
            (left === '[' && right === ']') ||
            (left === '{' && right === '}');
}

const str = '{[]}()';
const str1 = '()[](1){}';
const str2 = '[((((()]{}1))))}';

console.log(checkBracket(str));
console.log(checkBracket(str1));
console.log(checkBracket(str2));