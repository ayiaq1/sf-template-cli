import * as types from './storeStatic';
import { getDefaultState } from './state';
const mutations = {
    // 重置state
    [types.M_RESET_STATE](state) {
        Object.assign(state, getDefaultState());
    }
};
export default mutations;
