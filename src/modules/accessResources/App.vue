/*
 * @Module: 接入资源
 * @Author: zhouyu
 * @Date: 2019-12-26 20:14:07
 * @Last Modified by: zhouyu
 * @Last Modified time: 2020-01-02 23:30:57
 */
<template>
    <sf-no-side-container :id="$parent.moduleName">
        <div class="mb20">
            <sf-title-container class="mb20 bg-color-gray">
                <Overview />
            </sf-title-container>
            <el-container class="mb20">
                <el-aside>
                    <DataSource />
                </el-aside>
                <MainAccess />
                <el-aside class="right-wrap bg-transparent">
                    <el-aside class="mb20">
                        <AttributeInfo />
                    </el-aside>
                    <el-aside>
                        <AuditRecords />
                    </el-aside>
                </el-aside>
            </el-container>
            <el-container class="mb20"
                v-show="false">
                <el-main class="mb20">
                    日志
                </el-main>
            </el-container>
        </div>
    </sf-no-side-container>
</template>

<script>
import Overview from './components/Overview';
import DataSource from './components/dataSource';
import MainAccess from './components/main';
import AttributeInfo from './components/attributeInfo';
import AuditRecords from './components/auditRecords';
export default {
    name: 'AccessResources',
    components: {
        Overview,
        DataSource,
        MainAccess,
        AttributeInfo,
        AuditRecords
    },
    created() { }
};
</script>
