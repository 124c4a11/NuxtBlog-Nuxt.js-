<template>
  <ul class="comment-list">
    <li v-for="comment in comments" :key="comment._id" class="comment-list__item">
      <el-card class="comment">
        <header class="comment__header">
          <span class="comment__person-name">{{ comment.name }}</span>
          <small>
            <span class="el-icon-time"></span> {{ comment.date | date }}
          </small>
        </header>
        <div class="comment__body">
          {{ comment.text }}
        </div>
      </el-card>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array
    }
  }
}
</script>


<style lang="scss" scoped>
.comment-list {
  padding: 0;
  list-style: none;
}

.comment-list__item { margin-bottom: 20px; }

.comment__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.comment__person-name { font-weight: 700; }

.comment__body { white-space: pre-line; }
</style>

