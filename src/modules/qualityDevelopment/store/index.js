import Vue from 'vue';
import Vuex from 'vuex';
import qualityDevelopment from './qualityDevelopment';
Vue.use(Vuex);
// new
export default new Vuex.Store({
    namespaced: true,
    modules: {
        qualityDevelopment
    },
    plugins: []
});
