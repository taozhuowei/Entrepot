<template>
    <div class="aside-bar">
        <div class="avatar">
            <el-avatar shape="circle" :size="50"></el-avatar>
        </div>

        <div class="function">
            <el-button icon="el-icon-document-checked func-button"></el-button>
            <el-button icon="el-icon-date"></el-button>
            <el-button icon="el-icon-setting"></el-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AsideBar;",
    }
</script>

<style scoped lang="less">
    @import "../assets/variables";
    .aside-bar{
        height: @height;
        background: white;
        border: @border;

        .avatar{
            margin-top: 20px;
        }

        .function{
            margin-top: 50px;

            .el-button{
                margin-top: 20px;
                margin-left: 0;
                border: none;
            }

        }
    }


</style>