/**
 * 数字金额规范化
 * 每三位加一个逗号
 * @param {string || number} money 
 * @returns string
 */
const transferMoney = money => {
    let temp = typeof money === 'string' ? money : money.toString();
    temp = temp.split('').reverse();
    let res = '';
    let i = 0;
    while (i < temp.length) {
        res += temp[i];
        if ((i+1) % 3 === 0) {
            res += ',';
        }
        i++;
    }
    return res.split('').reverse().join('');
}

console.log(transferMoney('1234567'));

let i = 0;
i = i++;
console.log(i);

