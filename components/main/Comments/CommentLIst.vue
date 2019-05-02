<template>
  <ul class="comment-list">
    <li class="comment-list__item">
      <el-card class="comment">
        <header class="comment__header">
          <span class="comment__person-name">Person Name</span>
          <small>
            <span class="el-icon-time"></span> {{ new Date().toLocaleString() }}
          </small>
        </header>
        <div class="comment__body">
          Lorem ipsum dolor sit amet.
        </div>
      </el-card>
    </li>
    <li class="comment-list__item">
      <el-card class="comment">
        <header class="comment__header">
          <span class="comment__person-name">Person Name</span>
          <small>
            <span class="el-icon-time"></span> {{ new Date().toLocaleString() }}
          </small>
        </header>
        <div class="comment__body">
          Lorem ipsum dolor sit amet.
        </div>
      </el-card>
    </li>
  </ul>
</template>

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

