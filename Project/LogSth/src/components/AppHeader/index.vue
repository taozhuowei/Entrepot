<!-- 网站顶部导航栏组件 -->
<template>
  <div class="header-container">
    <div class="header-icon"></div>

    <el-menu :default-active="1" router mode="horizontal">
      <el-menu-item index="/home">主页</el-menu-item>
      <el-menu-item index="/article">文章</el-menu-item>
      <el-menu-item index="/lesson">教程</el-menu-item>
      <el-menu-item index="/note">笔记</el-menu-item>
      <el-menu-item index="/essay">随笔</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style lang="scss" scoped>
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
  }

  .header-icon {
    width: 50px;
    height: 50px;
    background-color: gray;
  }
</style>