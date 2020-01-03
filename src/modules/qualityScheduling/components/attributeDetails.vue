<!--
 * @moduleName: 问题详情 -> 属性
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 17:32:40
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime : 2019-12-30 17:45:08
 -->
<template>
    <div>
        <sf-header>
            <sf-header-title>
                <span>属性</span>
                <sf-link ><i class="sf-icon-state-close" @click="close()"></i></sf-link>
            </sf-header-title>
        </sf-header>
        <el-tabs v-model="activeTab">
            <el-tab-pane label="任务信息" name="0">
                <el-form ref="taskForm" :model="taskForm" label-width="65px">
                    <el-form-item label="时间区间">
                        <span>XXX</span>
                    </el-form-item>
                    <el-form-item label="任务列表">
                        <span>XXX</span>
                    </el-form-item>
                    <div class="singleLine width_90" title="当前区间需执行任务100个，其中5个为起始，95个为区间">
                        当前区间需执行任务100个，其中5个为起始，95个为区间
                    </div>
                    <div class="singleLine width_75">
                        <span class="color-blue">【区间】</span>RKJBXX（人口基本信息）_记致率
                    </div>
                    <div class="singleLine width_75">
                        <span class="color-yellow">【起始】</span>RKJBXX（人口基本信息）_记致率
                    </div>
                    <div class="singleLine width_75">
                        <span class="color-blue">【区间】</span>RKJBXX（人口基本信息）_记致率
                    </div>
                    <div class="singleLine width_75">
                        <span class="color-yellow">【起始】</span>RKJBXX（人口基本信息）_记致率
                    </div>
                    <div class="singleLine width_75">
                        <span class="color-blue">【区间】</span>RKJBXX（人口基本信息）_记致率
                    </div>
                    <div class="singleLine width_75">
                        <span class="color-yellow">【起始】</span>RKJBXX（人口基本信息）_记致率
                    </div>
                    <div class="singleLine width_75">
                        <span class="color-blue">【区间】</span>RKJBXX（人口基本信息）_记致率
                    </div>
                    <div class="singleLine width_75">
                        <span class="color-yellow">【起始】</span>RKJBXX（人口基本信息）_记致率
                    </div>
                    <div>“区间”表示开始时间 不在该区间，而是执行过程中到达该区间“起始”表示开始时间在该区间</div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="最新运行情况" name="1">
                <div class="mb10">
                    <span>最近运行时间：2019-01-01 12:00:00</span>
                </div>
                <div class="mb10">
                    <span class="color-gray mr5">如需查看任务历史运行情况，请</span>
                    <span class="color-blue">进入运维管理</span>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            activeTab: '0',
            // 任务信息
            taskForm: {}
        };
    },
    watch: {},
    created() {},
    mounted() {
        // this.init();
    },
    methods: {
        /**
         * 关闭 属性
        */
        close() {
            this.$emit('close');
        }
    }
};
</script>