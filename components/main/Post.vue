<template>
  <article class="post">
    <header class="post__header">
      <div class="post__header-row">
        <h1 class="post__title">Post title</h1>
        <router-link class="post__back-link" to="/">
          <span class="el-icon-back"></span>
        </router-link>
      </div>
      <div class="post__header-row">
        <small>
          <span class="el-icon-time"></span> {{ new Date().toLocaleString() }}
        </small>
        <small>
          <span class="el-icon-view"></span> 12
        </small>
      </div>

      <img class="post__img" src="https://cdn.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg" alt="">

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sint ullam placeat architecto ut consectetur, impedit, voluptatem quod exercitationem, porro beatae perferendis! Quibusdam laudantium, accusantium in, iusto similique odio aliquid consectetur doloribus sapiente error tenetur delectus ipsum, esse quia. Ullam minus nisi adipisci fugit quibusdam non iste earum ad a!</p>
      <p>Dolores, quae officiis? Laudantium dolor, totam quas ut commodi maiores. Vel sapiente optio ea aperiam doloremque sint aliquam ipsum perferendis maxime beatae labore, ullam ad doloribus hic nemo dolorem reprehenderit, unde quos. Beatae laudantium mollitia eveniet corporis dicta dolorum. Aut quidem a quis fugiat provident dolorem totam ex asperiores facilis.</p>
      <p>Fuga amet esse voluptas quibusdam commodi dolor dignissimos molestias voluptatibus, error consequatur impedit nam molestiae deleniti doloremque numquam quidem! Iure repellendus non ipsa in doloribus, tempora molestiae minus aspernatur quas reiciendis alias, soluta quis id eligendi quam ut a dolorum sunt laborum porro enim vitae excepturi, earum molestias. Illo, commodi?</p>
    </header>
  </article>
</template>

<script>
export default {

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
