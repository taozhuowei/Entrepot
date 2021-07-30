<!-- 网站顶部导航栏组件 -->
<template>
  <div class="header-container">
    <!-- 头像 & 进入管理员页面对话框 -->
    <el-popover placement="bottom" :width="200" v-model:visible="popoverVisible">
      <p class="hint">你是管理员吗？点我干嘛</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="popoverVisible = false"
          >点错了..</el-button
        >
        <el-button type="primary" size="mini" @click="requireLogin"
          >我是 !!</el-button
        >
      </div>
      <template #reference>
        <div class="header-icon" @click="showPopover"></div>
      </template>
    </el-popover>

    <!-- 管理员登录对话框 -->
    <el-dialog title="证明你是管理员" v-model="dialogFormVisible">
      <el-form :model="form" label-position="top">
        <el-form-item label="你叫啥？" label-width="120">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="对暗号" label-width="120">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
      </el-form>

      <!-- 操作 -->
      <template #footer>
          <el-button @click="dialogFormVisible = false">算了，我放弃</el-button>
          <el-button type="primary" @click="checkForm"
            >证明吧</el-button
          >
      </template>
    </el-dialog>

    <!-- 导航菜单 -->
    <el-menu default-active="home" router mode="horizontal">
      <el-menu-item index="home">主页</el-menu-item>
      <el-menu-item index="article">文章</el-menu-item>
      <el-menu-item index="lesson">教程</el-menu-item>
      <el-menu-item index="note">笔记</el-menu-item>
      <el-menu-item index="essay">随笔</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      popoverVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        password: ''
      }
    };
  },
  methods: {
    // 显示弹窗
    showPopover() {
      this.popoverVisible = true
    },

    //需要登录
    requireLogin() {
      this.dialogFormVisible = true
    },

    //检查登录信息
    checkForm() {
      this.$message({
        type: 'success',
        message: '认证通过，即将进入管理界面'
      })

      this.dialogFormVisible = false

      this.navigateToAdmin()
    },

    //跳转到管理界面
    navigateToAdmin() {
      this.$router.push('/admin')
    }
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  background-color: white;
}

.header-icon {
  width: 50px;
  height: 50px;
  background-color: gray;
}
</style>