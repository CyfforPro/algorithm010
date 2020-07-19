/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (65.68%)
 * Likes:    524
 * Dislikes: 0
 * Total Accepted:    101.6K
 * Total Submissions: 153.8K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 *
 * 说明：每次只能向下或者向右移动一步。
 *
 * 示例:
 *
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // 1. dp状态，dp(i, j)表示从坐标(i, j)到右下角的最小路径之和
  // 2. dp方程，dp(i, j) = grid(i, j) + min(dp(i + 1, j), dp(i, j + 1))

  let row = grid.length - 1; // 行（i）的最大值
  let col = grid[0].length - 1; // 列（j）的最大值
  let dp = Array(row + 1).fill(Array(col + 1)); // 一个同grid大小的二维数组

  for (let i = row; i >= 0; i--) {
    for (let j = col; j >= 0; j--) {
      if (i === row && j !== col) {
        // 最后一行的非最后一列的值
        dp[i][j] = grid[i][j] + dp[i][j + 1];
      } else if (i !== row && j === col) {
        // 最后一列的非最后一行的值
        dp[i][j] = grid[i][j] + dp[i + 1][j];
      } else if (i !== row && j !== col) {
        // 其他值
        dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
      } else {
        // 最后一行的最后一列
        dp[i][j] = grid[i][j];
      }
    }
  }

  return dp[0][0];
};
// @lc code=end
