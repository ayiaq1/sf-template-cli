<!--
 * @moduleName: 问题详情 -> 问题列表
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 17:32:40
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime : 2019-12-30 17:45:08
 -->
<template>
    <sf-no-side-container>
        <!-- 筛选区 -->
        <filterWamper></filterWamper>
        <!-- 表格 -->
        <sf-main-table-box>
            <sf-main-title>
                <el-button-group>
                    <el-button icon="sf-icon-c-distributed" @click="_batchDistributed()">派发</el-button>
                    <el-button icon="sf-icon-c-invalid" @click="_invalid()">作废</el-button>
                    <el-button icon="sf-icon-c-delete" @click="_delete()">删除</el-button>
                </el-button-group>
            </sf-main-title>
            <sf-table
                ref="questionListTable"
                :data="questionList"
                showCustom
                :props="props"
                :columns="columns"
                v-loading="loading"
            >
                <template #render="{row, value, field}">
                    <!-- 操作区 -->
                    <template v-if="field === 'opt'">
                        <sf-table-operation>
                            <el-tooltip
                                :enterable="false"
                                :open-delay="300"
                                content="问题派发"
                                placement="top"
                            >
                                <span><span class="obtn">
                                    <i class="sf-icon-c-distributed" @click.stop="_singleDistributed(row)"></i>
                                </span></span>
                            </el-tooltip>
                            <el-tooltip
                                :enterable="false"
                                :open-delay="300"
                                content="工单作废"
                                placement="top"
                            >
                                <span><span class="obtn">
                                    <i class="sf-icon-c-invalid" @click.stop="_invalid(row)"></i>
                                </span></span>
                            </el-tooltip>
                            <el-tooltip
                                :enterable="false"
                                :open-delay="300"
                                content="问题明细"
                                placement="top"
                            >
                                <span><span class="obtn">
                                    <i class="sf-icon-c-view" @click.stop="_problemDetails(row)"></i>
                                </span></span>
                            </el-tooltip>
                            <el-tooltip
                                :enterable="false"
                                :open-delay="300"
                                content="清除数据"
                                placement="top"
                            >
                                <span><span class="obtn">
                                    <i class="sf-icon-c-clear"  @click.stop="_clear(row)"></i>
                                </span></span>
                            </el-tooltip>
                        </sf-table-operation>
                    </template>
                </template>
            </sf-table>
        </sf-main-table-box>
    </sf-no-side-container>
</template>

<script>
// dialog dialogClass
import { dialogClass, globalStatic } from 'javascript@/event/globalStatic.js';
// components
import filterWamper from './filterWamper';
// Vuex
import * as storeStatic from '../store/qualityDetails/storeStatic.js';
import { createNamespacedHelpers } from 'vuex';
const { mapMutations } = createNamespacedHelpers('qualityDetails');
export default {
    components: {
        filterWamper
    },
    inject: [
        'POP_TYPE_BATCH_DISTRIBUTED',
        'POP_TYPE_SINGLE_DISTRIBUTED',
        'POP_TYPE_PROBLEM_DETAILS',
        'POP_TYPE_INVALID',
        'POP_TYPE_DELETE',
        'POP_TYPE_CLEAR'
    ],
    data() {
        return {
            loading: false,
            // 任务列表
            questionList: {
                total: 1,
                tableList: [{
                    id: 1,
                    number: 1,
                    taskName: 'SQL测试质量任务',
                    subordinateTable: 'sqlserver@10.0.1.231',
                    responsible: 'admin/系统管理员',
                    createTime: '2020-01-02 10:22:23',
                    status: '已派发',
                    proess: '处理中（1）',
                    checkTotalNumber: 1200,
                    questionTotalNumber: 300
                }]
            },
            columns: [{
                type: 'selection',
                minWidth: 55
            }, {
                name: '序号',
                width: 55,
                dataIndex: 'number',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '任务名称',
                dataIndex: 'taskName',
                minWidth: 200,
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '所属表',
                minWidth: 200,
                dataIndex: 'subordinateTable',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '问题责任人',
                width: 120,
                dataIndex: 'responsible',
                showOverflowTooltip: true,
                disabled: false
            }, {
                name: '问题产生时间',
                width: 140,
                dataIndex: 'createTime',
                showOverflowTooltip: true,
                disabled: false
            }, {
                name: '派发状态',
                width: 100,
                dataIndex: 'status',
                disabled: false
            }, {
                name: '处理进度',
                width: 100,
                dataIndex: 'proess',
                disabled: false
            }, {
                name: '校验总数',
                width: 100,
                dataIndex: 'checkTotalNumber',
                disabled: false
            }, {
                name: '问题总数',
                width: 100,
                dataIndex: 'questionTotalNumber',
                disabled: false
            }, {
                name: '操作',
                width: 130,
                fixed: 'right',
                dataIndex: 'opt',
                disabled: false
            }],
            props: {
                data: 'tableList',
                total: 'total',
                label: 'name',
                value: 'dataIndex'
            }
        };
    },
    watch: {},
    created() {},
    mounted() {
        // this.init();
    },
    methods: {
        ...mapMutations([
            // 弹出层 公共信息
            storeStatic.M_DIALOG_DATA
        ]),
        /**
         * 问题派发 [ 批量 ]
        */
        _batchDistributed(row) {
            let { POP_TYPE_BATCH_DISTRIBUTED } = this;
            let dialogData = {
                value: POP_TYPE_BATCH_DISTRIBUTED,
                type: globalStatic.ADD,
                data: null,
                class: '',
                title: '问题派发',
                show: true
            };
            this[storeStatic.M_DIALOG_DATA](dialogData);
        },
        /**
         * 问题派发 [ 单表 ]
        */
        _singleDistributed(row) {
            let { POP_TYPE_SINGLE_DISTRIBUTED } = this;
            let dialogData = {
                value: POP_TYPE_SINGLE_DISTRIBUTED,
                type: globalStatic.ADD,
                data: row,
                class: '',
                title: '问题派发',
                show: true
            };
            this[storeStatic.M_DIALOG_DATA](dialogData);
        },
        /**
         * 作废
        */
        _invalid(row) {
            let { POP_TYPE_INVALID } = this;
            let dialogData = {
                value: POP_TYPE_INVALID,
                type: globalStatic.ADD,
                data: row,
                class: dialogClass.SMALL,
                title: '系统提示',
                show: true
            };
            this[storeStatic.M_DIALOG_DATA](dialogData);
        },
        /**
         * 删除
        */
        _delete() {
            let { POP_TYPE_DELETE } = this;
            let dialogData = {
                value: POP_TYPE_DELETE,
                type: globalStatic.ADD,
                data: '',
                class: dialogClass.SMALL,
                title: '系统提示',
                show: true
            };
            this[storeStatic.M_DIALOG_DATA](dialogData);
        },
        /**
         * 清除数据
        */
        _clear(row) {
            let { POP_TYPE_CLEAR } = this;
            let dialogData = {
                value: POP_TYPE_CLEAR,
                type: globalStatic.ADD,
                data: row,
                class: dialogClass.SMALL,
                title: '清除数据',
                show: true
            };
            this[storeStatic.M_DIALOG_DATA](dialogData);
        },
        /**
         * 问题明细
        */
        _problemDetails(row) {
            let { POP_TYPE_PROBLEM_DETAILS } = this;
            let dialogData = {
                value: POP_TYPE_PROBLEM_DETAILS,
                type: globalStatic.ADD,
                data: row,
                class: dialogClass.BIG,
                title: '问题明细',
                show: true
            };
            this[storeStatic.M_DIALOG_DATA](dialogData);
        }
    }
};
</script>