<template>
  <el-row type="flex" justify="center">
    <el-col :sm="18" :md="12" :lg="10">
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
        </header>
        <img class="post__img" :src="post.imageUrl" :alt="post.title">
        <vue-markdown class="post__text">{{post.text}}</vue-markdown>
      </article>

      <div>
        <h2 class="comments-title">Comments:</h2>
        <app-comment-form :postId="post._id" @created="createComment" />
        <ul v-if="post.comments.length" class="comment-list">
          <li
            v-for="comment in post.comments"
            :key="comment._id"
            class="comment-list__item"
          >
            <AppComment :comment="comment" />
          </li>
        </ul>
        <p v-else class="text-center"><b>No comments.</b></p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import AppCommentForm from '@/components/main/CommentForm'
import AppComment from '@/components/main/Comment'

export default {
  head() {
    return {
      title: `${this.post.title} | ${process.env.appName}`
    }
  },

  validate({ params }) {
    return Boolean(params.id)
  },

  components: {
    AppComment,
    AppCommentForm
  },

  async asyncData({ store, params }) {
    const post = await store.dispatch('posts/fetchPostById', params.id)

    await store.dispatch('posts/addView', post)

    return {
      post: {
        ...post,
        views: ++post.views,
        comments: post.comments.reverse()
      }
    }
  },

  methods: {
    createComment(comment) {
      this.post.comments.unshift(comment)
    }
  }
}
</script>

<style lang="scss">
  .post { margin-bottom: 40px; }

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

  .post__text {
    p {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }

  .comments-title { font-size: 1.3em; }

  .comment-list {
    padding: 0;
    list-style: none;
  }

  .comment-list__item { margin-bottom: 20px; }
</style>
