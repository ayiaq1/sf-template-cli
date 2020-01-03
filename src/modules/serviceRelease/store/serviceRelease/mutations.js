import * as storeStatic from '../storeStatic';
const mutations = {
    // 赋值当前的选中的左侧数据展示类型
    [storeStatic.M_SET_ACTIVENAME](state, val) {
        state.activeName = val;
        console.log('val>>>', val);
    },
    // 赋值当前的选中的左侧数据展示类型
    [storeStatic.M_SET_TREENODE](state, val) {
        state.treeNode = val;
        console.log('treenode val>>>', val);
    }
};
export default mutations;
