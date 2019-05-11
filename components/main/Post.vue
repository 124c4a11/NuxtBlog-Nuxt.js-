<template>
  <article class="post">
    <header class="post__header">
      <div class="post__header-row">
        <h1 class="post__title">{{ post.title }}</h1>
        <router-link class="post__back-link" to="/">
          <span class="el-icon-back"></span>
        </router-link>
      </div>
      <div class="post__header-row">
        <small>
          <span class="el-icon-time"></span> {{ post.date | date('date') }}
        </small>
        <small>
          <span class="el-icon-view"></span> {{ post.views }}
        </small>
      </div>

      <img class="post__img" :src="post.imageUrl" :alt="post.title">

      <vue-markdown>{{post.text}}</vue-markdown>
   </header>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 40px;

  p {
    font-size: 1.1rem;
    line-height: 1.42;
  }
}

.post__header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post__title {
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 1.5rem;
}

.post__back-link {
  font-size: 1.5rem;
  color: #303133;
  transition: color .25s;

  &:hover,
  &:focus {
    outline: none;
    color: #3a8ee6;
  }
}

.post__img {
  display: block;
  width: 100%;
  height: auto;
  margin: 20px 0;
}
</style>
