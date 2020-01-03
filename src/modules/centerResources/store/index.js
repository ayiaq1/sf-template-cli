import Vue from 'vue';
import Vuex from 'vuex';
import centerResources from './centerResources';
// 业务暂时没有需要持久化的地方
// import persistedState from 'vuex-persistedstate';
Vue.use(Vuex);
// new
export default new Vuex.Store({
    namespaced: true,
    modules: {
        centerResources
    },
    plugins: []
});
