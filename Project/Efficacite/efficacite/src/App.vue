<template>
  <div id="app">
    <el-row>
      <el-col :span="2">
        <aside-bar></aside-bar>
      </el-col>

      <el-col span="6">
        <menu-bar></menu-bar>
      </el-col>

      <el-col :span="16">
          <div class="main-content">
              <router-view></router-view>
          </div>
      </el-col>
    </el-row>




  </div>
</template>

<script>
import AsideBar from "./components/AsideBar";
import MenuBar from "./components/MenuBar";

export default {
  name: 'app',
  components: {
      AsideBar,
      MenuBar,
  },
}
</script>

<style lang="less">
  @import "assets/variables";

  *{margin: 0;    padding:0;}

  body{
    display: flex;  justify-content: center;  align-items: center;
    width: 100vw;   height: 100vh;
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  }

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 960px;   height:600px;
  border: 1px solid #191919;
  box-shadow: 1px 1px 5px #838383;
  overflow: hidden;


  .main-content{
    height: @height;
    background: white;
  }
}
</style>
