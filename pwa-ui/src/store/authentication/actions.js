export default {
  setUser ({ commit }, user) {
    return new Promise((resolve) => {
      commit('SET_USER', user)
      resolve()
    })
  }
}
