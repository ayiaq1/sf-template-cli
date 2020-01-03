<!--
 * @moduleName: 中心资源 -> 数据组织
 * @Author: zhangboxin
 * @Date: 2019-12-24 17:32:40
 * @LastModifiedBy: zhangboxin
 * @LastEditTime : 2020-01-02 14:30:42
 -->
<template>
    <el-aside class="cr-leftSide">
        <sf-header>
            <sf-header-title>
                <span>数据组织</span>
                <sf-link @click="isSearch = !isSearch">
                    <i class="sf-icon-c-search"></i>
                </sf-link>
            </sf-header-title>
            <sf-search-bar v-model="keywords" v-show="isSearch" @searchFun="_searchFun" />
        </sf-header>
        <div class="dataOrg_addBtn">
            <i class="el-icon-folder-add addBtn_icon" title="新增一级分层" @click="_treeNodeOperFun(CTRL_ADD, '新增一级分层', TYPE_LAYER1, NODE_TYPE_LAYER)"></i>
        </div>
        <el-button class="dataOrg_allBtn" type="primary"><span>全部资源</span></el-button>
        <div class="dataOrg_tree">
            <el-tree ref="tree" :data="dataOrgData" :props="dataOrgProps" @node-click="handleNodeClick" :node-key="dataOrgProps.flowId" :render-content="_treeNodeRenderFun" accordion highlight-current>
            </el-tree>
        </div>
    </el-aside>
</template>
<script>
import { dialogClass } from 'javascript@/event/globalStatic.js';
import * as storeStatic from '../store/centerResources/storeStatic.js';
// import * as codeTable from '../javascript/codeTable.js';
import { dataOrgTree } from '../data.js';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('centerResources');
export default {
    name: 'dataOrganization',
    inject: ['CTRL_ADD', 'CTRL_EDIT', 'CTRL_VIEW', 'CTRL_DEL', 'NODE_TYPE_LAYER', 'NODE_TYPE_DOMAIN', 'TYPE_LAYER1', 'TYPE_LAYER2', 'TYPE_DOMAIN1', 'TYPE_DOMAIN2'],
    data() {
        return {
            // 加载状态
            isloading: false,
            isSearch: false,
            //  dd
            dataOrgData: dataOrgTree,
            //  dd
            dataOrgProps: {
                label: 'nameZh',
                flowId: 'flowId',
                children: 'children'
            },
            keywords: ''
        };
    },
    watch: {},
    computed: {
        ...mapState({
            // 主弹窗信息
            dialogFormData: state => state.dialogFormData
        })
    },
    created() {},
    destroyed() {},
    mounted() {
        this.init();
        console.log(dataOrgTree);
    },
    methods: {
        ...mapMutations([storeStatic.M_DIALOG_DATA, storeStatic.M_FILTER_SEARCH_DATA, storeStatic.M_PAGE_DATA]),
        ...mapActions([storeStatic.A_DATABASE_TYPE_DATA, storeStatic.A_BUSINESS_TYPE_DATA, storeStatic.A_DATA_SOURCE_DATA, storeStatic.A_DEL_DATASOURCE_DATA]),
        /**
         * 初始化
         */
        init() {},
        /**
         * 数据组织 树节点点击
         */
        handleNodeClick(val) {},
        /**
         * 数据组织 树搜索
         */
        _searchFun() {},
        /**
         * 数据组织 树节点操作
         */
        _treeNodeOperFun(ctrl, title, type, newType, node, e) {
            if (ctrl === this.CTRL_DEL) {
                this._delTreeNodeFun(type, node, e);
            } else {
                let dialogFormData = {
                    title: title,
                    ctrl: ctrl,
                    type: type,
                    newType: newType,
                    class: dialogClass.SMALL,
                    value: 'layerOrDomain',
                    row: node,
                    show: true,
                    treeData: this.dataOrgData // 暂时放这里
                };
                this[storeStatic.M_DIALOG_DATA](dialogFormData);
            }
            console.log(this.dialogFormData);
        },
        /**
         * 数据组织 树节点删除
         */
        _delTreeNodeFun(type, node, e) {
            const { data } = node;
            console.log(data);
            const { NODE_TYPE_LAYER, NODE_TYPE_DOMAIN } = this;
            if (data.type === NODE_TYPE_LAYER) {
                // 删除分层时，如果下边存在子分层或者存在主题域或者存在逻辑模型实体则不能删除
                if (data.children && data.children.length > 0) {
                    this.$message.error('当前分层下存在子分层或主题域或逻辑实体不能进行删除！');
                    return false;
                } else if (data.tableNumber > 0) {
                    this.$message.error('当前分层下存在主题域或逻辑实体不能进行删除！');
                    return false;
                }
            } else if (data.type === NODE_TYPE_DOMAIN) {
                //  当前主题域下存在子主题域或逻辑实体不能进行删除
                if (data.children && data.children.length > 0) {
                    this.$message.error('当前主题域下存在子主题域或逻辑实体不能进行删除！');
                    return false;
                } else if (data.tableNumber > 0) {
                    this.$message.error('当前主题域下存在逻辑实体不能进行删除！');
                    return false;
                }
            }
            this.$$confirm('确认删除吗？', '系统提示', {
                cancelButtonText: '取消',
                confirmButtonText: '确认',
                type: 'warning'
            }).then(() => {
                this.loading = true;
                this.$factory(
                    '/wydataeye/datamodel/layerdomain/delete.json',
                    {
                        flowId: data.flowId || this.treeRow[this.treeProps.value]
                    },
                    'POST'
                )
                    .then(response => {
                        this.loading = false;
                        if (response.status) {
                            // 清空当前选中
                            this.treeRow = null;
                            this.treeActiveKey = '';
                            this._getTreeDataFun();
                        }
                    })
                    .catch(e => {
                        this.loading = false;
                    });
            });
            if (e) {
                event.stopPropagation();
                event.preventDefault();
            }
        },
        /**
         * 数据组织 树节点渲染
         */
        _treeNodeRenderFun(h, { node, data, store }) {
            // console.log(node);
            // console.log(data);
            const { CTRL_ADD, CTRL_EDIT, CTRL_DEL, NODE_TYPE_LAYER, NODE_TYPE_DOMAIN, TYPE_LAYER1, TYPE_LAYER2, TYPE_DOMAIN1, TYPE_DOMAIN2 } = this;
            let nodeIconClass = (data.type === NODE_TYPE_LAYER ? 'el-icon-s-grid' : 'el-icon-s-order') + ' mr5';
            const parentType = node.parent.data.type ? node.parent.data.type : '';
            let nodeType = '';
            // 区分具体分层和分域 (产品需求确认，目前最多两级分层和两层分域)
            if (data.type === NODE_TYPE_LAYER && data.parentId === 'root') {
                nodeType = TYPE_LAYER1;
            } else if (data.type === NODE_TYPE_LAYER && parentType === NODE_TYPE_LAYER) {
                nodeType = TYPE_LAYER2;
            } else if (data.type === NODE_TYPE_DOMAIN && parentType === NODE_TYPE_LAYER) {
                nodeType = TYPE_DOMAIN1;
            } else if (data.type === NODE_TYPE_DOMAIN && parentType === NODE_TYPE_DOMAIN) {
                nodeType = TYPE_DOMAIN2;
            }
            // 如果一级分层存在子分层，则一级分层上不能新增主题域，只有子分层上可以新增主题域。
            const childrenType = data.children ? data.children[0].type : '';
            const addDomainFlag = nodeType === TYPE_LAYER1 && childrenType === NODE_TYPE_LAYER;
            return (
                <span class="dataOrg_node">
                    <span class="el-tree-node__label" title={node.label + '（' + data.tableNumber + '）'}>
                        <span class={nodeIconClass} />
                        <span class="user-node-label">{node.label}</span>（{data.tableNumber}）
                    </span>
                    <el-popover ref="OperSrcPop" popper-class="cr-btnPopover" placement="bottom-end" trigger="hover">
                        <ul>
                            <li class="btnPopover_item" v-show={[TYPE_LAYER1].includes(nodeType)} on-click={e => this._treeNodeOperFun(CTRL_ADD, '新增子分层', nodeType, NODE_TYPE_LAYER, node, e)}>
                                <i class="el-icon-folder-add btnPopover_icon" />
                                <span>新增子分层</span>
                            </li>
                            <li class="btnPopover_item" v-show={[TYPE_LAYER1, TYPE_LAYER2, TYPE_DOMAIN1].includes(nodeType) && !addDomainFlag} on-click={e => this._treeNodeOperFun(CTRL_ADD, '新增主题域', nodeType, NODE_TYPE_DOMAIN, node, e)}>
                                <i class="el-icon-folder-add btnPopover_icon" />
                                <span>新增主题域</span>
                            </li>
                            <li class="btnPopover_item" v-show={[TYPE_LAYER1, TYPE_LAYER2].includes(nodeType)} on-click={e => this._treeNodeOperFun(CTRL_EDIT, '编辑分层', nodeType, NODE_TYPE_LAYER, node, e)}>
                                <i class="el-icon-edit-outline btnPopover_icon" />
                                <span>编辑分层</span>
                            </li>
                            <li class="btnPopover_item" v-show={[TYPE_DOMAIN1, TYPE_DOMAIN2].includes(nodeType)} on-click={e => this._treeNodeOperFun(CTRL_EDIT, '编辑主题域', nodeType, NODE_TYPE_DOMAIN, node, e)}>
                                <i class="el-icon-edit-outline btnPopover_icon" />
                                <span>编辑主题域</span>
                            </li>
                            <li class="btnPopover_item" v-show={[TYPE_LAYER1, TYPE_LAYER2].includes(nodeType)} on-click={e => this._treeNodeOperFun(CTRL_DEL, '刪除分层', nodeType, NODE_TYPE_LAYER, node, e)}>
                                <i class="el-icon-delete btnPopover_icon" />
                                <span>刪除分层</span>
                            </li>
                            <li class="btnPopover_item" v-show={[TYPE_DOMAIN1, TYPE_DOMAIN2].includes(nodeType)} on-click={e => this._treeNodeOperFun(CTRL_DEL, '刪除主题域', nodeType, NODE_TYPE_DOMAIN, node, e)}>
                                <i class="el-icon-delete btnPopover_icon" />
                                <span>刪除主题域</span>
                            </li>
                        </ul>
                        <i class="el-icon-s-grid dataOrg_more" slot="reference" />
                    </el-popover>
                </span>
            );
        }
    }
};
</script>
