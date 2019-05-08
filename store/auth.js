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
      const { token } = this.$axios.$post('/api/auth/admin/login', formData)

      console.log('token', token)

      dispatch('setToken', token)
    } catch (err) {
      commit('setError', err, { root: true })
      throw err
    }
  },

  async createUser({ commit }, formData) {
    try {
      await this.$axios.post('/api/auth/admin/create', formData)
    } catch (err) {
      commit('setError', err, { root: true })
      throw err
    }
  },

  setToken({ commit }, token) {
    commit('setToken', token)
  },

  logout({ commit }) {
    commit('clearToken')
  }
}
