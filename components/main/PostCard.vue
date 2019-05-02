<template>
  <el-card
    class="post-card"
    body-style="padding: 0"
    shadow="hover"
  >
    <header class="post-card__header" slot="header">
      <h3 class="post-card__title">Post title</h3>
      <small>
        <span class="el-icon-time"></span> {{ new Date().toLocaleString() }}
      </small>
    </header>

    <div class="post-card__body">
      <img class="post-card__img" src="https://cdn.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg" alt="">
    </div>

    <footer class="post-card__footer">
      <el-button @click="openPost" round>Open</el-button>
      <small><span class="el-icon-message"></span> 12</small>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      this.$router.push('/post/f');
    }
  }
}
</script>


<style lang="scss" scoped>
.post-card {
  & + & { margin-top: 20px; }
}

.post-card__header,
.post-card__footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.post-card__title {
  margin: 0;
  font-weight: 700;
  font-size: 1.2rem;
}

.post-card__img {
  display: block;
  width: 100%;
  height: auto;
}

.post-card__footer { padding: 20px; }
</style>
