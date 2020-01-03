<!--
 * @moduleName: 模型设计 -- 版本列表
 * @Author: dawdler
 * @Date: 2020-01-02 10:33:57
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2020-01-02 13:48:32
 -->
<template>
    <sf-page-container>
        <sf-left-side>
            <ul>
                <li>
                    版本V1.0[ 审核中 ]
                </li>
                <li>
                    版本V1.1[ 审核中 ]
                </li>
            </ul>
        </sf-left-side>
        <sf-right-side>
            <el-tabs v-model="activeType">
                <el-tab-pane label="基本信息" name="0" />
                <el-tab-pane label="审核记录" name="1" />
                <el-tab-pane label="表" name="2" />
                <keep-alive>
                    <component :is="pluginName" />
                </keep-alive>
            </el-tabs>
        </sf-right-side>
    </sf-page-container>
</template>
<script>
import RightDetailsContainer from './rightDetailsContainer';
export default {
    name: 'version',
    components: {
        RightDetailsContainer
    },
    data() {
        return {
            activeType: '0',
            pluginName: 'RightDetailsContainer'
        };
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {}
};
</script>
