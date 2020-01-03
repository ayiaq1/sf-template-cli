<!--
 * @moduleName: 问题详情 -> 问题列表 -> 筛选组件
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 17:32:40
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime : 2019-12-30 17:45:08
 -->
<template>
    <!-- 筛选区 -->
    <el-row>
        <el-col :span="12">
            <sf-filter-group label="所属系统">
                <el-select
                    v-model="filterData.businessType"
                    placeholder="请选择"
                    style="width: 300px"
                >
                    <el-option
                        v-for="(item, index) in businessTypeData"
                        :key="index"
                        :label="item.stName"
                        :title="item.stName"
                        :value="item.stCode"
                    />
                </el-select>
            </sf-filter-group>
        </el-col>
        <el-col :span="12">
            <sf-filter-group label="所属数据源">
                <el-select
                    v-model="filterData.businessType"
                    placeholder="请选择"
                    style="width: 300px"
                >
                    <el-option
                        v-for="(item, index) in businessTypeData"
                        :key="index"
                        :label="item.stName"
                        :title="item.stName"
                        :value="item.stCode"
                    />
                </el-select>
            </sf-filter-group>
        </el-col>
        <el-col :span="12">
            <sf-filter-group label="所属表">
                <el-select
                    v-model="filterData.businessType"
                    placeholder="请选择"
                    style="width: 300px"
                >
                    <el-option
                        v-for="(item, index) in businessTypeData"
                        :key="index"
                        :label="item.stName"
                        :title="item.stName"
                        :value="item.stCode"
                    />
                </el-select>
            </sf-filter-group>
        </el-col>
        <el-col :span="12">
            <sf-filter-group label="所属规则包">
                <el-select
                    v-model="filterData.businessType"
                    placeholder="请选择"
                    style="width: 300px"
                >
                    <el-option
                        v-for="(item, index) in businessTypeData"
                        :key="index"
                        :label="item.stName"
                        :title="item.stName"
                        :value="item.stCode"
                    />
                </el-select>
            </sf-filter-group>
        </el-col>
        <el-col :span="12">
            <sf-filter-group label="规则配置方式">
                <el-select
                    v-model="filterData.businessType"
                    placeholder="请选择"
                    style="width: 300px"
                >
                    <el-option
                        v-for="(item, index) in businessTypeData"
                        :key="index"
                        :label="item.stName"
                        :title="item.stName"
                        :value="item.stCode"
                    />
                </el-select>
            </sf-filter-group>
        </el-col>
        <el-col :span="12">
            <sf-filter-group label="关键字">
                <el-select
                    v-model="filterData.businessType"
                    placeholder="请选择"
                    style="width: 300px"
                >
                    <el-option
                        v-for="(item, index) in businessTypeData"
                        :key="index"
                        :label="item.stName"
                        :title="item.stName"
                        :value="item.stCode"
                    />
                </el-select>
                <el-button :loading="loading" type="primary" icon="sf-icon-c-search" class="ml20 mr20">搜索</el-button>
                <el-link :underline="false">重置</el-link>
            </sf-filter-group>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            // 筛选查询条件
            filterData: {
                dataSourceType: ''
            },
            businessTypeData: []
        };
    },
    watch: {},
    created() {},
    mounted() {
        // this.init();
    },
    methods: {
    }
};
</script>