/**
 * 二叉树先序遍历
 * @param {object}} tree 
 * @returns 遍历结果
 */
const traversal = (tree) => {
    const res = [];
    const stack = [];
    let root = tree;

    while (root || stack.length) {

        while (root) {
            stack.push(root);
            res.push(root.id);
            root = root.left;
        }

        root = stack.pop();
        root = root.right;
    }
    return res;
}

/**
 * 二叉树中序遍历
 * @param {object} tree 
 * @returns 遍历结果
 */
const preorderTraversal = (tree) => {
    const res = [];
    const stack = [];
    let root = tree;

    while (root || stack.length) {

        while (root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        res.push(root.id);
        root = root.right;
    }
    
    return res;
}


const postorderTraversal = (tree) => {
    const res = [];
    const stack = [];
    let root = tree;

    while (root || stack.length) {

        while (root) {
            stack.push(root);
            res.unshift(root.id);
            root = root.right;
        }

        root = stack.pop();
        root = root.left;
    }
    
    return res;
}

const tree = 
    {
        id: '0',
        left: {
            id: '0-1',
            left: {
                id: '1-1'
            },
            right: {
                id: '1-2'
            }
        },
        right: {
            id: '0-2',
            left: {
                id: '2-1'
            },
            right: {
                id: '2-2'
            }
        }
    }


console.log('先序遍历 '+ traversal(tree));
console.log('中序遍历 '+ preorderTraversal(tree));
console.log('后序遍历 '+ postorderTraversal(tree));