import Vue from 'vue';
import Vuex from 'vuex';
// 业务暂时没有需要持久化的地方
// import persistedState from 'vuex-persistedstate';
// 修改日志
import createLogger from 'vuex/dist/logger';
import state from './state';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex);
// new
export default new Vuex.Store({
    namespaced: true,
    state,
    mutations,
    actions,
    plugins: process.env.NODE_ENV === 'production' ? [] : [createLogger()] // 开发环境下显示vuex的状态修改
});
