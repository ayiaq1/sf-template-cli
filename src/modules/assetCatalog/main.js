import Vue from 'vue';
import App from './App';
import store from './store';
import { setLocale } from 'javascript@/i18n';
import singleSpaVue from 'single-spa-vue';
Vue.config.productionTip = false;
const moduleName = 'app-modules-assetCatalog';
const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: `#${moduleName}`,
        store,
        data: {
            moduleName
        },
        i18n: setLocale(), // 国际化
        render: h => h(App)
    }
});
export const bootstrap = [vueLifecycles.bootstrap];
export const mount = [vueLifecycles.mount];
export const unmount = [vueLifecycles.unmount];
