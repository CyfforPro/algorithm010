/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (73.83%)
 * Likes:    293
 * Dislikes: 0
 * Total Accepted:    56.9K
 * Total Submissions: 77K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 *
 * 示例:
 *
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  let subRes = [];
  if (k === 0) {
    return [[]];
  }
  function dfs(start, n, k, res, subRes) {
    if (subRes.length === k) {
      console.log(1, subRes);
      res.push(subRes.slice(0));
      return;
    }
    for (let i = start; i < n + 1; i++) {
      subRes.push(i);
      console.log(2, subRes);
      dfs(i + 1, n, k, res, subRes);
      subRes.pop();
    }
    return res;
  }
  return dfs(1, n, k, res, subRes);
};

combine(4, 3);
// @lc code=end
