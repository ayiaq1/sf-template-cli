<!--
 * @moduleName: 质量开发 -> 新增任务配置
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 17:32:40
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime : 2019-12-30 17:45:08
 -->
<template>
    <div class="newTaskConfig" id="qualityNewTask">
        <div class="item">
            <i class="sf-icon-c-programme"></i>
            <span @click="componentModeConfig()">组件方式配置</span>
        </div>
        <div class="item">
            <i class="sf-icon-c-programme"></i>
            <span @click="sqlModeConfig()">SQl方式配置</span>
        </div>
    </div>
</template>

<script>
// dialog
import { dialogClass, globalStatic } from 'javascript@/event/globalStatic.js';
// Vuex
import * as storeStatic from '../../../store/qualityDevelopment/storeStatic.js';
import { createNamespacedHelpers } from 'vuex';
const { mapMutations } = createNamespacedHelpers('qualityDevelopment');
export default {
    inject: [
        'POP_TYPE_COMPONENTS_MODE_CONFIG',
        'POP_TYPE_SQL_MODE_CONFIG'
    ],
    data() {
        return {
            loading: false
        };
    },
    watch: {},
    created() {},
    mounted() {
        // this.init();
    },
    methods: {
        ...mapMutations([
            // 弹出层 公共信息
            storeStatic.M_DIALOG_DATA
        ]),
        /**
         * 组件方式配置
        */
        componentModeConfig() {
            let { POP_TYPE_COMPONENTS_MODE_CONFIG } = this;
            let dialogData = {
                value: POP_TYPE_COMPONENTS_MODE_CONFIG,
                type: globalStatic.ADD,
                data: null,
                class: dialogClass.BIG,
                title: '组件方式配置',
                show: true
            };
            this[storeStatic.M_DIALOG_DATA](dialogData);
        },
        /**
         * 组件方式配置
        */
        sqlModeConfig() {
            let { POP_TYPE_SQL_MODE_CONFIG } = this;
            let dialogData = {
                value: POP_TYPE_SQL_MODE_CONFIG,
                type: globalStatic.ADD,
                data: null,
                class: dialogClass.BIG,
                title: 'SQl方式配置',
                show: true
            };
            this[storeStatic.M_DIALOG_DATA](dialogData);
        }
    }
};
</script>

<style lang="less" scoped>
#qualityNewTask{
    width: 200px;
    height: 120px;
}
</style>