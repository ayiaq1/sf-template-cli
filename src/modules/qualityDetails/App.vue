<!--
 * @moduleName: 问题详情 -> 主页
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 11:12:23
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime : 2019-12-30 11:12:23
 -->
<template>
    <sf-no-side-container :id="$parent.moduleName">
        <sf-title-container class="mb20">
            截止目前，本系统总共产生了
            <span class="fz18 color-yellow">100</span>
            个问题工单，其中校验了
            <span class="fz18 color-blue">1000</span>
            个数据，产生了
            <span class="fz18 color-green">1000</span>
            个问题；目前问题数据已占用的存储总量约为
            <span class="fz18 color-red">100</span> M.
        </sf-title-container>
        <el-container>
            <el-main class="ml0">
                <mainPage></mainPage>
            </el-main>
            <el-aside v-if='isOpen'>
                <attributeDetails @close="close"></attributeDetails>
            </el-aside>
        </el-container>
        <!-- 弹出层 -->
        <el-dialog append-to-body :title="dialogFormData.title" :class="dialogFormData.class" :close-on-click-modal="false" :visible.sync="dialogFormData.show">
            <!-- 问题派发 批量 -->
            <BatchDistributed
                :formData="dialogFormData"
                v-if="dialogFormData.show && dialogFormData.value === _provided.POP_TYPE_BATCH_DISTRIBUTED"
            ></BatchDistributed>
            <!-- 问题派发 单条 -->
            <SingleDistributed
                :formData="dialogFormData"
                v-if="dialogFormData.show && dialogFormData.value === _provided.POP_TYPE_SINGLE_DISTRIBUTED"
            ></SingleDistributed>
            <!-- 作废 -->
            <Invalid
                :formData="dialogFormData"
                v-if="dialogFormData.show && dialogFormData.value === _provided.POP_TYPE_INVALID"
            ></Invalid>
            <!-- 删除 -->
            <Delete
                :formData="dialogFormData"
                v-if="dialogFormData.show && dialogFormData.value === _provided.POP_TYPE_DELETE"
            ></Delete>
            <!-- 清除数据 -->
            <Clear
                :formData="dialogFormData"
                v-if="dialogFormData.show && dialogFormData.value === _provided.POP_TYPE_CLEAR"
            ></Clear>
            <!-- 查看问题详情 -->
            <problemDetails
                :formData="dialogFormData"
                v-if="dialogFormData.show && dialogFormData.value === _provided.POP_TYPE_PROBLEM_DETAILS"
            ></problemDetails>
        </el-dialog>
    </sf-no-side-container>
</template>
<script>
// components
import mainPage from './components/mainPage';
import attributeDetails from './components/attributeDetails';
// Dialog
import problemDetails from './dialog/problemDetails';
import BatchDistributed from './dialog/batchDistributed';
import SingleDistributed from './dialog/singleDistributed';
import Invalid from './dialog/invalid';
import Delete from './dialog/delete';
import Clear from './dialog/clear';
// Vuex
import * as storeStatic from './store/qualityDetails/storeStatic.js';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('qualityDetails');
export default {
    components: {
        mainPage,
        attributeDetails,
        BatchDistributed,
        SingleDistributed,
        Invalid,
        Delete,
        Clear,
        problemDetails
    },
    provide: {
        // 弹窗类型 -> 问题派发 批量
        POP_TYPE_BATCH_DISTRIBUTED: 'BatchDistributed',
        // 弹窗类型 -> 问题派发 单条
        POP_TYPE_SINGLE_DISTRIBUTED: 'SingleDistributed',
        // 弹窗类型 -> 作废
        POP_TYPE_INVALID: 'Invalid',
        // 弹窗类型 -> 删除
        POP_TYPE_DELETE: 'Delete',
        // 弹窗类型 -> 清除
        POP_TYPE_CLEAR: 'Clear',
        // 弹窗类型 -> 问题详情
        POP_TYPE_PROBLEM_DETAILS: 'problemDetails'
    },
    data() {
        return {
            isOpen: true
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
