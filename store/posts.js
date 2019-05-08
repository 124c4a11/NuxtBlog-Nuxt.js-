const posts = [
  { title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: '1'},
  { title: 'Post 2', date: new Date(), views: 22, comments: [1, 2], _id: '2'}
]

export const state = () => ({
})

export const getters = {}

export const mutations = {}

export const actions = {
  async fetchAdminPosts({}) {
    return await new Promise((resolve) => {
      setTimeout(() => resolve(posts), 1000)
    })
  },

  async fetchAdminPostById({}, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find((post) => post._id === id))
      }, 1000)
    })
  },

  async create({ commit }, { title, text, image }) {
    try {
      const fd = new FormData

      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)

      return await this.$axios.$post('/api/post/admin', fd)
    } catch (err) {
      commit('setError', err, { root: true })
      throw err
    }
  },

  async update({}, { id, text }) {

  },

  async remove({}, id) {

  }
}
