import Vue from 'vue';
import Vuex from 'vuex';
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
