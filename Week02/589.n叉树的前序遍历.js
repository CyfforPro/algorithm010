/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (73.24%)
 * Likes:    82
 * Dislikes: 0
 * Total Accepted:    30.3K
 * Total Submissions: 41.3K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 *
 * 例如，给定一个 3叉树 :
 *
 *
 *
 *
 *
 *
 *
 * 返回其前序遍历: [1,3,5,6,2,4]。
 *
 *
 *
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) {
    return [];
  }
  // 解法一：递归
  // return Array.prototype.concat.apply(
  //   [root.val],
  //   root.children.map((item) => preorder(item))
  // );

  // 解法二：迭代，利用栈，也有点手动递归的意思
  const res = [];
  const arr = [root];
  while (arr.length) {
    const cur = arr.pop();
    res.push(cur.val);
    for (let i = cur.children.length - 1; i >= 0; i--) {
      arr.push(cur.children[i]);
    }
  }
  return res;
};
// @lc code=end
