import * as storeStatic from './storeStatic.js';
const mutations = {
    // 全量设置大弹框
    [storeStatic.M_DIALOG](state, dialogFormData) {
        state.dialogFormData = dialogFormData;
    },
    // 只修改大弹框的局部属性
    [storeStatic.M_DIALOG_VALUE](state, { key, data }) {
        state.dialogFormData[key] = data;
    }
};
export default mutations;
