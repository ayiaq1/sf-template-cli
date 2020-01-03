import * as storeStatic from './storeStatic';
const mutations = {
    // 设置
    [storeStatic.M_GET_DATA](state, { data }) {
        state.data = data;
    },
    // 设置主分页信息
    [storeStatic.M_PAGE_DATA](state, obj) {
        state.pageData = {
            ...state.pageData,
            ...obj
        };
    },
    // 设置主弹窗信息
    [storeStatic.M_DIALOG_DATA](state, obj) {
        state.dialogFormData = {
            ...state.dialogFormData,
            ...obj
        };
    },
    // 筛选查询条件
    [storeStatic.M_FILTER_SEARCH_DATA](state, obj) {
        state.filterSearchData = {
            ...state.filterSearchData,
            ...obj
        };
    },
    // 设置连接调试-弹窗信息
    [storeStatic.M_CONNECT_RESULT_DIALOG_DATA](state, obj) {
        state.connectResultFormData = {
            ...state.connectResultFormData,
            ...obj
        };
    },
    // 设置数据源列表
    [storeStatic.M_DATA_SOURCE_DATA](state, { data }) {
        state.dataSourceList = data.data.records;
        state.pageData.total = data.data.total;
        state.abnormalNum = data.extra.abnormalNum;
    },
    // 设置数据库类型
    [storeStatic.M_DATABASE_TYPE_DATA](state, { data }) {
        state.databaseTypeData = data;
    },
    // 设置业务类型
    [storeStatic.M_BUSINESS_TYPE_DATA](state, { data }) {
        state.businessTypeData = data;
    },
    // 设置模式
    [storeStatic.M_MODE_DATA](state, { data }) {
        state.modeData = data;
    },
    // 设置保存按钮是否禁用
    [storeStatic.M_SAVE_DISABLED_DATA](state, flag) {
        state.saveDisabled = flag;
    }
};
export default mutations;
