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
        if (c === '(') stack.push(c);
        
        if (c === ')') {
            const top = stack[stack.length - 1];
            if (top === '(') stack.pop();
        }
    }

    return stack.length === 0;
}

const str = '(((((())';
const str1 = '()()(1)()';
const str2 = '((123(())))';

console.log(checkBracket(str));
console.log(checkBracket(str1));
console.log(checkBracket(str2));