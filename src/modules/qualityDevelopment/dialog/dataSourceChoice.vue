<!--
 * @moduleName: 质量开发 -- 组件方式配置
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 15:57
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime: 2019-12-30 15:57
 -->
<template>
    <div>
        <div class="sf-page-container LRSetting">
            <LeftList ref="leftList" async v-model="searchkey" :data="sourceList" :props="treeProps" :maxHeight="maxHeight" placeholder="请选择" :currentKey="currentKey" @searchFun="getTreeListFun" @selectDataFun="_selectDataFun">
            </LeftList>
            <RightTable @selectDataFun="_selectDataFun" :columns="columns" :maxHeight="maxHeight" :currentKey="currentKey" />
        </div>
        <div class="dialog-footer">
            <el-button type="primary">确定</el-button>
            <el-button @click="formData.show = false">取消</el-button>
        </div>
    </div>
</template>
<script>
import LeftList from 'components@/LRSetting/LeftList.vue';
import RightTable from 'components@/LRSetting/RightTable.vue';
export default {
    props: ['formData'],
    data() {
        return {
            maxHeight: 400,
            columns: [{
                prop: 'name',
                label: '数据源'
            }],
            sourceList: [{
                name: '源1',
                id: 1
            }, {
                name: '源2',
                id: 2
            }, {
                name: '源3',
                id: 3
            }, {
                name: '源4',
                id: 4
            }],
            currentKey: [],
            treeProps: {
                label: 'name',
                id: 'id',
                children: 'children'
            },
            page: {
                index: 1,
                rows: 100,
                total: 0
            },
            searchkey: ''
        };
    },
    created() {},
    methods: {
        _selectDataFun(val, selectData) {
            if (selectData) {
                this.currentKey = selectData;
                return;
            }
            this.currentKey.push(val);
        },
        getTreeListFun() {
            return this.sourceList;
        }
    },
    components: { RightTable, LeftList }
    };
</script>
