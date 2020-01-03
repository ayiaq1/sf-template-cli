<!--
 * @moduleName:
 * @Author: dawdler
 * @Date: 2019-12-31 09:23:48
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2019-12-31 09:24:30
 -->
<template>
    <div class="demo">
        <div class="mb20">
            <sf-title-container class="mb20 bg-color-gray">
                结构: 左 | 右
            </sf-title-container>
            <el-container>
                <el-aside>Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </div>
        <div class="mb20">
            <sf-title-container class="mb20 bg-color-gray">
                结构: 右 | 左
            </sf-title-container>
            <el-container>
                <el-main>Main</el-main>
                <el-aside>Aside</el-aside>
            </el-container>
        </div>
        <div class="mb20">
            <sf-title-container class="mb20 bg-color-gray">
                结构: 左 | 上 - 下 | 右
            </sf-title-container>
            <el-container>
                <el-aside>Aside</el-aside>
                <el-container>
                    <el-header>
                        Header
                    </el-header>
                    <el-main>Main</el-main>
                </el-container>
                <el-aside>Aside</el-aside>
            </el-container>
        </div>
        <div class="mb20">
            <sf-title-container class="mb20 bg-color-gray">
                结构: 左 | 上 - 下(左右)
            </sf-title-container>
            <el-container>
                <el-aside>Aside</el-aside>
                <el-container>
                    <el-header class="mr0">
                        Header
                    </el-header>
                    <el-container>
                        <el-main>Main</el-main>
                        <el-aside>Aside</el-aside>
                    </el-container>
                </el-container>
            </el-container>
        </div>
        <div class="mb20">
            <sf-title-container class="mb20 bg-color-gray">
                结构: 左 | 上 - 中 -下 | 右
            </sf-title-container>
            <el-container>
                <el-aside>Aside</el-aside>
                <el-container>
                    <el-header>Header</el-header>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
                <el-aside>Aside</el-aside>
            </el-container>
        </div>

        <div class="mb20">
            <sf-title-container class="mb20 bg-color-gray">
                结构: 上 | 下 -- 左 (上 - 下) | 上 - 中 -下 | 右
            </sf-title-container>
            <layout></layout>
        </div>
    </div>
</template>
<script>
import layout from './layout';
export default {
    name: 'demo',
    components: { layout },
    data() {
        return {};
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {}
};
</script>
