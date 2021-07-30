/**
 * 深度优先遍历
 * 首先将根节点入栈
 * 循环判断栈不为空，则从栈中弹出一个节点
 * 查找该节点是否有子节点，如果有，将其全部入栈
 * 直至栈为空或找到目标
 * @param {object} tree 
 * @param {string} target 
 * @returns {node: 目标节点 , path: 查找路径}
 */
const dfs = (tree , target) => {
    const path = [];
    const stack = [];
    let node = tree;

    stack.push(node);

    while (stack.length) {
        let item = stack.pop();

        path.push(item);

        if (item.val === target) {
            return {
                node: item,
                path: path
            }
        }

        

        if (item.children && item.children.length) {
            for (let child of item.children) {
                stack.push(child);
            }
        }
    }

    return -1;
}

const tree = {
    id: '0',
    val: 'a',
    children: [
        {
            id: '0-1',
            val: 'b'
        },
        {
            id: '0-2',
            val: 'c',
            children: [
                {
                    id: '2-1',
                    val: 'd'
                }
            ]
        }
    ]
}

console.log(dfs(tree , 'd'));