<template>
    <el-container class="access-main">
        <el-header>
            <MainHeader />
        </el-header>
        <el-main class="main-table">
            <MainTable />
        </el-main>
        <el-main>
            <PreviewList />
        </el-main>
    </el-container>
</template>

<script>
import MainHeader from './MainHeader.vue';
import MainTable from './MainTable.vue';
import PreviewList from './PreviewList.vue';
export default {
    name: 'Main',
    components: {
        MainHeader,
        MainTable,
        PreviewList
    }
};
</script>
