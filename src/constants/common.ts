// 跳转类型
export const linkType = {
  inner: 1, // 内跳（注意：后端给的不是路由，而是id)
  out: 2, // 外部
  act: 3, // 活动页
  game: -1, // 游戏类
  route: -2, // 内部跳转，直接返回路由
};
