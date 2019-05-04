<template>
  <h1>Welcome to admit page.</h1>
</template>

<script>
export default {
  layout: 'admin',

  middleware: ['admin-auth']
}
</script>
