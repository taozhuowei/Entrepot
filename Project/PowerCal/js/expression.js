import view from "./view.js";

/**
 * 表达式
 */
let expression = (function () {
    //私有变量 栈，存放表达式
    let expression = Symbol('expression');

    class Expression {
        constructor() {
            this[expression] = [];
        }
        
        //入栈
        push(val) {
            this[expression].push(val);
            console.log(this[expression]);
        }

        //出栈
        pop() {
            this[expression].pop();
        }

        //判断栈是否为空
        isEmpty() {
            return this[expression].length === 0;
        }

        //清空栈
        empty() {
            this[expression] = [];
        }
    }

    return new Expression();
})();

export default expression;