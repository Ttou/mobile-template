import { createStore } from 'vuex'
import { getToken, setToken } from '@/utils/auth'
import { Actions, Mutations } from './constants'

export * from './types'

export default createStore({
  state: {
    token: getToken()
  },
  actions: {
    [Actions.login]({ commit }) {
      commit(Mutations.SET_TOKEN, '')
    }
  },
  mutations: {
    [Mutations.SET_TOKEN](state, data) {
      state.token = data
      setToken(data)
    }
  }
})
