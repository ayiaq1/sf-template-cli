<!--
 * @moduleName: 审核管理 - 审核流程配置 - 流程模板管理 - 版本列表
 * @Author: SuLiang
 * @Date: 2019-01-23 11:37:29
 * @LastModifiedBy: SuLiang
 * @LastEditTime: 2019-01-30 10:13:50
 -->

<template>
    <el-dialog append-to-body title="版本列表" :close-on-click-modal="false" :visible.sync="formData.show" class="big">
        <div class="main-table-box">
            <div class="table-bd">
                <el-table :data="tableList" border stripe tooltip-effect="dark" style="width: 100%">
                    <el-table-column prop='processName' label="流程模板名称" show-overflow-tooltip>
                        <!-- <template slot-scope="scope">
                            <a href="javascript:;" @click="showProcessFun(scope.row)">{{scope.row.processName}}</a>
                        </template> -->
                        <template slot-scope='scope'>
                            <a href="javascript:;" @click.stop='showProcessFun(scope.row)'>
                                        <span>{{scope.row.processName}}</span>
                                    </a>
                        </template>
                    </el-table-column>
                    <el-table-column prop='version' label="版本号" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop='comment' label="变更原因" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop='updateTime' label="变更时间" show-overflow-tooltip :formatter='(row)=>{return dateFormatter(row.updateTime)}'>
                    </el-table-column>
                    <el-table-column prop='updateUser' label="变更人" show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <el-pagination @current-change="handleCurrentChange" :current-page="page.index" :page-sizes="[10, 20, 50, 100]" :page-size="page.rows" layout="total, prev, pager, next, jumper" :total="page.total" v-if='page.total > 0'></el-pagination>
            </div>
        </div>
    </el-dialog>
</template>
<script>
import { dateFormatter } from 'javascript@/utils/utils.js';

export default {
    props: ['formData'],
    data() {
        return {
            tableList: [],
            page: {
                index: 1,
                total: 0,
                rows: 10
            }
        };
    },
    watch: {},
    created() {
        this.getTableList();
    },
    computed: {},
    methods: {
        // 查看流程
        showProcessFun(row) {
            this.$emit('processSetting', row, 'view', 'history');
        },

        handleCurrentChange(val) {
            this.page.index = val;
            this.getTableList();
        },

        /**
         * @Author      SuLiang
         * @DateTime    2018-01-13
         * @lastTime    2018-01-13
         * @description 获取列表
         */
        getTableList() {
            let postObj = {
                // 流程编号
                processNo: this.formData.data.processNo || '',
                page: {
                    index: this.page.index || 1,
                    rows: this.page.rows || 10
                }
            };
            this.$factory('/wydataeye/audit/deploy/changelog.json', postObj, 'GET').then((res) => {
                let resData = res.data || {};
                this.tableList = resData.list || [];
                this.page.total = resData.total || 0;
            });
        },

        /**
         * @Author      SuLiang
         * @DateTime    2018-01-25
         * @lastTime    2018-01-25
         * @description 格式化 时间函数
         */
        dateFormatter(time) {
            return dateFormatter(time);
        }
    },
    components: {}
};

</script>
