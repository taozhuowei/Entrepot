<template>
    <el-menu
        default-active="1"
        background-color="#fff"
        text-color="#191919"
        active-text-color="#44b4ff"
        router
        id="menu"
        >

        <el-input
            placeholder="搜索"
            >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>

        <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">总览</span>
        </el-menu-item>

        <el-menu-item index="Today">
            <i class="el-icon-news"></i>
            <span slot="title">今天</span>
        </el-menu-item>

        <el-menu-item index="Plan">
            <i class="el-icon-s-flag"></i>
            <span slot="title">计划</span>
        </el-menu-item>

        <el-menu-item index="Note">
            <i class="el-icon-tickets"></i>
            <span slot="title">便签</span>
        </el-menu-item>

        <el-menu-item index="Task">
            <i class="el-icon-alarm-clock"></i>
            <span slot="title">定时任务</span>
        </el-menu-item>

        <el-menu-item index="Collection">
            <i class="el-icon-receiving"></i>
            <span slot="title">分组</span>
        </el-menu-item>

        <el-menu-item index="Finished">
            <i class="el-icon-finished"></i>
            <span slot="title">已完成</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "AsideBar"
    }
</script>

<style scoped lang="less">
    @import "../assets/variables";

    .el-menu{
        height: @height;
         border: @border;

        .el-input{
            width: 80%;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .el-menu-item{
            text-align: left;
        }
    }
</style>