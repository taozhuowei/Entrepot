import expression from "./expression.js";
import judge from "./judge,js";

function parse() {
     const originExp = expression.getExpression();
     const parsedExp = [];

     for (let i=1 ; i<originExp.length ; i++) {
         const cur = originExp[i]; //当前值
         const pre = originExp[i-1]; //上一个值

         //如果pre是输入了数字
         if (judge(pre) === 'number') {
             //cur也是数字，则合并成一个数字
             if (judge(cur) === 'number') {
                 parsedExp.push(pre*10+cur);
             }


         }
     }
}