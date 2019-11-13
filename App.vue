<!--
 * @moduleName: 模块首页
 * @Author: dawdler
 * @Date: 2019-08-20 15:54:42
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-09-18 16:02:46
 -->
<template>
    <sf-no-side-container :id='$parent.modulesName'>
        布局
    </sf-no-side-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import * as storeStatic from './store/storeStatic.js';
export default {
    data() {
        return {
            menuEvents: null
        };
    },
    computed: {
        ...mapState({
            data: state => state.data
        })
    },
    create() {
        // 务必加上data判断，因为会默认触发一次事件。 ---> TODO 这个事件不能被拷贝出去，没用. 用法不同咯。
        this.menuEvents = MenuDataEvents.subscribe(data => {
            if (data) {
                this[storeStatic.M_SET_DATA]({ data: data });
            }
        });
    },
    beforeDestroy() {
        // 务必添加销毁处理事件;
        if (this.menuEvents) {
            this.menuEvents.unsubscribe();
        }
        this[storeStatic.M_RESET_STATE]();
    },
    mounted() {
        // 异步请求，数据操作处理，全放store内，then的后续 理论上是不需要加内容的。
        this[storeStatic.A_GET_DATA]('/xx/xx.json').then(data => {
            console.log(data, '<--data');
        });
    },
    methods: {
        ...mapMutations([
            storeStatic.M_RESET_STATE
        ]),
        ...mapActions([
            storeStatic.A_GET_DATA
        ])
    }
};
</script>
