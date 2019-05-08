export default function ({ $axios, redirect, store }) {
  $axios.interceptors.request.use((req) => {
    const token = store.getters['auth/token']

    if (token && !req.headers.common['Authorization']) {
      req.headers.common['Authorization'] = `Bearer ${token}`
    }

    return req
  })

  $axios.onError((err) => {
    if (err.response) {
      if (err.response.status === 401) {
        redirect('/admin/login?message=session')
        store.dispatch('auth/logout')
      }

      if (err.response.status === 500) {
        console.error('Server 500 error!')
      }
    }
  })
}
