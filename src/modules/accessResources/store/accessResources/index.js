import Vue from 'vue';
import Vuex from 'vuex';
// 业务暂时没有需要持久化的地方
// import persistedState from 'vuex-persistedstate';
import state from './state';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex);
// new
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    plugins: []
};
