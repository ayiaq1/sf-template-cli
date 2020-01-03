<!--
 * @moduleName: 模型设计 -- 左侧栏  -- 模型库
 * @Author: dawdler
 * @Date: 2019-12-27 11:44:31
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2020-01-02 16:10:24
 -->
<template>
    <el-aside class="left-model-wrap">
        <sf-header>
            <sf-header-title>
                <span>模型库</span>
                <sf-link @click="isSearch = !isSearch">
                    <i class="sf-icon-c-search"></i>
                </sf-link>
            </sf-header-title>
            <el-row :gutter="10" class="mb10">
                <el-col :span="10">
                    <el-select v-model="modelType">
                        <el-option v-for="item in getModelList()" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                    </el-select>
                </el-col>
                <el-col :span="14">
                    <el-radio-group v-model="radio" @change="_changeTreeDataFun">
                        <el-radio-button label="0">数据组织</el-radio-button>
                        <el-radio-button label="1">自定义</el-radio-button>
                    </el-radio-group>
                </el-col>
            </el-row>
            <sf-search-bar v-model="keywords" v-show="isSearch" placeholder="输入模型名称进行查询查询" @searchFun="_searchFun" />
        </sf-header>
        <sf-tree ref="nTree" expandAll :data="treeData" :props="treeProps" v-model="treeId" :render="_treeRenderFun" @nodeClickFun="_treeClickFun"/>
    </el-aside>
</template>
<script>
import { modelList } from '../../javascript/codeTable';
export default {
    name: 'top',
    components: {},
    data() {
        return {
            treeId: '',
            treeData: [],
            treeProps: {
                label: 'name',
                value: 'flowId',
                parentId: 'parentId',
                disabled: 'disabled',
                children: 'children'
            },
            isSearch: false,
            activeType: '0',
            radio: '0',
            keywords: '',
            modelType: ''
        };
    },
    watch: {},
    created() {},
    mounted() {
        this.$nextTick(() => {
            this.treeData = [
                {
                    name: '原始层',
                    flowId: '1',
                    parentId: '-1',
                    icon: 'c-floor',
                    children: [
                        {
                            name: '物理模型1',
                            icon: 'c-mysql',
                            flowId: '11',
                            parentId: '1',
                            count: 21390
                        },
                        {
                            name: '物理模型2',
                            icon: 'c-pg',
                            flowId: '12',
                            parentId: '1',
                            count: 98
                        }
                    ]
                },
                {
                    name: '基础层',
                    icon: 'c-floor',
                    flowId: '3',
                    parentId: '-1',
                    children: [
                        {
                            name: '物理模型3',
                            icon: 'c-logic',
                            flowId: '33',
                            parentId: '3',
                            count: 8
                        }
                    ]
                }
            ];
            this.$refs.nTree.updataFun(this.treeData);
        });
    },
    methods: {
        // 获取模型列表
        getModelList() {
            return modelList;
        },
        _searchFun() {},
        // 切换 数据数组 | 自定义
        _changeTreeDataFun() {},
        _treeClickFun(node) {
            console.log('_clickFun=>', node);
        },
        _editFun(node) {},
        _deleteFun(node) {},
        // 自写树组件render方法
        _treeRenderFun(h, { node }, ctx) {
            let title = node[this.treeProps.label] + (node.count !== undefined ? ' (' + node.count + ')' : '');
            return (
                <sf-tree-render>
                    <sf-tree-label title={title}>
                        <i class={'sf-icon-' + node.icon}></i>
                        <span>{title}</span>
                    </sf-tree-label>
                    <sf-tree-ctrl title={title}>
                        <el-tooltip content='编辑' placement='top'>
                            <span>
                                <i class='sf-icon-c-edit-outline' on-click={e => this._editFun(node)}></i>
                            </span>
                        </el-tooltip>
                        <el-tooltip content='删除' placement='top'>
                            <span>
                                <i class='sf-icon-c-delete' on-click={e => this._deleteFun(node)}></i>
                            </span>
                        </el-tooltip>
                    </sf-tree-ctrl>
                </sf-tree-render>
            );
        }
    }
};
</script>
