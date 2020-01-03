<!--
 * @moduleName: 审核管理 - 审核流程配置 - 环节模板管理
 * @Author: SuLiang
 * @Date: 2019-01-23 14:59:45
 * @LastModifiedBy: SuLiang
 * @LastEditTime: 2019-02-01 15:22:18
 -->

<template>
    <div class="sf-no-side-container" v-loading="pageLoad">
        <div class="sf-main-table-box">
            <sf-filter-group label="环节状态">
                <sf-filter v-model="useStatus" :data="statusList" default='' @queryChange="queryChange"></sf-filter>
            </sf-filter-group>
            <div class="sf-main-title">
                <!-- 新增按钮 -->
                <el-button-group>
                    <el-button icon="sf-icon-c-add" @click="addFun">新增</el-button>
                </el-button-group>
                <!-- search bar  -->
                <div class="searchBar">
                    <input autocomplete="off" type="text" maxlength="32" name="searchLable" class="searchInput" placeholder="输入环节编号、环节名称进行查询" v-model="searchKey" @keyup.enter="searchFun">
                    <a href="javascript:;" class="searchBtn" @click="searchFun">
                        <i class="el-icon-search"></i>
                    </a>
                </div>
            </div>
            <!-- 采集列表 -->
            <div class="cardWrap" v-if="taskList.length > 0">
                <ul class="cardList clearfix">
                    <li :key="item.flowId" v-for="item in taskList">
                        <div class="tableList-item">
                            <div class="list-head">
                                <span class="text" :title="item.nodeName">{{item.nodeName||'---'}}</span>
                            </div>
                            <div class="list-body">
                                <ul class="list-info">
                                    <li>
                                        <span class="name">环节编号：</span>
                                        <span class="val" :title="item.nodeNo">{{item.nodeNo}}</span>
                                    </li>
                                    <li>
                                        <span class="name">创建时间：</span>
                                        <span class="val">{{item.timer?item.timer:'--'}}</span>
                                    </li>
                                    <li>
                                        <span class="name">环节状态：</span>
                                        <span class="val">
                                            <span v-if="item.useStatus==='ENABLE'" class="spanbg play">已启用</span>
                                            <span v-if="item.useStatus==='DISABLE'" class="spanbg draft">已停用</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div v-if="item.nodeNo !== 'HJC000'" class="list-setting">
                                <div class="list-setting-in">
                                    <el-tooltip :enterable="false" effect="dark" content="停用环节" placement="top" v-if="item.useStatus==='ENABLE'">
                                        <span class="item">
                                            <span>
                                                <i class="el-icon-c-stop" @click="stopFun(item)"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip :enterable="false" effect="dark" content="查看环节" placement="top" v-if="item.useStatus==='ENABLE'">
                                        <span class="item">
                                            <span>
                                                <i class="el-icon-c-view" @click="viewFun(item)"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip :enterable="false" effect="dark" content="启用环节" placement="top" v-if="item.useStatus==='DISABLE'">
                                        <span class="item">
                                            <span>
                                                <i class="el-icon-c-start" @click="startFun(item)"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip :enterable="false" effect="dark" content="编辑环节" placement="top" v-if="item.useStatus==='DISABLE'">
                                        <span class="item">
                                            <span>
                                                <i class="el-icon-c-edit" @click="editFun(item)"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip :enterable="false" effect="dark" content="删除环节" placement="top" v-if="item.useStatus==='DISABLE'">
                                        <span class="item">
                                            <span>
                                                <i class="el-icon-c-delete" @click="delFun(item)"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip :enterable="false" effect="dark" content="同步更新流程" placement="top" v-if="item.useStatus==='ENABLE'">
                                        <span class="item">
                                            <span>
                                                <i class="el-icon-c-operation" @click="recycleFun(item)"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-else class="j-nodata"></div>
        </div>
        <NodeForm :formData='nodeFormData' v-if='nodeFormData.show' @getTableList='getTaskListFun'/>
    </div>
</template>
<script>
import { dateFormatter } from 'javascript@/utils/utils.js';
// 新增-编辑框
import NodeForm from './nodes/nodeForm';
// js
export default {
    data() {
        return {
            // 搜索输入值
            searchKey: '',
            useStatus: '',
            // 任务列表
            taskList: [],
            // 环节弹框
            nodeFormData: {
                data: {},
                ctrl: 'add',
                show: false,
                // 节点信息
                nodeInfo: {}
            },
            statusList: [
            {
                name: '全部',
                value: ''
            },
            {
                name: '已启用',
                value: 'ENABLE'
            }, {
                name: '已停用',
                value: 'DISABLE'
            }],
            pageLoad: false
        };
    },
    created() {
        // 获取任务列表(全部，无搜索条件)
        // this.getTaskListFun();
    },
    mounted() {},
    methods: {
        // 问题单#95937 修改
        queryChange(obj) {
            this.useStatus = obj.useStatus || '';
            this.searchFun();
        },
        searchFun() {
            this.getTaskListFun();
        },
        // 获取列表
        getTaskListFun() {
            this.$factory('/wydataeye/audit/deploy/listNodeModel.json', {
                param: {
                    keyword: this.searchKey,
                    // ENABLE/DISABLE
                    useStatus: this.useStatus || ''
                },
                page: {
                    index: -1,
                    rows: 10000
                }
            }, 'GET').then(res => {
                let resData = res.data || {};
                let list = resData.list || [];
                list.forEach((item, index) => {
                    // 数据保护
                    item.nodeNo = item.nodeNo || '';
                    item.timer = dateFormatter(item.createTime);
                });
                this.taskList = list;
            });
        },
        // 新增
        addFun() {
            this.nodeFormData.show = true;
            this.nodeFormData.data = {};
            this.nodeFormData.ctrl = 'add';
        },
        // 启用
        startFun(row) {
            // this.$factory('/wydataeye/audit/deploy/nodeEnable.json', {
            //     flowId: row.flowId
            // }, 'POST').then(res => {
            //     this.searchFun();
            // });
        },
        // 同步函数
        recycleFun(row) {
            // this.$factory('/wydataeye/audit/deploy/countNodeRef.json', {
            //     flowId: row.flowId
            // }, 'GET').then(res => {
            //     let { DRAFT, CHANGE, ENABLE, DISABLE, SUM } = res.data || {};
            //     this.$$confirm(`<p>当前环节关联<strong>${SUM}</strong>个流程，其中已启用状态<strong>${ENABLE}</strong>个，变更中状态<strong>${CHANGE}</strong>个，已停用状态<strong>${DISABLE}</strong>个，草稿状态<strong>${DRAFT}</strong>个。</p><p>同步更新流程将会覆盖节点内容，并把已启用状态的流程更新为“变更中”，是否确认更新？</p>`, this.i18n.message.SYSTEM_TXT, {
            //         closeOnClickModal: false,
            //         dangerouslyUseHTMLString: true,
            //         confirmButtonText: this.i18n.message.OK,
            //         cancelButtonText: this.i18n.message.CANCEL,
            //         type: 'warning'
            //     }).then(() => {
            //         this.$factory('/wydataeye/audit/deploy/syncNodeToProcess.json', {
            //             flowId: row.flowId
            //         }, 'POST').then(res => {
            //             // 刷新列表
            //             this.searchFun();
            //         });
            //     }).catch(() => {});
            // });
        },
        // 停用
        stopFun(row) {
            // this.$factory('/wydataeye/audit/deploy/nodeDisable.json', {
            //     flowId: row.flowId
            // }, 'POST').then(res => {
            //     this.searchFun();
            // });
        },
        // 编辑
        editFun(row) {
            this.nodeFormData.show = true;
            this.nodeFormData.data = row;
            this.nodeFormData.ctrl = 'edit';
        },
        // 查看
        viewFun(row) {
            this.nodeFormData.show = true;
            this.nodeFormData.data = row;
            this.nodeFormData.ctrl = 'view';
        },
        // 删除
        delFun(row) {
            let flowId = row.flowId;
            this.pageLoad = true;
            this.queryIsNodeModelUsing(flowId).then(message => {
                this.secondInquiry(message + '确认删除?', () => {
                    // 执行删除函数
                    this.$factory('/wydataeye/audit/deploy/deleteNodeModel.json', {
                        flowId
                    }, 'GET').then((res) => {
                        // 缺省值保护
                        this.$message.success(res.message || this.i18n.message.OPERATION_COMPLETE);
                        // _this.$message.success(res.message);
                        // 刷新表格数据 无论失败或成功都刷新列表
                        this.searchFun();
                    }).catch(() => {
                        this.searchFun();
                    });
                });
            }, () => {
                this.$message.error('查询环节模板异常');
            }).finally(() => {
                this.pageLoad = false;
            });
        },
        queryIsNodeModelUsing(flowId) {
            return new Promise((resolve, reject) => {
                this.$factory('/wydataeye/audit/deploy/checkModelNodeUse.json', {
                    nodeId: flowId
                }, 'GET').then((res) => {
                    if (res.status) {
                        resolve(res.data);
                    } else {
                        reject(new Error('查询环节模板异常'));
                    }
                }).catch((e) => {
                    reject(e);
                });
            });
        },
        /**
         * @Author      SuLiang
         * @DateTime    2018-01-31
         * @lastTime    2018-01-31
         * @description 二次删除提示
         * @param       {[type]}      msg        [提示语]
         * @param       {[type]}      confirmFun [确认函数]
         * @param       {[type]}      cancelFun  [取消函数]
         */
        secondInquiry(msg, confirmFun, cancelFun) {
            this.$$confirm(msg, this.i18n.message.SYSTEM_TXT, {
                closeOnClickModal: false,
                confirmButtonText: this.i18n.message.OK,
                cancelButtonText: this.i18n.message.CANCEL,
                type: 'warning'
            }).then(() => {
                // 执行函数
                if (confirmFun && typeof(confirmFun) === 'function') {
                    confirmFun();
                }
            }).catch(() => {
                if (cancelFun && typeof(cancelFun) === 'function') {
                    cancelFun();
                }
            });
        }
    },
    components: {
        NodeForm
    }
};
</script>
