/*
 * @Module: 接入资源->接入资源列表
 * @Author: zhouyu
 * @Date: 2020-01-02 22:38:13
 * @Last Modified by: zhouyu
 * @Last Modified time: 2020-01-02 22:38:47
 */

<template>
    <div class="rsource-list">
        <p class="statistics-info">截止当前，该数据源下总共已注册876个资源，200个资源还未注册；已注册资源中业务表100个，字典表22个，日志表130个；同时，已注册资源中，80个已对标，20个未对标</p>
        <div class="list-base">
            <div class="ctrl-group">
                <div class="btn-group"></div>
                <div class="search-group"></div>
            </div>
            <div class="tabel-ctrl-group"></div>
            <div class="table"></div>
        </div>
        <div class="list-table">
            <sf-main-table-box>
                <sf-main-title>
                    <sf-search-bar class="search"
                        v-model="params.searchKey"
                        :maxlength="20"
                        @searchFun="searchTableFun" />
                </sf-main-title>
                <sf-main-title class="resource-btn-group">
                    <el-button-group>
                        <el-button icon="sf-icon-c-add-1"
                            @click="_addFun">立即同步</el-button>
                        <el-button icon="sf-icon-c-add-1"
                            @click="_addFun">送审</el-button>
                        <el-button icon="sf-icon-c-add-1"
                            @click="_addFun">变更</el-button>
                        <el-button icon="sf-icon-c-add-1"
                            @click="_addFun">启用</el-button>
                        <el-button icon="sf-icon-c-add-1"
                            @click="_addFun">停用</el-button>
                        <el-button icon="sf-icon-c-add-1"
                            @click="_addFun">配置</el-button>
                        <el-button icon="sf-icon-c-add-1"
                            @click="_addFun">导入</el-button>
                        <el-button icon="sf-icon-c-add-1"
                            @click="_addFun">导出</el-button>
                    </el-button-group>
                </sf-main-title>
                <div>
                    <FilterGroupList />
                </div>
                <sf-table showCustom
                    :data="resourceInfo"
                    :props="props"
                    :columns="columns"
                    :selectionChange="_tableSelectChangeFun"
                    @pageChange="_pageChangeFun">
                    <template #render="{row, value, field}">
                        <!-- 操作 -->
                        <template v-if="field === 'opt'">
                            <ResourceTable :row="row"
                                @operationMethods="_operationMethods" />
                        </template>
                    </template>
                </sf-table>
            </sf-main-table-box>
        </div>
    </div>
</template>

<script>
import FilterGroupList from './FilterGroupList.vue';
import ResourceTable from 'localModules@/accessResources/components/operation/ResourceTable';
import { resourceTable } from 'localModules@/accessResources/javascript/codeTable';
export default {
    name: 'ResourceList',
    components: {
        FilterGroupList,
        ResourceTable
    },
    data() {
        return {
            params: {
                searchKey: ''
            },
            // 列表相关参数
            isloading: false,
            selectItems: [],
            props: {
                data: 'tableList',
                total: 'total',
                label: 'label',
                value: 'value'
            },
            columns: resourceTable,
            resourceInfo: {
                total: 1,
                tableList: [{}]
            },
            pageInfo: {
                pageIndex: 1,
                pageSize: 10
            },
            actionMethod: {
                '_edit': this.edit,
                '_delete': this.delete,
                '_preview': this.preview,
                '_verify': this.verify
            }
        };
    },
    methods: {
        searchTableFun() {

        },
        _addFun() { },
        _tableSelectChangeFun(selectItems) {
            this.selectItems = selectItems;
        },
        _pageChangeFun(page) {
            this.pageInfo.pageIndex = page.index;
            this.pageInfo.pageSize = page.rows;
        },
        _operationMethods(type, row) {
            this.actionMethod[type](row);
        },
        edit() { },
        delete() { },
        preview() { },
        verify() { }
    }
};
</script>
