import * as types from './storeStatic';
const mutations = {
    // 设置state对应的属性
    [types.M_SET_VALUE](state, { type, value }) {
        state[type] = value;
        console.log('state[type]', state[type], value);
    }
};
export default mutations;
