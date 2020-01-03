<!--
 * @moduleName: 审核管理 - 审核流程配置 - 流程模板管理 - 流程设计
 * @Author: SuLiang
 * @Date: 2019-01-23 11:37:29
 * @LastModifiedBy: SuLiang
 * @LastEditTime: 2019-03-15 10:13:14
 -->

<template>
    <div>
        <el-dialog :title="title" class='big' :close-on-click-modal="false" :visible.sync="formData.show" append-to-body>
            <div class="processSetting">
                <div class="pageContainer">
                    <!-- 左侧树 -->
                    <div class="leftSide">
                        <h5 class='subTitle'>环节列表</h5>
                        <div class="tree-box" :style="{height: (windowSize.height-400) +'px'}">
                            <div class="inner">
                                <el-tree :data="treeList" ref="tree" :props="treeProps" default-expand-all node-key="flowId" @node-click="handleTreeNodeClick"></el-tree>
                            </div>
                        </div>
                    </div>
                    <!-- 右侧列表 -->
                    <div class="rightSide">
                        <h5 class='subTitle'>流程信息</h5>
                        <!-- 列表信息 -->
                        <div class="main-table-box">
                            <div class="table-bd" style="position: relative;">
                                <!-- table -->
                                <el-table ref="multipleTable" :data="nodesList" border style="width: 100%">
                                    <el-table-column prop="nodeName" label="节点名称" show-overflow-tooltip>
                                        <template slot-scope="scope">
                                            <a href="javascript:;" @click.stop="operFun(scope.row, 'view')">
                                                <span>{{scope.row.nodeName}}</span>
                                            </a>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="warnMsg" label="备注" show-overflow-tooltip>
                                        <template slot-scope="scope">{{scope.row.warnMsg}}</template>
                                    </el-table-column>
                                    <el-table-column label="操作" width="80" v-if="ctrlType === 'add' || ctrlType === 'edit'">
                                        <!-- 这一级别无法使用scope 值做判定 -->
                                        <template slot-scope="scope">
                                            <div class="operation">
                                                <el-tooltip placement="top" :enterable="false" :open-delay="500" content="编辑">
                                                    <span>
                                                        <span class="obtn" @click.stop="operFun(scope.row, 'edit')">
                                                            <i class="el-icon-c-edit"></i>
                                                        </span>
                                                    </span>
                                                </el-tooltip>
                                                <el-tooltip placement="top" :enterable="false" :open-delay="500" content="删除">
                                                    <span>
                                                        <span class="obtn" @click.stop="operFun(scope.$index, 'del')">
                                                            <i class="el-icon-c-delete"></i>
                                                        </span>
                                                    </span>
                                                </el-tooltip>
                                            </div>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </div>
                    <!-- 基本信息 -->
                    <a :class="['baseBtn', showInfo ? 'showContent': 'hideContent']" href="javascript:;" @click.stop="() => { showInfo = !showInfo }">基本信息
                        <template v-if="showInfo">&gt;&gt;</template>
                        <template v-else>&lt;&lt;</template>
                    </a>
                    <div :class="['processInfo', showInfo ? 'showContent': 'hideContent']">
                        <div class="infoContent">
                            <ProcessInfo :infoData="processInfo" :ctrl="formData.ctrl" v-show="showInfo" />
                        </div>
                    </div>
                </div>
            </div>
            <div slot="footer" v-if="ctrlType === 'add' || ctrlType === 'edit'">
                <el-button type="primary" @click="saveFun" :loading='loading'>保存</el-button>
                <el-button @click="formData.show = false">取消</el-button>
            </div>
        </el-dialog>
        <NodeForm :formData='nodeFormData' v-if='nodeFormData.show' @setNodeInfo='setNodeInfo' />
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { cloneFun } from 'javascript@/utils';
// 流程信息
import ProcessInfo from './processInfo.vue';
// 节点信息
import NodeForm from '../nodes/nodeForm.vue';
// import
export default {
    props: {
        'formData': {
            type: Object,
            default: () => {
                return {
                    // add(新增), edit(编辑), view(查看), logView(日志查看)
                    ctrl: 'add',
                    data: {},
                    show: true
                };
            }
        }
    },
    data() {
        return {
            // 树列表（待选环节列表）
            treeList: [],
            treeProps: {
                label: 'nodeName',
                children: 'children',
                id: 'flowId'
            },
            treeNodeClick: {},
            // 环节列表
            nodesList: [],
            // 节点顺序
            edgesList: [],
            // 流程信息
            processInfo: {},
            // 节点信息
            nodeFormData: {
                data: {},
                ctrl: 'nodeInfo',
                show: false,
                // 节点信息
                nodeInfo: {}
            },
            loading: false,
            // info框展示
            showInfo: false
        };
    },
    watch: {},
    created() {
        this.initFun();
    },
    computed: {
        ...mapState({
            windowSize: state => state.windowSize
        })
    },
    methods: {
        // 初始化函数
        initFun() {
            this.processInfo = { ...this.processInfo, ...this.formData.data };
            this.ctrlType = this.formData.ctrl || 'add';
            this.title = this.titleFun(this.ctrlType);
            this.getTreeList();
            if (this.ctrlType === 'edit' || this.ctrlType === 'view') {
                this.getEditSourceProcessInfo();
            }
            if (this.ctrlType === 'logView') {
                this.getViewSourceProcessInfo();
            }
        },
        // 获取编辑流程
        getEditSourceProcessInfo() {
            let { ctrl, data = {} } = this.formData;
            if (ctrl !== 'add') {
                this.$factory('/wydataeye/audit/deploy/findProcessDesign.json', {
                    processId: data.flowId || ''
                }, 'GET').then(res => {
                    let resData = res.data || {};
                    let { properties = {}, nodes = [], edges = [] } = resData;
                    this.processInfo = { ...this.processInfo, ...properties };
                    this.nodesList = nodes || [];
                    this.edgesList = edges || [];
                });
            }
        },
        // 获取查看流程
        getViewSourceProcessInfo() {
            let { ctrl, data = {} } = this.formData;
            if (ctrl !== 'add') {
                // 历史进入，data.flowId；
                this.$factory('/wydataeye/audit/deploy/changelogDetail.json', {
                    flowId: data.flowId || ''
                }, 'GET').then(res => {
                    let resData = res.data || {};
                    let { properties = {}, nodes = [], edges = [] } = resData;
                    this.processInfo = { ...this.processInfo, ...properties };
                    this.nodesList = nodes || [];
                    this.edgesList = edges || [];
                });
            }
        },
        // 操作
        operFun(row, type) {
            let obj = {
                del: (index) => {
                    this.nodesList.splice(index, 1);
                },
                edit: (row) => {
                    this.nodeFormData.show = true;
                    this.nodeFormData.data = row;
                    this.nodeFormData.ctrl = 'nodeInfo';
                },
                view: (row) => {
                    this.nodeFormData.show = true;
                    this.nodeFormData.data = row;
                    this.nodeFormData.ctrl = 'view';
                },
                logView: (row) => {
                    this.nodeFormData.show = true;
                    this.nodeFormData.data = row;
                    this.nodeFormData.ctrl = 'view';
                }
            };
            if (typeof obj[type] === 'function') {
                obj[type](row);
            }
        },
        // 左侧树节点点击
        handleTreeNodeClick(row) {
            if (this.ctrlType === 'view' || this.ctrlType === 'logView') {
                return false;
            }
            this.$factory('/wydataeye/audit/deploy/uuid.json', {}, 'POST').then(res => {
                if (res.status) {
                    this.treeNodeClick = cloneFun(row);
                    let processNodeflowId = res.data || '';
                    let modelId = row.flowId;
                    delete row.flowId;
                    this.nodesList.push({
                        ...row,
                        edit: false,
                        modelId: modelId,
                        flowId: processNodeflowId
                    });
                }
            });
        },
        // 获取左侧树
        getTreeList() {
            let postObj = {
                param: {
                    keyword: '',
                    useStatus: 'ENABLE'
                },
                page: {
                    index: 1,
                    rows: 200
                }
            };
            this.$factory('/wydataeye/audit/deploy/listNodeModel.json', postObj, 'GET').then(res => {
                if (res.status) {
                    this.treeList = res.data.list || [];
                    // this.page.total = res.data.total || 0;
                }
            });
        },
        // 获取流程设计基本信息
        getProcessInfo() {
            let info = cloneFun(this.processInfo) || {};
            // 位置信息
            info.nodeLocation = '';
            return info;
        },
        // 获取流程设计节点信息
        getNodesList() {
            let nodesList = cloneFun(this.nodesList) || [];
            return nodesList;
        },
        // 节点顺序
        getEdgesList() {
            let edgesList = cloneFun(this.edgesList) || [];
            let nodesList = this.getNodesList();
            edgesList = [];
            for (let index = 0; index < nodesList.length; index++) {
                if (index < this.nodesList.length - 1) {
                    const nextNode = nodesList[index + 1];
                    edgesList.push({
                        source: nodesList[index].flowId,
                        target: nextNode.flowId
                    });
                }
            }
            return edgesList;
        },
        // 大保存
        saveFun() {
            if (this.loading) return;
            // 触发内部校验 TODO
            // this.$refs.info && this.$refs.info.validateFun();
            this.processInfo._valid = true;
            // 验证表单, 通过提交
            if (this.processInfo._valid) {
                let postObj = {
                    // flowId: this.formData.data.flowId || '',
                    properties: this.getProcessInfo(),
                    nodes: this.getNodesList(),
                    edges: this.getEdgesList()
                };
                delete postObj._valid;
                this.loading = true;
                this.$factory('/wydataeye/audit/deploy/addProcessDesign.json', {
                    design: postObj
                }, 'POST').then((res) => {
                    this.formData.show = false;
                    // 解锁与触发表格刷新
                    this.loading = false;
                    this.$emit('getTableList');
                }, () => {
                    this.loading = false;
                    this.$emit('getTableList');
                }).catch(() => {
                    this.loading = false;
                    this.$emit('getTableList');
                });
            }
        },
        // 取消
        cancelFun() {
            // 弹框关闭
            this.formData.show = false;
        },
        // 信息同步，标识当前
        setNodeInfo(obj) {
            let list = cloneFun(this.nodesList);
            for (let index = 0; index < list.length; index++) {
                if (obj.flowId === list[index].flowId) {
                    list[index] = { ...list[index], ...obj };
                }
            }
            this.nodesList = list;
        },
        // 获取标题
        titleFun(type = 'add') {
            let str = '流程设计';
            let obj = {
                'add': '新增',
                'edit': '编辑',
                'view': '查看',
                'logView': '查看'
            };
            return str + obj[type] || '';
        }
    },
    components: {
        // 流程基本信息
        ProcessInfo,
        // 节点基本信息
        NodeForm
    }
};
</script>
