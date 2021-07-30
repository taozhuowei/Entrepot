<!--主页-->
<template>
  <div class="home-container">
    <el-row>
      <el-col :span="4" :offset="4">
        <p class="title1">最近更新</p>
      </el-col>
    </el-row>

    <el-row :gutter="50">
      <el-col  v-for="(update,index) in updates" :key="update.id" :span="4" :offset="index === 0 ? 4 : 0">
        <el-card shadow="hover" class="card">
          <template #header>
            <p class="card-title">{{ update.title }}</p>
          </template>

          更新时间 {{ update.time }}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      updates: [
        {
          id: 1,
          title: '降龙十八掌',
          time: '2021-7-1 13:31'
        },
        {
          id: 2,
          title: '九阴真经',
          time: '2021-7-1 13:31'
        },
        {
          id: 3,
          title: '九阳神功',
          time: '2021-7-1 13:31'
        },
        {
          id: 4,
          title: '易筋经',
          time: '2021-7-1 13:31'
        },
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .home-container {
    width: 100%;
    height: 1000px;
  }

  .card {
    border: none
  }
</style>