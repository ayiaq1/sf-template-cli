<!--
 * @moduleName: 问题明细 -- 问题派发 [ 批量 ]
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 15:57
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime: 2019-12-30 15:57
 -->
<template>
    <div>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="90px">
            <el-form-item label="">
                <span>
                    <i class="sf-icon-c-warning fz16 color-yellow mr10"></i>
                    派发后系统将会将所选的10个工单，共10000个问题全部派发给所选的工单处理人，请确认后操作！
                </span>
            </el-form-item>
            <el-form-item label="工单处理人" prop="person">
                <div class="sf-page-container" style="width:100%">
                    <sfLeftList
                        ref="leftList"
                        async
                        v-model="searchKey"
                        :data="treeData"
                        :props="treeProps"
                        title="待选用户"
                        :maxHeight="maxHeight"
                        :currentKey="currentKey"
                        placeholder="请输入用户名进行查询"
                        :count="count"
                    >
                        <template slot="search-top">
                            <el-form label-width="75px">
                                <el-form-item label="处理部门">
                                    <el-select
                                        v-model="form.deptId"
                                        placeholder="请选择"
                                    >
                                        <el-option
                                            v-for="item in deptData"
                                            :key="item.flowId"
                                            :label="item.dpmName"
                                            :value="item.flowId"
                                            :title="item.dpmName"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </template>
                    </sfLeftList>
                    <sfRightTable
                        :columns="columns"
                        title="已选工单处理人"
                        :maxHeight="maxHeight"
                        :count="count"
                        :currentKey="currentKey"
                    />
                </div>
            </el-form-item>
            <el-form-item label="问题描述" prop="describe">
                <el-input
                    type="textarea"
                    v-model="form.describe"
                    placeholder="请输入问题描述"
                    maxlength="1000"
                    show-word-limit
                ></el-input>
            </el-form-item>
        </el-form>
        <div class="dialog-footer">
            <el-button :loading="loading" type="primary">派发</el-button>
            <el-button :loading="loading" @click="formData.show = false">取消</el-button>
        </div>
    </div>
</template>
<script>
    // components
    import sfLeftList from 'components@/LRSetting/LeftList';
    import sfRightTable from 'components@/LRSetting/RightTable';
    export default {
        props: ['formData'],
        components: {
            sfLeftList,
            sfRightTable
        },
        data() {
            return {
                loading: false,
                form: {
                    person: [],
                    describe: '',
                    deptId: ''
                },
                rules: {
                    person: [{
                        required: true,
                        message: '请选择问题责任人',
                        trigger: ['blur', 'change']
                    }],
                    describe: [{
                        required: true,
                        message: '请输入问题描述',
                        trigger: ['blur', 'change']
                    }, {
                        max: 1000,
                        min: 1,
                        message: '输入字段长度不能超过1000个字符',
                        trigger: ['blur', 'change']
                    }]
                },
                deptData: [],
                searchKey: '',
                treeData: [],
                maxHeight: 500,
                treeProps: {
                    label: 'columnName',
                    id: 'columnName',
                    children: 'children'
                },
                columns: [{
                    prop: 'deptName',
                    label: '所属部门'
                }, {
                    prop: 'userName',
                    label: '用户名'
                }],
                count: {
                    total: 1,
                    unit: '个'
                },
                currentKey: []
            };
        },
        created() {
            console.log(this.formData);
        },
        methods: {}
    };
</script>
