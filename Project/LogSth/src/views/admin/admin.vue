<!-- 管理界面 -->
<template>
  <div class="admin-container">
    <el-row>
      <el-col :span="4" :offset="1">
        <el-menu default-active="admin/write" router>
          <el-menu-item index="/admin/write">写文章</el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="16" :offset="2">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.admin-container {
  height: calc(100% - 200px);
  padding-top: 50px;
}

.el-row {
  height: 100%;
}

.el-menu-item {
  text-align: center;
  font-size: 20px;
}
</style>
