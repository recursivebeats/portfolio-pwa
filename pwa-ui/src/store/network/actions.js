export default {
  setNetworkAvailable ({ commit }, boolean) {
    return new Promise((resolve) => {
      commit('SET_NETWORK_AVAILABLE', boolean)
      resolve()
    })
  }
}
