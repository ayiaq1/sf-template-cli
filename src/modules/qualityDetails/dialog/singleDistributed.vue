<!--
 * @moduleName: 问题明细 -- 问题派发 [ 单条 ]
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 15:57
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime: 2019-12-30 15:57
 -->
<template>
    <div>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="90px">
            <el-form-item label="派发方式" style="margin-bottom:0">
                <el-radio-group v-model="form.type">
                    <el-radio label="0">全表派发</el-radio>
                    <el-radio label="1">按条件派发</el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- 全表派发的提示 -->
            <template v-if="form.type === '0'">
                <el-form-item label="" style="margin-bottom:0">
                    <span>该方式将会把该批次问题数据全部下发给工单处理人</span>
                </el-form-item>
                <el-form-item label="" style="margin-bottom:10px">
                    <span>该工单总共有<span style="color:blue">1000</span>个问题，派发后所有工单处理人都将收到该问题工单待办事项</span>
                </el-form-item>
            </template>
            <!-- 条件派发的提示 -->
            <template v-else>
                <el-form-item label="" style="margin-bottom:0">
                    <span>该方式将会根据查询条件将不同的问题数据派发给不同的工单处理人</span>
                </el-form-item>
                <el-form-item label="" style="margin-bottom:10px">
                    <span>该工单总共有<span style="color:blue">1000</span>个问题</span>
                </el-form-item>
            </template>
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
            <el-form-item label="问题描述" prop="describe" v-if="form.type === '0'">
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
                    type: '0',
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
                maxHeight: 400,
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
        watch: {
            'form.type': {
                handler: function (val) {
                    console.log(val);
                    if (val === '0') {
                        this.columns = [{
                            prop: 'deptName',
                            label: '所属部门'
                        }, {
                            prop: 'userName',
                            label: '用户名'
                        }];
                    } else {
                        this.columns = [{
                            prop: 'deptName',
                            label: '所属部门'
                        }, {
                            prop: 'userName',
                            label: '用户名'
                        }, {
                            prop: 'userName',
                            label: '待处理问题'
                        }, {
                            prop: 'userName',
                            label: '条件配置'
                        }];
                    }
                },
                deep: true
            }
        },
        created() {
            console.log(this.formData);
        },
        methods: {}
    };
</script>
