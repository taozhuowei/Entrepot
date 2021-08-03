/**
 * 深克隆
 * 来自vue源码
 * @param {object} obj 
 * @param {array} cache 
 * @returns copy
 */
const deepClone = (obj , cache = []) => {
    // 如果是null或基本数据类型则直接返回
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // 查找缓存，避免对象中的属性引用了此对象造成循环引用
    const hit = find(cache , c => c.original === obj);
    console.log();
    // 命中缓存，直接返回
    if (hit) {
        return hit.copy;
    }

    // 构造副本
    const copy = Array.isArray(obj) ? [] : {};

    // 保存到缓存
    cache.push({
        orginal: obj,
        copy
    });

    Object.keys(obj).forEach(k => {
        copy[k] = deepClone(obj[k] , cache);
    });

    return copy;
}

const find = (list , f) => {
    return list.filter(f)[0];
}

