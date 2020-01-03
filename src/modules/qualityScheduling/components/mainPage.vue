<!--
 * @moduleName: 质量调度 -> 任务列表
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 11:12:23
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime : 2019-12-30 11:12:23
 -->
<template>
    <sf-no-side-container>
        <el-container>
            <el-aside>
                <catalog></catalog>
            </el-aside>
            <el-main>
                <!-- 表格 -->
                <sf-main-table-box>
                    <sf-main-title>
                        <el-button-group>
                            <el-button icon="sf-icon-c-dispatch" @click="scheduling()">调度配置</el-button>
                            <el-button icon="sf-icon-m-catalog" @click="move()">移动目录</el-button>
                            <el-button icon="sf-icon-c-online" @click="online()">上线</el-button>
                            <el-button icon="sf-icon-c-offline"  @click="offline()">下线</el-button>
                            <el-button icon="sf-icon-c-run-dispatch" @click="run()">立即执行</el-button>
                        </el-button-group>
                        <sf-search-bar
                            ref="searchBar"
                            :maxlength="32"
                            placeholder="请输入任务名称进行查询"
                        />
                    </sf-main-title>
                    <sf-table
                        ref="taskListTable"
                        :data="taskList"
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
                                        content="调度配置"
                                        placement="top"
                                    >
                                        <span><span class="obtn">
                                            <i class="sf-icon-c-dispatch"  @click.stop="scheduling(row)"></i>
                                        </span></span>
                                    </el-tooltip>
                                    <el-tooltip
                                        :enterable="false"
                                        :open-delay="300"
                                        content="下线"
                                        placement="top"
                                    >
                                        <span><span class="obtn">
                                            <i class="sf-icon-c-offline"   @click.stop="offline(row)"></i>
                                        </span></span>
                                    </el-tooltip>
                                    <el-tooltip
                                        :enterable="false"
                                        :open-delay="300"
                                        content="上线"
                                        placement="top"
                                    >
                                        <span><span class="obtn">
                                            <i class="sf-icon-c-online" @click="online(row)"></i>
                                        </span></span>
                                    </el-tooltip>
                                    <el-tooltip
                                        :enterable="false"
                                        :open-delay="300"
                                        content="立即执行"
                                        placement="top"
                                    >
                                        <span><span class="obtn">
                                            <i class="sf-icon-c-run-dispatch" @click.stop="run(row)"></i>
                                        </span></span>
                                    </el-tooltip>
                                </sf-table-operation>
                            </template>
                        </template>
                    </sf-table>
                </sf-main-table-box>
            </el-main>
        </el-container>
    </sf-no-side-container>
</template>
<script>
// dialog dialogClass
import { dialogClass, globalStatic } from 'javascript@/event/globalStatic.js';
// components
import catalog from './catalog';
// vuex
import * as storeStatic from '../store/qualityScheduling/storeStatic.js';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('qualityScheduling');
export default {
    components: {
        catalog
    },
    inject: [
        'POP_TYPE_SCHEGULING',
        'POP_TYPE_MOVE'
    ],
    data() {
        return {
            loading: false,
            // 任务列表
            taskList: {
                total: 1,
                tableList: [{
                    id: 1,
                    taskName: '测试任务名称',
                    taskStatus: '已启用',
                    schedulingStatus: '已上线',
                    schedulingType: '周期性',
                    catalog: '目录一',
                    status: '成功'
                }]
            },
            columns: [{
                type: 'selection',
                minWidth: 55
            }, {
                name: '任务名称',
                dataIndex: 'taskName',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '任务状态',
                dataIndex: 'taskStatus',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '调度状态',
                dataIndex: 'schedulingStatus',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '调度类型',
                dataIndex: 'schedulingType',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '所属目录',
                dataIndex: 'catalog',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '最新运行状态',
                dataIndex: 'status',
                showOverflowTooltip: true,
                disabled: true
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
    computed: {
        ...mapState({
            // 弹窗信息
            dialogFormData: state => state.dialogFormData
        })
    },
    create() {
    },
    mounted() {},
    methods: {
        ...mapMutations([
            // 弹出层 公共信息
            storeStatic.M_DIALOG_DATA
        ]),
        ...mapActions([]),
        // 设置调度
        scheduling() {
            let { POP_TYPE_SCHEGULING } = this;
            let dialogData = {
                value: POP_TYPE_SCHEGULING,
                type: globalStatic.ADD,
                data: null,
                class: dialogClass.SMALL,
                title: '调度设置',
                show: true
            };
            this[storeStatic.M_DIALOG_DATA](dialogData);
        },
        // 移动目录
        move() {
            let { POP_TYPE_MOVE } = this;
            let dialogData = {
                value: POP_TYPE_MOVE,
                type: globalStatic.ADD,
                data: null,
                class: dialogClass.TINY,
                title: '移动目录',
                show: true
            };
            this[storeStatic.M_DIALOG_DATA](dialogData);
        },
        // 上线
        online(row) {
            this.$$confirm('任务上线后将会按照频率进行调度，是否确认将所选的100个任务进行上线操作？', this.$t('system_text'), {
                closeOnClickModal: false,
                confirmButtonText: this.$t('confirm'),
                cancelButtonText: this.$t('cancel'),
                type: 'warning'
            })
            .then(() => {
                console.log(row);
            })
            .catch(e => {});
        },
        // 下线
        offline(row) {
            this.$$confirm('任务下线后将不能被执行，是否确认将所选的100个任务进行下线操作？', this.$t('system_text'), {
                closeOnClickModal: false,
                confirmButtonText: this.$t('confirm'),
                cancelButtonText: this.$t('cancel'),
                type: 'warning'
            })
            .then(() => {
                console.log(row);
            })
            .catch(e => {});
        },
        // 立即执行
        run() {
            this.$message.success('执行成功！');
        }
    }
};
</script>
