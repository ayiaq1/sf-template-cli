<!--
 * @moduleName: 审核管理 - 审核流程配置 - 环节模板管理 - 环节编辑框 - 人员选择框
 * @Author: SuLiang
 * @Date: 2019-01-24 16:22:09
 * @LastModifiedBy: SuLiang
 * @LastEditTime: 2019-05-16 14:31:22
 -->

<template>
    <div>
        <template v-if="ctrl !== 'view'">
            <div class="pageContainer LRSetting">
                <LeftList ref="leftList" async v-model="searchKey" placeholder="请输入名称进行查询" :data="treeData" :props="treeProps" :maxHeight="maxHeight" :currentKey="currentKey" @selectDataFun="_selectDataFun" @searchFun="_getTreeListFun">
                    <template slot="search-top">
                        <el-form label-width="85px" style="padding:5px 10px;">
                            <el-form-item label="所属部门：">
                                <dept-cascader :data="deptList" v-model="deptId" @change="_getTreeListFun"></dept-cascader>
                            </el-form-item>
                        </el-form>
                    </template>
                </LeftList>
                <RightTable :columns="columns" :maxHeight="maxHeight" :currentKey="currentKey" @selectDataFun="_selectDataFun">
                    <template slot="table-column">
                        <el-table-column v-for='(item,index) in columns' :key="index" :prop='item.prop' :label="item.label" show-overflow-tooltip>
                            <template slot-scope='scope'>
                                <span>{{scope.row[item.prop]}}</span>
                            </template>
                        </el-table-column>
                    </template>
                </RightTable>
            </div>
        </template>
        <template v-else>
            <div class="main-table-box">
                <div class="table-bd">
                    <el-table :data="currentKey" border stripe tooltip-effect="dark" style="width: 100%">
                        <el-table-column prop='userName' label="人名" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import LeftList from 'components@/LRSetting/LeftList.vue';
import RightTable from 'components@/LRSetting/RightTable.vue';
import DeptCascader from 'components@/deptCascader';
import { cloneFun } from 'javascript@/utils/utils.js';
// 限制条数
export default {
    props: {
        userData: {
            type: Array,
            default: () => {
                return [];
            }
        },
        ctrl: {
            type: String,
            default: 'add'
        }
    },
    data() {
        return {
            deptList: [],
            deptId: '',
            searchKey: '',
            maxHeight: 500,
            page: {
                index: 1,
                rows: 200,
                total: 0
            },
            treeData: [],
            currentKey: [],
            columns: [{
                prop: 'name',
                label: '人名'
            }],
            treeProps: {
                id: 'flowId',
                label: 'name',
                children: 'children'
            }
        };
    },
    watch: {},
    computed: {},
    created() {
        this.initFun();
    },
    mounted() { },
    methods: {
        initFun() {
            this._getDeptListFun();
            this._getTreeListFun();
            this.currentKey = cloneFun(this.userData || []);
        },
        _delFun() { },
         // 获取部门地区
        _getDeptListFun() {
            this.deptList = [];
            this.$factory('/wydataeye/bmsapi/areaDeptTree.json').then((response) => {
                this.deptList = response.data;
            });
        },
        // 获取树的数据
        _getTreeListFun(val) {
            this.treeList = [];
            // 接口沿用的数据元权限接口，需要后台给新接口或者给一个公共接口 TODO
            this.$factory('/wydataeye/metadata/permission/list_all_user.json', {
                deptId: this.deptId,
                searchKey: this.searchKey,
                page: this.page
            }).then((response) => {
                let treeList = response.data.list;
                treeList.forEach((item) => {
                    item.name = item.userName ? `${item.account}(${item.userName})` : item.account;
                    item.id = item[this.treeProps.id];
                });
                this.treeData = treeList;
            });
        },
        // 子集派发的修改当前选中栏
        _selectDataFun(val, selectData) {
            if (selectData) {
                this.currentKey = selectData;
                return;
            }
            this.currentKey.push(val);
        },
        submitFun() {
            let list = cloneFun(this.currentKey);
            let nameList = [];
            let ipList = [];
            let usersList = [];
            list.forEach(item => {
                nameList.push(item.userName);
                ipList.push(item.flowId);
                usersList.push({
                    flowId: item.flowId,
                    userName: item.userName
                });
            });
            this.$emit('setUserList', nameList.join(','), ipList.join(','), usersList);
        }
    },
    components: { DeptCascader, RightTable, LeftList },
    beforeDestroy() { }
};

</script>
