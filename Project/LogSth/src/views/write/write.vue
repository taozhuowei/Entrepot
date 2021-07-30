<!--写文章-->
<template>
  <div class="write-container">
    <el-row>
      <el-col :span="11">
        <!-- 编辑区   -->
        <div class="write-area">
          <el-input type="textarea" v-model="text"
                    placeholder="粘贴markdown文本到此处"
                    autofocus autosize :input-style="{border: 0}"
                    @input="compileToHTML"
          ></el-input>
        </div>
      </el-col>


      <el-col :span="11" :offset="1">
        <!-- 预览区   -->
        <div class="view-area" v-html="html"></div>
      </el-col>
    </el-row>



  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: "write",
  data() {
    return {
      text: '',
      html: ''
    }
  },
  methods: {
    compileToHTML() {
      console.log(this.text)

      this.html = marked(this.text)
    }
  }
}
</script>

<style lang="scss" scoped>
.write-container, .el-row, .write-area {
  height: 100%;
}

.write-area, .view-area {
  width: 100%;
  height: 100%;
  border: 1px solid #c2c2c2;
}
</style>