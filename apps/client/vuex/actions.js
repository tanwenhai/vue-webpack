// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
export const incrementCounter = function ({ commit }) {
  // dispatch('INCREMENT', 1);
  commit('INCREMENT', 1);
  /*store.dispatch({
    type: 'INCREMENT',
    payload: 10
  });*/
};

export const desrease = function ({ commit, state }) {
  if (state.count > 0) {
    // dispatch('INCREMENT', -1);
    commit('INCREMENT', -1);
  }
};