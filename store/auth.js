export const state = () => ({
  token: true
})

export const getters = {
  isAuth: (state) => Boolean(state.token)
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },

  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({ commit, dispatch}, formData) {
    try {
      const token = await new Promise((resolve) => {
        setTimeout(resolve('mok-token'), 2000)
      })

      dispatch('setToken', token)
    } catch (err) {
      commit('setError', err, { root: true })
      throw err
    }
  },

  async createUser({ commit }, formData) {
    try {
      console.log(formData)
    } catch (err) {

    }
  },

  setToken({ commit }, token) {
    commit('setToken', token)
  },

  logout({ commit }) {
    commit('clearToken')
  }
}
