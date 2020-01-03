import Vue from 'vue';
import Vuex from 'vuex';
import qualityScheduling from './qualityScheduling';
Vue.use(Vuex);
// new
export default new Vuex.Store({
    namespaced: true,
    modules: {
        qualityScheduling
    },
    plugins: []
});
