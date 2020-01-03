import * as storeStatic from './storeStatic';
import { getDefaultState } from './state';

const mutations = {
    // 重置store
    [storeStatic.M_RESET_STATE](state) {
        Object.assign(state, getDefaultState());
    },
    // 设置弹窗的相关信息；
    [storeStatic.M_DIALOG_DATA](state, dialogData) {
        state.dialogFormData = dialogData;
    },
    // 异步数据刷新
    [storeStatic.M_ASYNUPDATE_TYPE](state, asynUpdateType) {
        let asynUpdateParams = {
            type: asynUpdateType,
            preventCache: Math.random()
        };
        state.asynUpdateType = asynUpdateParams;
    }
};
export default mutations;
