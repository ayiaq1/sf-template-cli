<!--
 * @moduleName: 质量开发 -> 主页
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 11:12:23
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime : 2019-12-30 11:12:23
 -->
<template>
    <sf-no-side-container :id="$parent.moduleName">
        <sf-title-container class="mb20">
            截止目前，总共已为
            <span class="fz18 color-yellow">5</span>
            个数据源，
            <span class="fz18 color-red">10000</span>
            张表，配置了
            <span class="fz18 color-blue">20000</span>
            个质量任务，其中已启用
            <span class="fz18 color-red">2000</span>
            个，已停用
            <span class="fz18 color-blue">1000</span>个.
        </sf-title-container>
        <el-container>
            <aSide></aSide>
            <el-container>
                <el-main>
                    <mainPage></mainPage>
                </el-main>
                <el-footer>
                    <sf-header>
                        <sf-header-title>
                            <el-tabs v-model="activeType">
                                <el-tab-pane label="执行结果" name="0"></el-tab-pane>
                                <el-tab-pane label="数据预览" name="1"></el-tab-pane>
                                <el-tab-pane label="表结构预览" name="2"></el-tab-pane>
                            </el-tabs>
                        </sf-header-title>
                    </sf-header>
                </el-footer>
            </el-container>
            <el-aside>
                <sf-header>
                    <sf-header-title>
                        <span>属性</span>
                        <sf-link ><i class="sf-icon-state-close"></i></sf-link>
                    </sf-header-title>
                </sf-header>
            </el-aside>
        </el-container>
        <!-- 弹出层 -->
        <el-dialog append-to-body :title="dialogFormData.title" :class="dialogFormData.class" :close-on-click-modal="false" :visible.sync="dialogFormData.show">
            <!-- 组件方式配置 -->
            <componentModeConfig :formData="dialogFormData" v-if="dialogFormData.show && dialogFormData.value === _provided.POP_TYPE_COMPONENTS_MODE_CONFIG"></componentModeConfig>
            <!-- sql方式配置 -->
            <sqlModeConfig :formData="dialogFormData" v-if="dialogFormData.show && dialogFormData.value === _provided.POP_TYPE_SQL_MODE_CONFIG"></sqlModeConfig>
            <!-- 选择数据源 -->
            <dataSourceChoice :formData="dialogFormData" v-if="dialogFormData.show && dialogFormData.value === _provided.POP_TYPE_DATA_SOURCE_CHOICE"></dataSourceChoice>
        </el-dialog>
    </sf-no-side-container>
</template>
<script>
// dialog
import componentModeConfig from './dialog/componentModeConfig';
import sqlModeConfig from './dialog/sqlModeConfig';
import dataSourceChoice from './dialog/dataSourceChoice';
// components
import aSide from './components/aside';
import mainPage from './components/mainPage';
// Vuex
import * as storeStatic from './store/qualityDevelopment/storeStatic.js';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('qualityDevelopment');
export default {
    name: 'qualityDevelopment',
    components: {
        aSide,
        mainPage,
        sqlModeConfig,
        dataSourceChoice,
        componentModeConfig
    },
    provide: {
        // 弹窗类型 -> 组件方式配置
        POP_TYPE_COMPONENTS_MODE_CONFIG: 'ComponentModeConfig',
        // 弹窗类型 -> sql方式配置
        POP_TYPE_SQL_MODE_CONFIG: 'SqlModeConfig',
        // 选择数据源
        POP_TYPE_DATA_SOURCE_CHOICE: 'dataSourceChoice'
    },
    data() {
        return {
            activeType: '0'
        };
    },
    computed: {
        ...mapState({
            // 弹窗信息
            dialogFormData: state => state.dialogFormData
        })
    },
    create() {},
    mounted() {},
    methods: {
        ...mapMutations([
            storeStatic.M_RESET_STATE
        ]),
        ...mapActions([])
    },
    beforeDestroy() {
        this[storeStatic.M_RESET_STATE]();
    },
    destroyed() {}
};
</script>
