import expression from "./expression.js";
import view from "./view.js";
import judge from "./judge.js";

/**
 * 处理输入
 * @param val 按键值
 */
function handleInput(val) {
    console.log('user input: '+val);

    //判断输入的是什么？
    console.log(judge(val));
    const type = judge(val);
    //如果值不是函数，则直接显示
    if (!type.includes('function')) {
        view.show(val);
    }

    //如果值是前置函数，则多显示一个“(”作为边界
    if (type === 'pre function') {
        val += '('
        view.show(val);
    }

    expression.push(val);
}

export function backspace() {
    console.log('backspace');
    view.backspace();
    expression.pop();
}

export function clear() {
    view.clear();
    expression.empty();
}

export default handleInput;
