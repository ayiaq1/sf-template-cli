import Vue from 'vue';
import Vuex from 'vuex';
import accessResources from './accessResources';
Vue.use(Vuex);
export default new Vuex.Store({
    namespaced: true,
    modules: {
        accessResources
    },
    plugins: []
});
