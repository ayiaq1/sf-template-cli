<!--
 * @moduleName: 中心资源 -> 概述
 * @Author: zhangboxin
 * @Date: 2019-12-24 17:31:44
 * @LastModifiedBy: zhangboxin
 * @LastEditTime : 2019-12-24 21:00:40
 -->
<template>
    <div>
        <p>截至当前总共有1000个资源，其中有800个未关联物理表，200个已关联物理表</p>
    </div>
</template>
<script>
// import { dialogClass, globalStatic } from 'javascript@/event/globalStatic.js';
import * as storeStatic from '../store/centerResources/storeStatic.js';
// import * as codeTable from '../javascript/codeTable.js';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('centerResources');
export default {
    name: 'settingSource',
    // inject: ['DATA_SOURCE', 'POP_TYPE_OTHER2'],
    data() {
        return {
        };
    },
    watch: {},
    computed: {
        ...mapState({
            // 数据源列表
            dataSourceList: state => state.dataSourceList
        })
    },
    created() {},
    destroyed() {},
    mounted() {
        this.init();
    },
    methods: {
        ...mapMutations([storeStatic.M_DIALOG_DATA]),
        ...mapActions([storeStatic.A_DATABASE_TYPE_DATA]),
        /**
         * 初始化
         */
        init() {

        }
    }
};
</script>
