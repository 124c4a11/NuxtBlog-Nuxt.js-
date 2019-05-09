export const actions = {
  async create({ commit }, comment) {
    try {
      return await this.$axios.$post('/api/comment', comment)
    } catch (err) {
      commit.setError('setError', err, { root: true })
      throw err
    }
  }
}
