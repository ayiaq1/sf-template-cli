<!--
 * @moduleName: 模型设计 -- 中间的表 详情
 * @Author: dawdler
 * @Date: 2019-12-27 09:26:26
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2020-01-02 17:29:32
 -->
<template>
    <el-main class="right-details-wrap">
        <sf-title-container>
            <template v-if="isMain">
                <!-- 是否是 主体 -->
                <div class="title-wrap">
                    当前版本: V1.5 [ 审核不通过 ] 新版本号: V1.5 [ 已发布 ]
                </div>
                <div class="ctrl-wrap">
                    <sf-search-bar v-model="searchKey" @searchFun="_searchFun" />
                    <el-button type="primary" icon="sf-icon-c-theme"></el-button>
                </div>
            </template>
            <template v-else>
                <!-- 引用,只有搜索 -->
                <sf-search-bar v-model="searchKey" @searchFun="_searchFun" />
            </template>
        </sf-title-container>
        <sf-main-table-box>
            <el-button-group>
                <div class="table-change-wrap">
                    <el-checkbox v-model="selectAll">全选</el-checkbox>
                    <el-select v-model="changePage">
                        <el-option label="当前页" value="1" />
                        <el-option label="全部页" value="2" />
                    </el-select>
                    <span class="unit-wrap">
                        已选择
                        <span class="num">10</span>个
                    </span>
                </div>
            </el-button-group>
            <sf-table-bd>
                <el-row>
                    <el-col :span="8">
                        <el-checkbox></el-checkbox>
                        <a href="javascript:;">
                            XXXXX表
                        </a>
                    </el-col>
                    <el-col :span="8">
                        <el-checkbox></el-checkbox>
                        <a href="javascript:;">
                            XXXXX表
                        </a>
                    </el-col>
                    <el-col :span="8">
                        <el-checkbox></el-checkbox>
                        <a href="javascript:;">
                            XXXXX表
                        </a>
                    </el-col>
                    <el-col :span="8">
                        <el-checkbox></el-checkbox>
                        <a href="javascript:;">
                            XXXXX表
                        </a>
                    </el-col>
                </el-row>
            </sf-table-bd>
        </sf-main-table-box>
    </el-main>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import * as detailsStatic from '../store/details/storeStatic.js';
import store from '../store/details';
const { mapActions } = createNamespacedHelpers('details');
export default {
    name: 'RightMainContainer',
    props: {
        isMain: {
            type: Boolean,
            default() {
                return false;
            }
        }
    },
    components: {},
    data() {
        return {
            searchKey: '',
            selectAll: false,
            changePage: '1'
        };
    },
    computed: {},
    created() {
        // 本地模块注册store
        store.install(this, 'details');
    },
    mounted() {},
    methods: {
        ...mapActions([detailsStatic.A_GET_LIST]),
        _searchFun() {}
    }
};
</script>
