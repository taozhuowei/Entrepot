import compute from "./compute.js";
import handleInput from "./input_handler.js";
import {backspace , clear} from "./input_handler.js";

/**
 * 绑定事件代理
 */
(function eventAgent() {
    const buttonAgent = document.getElementsByClassName('button-container')[0];
    buttonAgent.addEventListener('click' , getValue);
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); //防止双击选中文本
    document.getElementById('back-button').addEventListener('click' , backspace);
    document.getElementById('clear-button').addEventListener('click' , clear);
})();


/**
 * 获取事件触发目标的值
 * @param button
 */
function getValue(button) {
    //console.log(button.target.innerText);
    let target = button.target;
    //判断是父元素则忽略，防止点击面板后出现所有按键文字
    if (target.className === 'button-container')  return;
    //点击“=”求值
    if (target.classList[1] === 'ans') compute();
    //处理输入
    handleInput(target.innerText);
}


