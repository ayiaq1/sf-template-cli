<!--
 * @moduleName: demo -- 布局样式
 * @Author: dawdler
 * @Date: 2019-08-20 15:54:42
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2019-12-31 10:01:20
 -->
<template>
    <sf-no-side-container>
        <sf-title-container class="middle">
            <sf-link>
                <i class="sf-icon-c-add-1"></i>
                <span>新建模型</span>
            </sf-link>

            <sf-link>
                <i class="sf-icon-c-import"></i>
                <span>导入模型</span>
            </sf-link>
            <el-divider></el-divider>
            <sf-link>
                <i class="sf-icon-c-add-1"></i>
                <span>新建模型</span>
            </sf-link>

            <sf-link>
                <i class="sf-icon-c-import"></i>
                <span>导入模型</span>
            </sf-link>
        </sf-title-container>
        <el-container class="container-wrap">
            <el-aside class="left-wrap bg-transparent">
                <el-aside>
                    <sf-header>
                        <sf-header-title>
                            <span>模型库</span>
                            <sf-link @click="isSearch = !isSearch">
                                <i class="sf-icon-c-search"></i>
                            </sf-link>
                        </sf-header-title>
                        <sf-search-bar v-model="keywords" v-show="isSearch" @searchFun="_searchFun" />
                    </sf-header>
                    <el-tree :data="data"></el-tree>
                </el-aside>
                <el-aside>
                    <sf-header>
                        <sf-header-title>
                            <el-tabs v-model="activeType">
                                <el-tab-pane label="参考表" name="0"> </el-tab-pane>
                                <el-tab-pane label="参考标准" name="1"> </el-tab-pane>
                            </el-tabs>
                            <sf-link @click="isSearch = !isSearch"> <i class="sf-icon-c-search"></i></sf-link>
                        </sf-header-title>
                        <sf-search-bar v-model="keywords" v-show="isSearch" @searchFun="_searchFun" />
                    </sf-header>
                </el-aside>
            </el-aside>
            <el-container>
                <el-container>
                    <el-header>Header</el-header>
                    <el-main>
                        <sf-header>
                            <sf-header-title>
                                <el-tabs v-model="activeType">
                                    <el-tab-pane label="物理模型1" closable name="0"> </el-tab-pane>
                                    <el-tab-pane label="物理模型2" name="1"> </el-tab-pane>
                                </el-tabs>
                            </sf-header-title>
                        </sf-header>
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
                <el-aside v-if="isOpen">
                    <sf-header>
                        <sf-header-title>
                            <span>工具</span>
                            <sf-link @click="isOpen = !isOpen"> <i class="sf-icon-state-close"></i></sf-link>
                        </sf-header-title>
                    </sf-header>
                    {{ isOpen }}
                </el-aside>
            </el-container>
        </el-container>
    </sf-no-side-container>
</template>
<script>
export default {
    data() {
        return {
            isOpen: true,
            isSearch: false,
            keywords: '',
            activeType: 0,
            data: [
                {
                    label: 1,
                    value: 1,
                    children: [
                        {
                            label: 2,
                            value: 2
                        }
                    ]
                }
            ]
        };
    },
    created() {},
    destroyed() {},
    mounted() {},
    methods: {
        _searchFun() {}
    }
};
</script>
<style lang="less" scoped>
.container-wrap {
    height: 800px;
}
.middle {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.left-wrap {
    padding: 0 !important;

    .el-aside {
        height: 48.6%;

        &:first-child {
            margin-bottom: 20px;
        }
    }
}
</style>
