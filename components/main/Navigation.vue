<template>
  <nav>
    <router-link class="nav-logo" to="/">SSR Blog</router-link>
  </nav>
</template>


<style lang="scss" scoped>
  .nav-logo {
    display: inline-block;
    padding: 20px 0;
    font-weight: 700;
    font-size: 1.2rem;
    color: #1f2f3d;
    text-decoration: none;
    transition: color .25s;

    &:hover,
    &:focus {
      color: #3a8ee6;
      outline: none;
    }
  }
</style>
