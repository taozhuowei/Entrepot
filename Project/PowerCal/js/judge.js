/**
 * 判断的方法的集合对象
 */
class Judgement {
    //判断是否是数字
    isNumber(val) {
        return  !isNaN(val);
    }

    /**
     * 判断是否是操作符
     * 操作符包含加减乘除
     */
    isOperator(val) {
        return ['+','-','×','÷'].includes(val);
    }

    //判断是否是括号
    isBracket(val) {
        return /[()]/.test(val);
    }

    //判断是否是小数点
    isDot(val) {
        return val === '.';
    }

    /**
     * 判断是否是特殊函数
     * 特殊函数包含“%”、三角函数、指数、对数、常数
     */
    isFunction(val) {
        return !this.isNumber(val) && !this.isOperator(val) && !/^[().]$/.test(val);
    }


    /**
     * 判断特殊函数操作符是在数字前使用还是在数字后使用
     * 三角函数、对数可以放在数字前
     * 指数、“%”放在数字后
     */
    whereToUseThisFunction(val) {
        return this.isFunction(val) && !val.includes('x') && val !== "%" ?
            'pre function' :
            'suffix function';
    }
}

/**
 * 判断传来的值是什么类型
 * number 数字
 * operator 操作符
 * bracket 括号
 * dot 小数点
 * pre function 数字前的函数
 * suffix function 数字后的函数
 * @param val 值
 * @returns {string} 值的类型
 */
function judge(val) {
    const judgement = new Judgement();

    if (judgement.isNumber(val)) return 'number';
    if (judgement.isOperator(val)) return 'operator';
    if (judgement.isBracket(val)) return 'bracket';
    if (judgement.isDot(val)) return 'dot';
    if (judgement.isFunction(val)) return judgement.whereToUseThisFunction(val);
    if (judgement.isNumber(val)) return 'number';
}

export default judge;