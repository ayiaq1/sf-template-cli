<!--
* @moduleName: 审核管理 - 审核流程配置 - 主界面
* @Author: SuLiang
* @Date:   2017-12-27 09:14:53
* @Last Modified by: SuLiang
* @Last Modified time: 2019-06-28 14:59:46
-->
<template>
    <div class="sf-no-side-container" :id="$parent.moduleName">
        <el-tabs v-model="tabSwitch" class='sf-tab-content' type='card'>
            <el-tab-pane label="流程管理" name="0">
                <ProcessManage v-if="tabSwitch === '0'"/>
            </el-tab-pane>
            <el-tab-pane label="环节模板管理" name="1">
                <NodesManage v-if="tabSwitch === '1'"/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
// 流程模板管理
import ProcessManage from './components/processManage';
// 环节模板管理
import NodesManage from './components/nodesManage';
export default {
    data() {
        return {
            tabSwitch: '0'
        };
    },
    created() {
        console.log('created');
    },
    methods: {},
    components: {
        ProcessManage,
        NodesManage
    }
};

</script>