<!--
 * @moduleName: 服务发布 - 主页面
 * @Author: suLiang
 * @Date: 2019-12-31 17:13:07
 * @LastModifiedBy: suLiang
 * @LastEditTime : 2020-01-02 21:03:43
 -->
<template>
    <div style="min-height:450px">
        <sf-header v-if='treeNode'>
            <sf-header-title>
                <h3 class="fz18">{{treeNode.label}}({{treeNode.count}})</h3>
                <hr/>
            </sf-header-title>
        </sf-header>
        <!-- 搜索框 -->
        <div>
            <el-row>
                <el-col :span="8">
                    <sf-filter-group label="接口状态" cn="接口状态">
                        <el-select v-model="filterData.status"  placeholder="请选择" class="filterSelect">
                            <el-option v-for="(item, index) in statusList" :key="index" :label="item.stName" :title="item.stName" :value="item.stCode" />
                        </el-select>
                    </sf-filter-group>
                </el-col>
                <el-col :span="8">
                    <sf-filter-group label="审核状态" cn="审核状态">
                        <el-select v-model="filterData.status"  placeholder="请选择" class="filterSelect">
                            <el-option v-for="(item, index) in statusList" :key="index" :label="item.stName" :title="item.stName" :value="item.stCode" />
                        </el-select>
                    </sf-filter-group>
                </el-col>
                <el-col :span="8">
                    <sf-filter-group label="数据来源状态" cn="数据来源状态">
                        <el-select v-model="filterData.status"  placeholder="请选择" class="filterSelect">
                            <el-option v-for="(item, index) in statusList" :key="index" :label="item.stName" :title="item.stName" :value="item.stCode" />
                        </el-select>
                    </sf-filter-group>
                </el-col>
                <el-col :span="8">
                    <sf-filter-group label="自定义分类" cn="自定义分类" v-if='activeName === "interfaceType"'>
                        <el-select v-model="filterData.status"  placeholder="请选择" class="filterSelect">
                            <el-option v-for="(item, index) in statusList" :key="index" :label="item.stName" :title="item.stName" :value="item.stCode" />
                        </el-select>
                    </sf-filter-group>
                </el-col>
                <el-col :span="8">
                    <sf-filter-group label="接口类型" cn="接口类型" v-if='activeName === "custom"'>
                        <el-select v-model="filterData.status"  placeholder="请选择" class="filterSelect">
                            <el-option v-for="(item, index) in statusList" :key="index" :label="item.stName" :title="item.stName" :value="item.stCode" />
                        </el-select>
                    </sf-filter-group>
                </el-col>
                <el-row>
                    <el-col :span="8">
                        <sf-filter-group label="关键字" cn-label="关键字">
                            <el-row :gutter="10">
                                <el-col :span="18">
                                    <sf-search-bar :loading="isloading" v-model="filterData.searchKey" placeholder=" 请输入接口名进行查询" @searchFun="_searchFun" />
                                </el-col>
                                <el-col :span="6">
                                    <el-button type="primary" @click="_resetFun" class="resetBtn">重置</el-button>
                                </el-col>
                            </el-row>
                        </sf-filter-group>
                    </el-col>
                </el-row>
            </el-row>
        </div>
        <!-- 表格 -->
        <sf-main-table-box>
            <sf-main-title>
                <!-- <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量添加</span></el-button> -->
                <el-popover ref="addResPop" popper-class="cr-addPopover" placement="bottom-start" trigger="hover">
                    <ul>
                        <li class="addPopover_item">
                            <i class="el-icon-folder-add addPopover_icon"></i><span>自定义创建</span>
                            <p class="addPopover_info">在当前资源没有源表也无物理表的情况下，可选择此方式，自定义添加资源属性及数据项信息</p>
                        </li>
                        <li class="addPopover_item">
                            <i class="el-icon-folder-add addPopover_icon"></i><span>根据来源创建</span>
                            <p class="addPopover_info">如果当前资源已知数据来源的资源信息，则可使用此方式快速构建</p>
                        </li>
                        <li class="addPopover_item">
                            <i class="el-icon-folder-add addPopover_icon"></i><span>根据物理表创建</span>
                            <p class="addPopover_info">如果当前资源在数据库表中已经存在，则可使用此方式快速构建</p>
                        </li>
                    </ul>
                    <el-button icon="sf-icon-c-add" class="singleBtn" slot="reference" type="primary"><span class="ml5">新增资源</span></el-button>
                </el-popover>
                <!-- <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量送审</span></el-button>
                <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量变更</span></el-button>
                <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量启用</span></el-button>
                <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量停用</span></el-button>
                <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量修改</span></el-button>
                <el-button icon="sf-icon-c-add" class="singleBtn"><span>批量删除</span></el-button>
                <el-button icon="sf-icon-c-add" class="singleBtn"><span>导入</span></el-button>
                <el-button icon="sf-icon-c-add" class="singleBtn"><span>导出</span></el-button>
                <el-button icon="sf-icon-c-add" class="singleBtn"><span>下载导入模版</span></el-button> -->
                <span v-if="abnormalNum > 0" class="abnormalBox">
                    <span class="abnormalTips">提示：当前列表有{{ abnormalNum }}个服务即将过期，请关注处理</span>
                    <el-checkbox class="abnormalCheckBox" @change="_abnormalCheckedFun" v-model="abnormalChecked" label="只显示即将过期的服务" cn="只显示即将过期的服务"></el-checkbox>
                </span>
            </sf-main-title>
            <sf-table-bd>
                <sf-table ref="resourcesTable" v-loading="isloading" :data="resourcesData" :props="resourcesProps" showCustom :columns="resourcesColumns" @pageChange="_pageChangeFun">
                    <template #render="{row, value, field}">
                    </template>
                </sf-table>
            </sf-table-bd>
        </sf-main-table-box>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import * as codeTable from '../javascript/codeTable.js';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('serviceRelease');
export default {
    data() {
        return {
            // 搜索
            filterData: {
                status: '',
                searchKey: ''
            },
            statusList: [],
            isloading: false,
            // 异常数据
            abnormalNum: 0,
            resourcesData: [],
            resourcesProps: {
                data: 'records',
                total: 'totalCount',
                label: 'name',
                value: 'dataIndex'
            },
            resourcesColumns: codeTable.getTableColumnsFun('RESOURCES')
        };
    },
    components: {},
    computed: {
        ...mapState({
            treeNode: state => state.treeNode,
            activeName: state => state.activeName
        })
    },
    watch: {
        activeName() {
            this._resetFun();
            this._searchFun();
        }
    },
    created() {
    },
    destroyed() {},
    mounted() {},
    methods: {
        ...mapMutations([]),
        ...mapActions([]),
        // 搜索
        _searchFun() {},
        // 分页
        _pageChangeFun() {},
        // 重置
        _resetFun() {
            let filterData = this.filterData;
            for (let key in filterData) {
                filterData[key] = '';
            }
        },
        // 展示不正常数据
        _abnormalCheckedFun() {

        }
    }
};
</script>