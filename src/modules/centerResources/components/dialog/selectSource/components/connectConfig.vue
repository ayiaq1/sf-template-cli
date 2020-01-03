<!--
 * @moduleName: 中心资源 -> 选择来源资源 -> 连接配置
 * @Author: zhangboxin
 * @Date: 2019-12-24 17:32:39
 * @LastModifiedBy: zhangboxin
 * @LastEditTime : 2020-01-02 20:53:37
 -->
<template>
    <div class="cr-connectCfg">
        <sf-main-table-box>
            <sf-main-title>
                <el-button-group>
                    <el-button icon="el-icon-add">新增关系</el-button>
                    <el-button icon="el-icon-save">保存</el-button>
                </el-button-group>
            </sf-main-title>
            <sf-table ref="connectCfgTable" :data="taskList" :props="props" :columns="columns" v-loading="loading">
                <template #render="{row, value, field}">
                    <!-- 操作区 -->
                    <template v-if="field === 'operation'">
                        <sf-table-operation>
                            <span class="obtn" title="删除"><i class="el-icon-delete"></i></span>
                        </sf-table-operation>
                    </template>
                </template>
            </sf-table>
        </sf-main-table-box>
    </div>
</template>
<script>
import { dialogClass, globalStatic } from 'javascript@/event/globalStatic.js';
import * as storeStatic from '../../../../store/centerResources/storeStatic.js';
import * as codeTable from '../../../../javascript/codeTable.js';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('centerResources');
export default {
    name: 'selectSource',
    // inject: ['DATA_SOURCE', 'POP_TYPE_OTHER2'],
    data() {
        return {
            activeName: 'first',
            taskList: {
                total: 1,
                tableList: [
                    {
                        id: 1
                    }
                ]
            },
            columns: [
                {
                    name: '主表数据项',
                    dataIndex: 'taskName',
                    minWidth: 120,
                    showOverflowTooltip: true,
                    disabled: true
                },
                {
                    name: '子表数据项',
                    minWidth: 120,
                    dataIndex: 'taskStatus',
                    disabled: true
                },
                {
                    name: '关联方式',
                    width: 120,
                    dataIndex: 'schedule',
                    disabled: false
                },
                {
                    name: '操作',
                    width: 120,
                    fixed: 'right',
                    dataIndex: 'operation',
                    disabled: false
                }
            ],
            props: {
                data: 'tableList',
                total: 'total',
                label: 'name',
                value: 'dataIndex'
            }
        };
    },
    components: {
        // sourceTable,
        // connectConfig
    },
    watch: {},
    computed: {
        ...mapState({
            // 数据源列表
            dataSourceList: state => state.dataSourceList,
            // 数据库类型
            databaseTypeData: state => state.databaseTypeData,
            // 所属业务系统
            businessTypeData: state => state.businessTypeData,
            // 筛选查询条件
            filterSearchData: state => state.filterSearchData,
            // 分页信息
            pageData: state => state.pageData,
            // 异常数据源数量
            abnormalNum: state => state.abnormalNum
        }),
        // 数据源操作列表
        itemOperationCfg: function() {
            return this.operationCfg.slice(1, this.operationCfg.length);
        }
    },
    created() {},
    destroyed() {},
    mounted() {
        // this.init();
    },
    methods: {
        ...mapMutations([storeStatic.M_DIALOG_DATA, storeStatic.M_FILTER_SEARCH_DATA, storeStatic.M_PAGE_DATA]),
        ...mapActions([storeStatic.A_DATABASE_TYPE_DATA, storeStatic.A_BUSINESS_TYPE_DATA, storeStatic.A_DATA_SOURCE_DATA, storeStatic.A_DEL_DATASOURCE_DATA]),
        /**
         * 初始化
         */
        init() {
            this.getDatabaseTypeDataFun();
            this.getBusinessTypeDataFun();
            this.getDataSourceListFun();
        },
        /**
         * 数据库类型切换
         */
        _changeDatabaseTypeFun(val) {
            this.filterData.dataSourceType = this.databaseTypeList[0];
            this.filterData.databaseType = this.databaseTypeList[1];
            this._searchFun();
        },
        /**
         * 业务类型切换
         */
        _changeBusinessTypeFun(val) {
            this._searchFun();
        },
        /**
         * 只显示异常数据库状态切换
         */
        isAbnormalCheckedFun(val) {
            this.filterData.abnormalStatus = this.abnormalChecked ? 1 : '';
            this._searchFun();
        },
        /**
         * 搜索
         */
        _searchFun() {
            this._setFilterSearchFun();
            this._setPageDataFun();
            this.getDataSourceListFun();
        },
        /**
         * 设置筛选查询条件
         */
        _setFilterSearchFun() {
            this[storeStatic.M_FILTER_SEARCH_DATA](this.filterData);
        },
        /**
         * 搜索条件重置
         */
        _resetFun(val) {
            this.filterData = {
                dataSourceType: '',
                databaseType: '',
                businessType: '',
                searchKey: '',
                abnormalStatus: ''
            };
            this.page = {
                index: 1,
                size: 16,
                total: 0
            };
            this._searchFun();
            this.databaseTypeList = [];
            this.abnormalChecked = false;
            // 显示第一页
            this.handleCurrentChange(1);
        },
        /**
         * 数据源操作入口
         */
        _operationFun(item, operCfg) {
            if (operCfg.type === 'del') {
                let dialogFormData = {
                    title: operCfg.label,
                    ctrl: operCfg.type,
                    class: dialogClass.TINY,
                    value: this.POP_TYPE_OTHER2,
                    row: item,
                    show: true
                };
                this[storeStatic.M_DIALOG_DATA](dialogFormData);
            } else {
                let dialogFormData = {
                    title: operCfg.label,
                    ctrl: operCfg.type,
                    class: dialogClass.BIG,
                    value: operCfg.type === globalStatic.ADD ? item.type : item.dataSourceType,
                    row: item,
                    show: true
                };
                this[storeStatic.M_DIALOG_DATA](dialogFormData);
                this.getBusinessTypeDataFun();
            }
        },
        /**
         * 获取数据库类型
         */
        getDatabaseTypeDataFun() {
            this[storeStatic.A_DATABASE_TYPE_DATA]();
        },
        /**
         * 获取业务类型
         */
        getBusinessTypeDataFun() {
            this[storeStatic.A_BUSINESS_TYPE_DATA]();
        },
        /**
         * 获取数据源列表
         */
        getDataSourceListFun() {
            this[storeStatic.A_DATA_SOURCE_DATA]().then(resData => {
                // this.dataSourceList = resData.data.records;
                // this.page.index = resData.data.current;
                // this.page.size = resData.data.size;
                // this.page.total = resData.data.total;
                // this.abnormalNum = resData.extra.abnormalNum;
            });
        },
        /**
         * 当前页修改
         */
        handleCurrentChange(val) {
            this.page.index = val;
            this._searchFun();
        },
        /**
         * 每页条数修改
         */
        handleSizeChange(size) {
            this.page.index = 1;
            this.page.size = size;
            this._searchFun();
        },
        /**
         * 设置主分页信息
         */
        _setPageDataFun() {
            this[storeStatic.M_PAGE_DATA](this.page);
        },
        /**
         * 获取数据源图标
         */
        _getDatabaseIconFun(type) {
            return codeTable.getDatabaseIconFun(type);
        },
        /**
         * 切换标签页
         */
        handleClick() {}
    }
};
</script>
