<!--
 * @moduleName: 中心资源 -> 选择来源资源
 * @Author: zhangboxin
 * @Date: 2019-12-24 17:32:39
 * @LastModifiedBy: zhangboxin
 * @LastEditTime : 2020-01-02 20:48:48
 -->
<template>
    <div class="cr-selectSrc">
        <p class="selectSrc_tips">您可在当前页面选择需要作为来源的资源并未其配置连接信息，该信息后续将用于ETL任务自动生成</p>
        <div class="selectSrc_tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="来源表选择" name="first">
                    <source-table></source-table>
                </el-tab-pane>
                <el-tab-pane label="连接配置" name="second">
                    <connect-config></connect-config>
                </el-tab-pane>
            </el-tabs>
        </div>
        <!-- 底部按钮 -->
        <div class="dialog-footer">
            <el-button type="primary" :loading="loading" @click="_saveFun">进入资源配置</el-button>
            <el-button @click="formData.show = false">取消</el-button>
        </div>
    </div>
</template>
<script>
import { dialogClass, globalStatic } from 'javascript@/event/globalStatic.js';
import * as storeStatic from '../../../store/centerResources/storeStatic.js';
import sourceTable from './components/sourceTable';
import connectConfig from './components/connectConfig';
import * as codeTable from '../../../javascript/codeTable.js';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('centerResources');
export default {
    name: 'selectSource',
    // inject: ['DATA_SOURCE', 'POP_TYPE_OTHER2'],
    props: {
        formData: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            activeName: 'first',
            loading: false
        };
    },
    components: {
        sourceTable,
        connectConfig
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
        handleClick() {},
        /**
         * 切换标签页
         */
        _saveFun() {}
    }
};
</script>
