/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
let result: number[];

function largestValues(root: TreeNode | null): number[] {
    result = [];
    dfs(root);
    return result;
};

function dfs(
    node: TreeNode | null,
    depth: number = 0
) : void {
    if (node) {
        if (depth >= result.length) {
            result.push(node.val);
        } else {
            result[depth] = Math.max(result[depth], node.val);
        }
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
}