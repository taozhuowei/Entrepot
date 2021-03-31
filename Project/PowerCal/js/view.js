/**
 * 视窗区
 */
let view = (function () {
    let view = Symbol('view');

    class View {
        constructor() {
            this[view] = document.getElementById("view");
        }

        //显示
        show(val) {
            this[view].innerText += val;
        }

        //退格
        backspace() {
            const text = this[view].innerText;
            this[view].innerText = text.substring(0 , text.length-1);
            console.log(this[view].innerText);
        }

        //清屏
        clear() {
            this[view].innerText = '';
        }

        //判断视窗区是否为空
        isEmpty() {
            return this[view].innerText === '';
        }
    }

    return new View();
})();

export default view;