<!--
 * @moduleName: 模块首页
 * @Author: dawdler
 * @Date: 2019-08-20 15:54:42
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-11-05 15:30:48
 -->
<template>
    <sf-no-side-container :id='$parent.modulesName'>
        test
    </sf-no-side-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import * as storeStatic from './store/storeStatic.js';
export default {
    data() {
        return {

        };
    },
    computed: {
        ...mapState({
            data: state => state.data
        })
    },
    create() {
        this[storeStatic.A_GET_DATA]({ data: 'test' });
    },
    mounted() { },
    methods: {
        ...mapActions([
            storeStatic.A_GET_DATA
        ])
    }
};
</script>
