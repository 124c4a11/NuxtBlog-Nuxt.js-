export default function ({ $axios, redirect, store }) {
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
