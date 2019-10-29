const state = {
  GoodsNo: ''
}

const getters = { }

const actions = {
  getRunningNumber: ({ commit, state }, payload) => {
    this.$http.get(this.$api + 'GetRunningNumber/Goods')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    commit('INCREASE_CURRENT_COUNTER')
  }
}

const mutations = {
  INCREASE_CURRENT_COUNTER (state, payload) {
    state.currentCounter++
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
