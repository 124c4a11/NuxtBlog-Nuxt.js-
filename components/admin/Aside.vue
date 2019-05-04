<template>
  <el-menu
    router
    :default-active="$route.path"
  >
    <el-menu-item index="/admin">
      <span class="el-icon-menu"></span>
      <span>Analytics</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <span class="el-icon-edit-outline"></span>
      <span>Add Post</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <span class="el-icon-tickets"></span>
      <span>Post List</span>
    </el-menu-item>
    <el-menu-item index="/admin/users">
      <span class="el-icon-service"></span>
      <span>Users</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <span class="el-icon-upload2"></span>
      <span>Logout</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
  .el-menu { min-height: 100vh; }
</style>
