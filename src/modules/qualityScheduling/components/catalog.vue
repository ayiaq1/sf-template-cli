<!--
 * @moduleName: 质量调度 -- 目录管理
 * @Author: Ma.yunlong
 * @Date: 2019-12-31 15:57
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime: 2019-12-31 15:57
 -->
<template>
    <div>
        <sf-header>
            <sf-header-title>
                <span>目录</span>
                <sf-link ><i class="sf-icon-c-search"></i></sf-link>
            </sf-header-title>
        </sf-header>
        <sf-left-ctrl-bar>
            <el-tooltip content="添加目录" placement="top">
                <el-button size="mini" type="primary" icon="sf-icon-c-add-catalog"></el-button>
            </el-tooltip>
            <el-tooltip content="删除目录" placement="top">
                <el-button size="mini" type="primary" icon="sf-icon-m-delete-catalog"></el-button>
            </el-tooltip>
            <el-tooltip content="进入目录" placement="top">
                <el-button size="mini" type="primary" icon="sf-icon-c-enter"></el-button>
            </el-tooltip>
            <el-tooltip content="向下移动" placement="top">
                <el-button size="mini" type="primary" icon="sf-icon-m-movedown"></el-button>
            </el-tooltip>
            <el-tooltip content="向上移动" placement="top">
                <el-button size="mini" type="primary" icon="sf-icon-m-moveup"></el-button>
            </el-tooltip>
            <el-tooltip content="导入" placement="top">
                <el-button size="mini" type="primary" icon="sf-icon-c-receive"></el-button>
            </el-tooltip>
            <el-tooltip content="导出" placement="top">
                <el-button size="mini" type="primary" icon="sf-icon-c-export-quality"></el-button>
            </el-tooltip>
        </sf-left-ctrl-bar>
        <!-- 目录树 -->
        <sf-tree
            ref="nTree"
            expandAll
            :data="treeData"
            :props="treeProps"
            v-model="treeId"
            :render="_treeRenderFun"
            @nodeClickFun="_treeClickFun"
        ></sf-tree>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            treeId: '',
            treeData: [],
            treeProps: {
                label: 'name',
                value: 'flowId',
                parentId: 'parentId',
                disabled: 'disabled',
                children: 'children'
            }
        };
    },
    created() {},
    mounted() {
        this.$nextTick(() => {
            this.treeData = [{
                name: '全部目录',
                flowId: '1',
                parentId: '-1',
                icon: 'allcatalog',
                children: [
                    {
                        name: '目录一',
                        icon: 'c-folder',
                        flowId: '11',
                        parentId: '1',
                        count: 21390
                    }
                ]
            }];
            this.$refs.nTree.updataFun(this.treeData);
        });
    },
    methods: {
        _treeClickFun(node) {
            console.log('_clickFun=>', node);
        },
        /**
         * 自写树组件render方法
         */
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
