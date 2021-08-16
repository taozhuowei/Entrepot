/**
 * 将URL的参数转成对象
 * @param {string} url 
 * @returns 参数对象
 */
const parseUrl = url => {
    if (url.indexOf('?') === -1) throw new Error('url must include a ?');
    if (url.indexOf('?') === url.length-1) throw new Error('check your url params');
    const params = url.split('?')[1].split('&');
    const res = {};
    params.map(param => {
        const [key , val] = param.split('=');
        res[key] = val;
    });
    return res;
}

/**
 * 将参数对象转成URL
 * @param {string} url 
 * @param {object} data 
 * @returns string
 */
const stringifyUrl = (url , data = {}) => {
    if (url === '' || typeof url !== 'string') throw new Error('check your url');
    let res = url + '?';
    Object.keys(data).map(key => {
        res += key + '=' + data[key] + '&';
    });
    return res.slice(0 , -1);
}

const url = 'http://www.baidu.com?a=123&b=456';
const data = parseUrl(url);
console.log(data);

console.log(stringifyUrl('http://www.sougo.com' , data));