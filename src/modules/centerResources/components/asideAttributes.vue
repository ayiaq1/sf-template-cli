<!--
 * @moduleName: 中心资源 -> 属性
 * @Author: zhangboxin
 * @Date: 2019-12-24 17:32:39
 * @LastModifiedBy: zhangboxin
 * @LastEditTime : 2020-01-02 10:26:43
 -->
<template>
    <el-aside class="cr-rightSide" v-if="isOpen">
        <sf-header>
            <sf-header-title>
                <span>属性</span>
                <sf-link @click="isOpen = !isOpen"> <i class="sf-icon-state-close"></i></sf-link>
            </sf-header-title>
        </sf-header>
        <div class="attrInfo clearfix">
            <div class="attrInfo_form">
                <el-form ref="attrForm" :model="attrForm" label-width="110px">
                    <el-form-item label="数据中文名" prop="dataSourceName">
                        <span>XXXX</span>
                    </el-form-item>
                    <el-form-item label="数据英文名" prop="dataSourceCode">
                        <span>XXXX</span>
                    </el-form-item>
                    <el-form-item label="数据组织" prop="databaseType">
                        <span>XXXX</span>
                    </el-form-item>
                    <el-form-item label="用途分类" prop="databaseVersion">
                        <span>XXXX</span>
                    </el-form-item>
                    <el-form-item label="数据获取方式" prop="linkHost">
                        <span>XXXX</span>
                    </el-form-item>
                    <el-form-item label="数据更新周期" prop="linkPort">
                        <span>XXXX</span>
                    </el-form-item>
                    <el-form-item label="资源等级" prop="linkUsername">
                        <span>XXXX</span>
                    </el-form-item>
                </el-form>
            </div>
            <el-button class="attrInfo_viewBtn" type="primary"><span>查看详细信息</span></el-button>
        </div>
        <div class="auditRecord">
            <hr class="auditRecord_line">
            <el-tabs v-model="activeTab" @tab-click="handleClick">
                <el-tab-pane label="审核记录" name="first">XXXX</el-tab-pane>
            </el-tabs>
        </div>
    </el-aside>
</template>
<script>
import { dialogClass, globalStatic } from 'javascript@/event/globalStatic.js';
import * as storeStatic from '../store/centerResources/storeStatic.js';
import * as codeTable from '../javascript/codeTable.js';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('centerResources');
export default {
    name: 'settingSource',
    // inject: ['DATA_SOURCE', 'POP_TYPE_OTHER2'],
    data() {
        return {
            page: {
                index: 1, // 当前页
                size: 16, // 分页条数
                total: 0 // 总数
            },
            // 加载状态
            isloading: false,
            isOpen: true,
            // 筛选查询条件
            filterData: {
                dataSourceType: '',
                databaseType: '',
                businessType: '',
                searchKey: '',
                // 只显示异常数据库，1为勾选，''为未勾选
                abnormalStatus: ''
            },
            // 是否选中异常数据库
            abnormalChecked: false,
            // 数据库类型级联选中数组
            databaseTypeList: [],
            // 下拉配置
            databaseTypeProps: {
                value: 'code',
                label: 'name',
                checkStrictly: true,
                children: 'detailType'
            },
            attrForm: {},
            activeTab: 'first'
        };
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
