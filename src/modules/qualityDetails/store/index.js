import Vue from 'vue';
import Vuex from 'vuex';
import qualityDetails from './qualityDetails';
Vue.use(Vuex);
// new
export default new Vuex.Store({
    namespaced: true,
    modules: {
        qualityDetails
    },
    plugins: []
});
