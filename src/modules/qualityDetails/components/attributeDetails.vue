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
        <!-- 属性详情 -->
        <el-form ref="attrForm" :model="attrForm" label-width="90px">
            <el-form-item label="检核数据库">
                <span>xxxx数据库</span>
            </el-form-item>
            <el-form-item label="检核表">
                <span>Rkjjbjbj(人口信息表)</span>
            </el-form-item>
            <el-form-item label="业务规则">
                <span>---</span>
            </el-form-item>
            <el-form-item label="质量评价维度">
                <span>一致性/xxx</span>
            </el-form-item>
            <el-form-item label="任务名称">
                <span>xxx表维度基本信息——规则维护</span>
            </el-form-item>
            <el-form-item label="规则类型">
                <span>表级规则</span>
            </el-form-item>
            <el-form-item label="配置方式">
                <span class='mr5'>自定义sql</span>
                <span class="color-blue cursor">查看开发设计</span>
            </el-form-item>
        </el-form>
        <el-tabs v-model="activeTab">
            <el-tab-pane label="派发详情" name="0">
                <el-form ref="attrForm" :model="attrForm" label-width="90px">
                    <el-form-item label="派发方式">
                        <span>整体派发</span>
                    </el-form-item>
                    <el-form-item label="工单处理人">
                        <span>xxx部门/xxx人</span>
                    </el-form-item>
                    <el-form-item label="问题描述">
                        <span>xxxxxxxxxxx</span>
                    </el-form-item>
                    <el-form-item label="派发时间">
                        <span>2019-01-02 10:23:55</span>
                    </el-form-item>
                    <el-form-item label="派发人">
                        <span>admin/系统管理员</span>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="处理记录" name="1">
                <!-- 表格 -->
                <sf-main-table-box class="mb10">
                    <sf-table
                        ref="recordsListTable"
                        :data="recordsList"
                        :props="props"
                        :columns="columns"
                        v-loading="loading"
                    >
                    </sf-table>
                </sf-main-table-box>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            // 属性
            attrForm: {},
            // 派发详情
            distributedForm: {},
            // 处理记录
            recordsForm: {},
            activeTab: '0',
            // 任务列表
            recordsList: {
                total: 1,
                tableList: [{
                    id: 1
                }]
            },
            columns: [{
                name: '处理环节',
                dataIndex: 'taskName',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '处理人',
                dataIndex: 'taskName',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '处理时间',
                dataIndex: 'taskName',
                showOverflowTooltip: true,
                disabled: true
            }, {
                name: '处理结论',
                dataIndex: 'taskName',
                showOverflowTooltip: true,
                disabled: true
            }],
            props: {
                data: 'tableList',
                total: 'total',
                label: 'name',
                value: 'dataIndex'
            }
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