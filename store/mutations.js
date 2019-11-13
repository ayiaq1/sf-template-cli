import * as types from './storeStatic';
const mutations = {
    // 设置
    [types.M_SET_DATA](state, { data }) {
        state.data = data;
    }
};
export default mutations;
