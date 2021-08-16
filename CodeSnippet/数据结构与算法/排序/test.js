function test(n) {
    if (n < 0 || n > 10) {
        console.log('');
        return;
    }
    const res = [];
    let left = n-1 , right = n-1;
    for (let i = 1 ; i <= n ; i++) {
        const row = new Array(n - 1).fill(' ');
        let sum = 0;
        for (let j = left ; j <= right ; j++) {
            const mid = Math.floor((left + right) / 2);
            if (j <= mid) row[j] = ++sum;
            else row[j] = --sum;
        }
        res.push(row);
        left--;
        right++;
    }

    for (let row of res) {
        console.log(row.join(''));
    }
}

test(11);