<!--
 * @moduleName: 模型设计 -- 左侧栏  -- 参考表 | 参考标准
 * @Author: dawdler
 * @Date: 2019-12-27 11:44:51
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2020-01-02 16:44:56
 -->
<template>
    <el-aside>
        <sf-header>
            <sf-header-title>
                <el-tabs v-model="activeType">
                    <el-tab-pane label="参考表" name="0"> </el-tab-pane>
                    <el-tab-pane label="参考标准" name="1"> </el-tab-pane>
                </el-tabs>
                <sf-link @click="isSearch = !isSearch"> <i class="sf-icon-c-search"></i></sf-link>
            </sf-header-title>
            <sf-search-bar v-model="keywords" v-show="isSearch" @searchFun="_searchFun" />
        </sf-header>
        <sf-tree ref="nTree" expandAll :data="treeData" :props="treeProps" v-model="treeId" :render="_treeRenderFun" @nodeClickFun="_treeClickFun" />
    </el-aside>
</template>
<script>
export default {
    name: 'bottom',
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
            keywords: ''
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
        _searchFun() {},
        _treeClickFun(node) {
            console.log('_clickFun=>', node);
        },
        // 自写树组件render方法
        _treeRenderFun(h, { node }, ctx) {
            let title = node[this.treeProps.label] + (node.count !== undefined ? ' (' + node.count + ')' : '');
            return (
                <sf-tree-render>
                    <sf-tree-label title={title}>
                        <i class={'sf-icon-' + node.icon}></i>
                        <span>{title}</span>
                    </sf-tree-label>
                </sf-tree-render>
            );
        }
    }
};
</script>
