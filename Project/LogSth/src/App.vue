<template>
  <div class="app-container">
    <!--顶部导航栏-->
    <el-row>
      <el-affix target=".app-container">
        <app-header></app-header>
      </el-affix>
    </el-row>

    <!--路由匹配出口-->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@c/AppHeader/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader
  }
})
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  background-color: black;
}
</style>
