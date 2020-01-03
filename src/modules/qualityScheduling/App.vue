<!--
 * @moduleName: 质量调度 -> 主页
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 11:12:23
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime : 2019-12-30 11:12:23
 -->
<template>
    <sf-no-side-container :id="$parent.moduleName">
        <sf-title-container class="mb20">
            截止目前，总共有
            <span class="fz18 color-yellow">1000</span>
            个任务，共运行了
            <span class="fz18 color-blue">2000</span>
            次；其中成功
            <span class="fz18 color-green">190</span>
            次，失败
            <span class="fz18 color-red">1000</span>次。
        </sf-title-container>
        <el-container>
            <el-container style="margin-left:0!important">
                <el-main style="margin-left:0!important">
                    <!-- 任务运行分布图 -->
                    <echarts></echarts>
                </el-main>
                <el-footer class="selfFooter ml0" style="margin-left:0!important">
                    <mainPage></mainPage>
                </el-footer>
            </el-container>
            <el-aside v-if='isOpen'>
                <attributeDetails @close="close"></attributeDetails>
            </el-aside>
        </el-container>
        <!-- 弹出层 -->
        <el-dialog append-to-body :title="dialogFormData.title" :class="dialogFormData.class" :close-on-click-modal="false" :visible.sync="dialogFormData.show">
            <!-- 调度设置 -->
            <Scheduling
                :formData="dialogFormData"
                v-if="dialogFormData.show && dialogFormData.value === _provided.POP_TYPE_SCHEGULING"
            ></Scheduling>
            <!-- 移动目录 -->
            <Move
                :formData="dialogFormData"
                v-if="dialogFormData.show && dialogFormData.value === _provided.POP_TYPE_MOVE"
            ></Move>
        </el-dialog>
    </sf-no-side-container>
</template>
<script>
// components
import echarts from './components/echarts';
import attributeDetails from './components/attributeDetails';
import mainPage from './components/mainPage';
// Dialog
import Scheduling from './dialog/scheduling';
import Move from './dialog/move';
// vuex
import * as storeStatic from './store/qualityScheduling/storeStatic.js';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('qualityScheduling');
export default {
    name: 'qualityScheduling',
    components: {
        echarts,
        attributeDetails,
        mainPage,
        Scheduling,
        Move
    },
    provide: {
        // 弹窗类型 -> 调度设置
        POP_TYPE_SCHEGULING: 'Scheduling',
        // 弹窗类型 -> 移动目录
        POP_TYPE_MOVE: 'Move'
    },
    data() {
        return {
            nowTime: 0,
            // 显示日期范围
            calendarRange: [],
            chartsData: [],
            // 柱状图
            nowData: [],
            // 是否显示属性
            isOpen: true
        };
    },
    computed: {
        ...mapState({
            // 弹窗信息
            dialogFormData: state => state.dialogFormData
        })
    },
    created() {
    },
    mounted() {},
    methods: {
        ...mapMutations([
            storeStatic.M_RESET_STATE
        ]),
        ...mapActions([]),
        /**
         * 关闭 属性
        */
        close() {
            this.isOpen = false;
        }
    },
    beforeDestroy() {
        this[storeStatic.M_RESET_STATE]();
    },
    destroyed() {}
};
</script>
