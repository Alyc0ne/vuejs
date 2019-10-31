import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const $api = 'http://127.0.0.1:8000/api/'

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  state: {
    SystemName: '',
    RunningNumber: ''
  },
  actions: {
    GenRunningNumber (state) {
      axios.get($api + 'GetRunningNumber/Goods')
        .then((response) => {
          state.commit('setRunning', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    GenSystemName (state, value) {
      state.commit('setSystemName', value)
    }
  },
  mutations: {
    setSystemName (state, value) {
      state.SystemName = value
    },
    setRunning (state, value) {
      state.RunningNumber = value
    }
  },
  getters: {
    RunningNumber: state => state.RunningNumber,
    SystemName: state => state.SystemName
  },
  strict: debug
})
