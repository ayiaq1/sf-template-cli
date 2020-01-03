<!--
 * @moduleName: 模型设计-- 首页
 * @Author: dawdler
 * @Date: 2019-08-20 15:54:42
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2020-01-02 17:27:25
 -->
<template>
    <sf-no-side-container :id="$parent.moduleName">
        <!-- 头部 -->
        <TopContainer />
        <!-- 中间 -->
        <el-container class="container-wrap">
            <!-- 左侧 -->
            <LeftContainer />
            <!-- 右边+ -->
            <el-container>
                <!-- 中间表+日志模块 -->
                <el-container>
                    <!-- 中间表 -->
                    <RightDetailsContainer isMain />
                    <!-- 日志 -->
                    <el-footer v-show="isShow" />
                </el-container>
                <!-- 工具栏 -->
                <RightAsideContainer />
            </el-container>
        </el-container>
        <!-- 大页面涉及到的弹出框 -->
        <el-dialog id="app-modules-modelDesign" append-to-body v-fullscreen class="small" :close-on-click-modal="false" :title="dialogFormData.title" :visible.sync="dialogFormData.show">
            <component v-if="dialogFormData.show" :is="dialogFormData.type"></component>
        </el-dialog>
    </sf-no-side-container>
</template>
<script>
import TopContainer from './components/topContainer.vue';
import LeftContainer from './components/leftContainer/index.vue';
import RightAsideContainer from './components/rightAsideContainer.vue';
import RightDetailsContainer from './components/rightDetailsContainer.vue';
import { mapState } from 'vuex';
import AddModel from './components/addModel';
import SaveModel from './components/saveModel';
import Version from './components/version';
export default {
    name: 'app-modules-modelDesign',
    provide: {
        // 新增模型
        ADD_MODEL: 'addModel',
        // 保存模型
        SAVE_MODEL: 'saveModel',
        // 版本列表
        VERSION_LIST: 'version'
    },
    components: {
        Version,
        SaveModel,
        AddModel,
        TopContainer,
        LeftContainer,
        RightDetailsContainer,
        RightAsideContainer
    },
    data() {
        return {
            isShow: false
        };
    },
    computed: {
        ...mapState({
            dialogFormData: state => state.dialogFormData
        })
    },
    mounted() {
        this.$nextTick(() => {});
    },
    methods: {}
};
</script>
