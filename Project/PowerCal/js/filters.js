/**
 * 过滤多余小数点
 * @param last
 * @param current
 */
function filterDot(last , current) {
    if (last.includes(".")) return;
    save(current);
    display(current)
}


/**
 * 当空屏时过滤不合理字符
 * @param current
 */
function filterWhenViewIsEmpty(current) {
    //“.” => “0.”
    if (current === ".") {
        current = "0.";
    }

    //只允许输入可以放在数字前的操作符
    if (isPreFunction(current) || current === "-"){
        save(current);
        display(current);
    }
}


/**
 * 过滤不合理的操作符
 * @param last
 * @param current
 */
function filterOperator(last , current) {
    if (isOperator(last)) {
        if (current !== "-") return;
    }
    save(current);
    display(current);
}


/**
 * 过滤不合理的函数操作符
 * @param last
 * @param current
 */
function filterFunction(last , current) {
    if (isOperator(last)) {
        if (!isPreFunction(current)) return;
    }

    if (isNumber(last)) {
        if (isPreFunction(current)) return;
    }

    if (isFunction(last) || last === ".") return;

    save(current);
    display(current);
}
