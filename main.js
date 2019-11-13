import Vue from 'vue';
import App from './App';
import store from './store';
import { setLocale } from 'javascript@/i18n';
import singleSpaVue from 'single-spa-vue';
Vue.config.productionTip = false;
// 自己修改id,每添加一个id需要在 html里面添加 <div id='xx'></div>
const modulesName = 'app-xx';
const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: `#${modulesName}`,
        store,
        data: {
            modulesName: modulesName
        },
        i18n: setLocale(), // 国际化
        destroyed() {
            // 消息中心的内容，在这里做销毁访问
            App.destroyed();
        },
        render: h => h(App)
    }
});

export const bootstrap = [vueLifecycles.bootstrap];
export const mount = [vueLifecycles.mount];
export const unmount = [vueLifecycles.unmount];
