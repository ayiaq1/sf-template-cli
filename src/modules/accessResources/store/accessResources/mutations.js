import * as storeStatic from './storeStatic';
const mutations = {
    [storeStatic.M_GET_DATA](state, { data }) {
        state.data = data;
    }
};
export default mutations;
