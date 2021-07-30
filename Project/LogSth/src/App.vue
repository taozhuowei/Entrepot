<template>
  <div class="app-container">
    <!--顶部导航栏-->
    <el-affix target=".app-container">
      <app-header></app-header>
    </el-affix>

    <!--路由匹配出口-->
    <router-view></router-view>

    <!-- 底栏 -->
    <el-affix position="bottom" target=".app-container">
      <div class="app-bottom">
        <p class="bottom-info">by Yun Meng Ying , 2021</p>
      </div>
    </el-affix>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@c/AppHeader/index.vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
  },
});
</script>

<style lang="scss">
.app-container {
  width: 100%;
  height: 100vh;
}

.app-view {
  width: 100%;
  height: calc(100% - 120px);
  background-color: pink;
}

.app-bottom {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.title1 {
  font-size: 30px;
  font-weight: bold;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
}
</style>
