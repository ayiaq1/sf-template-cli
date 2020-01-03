<!--
 * @moduleName: 问题明细 -- 问题详情
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 15:57
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime: 2019-12-30 15:57
 -->
<template>
    <div>
        <div class="problemInfor">
            <sf-total-list :data="dataBase"></sf-total-list>
            <div class="piechrt">
                <span class="color-blue fz16">20%</span>
                <span>本次校验</span>
                <span>合格率</span>
            </div>
        </div>
        <!-- 表格 -->
        <sf-main-table-box>
            <sf-main-title>
                <el-button-group>
                    <el-button icon="sf-icon-c-relation">血缘分析</el-button>
                    <el-button icon="sf-icon-c-export">导出</el-button>
                    <span style="line-height:30px">
                        提示：本页面仅为您展示部分问题记录，如需更多，
                        <span class="color-blue" style="cursor:pointer">请点此查看</span>
                    </span>
                </el-button-group>
            </sf-main-title>
            <div class="tableTitle">问题数据明细，共30，000条，以下仅为您展示1000条样例</div>
            <sf-table
                ref="problemDetailsTable"
                :data="problemDetails"
                :props="props"
                :columns="columns"
                v-loading="loading"
            >
            </sf-table>
        </sf-main-table-box>
    </div>
</template>
<script>
    // Vuex
    export default {
        props: ['formData'],
        data() {
            return {
                loading: false,
                dataBase: [{
                    label: '校验总数',
                    total: 0,
                    unit: ''
                }, {
                    label: '问题总数',
                    total: 0,
                    unit: ''
                }],
                // 任务列表
                problemDetails: {
                    total: 1,
                    tableList: []
                },
                columns: [{
                    name: 'xxxxx',
                    dataIndex: 'taskName',
                    showOverflowTooltip: true
                }, {
                    name: 'xxxxx',
                    dataIndex: 'subordinateTable',
                    showOverflowTooltip: true
                }, {
                    name: 'xxxxxx',
                    dataIndex: 'responsible',
                    showOverflowTooltip: true
                }, {
                    name: 'xxxxxx',
                    dataIndex: 'createTime',
                    showOverflowTooltip: true
                }, {
                    name: 'xxxxxx',
                    dataIndex: 'createTime',
                    showOverflowTooltip: true
                }, {
                    name: 'xxxxxx',
                    dataIndex: 'createTime',
                    showOverflowTooltip: true
                }],
                props: {
                    data: 'tableList',
                    total: 'total',
                    label: 'name',
                    value: 'dataIndex'
                }
            };
        },
        created() {},
        methods: {}
    };
</script>

<style lang="less" scoped>
.problemInfor{
    width: 100%;
    height: 130px;
    position: relative;
    padding-top: 20px;
    .piechrt{
        width: 100px;
        height: 100px;
        text-align: center;
        border: 2px solid #0065b8;
        border-radius: 50%;
        position: absolute;
        right: 120px;
        top: 10px;
        padding-top: 15px;
        span{
            display: block;
        }
    }
}
.tableTitle{
    height: 30px;
    line-height: 30px;
    background: #eee;
    margin: 10px 0;
    text-indent: 10px;
}
</style>
