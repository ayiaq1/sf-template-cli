<!--
 * @moduleName: 模块首页
 * @Author: dawdler
 * @Date: 2019-08-20 15:54:42
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2019-12-31 09:30:59
 -->
<template>
    <sf-no-side-container :id="$parent.moduleName">
        <Demo v-if="isDev"></Demo>
        <img src="/images/modules/workBench/bg.jpg" alt="" />
    </sf-no-side-container>
</template>
<script>
import Demo from './components/demo';
export default {
    components: {
        Demo
    },
    data() {
        return {
            isDev: process.env.NODE_ENV !== 'production'
        };
    }
};
</script>
