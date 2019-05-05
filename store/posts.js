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

  async create({}, { title, text }) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000)
    })
  },

  async update({}, { id, text }) {

  },

  async remove({}, id) {

  }
}
