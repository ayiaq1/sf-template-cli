export const getDefaultState = () => {
    return {
        // 主分页信息
        pageData: {
            index: 1, // 当前页
            size: 16, // 分页条数
            total: 0 // 总数
        },
        // 主弹窗信息
        dialogFormData: {
            title: '', // dialog 标题
            ctrl: '', // 弹窗功能: add view edit
            class: '', // 弹窗的样式
            value: '', // 弹出框类型
            row: {}, // 弹窗带的数据
            show: false
        },
        // 连接调试-弹窗信息
        connectResultFormData: {
            title: '', // dialog 标题
            ctrl: '', // 弹窗功能: add view edit
            class: '', // 弹窗的样式
            value: '', // 弹出框类型
            row: {}, // 弹窗带的数据
            show: false
        },
        // 筛选查询条件
        filterSearchData: {
            dataSourceType: '',
            databaseType: '',
            businessType: '',
            searchKey: '',
            // 只显示异常数据库，1为勾选，''为未勾选
            abnormalStatus: ''
        },
        // 数据源列表
        dataSourceList: [],
        // 异常数据源数量
        abnormalNum: 0,
        // 数据库类型
        databaseTypeData: [],
        // 业务类型
        businessTypeData: [],
        // 模式
        modeData: [],
        // 保存按钮是否禁用
        saveDisabled: true
    };
};
export default getDefaultState();
