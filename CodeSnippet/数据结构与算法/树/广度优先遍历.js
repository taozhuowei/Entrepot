
const bfs = (tree , target) => {
    const path = [];
    const queue = [];
    let node = tree;

    queue.unshift(node);

    while (queue.length) {
        const item = queue.shift();
        path.push(item);

        if (item.val === target) {
            return {
                node: item,
                path: path
            }
        }

        if (item.children && item.children.length) {
            for (let child of item.children) {
                queue.push(child);
            }
        }
    }
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

console.log(bfs(tree , 'd'));