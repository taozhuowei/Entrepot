/**
 * 数组转树 
 * @param arr 数组 
 * @param rootId 根节点的id的值 默认0 (第一层元素的pid为0)
 * @param nodeKeyName 节点的唯一id属性名 默认id
 * @param parentKeyName 节点的父节点标识属性名 默认pid
 * @return res 树形结构
 * */
export default function arrayToTree(arr, rootId, nodeKeyName, parentKeyName) {
    rootId = rootId || 0;
    nodeKeyName = nodeKeyName || 'id';
    parentKeyName = parentKeyName || 'pid'

    // 结果集
    const res = [];
    // map结构用于查找id与pid的映射
    const map = {};


    for (const el of arr) {
        const id = el[nodeKeyName];
        const pid = el[parentKeyName];

        // 如果map中没有当前el的id对应的记录，新建一条记录
        // 初始化空的children数组，用于存放该节点的叶子节点
        if (!map[id]) {
            map[id] = { children: [] };
        }

        // 将el的原始数据和children数组存到一起
        map[id] = {
            ...el,
            children: map[id].children
        }

        const treeNode = map[id];

        //找到根节点，存进结果集
        if (id === rootId) {
            res.push(treeNode);
        }

        // 如果父节点不存在，创建父节点
        if (!map[pid]) {
            map[pid] = { children: [] };
        }

        // 将当前节点放到对应的父节点的children数组内
        // 避免根节点的id和pid都是0的情况
        if (id !== pid) map[pid].children.push(treeNode);
    }

    return res;
}