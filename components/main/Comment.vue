<template>
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
</template>

<script>
export default {
  props: {
    comment: {
      type: Object
    }
  }
}
</script>


<style lang="scss" scoped>
.comment__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.comment__person-name { font-weight: 700; }

.comment__body { white-space: pre-line; }
</style>

