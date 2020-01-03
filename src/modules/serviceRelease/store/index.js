import Vue from 'vue';
import Vuex from 'vuex';
import serviceRelease from './serviceRelease';
Vue.use(Vuex);
// new
export default new Vuex.Store({
    namespaced: true,
    modules: {
        serviceRelease
    },
    plugins: []
});
