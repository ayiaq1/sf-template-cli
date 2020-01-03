<!--
 * @moduleName: 质量开发 -> 任务列表
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 17:32:40
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime : 2019-12-30 17:45:08
 -->
<template>
    <sf-no-side-container>
        <!-- 表格 -->
        <sf-main-table-box>
            <sf-main-title>
                <el-button-group>
                    <div>
                        <el-popover ref="addResPop" popper-class="cr-addPopover" placement="bottom-start" trigger="hover">
                            <!-- <ul>
                                <li class="addPopover_item">
                                    <i class="el-icon-folder-add addPopover_icon"></i><span>组件方式配置</span>
                                    <p class="addPopover_info">通过组件拖拉拽方式完成配置，包括控制，值域，数据范围等20种左右的组件</p>
                                </li>
                                <li class="addPopover_item">
                                    <i class="el-icon-folder-add addPopover_icon"></i><span>SQL配置方式</span>
                                    <p class="addPopover_info">通过编写SQL脚本完成质量开发</p>
                                </li>
                            </ul> -->
                            <newTaskConfig></newTaskConfig>
                            <el-button icon="sf-icon-c-add" slot="reference"><span class="ml5">新增任务</span></el-button>
                        </el-popover>
                    </div>
                    <el-button icon="sf-icon-c-delete">删除</el-button>
                    <el-button icon="sf-icon-c-change">变更</el-button>
                    <el-button icon="sf-icon-c-start">启用</el-button>
                    <el-button icon="sf-icon-c-stop">停用</el-button>
                    <el-button icon="sf-icon-c-import">导入</el-button>
                    <el-button icon="sf-icon-c-export">导出</el-button>
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
                                content="test" placement="top">
                                <span>
                                    <span class="obtn">
                                        <i class="sf-icon-c-schedule"></i>
                                    </span>
                                </span>
                            </el-tooltip>
                        </sf-table-operation>
                    </template>
                </template>
            </sf-table>
        </sf-main-table-box>
    </sf-no-side-container>
</template>

<script>
// components
import newTaskConfig from './slot/newTaskConfig';
export default {
    components: {
        newTaskConfig
    },
    data() {
        return {
            loading: false,
            // 任务列表
            questionList: {
                total: 1,
                tableList: [{
                    id: 1
                }]
            },
            columns: [{
                type: 'selection',
                minWidth: 55
            }, {
                name: '序号',
                dataIndex: 'number',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '任务名称',
                dataIndex: 'taskName',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '质量评价维度',
                width: 150,
                dataIndex: 'taskStatus',
                disabled: true
            }, {
                name: '质量定义',
                minWidth: 120,
                dataIndex: 'schedule',
                disabled: false
            }, {
                name: '规则详情',
                minWidth: 120,
                dataIndex: 'syncMode',
                showOverflowTooltip: true,
                disabled: false
            }, {
                name: '有效性状态',
                width: 100,
                dataIndex: 'inputs',
                showOverflowTooltip: true,
                disabled: false
            }, {
                name: '最新审核状态',
                width: 140,
                dataIndex: 'outputs',
                showOverflowTooltip: true,
                disabled: false
            }, {
                name: '操作',
                width: 160,
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
    }
};
</script>