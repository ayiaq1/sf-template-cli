<!--
 * @moduleName: 服务发布 - 左侧
 * @Author: suLiang
 * @Date: 2019-12-31 17:13:07
 * @LastModifiedBy: suLiang
 * @LastEditTime : 2020-01-02 20:45:18
 -->
<template>
    <div>
        <sf-header>
            <sf-header-title>
                <el-tabs v-model="activeName" @tab-click="(comp) => _handleClick(comp.name)">
                    <el-tab-pane cn='接口类型' label="接口类型" name="interfaceType"></el-tab-pane>
                    <el-tab-pane cn='自定义分类' label="自定义分类" name="custom"></el-tab-pane>
                </el-tabs>
            </sf-header-title>
        </sf-header>
        <sf-tree ref="nTree" v-bind="nTreeForm" :props="nTreeForm.props" v-model="nTreeForm.value" :render="_nTreeRenderFun" @nodeClickFun="_nTreeNodeClickFun" @filterFun='_filterFun'></sf-tree>
         <!-- <el-tree :data="treeData" :render-content='_nTreeRenderFun'></el-tree> -->
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import * as storeStatic from '../store/storeStatic';
import baseData from '../javascript/base';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('serviceRelease');
export default {
    data() {
        return {
            activeName: 'interfaceType',
            nTreeForm: {
                value: '',
                checks: [],
                data: [],
                props: {
                    label: 'label',
                    // 用于英文搜索
                    code: 'label',
                    value: 'id',
                    parentId: 'parentId',
                    disabled: 'disabled',
                    children: 'children'
                }
            },
            treeNode: null,
            treeList: [],
            customTreeList: [],
            treeData: []
        };
    },
    components: {},
    computed: {
        ...mapState({
            dialogFormData: state => state.dialogFormData,
            newActiveName: state => state.activeName
        })
    },
    created() {
        console.log(this.$store.state, '<<<');
        this.initFun();
    },
    destroyed() {},
    mounted() {},
    methods: {
        ...mapMutations([
            // 设置选中的页签
            storeStatic.M_SET_ACTIVENAME,
            // 当前选中树节点
            storeStatic.M_SET_TREENODE
        ]),
        ...mapActions([]),
        // 初始化
        initFun() {
            // 初始化赋值
            this._handleClick(this.activeName);
        },
        // 获取树数据
        getTreeDataFun() {
            this.treeList = baseData.leftTreeList || [];
            this.customTreeList = baseData.leftTreeListC || [];
            console.log('baseData>>>', baseData);
            this.setTreeData();
        },
        // 设置数数据
        setTreeData() {
            let treeData = this.activeName === 'interfaceType' ? this.treeList : this.customTreeList;
            this.$nextTick(() => {
                this.$refs.nTree && this.$refs.nTree.updataFun(treeData);
            });
            this.treeData = treeData;
        },
        // 选中赋值
        _handleClick(val) {
            this[storeStatic.M_SET_ACTIVENAME](val);
            this[storeStatic.M_SET_TREENODE](null);
            this.getTreeDataFun();
        },
        // 树节点选中
        _nTreeNodeClickFun(val) {
            this.treeNode = val;
            this[storeStatic.M_SET_TREENODE](val);
        },
        // 过滤
        _filterFun(keyword) {},
        _nTreeRenderFun(h, { node }) {
            let isCustom = this.activeName === 'custom';
            let baseIcon = 'c-folder';
            let icon = node.icon || baseIcon;
            const title = node[this.nTreeForm.props.label] + ' ( ' + node['count'] + ' ) ';
            return (
                <sf-tree-render>
                    <sf-tree-label>
                        <i class={'sf-icon-' + icon}/>
                        <span title={title}>{title}</span>
                    </sf-tree-label>
                    <sf-tree-ctrl v-show={isCustom}>
                        <el-tooltip content='新增' placement='top'>
                            <el-button type='primary' icon='sf-icon-c-add'></el-button>
                        </el-tooltip>
                    </sf-tree-ctrl>
                </sf-tree-render>
            );
        }
    }
};
</script>