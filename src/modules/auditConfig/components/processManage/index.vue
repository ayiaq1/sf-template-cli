<!--
 * @moduleName: 审核管理 - 审核流程配置 - 流程模板管理
 * @Author: SuLiang
 * @Date: 2019-01-08 17:14:21
 * @LastModifiedBy: SuLiang
 * @LastEditTime: 2019-07-18 11:42:36
 -->
<template>
    <div class="sf-no-side-container">
        <sf-filter-group label="状态">
            <sf-filter filterKey="statusType" v-model="status" :data="typeList" default @queryChange="queryChange">
            </sf-filter>
        </sf-filter-group>
        <div class="sf-main-table-box">
            <div class="sf-main-title">
                <!-- <div class="sf-searchBar">
                    <input autocomplete="off" type="text" maxlength="32" name="searchLable" class="searchInput" placeholder="请输入流程名称进行查询" v-model="searchKey" v-on:keyup.enter="searchFun">
                    <a href="javascript:;" class="searchBtn" v-on:click="searchFun">
                        <i class="el-icon-search"></i>
                    </a>
                </div> -->
                <sf-search-bar></sf-search-bar>
            </div>
            <div class="sf-table-bd" style="position: relative;">
                <!-- table -->
                <!-- 问题单100491 -->
                <el-table ref="multipleTable" :data="tableList" border style="width: 100%" >
                    <el-table-column prop="processNo" label="流程模板编号" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="processName" label="流程名称" show-overflow-tooltip>
                         <template slot-scope='scope'>
                            <a href="javascript:;" @click.stop="viewFun(scope.row)">
                                <span>{{scope.row.processName}}</span>
                            </a>
                        </template>
                    </el-table-column>
                    <el-table-column prop="auditType" label="适用功能" show-overflow-tooltip :formatter="(row)=>{return typeFormatter(row.auditType)}"></el-table-column>
                    <el-table-column prop="nodeNum" label="流程节点数" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="description" label="流程描述" show-overflow-tooltip></el-table-column>
                    <!-- <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip :formatter="(row)=>{return dateFormatter(row.createTime)}"></el-table-column> -->
                    <!-- 问题单#97676 修改 -->
                    <el-table-column prop="updateTime" label="最新更新时间" show-overflow-tooltip :formatter="(row)=>{return dateFormatter(row.updateTime)}"></el-table-column>
                    <el-table-column prop="useStatus" label="流程状态" show-overflow-tooltip>
                        <template slot-scope="scope">
                            <span v-if="scope.row.useStatus === 'DRAFT'"><span class="el-icon-state-draft"></span>&nbsp;&nbsp;草稿</span>
                            <span v-else-if="scope.row.useStatus === 'CHANGE'"><span class="el-icon-state-change"></span>&nbsp;&nbsp;变更中</span>
                            <span v-else-if="scope.row.useStatus === 'DISABLE'"><span class="el-icon-state-pause"></span>&nbsp;&nbsp;已停用</span>
                            <span v-else-if="scope.row.useStatus === 'ENABLE'"><span class="el-icon-state-ok"></span>&nbsp;&nbsp;已启用</span>
                            <span v-else><span class="el-icon-question"></span>&nbsp;&nbsp;未知</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="200">
                        <!-- 这一级别无法使用scope 值做判定 -->
                        <template slot-scope="scope">
                            <div class="operation">
                                <!-- 编辑(草稿，变更，停用) -->
                                <template v-if="scope.row.useStatus !== 'ENABLE'">
                                    <el-tooltip placement="top" :enterable="false" :open-delay="500" content="编辑">
                                        <span>
                                            <span class="obtn" @click.stop="editFun(scope.row)">
                                                <i class="el-icon-c-edit"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                </template>
                                <!-- 启用(非启用状态都可启用) -->
                                <template v-if="scope.row.useStatus !== 'ENABLE'">
                                    <el-tooltip placement="top" :enterable="false" :open-delay="500" content="启用">
                                        <span>
                                            <span class="obtn" @click.stop="startFun(scope.row)">
                                                <i class="el-icon-c-start"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                </template>
                                <!-- 停用(启用状态才可以停用) -->
                                <template v-if="scope.row.useStatus === 'ENABLE'">
                                    <el-tooltip placement="top" :enterable="false" :open-delay="500" content="停用">
                                        <span>
                                            <span class="obtn" @click.stop="stopFun(scope.row)">
                                                <i class="el-icon-c-stop"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                </template>
                                <!-- 变更(启用才可变更) -->
                                <template v-if="scope.row.useStatus === 'ENABLE'">
                                    <el-tooltip placement="top" :enterable="false" :open-delay="500" content="变更">
                                        <span>
                                            <span class="obtn" @click.stop="changeFun(scope.row)">
                                                <i class="el-icon-c-change"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                </template>
                                <!-- 版本列表(非草稿状态) -->
                                <template v-if="scope.row.useStatus !== 'DRAFT'">
                                    <el-tooltip placement="top" :enterable="false" :open-delay="500" content="版本列表">
                                        <span>
                                            <span class="obtn" @click.stop="historyFun(scope.row)">
                                                <i class="el-icon-c-history"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                </template>
                                <!-- 删除(非启用状态) -->
                                <!-- <template v-if="scope.row.useStatus !== 'ENABLE'">
                                    <el-tooltip placement="top" :enterable="false" :open-delay="500" content="删除">
                                        <span>
                                            <span class="obtn" @click.stop="delFun(scope.row)">
                                                <i class="el-icon-c-delete"></i>
                                            </span>
                                        </span>
                                    </el-tooltip>
                                </template> -->
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page="page.index" :page-sizes="[10, 20, 50, 100]" :page-size="page.rows" layout="total, prev, pager, next, jumper" :total="page.total" v-if="page.total > 0"></el-pagination>
            </div>
        </div>
        <!-- 新增 -->
        <AddDialog :formData='addData' v-if='addData.show' @getTableList='searchFun' @processSetting='processSetFun' />
        <!-- 编辑 -->
        <ProcessSetting :formData='processData' v-if='processData.show' @getTableList='searchFun' />
        <!-- 变更弹框 -->
        <ChangeForm :formData='changeData' v-if='changeData.show' @getTableList='searchFun' />
        <!-- 变更历史记录 -->
        <HistoryForm :formData='historyData' v-if='historyData.show' @processSetting='processSetFun' />
    </div>
</template>
<script>
import { mapState } from 'vuex';
// 引入配置
// import { dateFormatter, skipRefresh } from 'javascript@/utils/utils.js';
import { dateFormatter } from 'javascript@/utils/utils.js';
// 新增弹框
import AddDialog from './process/addDialog.vue';
// 编辑弹框
import ProcessSetting from './process/processSetting1.vue';
// 变更弹框
import ChangeForm from './process/changeForm.vue';
// 历史记录弹框
import HistoryForm from './process/historyForm.vue';

export default {
    props: {
        pageType: {
            type: String,
            default: 'HB'
        }
    },
    data() {
        return {
            undoCount: 77,
            // 搜索词
            searchKey: '',
            // 后台查询搜索词
            searchVal: '',
            // 状态
            useStatus: '',
            // 表数据
            tableList: [],
            // 选择的数据
            checkList: [],
            // 分页对象
            page: {
                // 当前页
                index: 1,
                // 当前行
                rows: 10,
                // 当前总数
                total: 0
            },
            // 类型描述
            typeList: [{
                name: '全部',
                value: ''
            }],
            // 功能列表回显
            funcList: [],
            searchForm: {
                hbId: '',
                state: '',
                releaseDate: '',
                workDate: '',
                datetimerange: []
            },
            // 新增
            addData: {
                show: false,
                data: [],
                ctrl: 'add'
            },
            // 编辑
            processData: {
                show: false,
                data: {},
                // add(新增), edit(编辑), view(查看), logView(日志查看)
                ctrl: 'add'
            },
            // 历史记录
            historyData: {
                show: false,
                data: []
            },
            // 变更
            changeData: {
                show: false,
                data: []
            },
            status: ''
        };
    },
    watch: {
        'processData.show'(val) {
            if (val === false) {
                this.searchFun();
            }
        }
    },
    computed: {
        ...mapState({
            windowSize: state => state.windowSize
        })
    },
    created: function() {
        // 前置状态类列表获取
        this.getDataTypeList();
        this.getFuncList();
    },
    mounted() {
        // 先获取所有的数据
        this.$nextTick(() => {
            this.searchFun();
        });
    },
    methods: {
        // 获取功能列表
        getFuncList() {
            // this.$factory('/wydataeye/audit/job/getAuditTypes.json', {}, 'GET').then((res) => {
            //     this.funcList = res.data || [];
            // });
        },
        /**
         * @Author      SuLiang
         * @DateTime    2017-10-27
         * @lastTime    2017-10-27
         * @description 获取数据类型列表
         */
        getDataTypeList() {
            this.typeList = [{
                name: '全部',
                value: ''
            }, {
                name: '草稿',
                value: 'DRAFT'
            }, {
                name: '变更中',
                value: 'CHANGE'
            }, {
                name: '已启用',
                value: 'ENABLE'
            }, {
                name: '已停用',
                value: 'DISABLE'
            }];
        },
        // 获取状态
        typeFormatter(type) {
            let str = '';
            let list = this.funcList || [];
            if (type) {
                list.forEach(item => {
                    if (item.code + '' === type + '') {
                        str = item.name || '';
                    }
                });
            }
            return str;
        },
        /**
         * @Author      SuLiang
         * @DateTime    2017-10-25
         * @lastTime    2017-10-25
         * @description 获取操作列表
         */
        getOperationList(row, params) {
            if (!params) {
                params = 'flowId';
            }
            let flowIds = [];
            if (row) {
                // row内删除
                flowIds[0] = row[params];
            } else {
                // 勾选删除
                var checkList = this.checkList;
                if (checkList.length === 0) {
                    this.$message['warning'](this.i18n.message.CHECK_TIP);
                }
                for (var i = checkList.length - 1; i >= 0; i--) {
                    flowIds.push(checkList[i][params]);
                }
            }
            return flowIds;
        },
        // 新增
        addFun() {
            this.addData.show = true;
            this.addData.data = {};
            this.addData.ctrl = 'add';
        },
        // 流程设计
        processSetFun(row, type = 'add', model) {
            // add(新增), edit(编辑), view(查看), logView(日志查看)
            this.processData.data = row;
            this.processData.show = true;
            this.processData.ctrl = type;
            this.processData.model = model;
        },
        // 编辑
        editFun(row) {
            this.processSetFun(row, 'edit');
        },
        // 查看
        viewFun(row) {
            this.processSetFun(row, 'view');
        },
        // 删除
        delFun(row) {
            // 获取操作列表
            let flowIds = this.getOperationList(row);
            if (flowIds.length === 0) {
                return false;
            }
            let postObj = {};
            let url = '/wydataeye/audit/deploy/deleteProcess.json';
            if (row) {
                postObj.processId = row.flowId || '';
            } else {
                url = '/wydataeye/audit/deploy/bulkDeleteProcess.json';
                postObj.processIds = flowIds;
            }
            // 二次确认
            let _this = this;
            let confirm = function() {
                // 执行删除函数
                _this.$factory(url, {
                    ...postObj
                }, 'GET').then((res) => {
                    // 缺省值保护
                    _this.$message.success(res.message || _this.i18n.message.OPERATION_COMPLETE);
                    // _this.$message.success(res.message);
                    // 刷新表格数据 无论失败或成功都刷新列表
                    _this.getTableList();
                }).catch(() => {
                    _this.getTableList();
                });
            };
            this.secondInquiry(this.i18n.message.DEL_OK, confirm);
        },
        /**
         * @Author      SuLiang
         * @DateTime    2018-01-31
         * @lastTime    2018-01-31
         * @description 二次删除提示
         * @param       {[type]}      msg        [提示语]
         * @param       {[type]}      confirmFun [确认函数]
         * @param       {[type]}      cancelFun  [取消函数]
         */
        secondInquiry(msg, confirmFun, cancelFun) {
            this.$$confirm(msg, this.i18n.message.SYSTEM_TXT, {
                closeOnClickModal: false,
                confirmButtonText: this.i18n.message.OK,
                cancelButtonText: this.i18n.message.CANCEL,
                type: 'warning'
            }).then(() => {
                // 执行函数
                if (confirmFun && typeof(confirmFun) === 'function') {
                    confirmFun();
                }
            }).catch(() => {
                if (cancelFun && typeof(cancelFun) === 'function') {
                    cancelFun();
                }
            });
        },
        // 启用
        startFun(row) {
            // 获取操作列表
            // let flowIds = this.getOperationList(row);
            // if (flowIds.length === 0) {
            //     return false;
            // }
            // console.log('>>> startFun');
            this.$factory('/wydataeye/audit/deploy/processEnable.json', {
                processId: row.flowId
            }, 'POST').then(res => {
                // 刷新列表
                this.searchFun();
            });
        },
        // 停用
        stopFun(row) {
            // 获取操作列表
            let flowIds = this.getOperationList(row);
            if (flowIds.length === 0) {
                return false;
            }
            this.$factory('/wydataeye/audit/deploy/countAuditJob.json', {
                processIds: flowIds
            }, 'GET').then(res => {
                this.$$confirm(`当前流程下还存在<strong>${res.data || 0}</strong>个任务正在办理，停用此流程后系统会自动将待办任务做退回操作，是否确认？`, this.i18n.message.SYSTEM_TXT, {
                    closeOnClickModal: false,
                    // 标签可用
                    dangerouslyUseHTMLString: true,
                    confirmButtonText: this.i18n.message.OK,
                    cancelButtonText: this.i18n.message.CANCEL,
                    type: 'warning'
                }).then(() => {
                    this.$factory('/wydataeye/audit/deploy/processDisable.json', {
                        processId: row.flowId
                    }, 'POST').then(res => {
                        // 刷新列表
                        this.searchFun();
                    });
                }).catch(() => {});
            });
        },
        // 变更
        changeFun(row) {
            this.changeData.data = row;
            this.changeData.show = true;
        },
        // 历史版本
        historyFun(row) {
            this.historyData.data = row;
            this.historyData.show = true;
        },
        /**
         * @Author      SuLiang
         * @DateTime    2017-07-14
         * @lastTime    2017-07-14
         * @description 查询条件变更
         */
        queryChange(query) {
            this.useStatus = query.statusType;
            // 查询表格数据
            this.searchFun();
        },
        /**
         * @Author      SuLiang
         * @DateTime    2017-07-13
         * @lastTime    2017-07-13
         * @description 搜索查询功能
         * @param       {[type]}      key [description]
         * @return      {[type]}          [description]
         */
        searchFun() {
            // 重置分页数据，进行查询
            this.page = {
                index: 1,
                rows: 10,
                total: 0
            };
            // 查询表格数据
            this.getTableList();
        },
        /**
         * @Author      SuLiang
         * @DateTime    2017-07-13
         * @lastTime    2017-07-13
         * @description 表格多选
         * @param       {[type]}      val [description]
         * @return      {[type]}          [description]
         */
        handleSelectionChange(val) {
            this.checkList = val;
        },
        /**
         * @Author      SuLiang
         * @DateTime    2017-07-13
         * @lastTime    2017-07-13
         * @description 时间过滤
         * @return      {[type]}      [description]
         */
        dateFormatter(time) {
            return dateFormatter(parseInt(time));
        },
        /**
         * @Author      SuLiang
         * @DateTime    2017-07-13
         * @lastTime    2017-07-13
         * @description 获取表格数据
         * @param       {[type]}      page [description]
         * @return      {[type]}           [description]
         */
        getTableList(skip) {
            // skip = { type: 'current','cut'  selectLen: 选中len}
            // let page = skipRefresh(skip, this.page, this.tableList);
            // this.searchVal = this.searchKey;
            // let searchKey = this.searchVal;
            // let param = {
            //     useStatus: this.useStatus || '',
            //     keyword: searchKey
            // };
            // let postObj = {
            //     param: { ...param },
            //     page: { ...page }
            // };
            // this.$factory('/wydataeye/audit/deploy/listProcess.json', postObj, 'GET')
            //     .then(res => {
            //         let resData = res.data || {};
            //         // table赋值
            //         this.tableList = resData.list || [];
            //         this.page.total = resData.total || 0;
            //     })
            //     .catch(() => {});
        },
        /**
         * @Author      SuLiang
         * @DateTime    2017-07-14
         * @lastTime    2017-07-14
         * @description 分页查询
         */
        handleCurrentChange(val) {
            this.page.index = val;
            let skip = {
                type: 'current'
            };
            this.getTableList(skip);
        },
        /**
         * @Author      D.chaofeng
         * @DateTime    2018-12-10
         * @lastTime    2018-12-10
         * @description size修改
         * @return      {[type]}      [description]
         */
        handleSizeChange(rows) {
            this.page.index = 1;
            this.page.rows = rows;
            let skip = {
                type: 'current'
            };
            this.getTableList(skip);
        }
    },
    components: {
        // 新增
        AddDialog,
        // 编辑
        ProcessSetting,
        // 变更
        ChangeForm,
        // 历史版本
        HistoryForm
    }
};

</script>
