<template>
    <el-tabs v-model="activeTab"
        @tab-click="handleClick">
        <el-tab-pane label="资源列表"
            name="0">
            <ResourceList />
        </el-tab-pane>
        <el-tab-pane label="代码列表"
            name="1">
            <CodeList />
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import ResourceList from './ResourceList.vue';
import CodeList from './CodeList.vue';
export default {
    name: 'MainTable',
    components: {
        ResourceList,
        CodeList
    },
    data() {
        return {
            activeTab: '0'
        };
    },
    methods: {
        handleClick() {

        }
    }
};
</script>
