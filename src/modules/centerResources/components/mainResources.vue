<!--
 * @moduleName: 中心资源 -> 资源列表
 * @Author: zhangboxin
 * @Date: 2019-12-24 17:32:40
 * @LastModifiedBy: zhangboxin
 * @LastEditTime : 2020-01-02 15:11:16
 -->
<template>
    <el-main class="cr-mainPage">
        <sf-no-side-container>
            <div class="cr-SrchPart">
                <el-row>
                    <el-col :span="8">
                        <sf-filter-group label="数据获取方式" cn-label="数据获取方式">
                            <el-select v-model="filterData.businessType" @change="_changeBusinessTypeFun" placeholder="请选择" class="filterSelect">
                                <el-option v-for="(item, index) in businessTypeData" :key="index" :label="item.stName" :title="item.stName" :value="item.stCode" />
                            </el-select>
                        </sf-filter-group>
                    </el-col>
                    <el-col :span="8">
                        <sf-filter-group label="数据更新周期" cn-label="数据更新周期">
                            <el-select v-model="filterData.businessType" @change="_changeBusinessTypeFun" placeholder="请选择" class="filterSelect">
                                <el-option v-for="(item, index) in businessTypeData" :key="index" :label="item.stName" :title="item.stName" :value="item.stCode" />
                            </el-select>
                        </sf-filter-group>
                    </el-col>
                    <el-col :span="8">
                        <sf-filter-group label="是否关联物理表" cn-label="是否关联物理表">
                            <el-select v-model="filterData.businessType" @change="_changeBusinessTypeFun" placeholder="请选择" class="filterSelect">
                                <el-option v-for="(item, index) in businessTypeData" :key="index" :label="item.stName" :title="item.stName" :value="item.stCode" />
                            </el-select>
                        </sf-filter-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <sf-filter-group label="有效性状态" cn-label="有效性状态">
                            <el-cascader :options="databaseTypeData" placeholder="请选择数据库类型" :props="databaseTypeProps" v-model="databaseTypeList" @change="_changeDatabaseTypeFun" class="filterSelect" filterable clearable></el-cascader>
                        </sf-filter-group>
                    </el-col>
                    <el-col :span="8">
                        <sf-filter-group label="审核状态" cn-label="审核状态">
                            <el-select v-model="filterData.businessType" @change="_changeBusinessTypeFun" placeholder="请选择" class="filterSelect">
                                <el-option v-for="(item, index) in businessTypeData" :key="index" :label="item.stName" :title="item.stName" :value="item.stCode" />
                            </el-select>
                        </sf-filter-group>
                    </el-col>
                    <el-col :span="8">
                        <sf-filter-group label="ETL任务生成状态" cn-label="ETL任务生成状态">
                            <el-select v-model="filterData.businessType" @change="_changeBusinessTypeFun" placeholder="请选择" class="filterSelect">
                                <el-option v-for="(item, index) in businessTypeData" :key="index" :label="item.stName" :title="item.stName" :value="item.stCode" />
                            </el-select>
                        </sf-filter-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <sf-filter-group label="关键字" cn-label="关键字">
                            <el-row :gutter="10">
                                <el-col :span="21">
                                    <sf-search-bar :loading="isloading" v-model="filterData.searchKey" placeholder="请输入資源中文名、英文名进行查询" @searchFun="_searchFun" />
                                </el-col>
                                <el-col :span="3">
                                    <el-button type="primary" @click="_resetFun" class="resetBtn">重置</el-button>
                                </el-col>
                            </el-row>
                        </sf-filter-group>
                    </el-col>
                </el-row>
            </div>
            <sf-main-table-box>
                <sf-main-title class="cr-addResPart">
                    <!-- <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量添加</span></el-button> -->
                    <el-popover ref="addResPop" popper-class="cr-addPopover" placement="bottom-start" trigger="hover">
                        <ul>
                            <li class="addPopover_item">
                                <i class="el-icon-folder-add addPopover_icon"></i><span>自定义创建</span>
                                <p class="addPopover_info">在当前资源没有源表也无物理表的情况下，可选择此方式，自定义添加资源属性及数据项信息</p>
                            </li>
                            <li class="addPopover_item" @click="_selectSourceFun('source')">
                                <i class="el-icon-folder-add addPopover_icon"></i><span>根据来源创建</span>
                                <p class="addPopover_info">如果当前资源已知数据来源的资源信息，则可使用此方式快速构建</p>
                            </li>
                            <li class="addPopover_item">
                                <i class="el-icon-folder-add addPopover_icon"></i><span>根据物理表创建</span>
                                <p class="addPopover_info">如果当前资源在数据库表中已经存在，则可使用此方式快速构建</p>
                            </li>
                        </ul>
                        <el-button icon="sf-icon-c-add" class="singleBtn" slot="reference" type="primary"><span class="ml5">新增资源</span></el-button>
                    </el-popover>
                    <!-- <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量送审</span></el-button>
                    <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量变更</span></el-button>
                    <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量启用</span></el-button>
                    <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量停用</span></el-button>
                    <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量修改</span></el-button>
                    <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量删除</span></el-button>
                    <el-button icon="sf-icon-c-add" class="singleBtn"><span>导入</span></el-button>
                    <el-button icon="sf-icon-c-add" class="singleBtn"><span>导出</span></el-button>
                    <el-button icon="sf-icon-c-add" class="singleBtn"><span>下载导入模版</span></el-button> -->
                    <span v-if="abnormalNum > 0" class="abnormalBox">
                        <span class="abnormalTips">提示：当前有{{ abnormalNum }}个数据库存在异常，请重点关注</span>
                        <el-checkbox class="abnormalCheckBox" @change="isAbnormalCheckedFun" v-model="abnormalChecked" label="只显示异常的数据库" cn="只显示异常的数据库"></el-checkbox>
                    </span>
                </sf-main-title>
                <sf-table-bd>
                    <sf-table ref="resourcesTable" v-loading="isloading" :data="resourcesData" :props="resourcesProps" showCustom :columns="resourcesColumns" @pageChange="_pageChangeFun">
                        <template #render="{row, value, field}">
                            <!-- 接入、目标表 -->
                            <template v-if="field === 'inputs' || field === 'outputs'">
                                <a href="javascript:;" @click.prevent="viewInputs(value, field)">{{ _translateInputs(value)}}</a>
                            </template>
                            <!-- 同步方式 -->
                            <template v-else-if="field === 'syncMode'">
                                <span>{{ _translateSynchronously(value) }}</span>
                            </template>
                            <template v-else-if="field === 'executeAll'">
                                <el-tooltip placement="top">
                                    <div slot="content">
                                        <span>{{ $t('accessReport.RunNumber') }}:</span>{{ value }}<br />
                                        <span>{{ $t('accessReport.SuccessNumber') }}:</span>{{ row.executeSuccess }}<br />
                                        <span>{{ $t('accessReport.FailRunNumber') }}:</span>{{ row.executeFail }}<br />
                                    </div>
                                    <span>{{ value }}( <span style="color: green">{{ row.executeSuccess }}</span>/ <span style="color: red">{{ row.executeFail }}</span>)
                                    </span>
                                </el-tooltip>
                            </template>
                            <template v-else-if="field === 'opt'">
                                <sf-table-operation>
                                    <!-- 运行报告 -->
                                    <el-tooltip :enterable="false" :open-delay="500" :content="$t('accessReport.RunReports')" placement="top">
                                        <span>
                                            <span class="obtn" @click.stop="openDialogFun(row, 'run_reports')">
                                                <i class="sf-icon-c-view-outline"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                    <!-- 对账详情 -->
                                    <el-tooltip :enterable="false" :open-delay="500" :content="$t('accessReport.ReconciliationDetails')" placement="top">
                                        <span>
                                            <span class="obtn" @click.stop="openDialogFun(row, 'check_details')">
                                                <i class="el-icon-sort"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                </sf-table-operation>
                            </template>
                        </template>
                    </sf-table>
                </sf-table-bd>
            </sf-main-table-box>
        </sf-no-side-container>
    </el-main>
</template>
<script>
// import { i18n$t } from 'javascript@/i18n';
// import { mapState, mapMutations, mapActions } from 'vuex';
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
            // 数据源列表
            // dataSourceList: [],
            // 异常数据库数量
            // abnormalNum: 0,
            // 操作配置
            operationCfg: [
                {
                    label: '新增',
                    type: globalStatic.ADD,
                    icon: 'sf-icon-add'
                },
                {
                    label: '编辑',
                    type: globalStatic.EDIT,
                    icon: 'sf-icon-edit'
                },
                {
                    label: '删除',
                    type: 'del',
                    icon: 'sf-icon-c-delete'
                }
                // {
                //     label: '预览表结构',
                //     type: 'preview',
                //     icon: 'el-icon-tickets'
                // }
            ],
            resourcesData: [],
            resourcesProps: {
                data: 'records',
                total: 'totalCount',
                label: 'name',
                value: 'dataIndex'
            },
            resourcesColumns: codeTable.getTableColumnsFun('RESOURCES')
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
         * 新建资源
         */
        _selectSourceFun(type) {
            if (type === 'source') {
                let dialogFormData = {
                    title: '选择数据来源',
                    ctrl: 'add',
                    class: dialogClass.SMALL,
                    value: 'selectSource',
                    // row: {},
                    show: true
                };
                this[storeStatic.M_DIALOG_DATA](dialogFormData);
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
         * 获取数据源图标
         */
        _pageChangeFun(type) {}
    }
};
</script>
