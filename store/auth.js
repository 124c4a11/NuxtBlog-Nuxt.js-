export const state = () => ({
  token: null
})

export const getters = {
  isAuth: (state) => Boolean(state.token)
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  async login({ commit, dispatch}, formData) {
    const token = await new Promise((resolve) => {
      setTimeout(resolve('mok-token'), 2000)
    })

    dispatch('setToken', token)
  },

  setToken({ commit }, token) {
    commit('setToken', token)
  }
}
