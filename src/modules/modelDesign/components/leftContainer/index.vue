<!--
 * @moduleName: 模型设计 -- 左侧栏
 * @Author: dawdler
 * @Date: 2019-12-27 11:43:50
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2019-12-27 12:14:04
 -->
<template>
    <el-aside class="design-left-wrap bg-transparent">
        <Top></Top>
        <Bottom></Bottom>
    </el-aside>
</template>
<script>
import Top from './top';
import Bottom from './bottom';
export default {
    name: 'index',
    components: {
        Top,
        Bottom
    },
    data() {
        return {};
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {}
};
</script>
