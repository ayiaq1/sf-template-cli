<template>
    <el-aside>
        <sf-header>
            <sf-header-title>
                <span>数据库</span>
                <sf-link><i class="sf-icon-c-search"></i></sf-link>
            </sf-header-title>
        </sf-header>
        <div>
            <el-button class="singleBtn" @click="choiceDataSourceFun" type="primary"><span class="ml5">选择数据源</span></el-button>
            <div class="unusual-choice">
                <el-checkbox v-model="isOnlyUnusualTable">只显示存在异常的表</el-checkbox>
            </div>
            <div>
                <sf-tree ref="nTree" expandAll :data="treeData" :props="treeProps" v-model="treeId" :render="_treeRenderFun" @nodeClickFun="_treeClickFun"></sf-tree>
            </div>
        </div>
    </el-aside>
</template>

<script>
import { dialogClass, globalStatic } from 'javascript@/event/globalStatic.js';
import * as storeStatic from '../../store/qualityDevelopment/storeStatic.js';
import { createNamespacedHelpers } from 'vuex';
const { mapMutations } = createNamespacedHelpers('qualityDevelopment');
export default {
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
            isOnlyUnusualTable: false
        };
    },
    inject: [
        'POP_TYPE_DATA_SOURCE_CHOICE'
    ],
    created() {},
    mounted() {
        let baseChild = [];
        for (let i = 0; i < 1000; i++) {
            baseChild.push({
                name: '测试表' + i,
                flowId: 'flowId' + i,
                parentId: '3'
            });
        }
        this.$nextTick(() => {
            this.treeData = [{
                name: '数据库1',
                flowId: '1',
                parentId: '-1',
                children: [{
                    name: '测试表1',
                    flowId: '11',
                    parentId: '1',
                    count: 21390
                }, {
                    name: '测试表2',
                    flowId: '12',
                    parentId: '1',
                    count: 98
                }]
            }, {
                name: '数据库2',
                flowId: '3',
                parentId: '-1',
                children: baseChild
            }];
            this.$refs.nTree.updataFun(this.treeData);
        });
    },
    methods: {
        ...mapMutations([
            // 弹出层 公共信息
            storeStatic.M_DIALOG_DATA
        ]),
        /**
         * 组件方式配置
         */
        choiceDataSourceFun() {
            let dialogData = {
                value: this.POP_TYPE_DATA_SOURCE_CHOICE,
                type: globalStatic.ADD,
                data: null,
                class: dialogClass.BIG,
                title: '选择数据源',
                show: true
            };
            this[storeStatic.M_DIALOG_DATA](dialogData);
        },
        _searchFun() {},
        _treeClickFun(node) {
            console.log('_clickFun=>', node);
        },
        _treeRenderFun(h, { node }) {
            const title = node[this.treeProps.label];
            return (<span class='user-node'>
                <span class = 'el-tree-node__label'
                title={title}>{title}</span><span class = 'node-ctrl-wrap'>
                <el-tooltip content='新增数据'
                enterable={ false }
                placement='top'>
                <span>
                <i class='el-icon-c-add'
                on-click={ e => this._addFun(e, node)}></i></span></el-tooltip></span></span>
            );
        }
    }
};
</script>
<style scoped>
.unusual-choice {
    padding: 10px 0px;
}
</style>
