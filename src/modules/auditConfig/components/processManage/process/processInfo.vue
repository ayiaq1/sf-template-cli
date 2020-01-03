<!--
 * @moduleName: 审核管理 - 审核流程配置 - 流程模板管理 - 流程详情弹框
 * @Author: SuLiang
 * @Date: 2019-01-23 11:37:29
 * @LastModifiedBy: SuLiang
 * @LastEditTime: 2019-03-15 10:09:11
 -->
<template>
    <div>
        <el-form ref="rulform" :model="infoData" :rules.sync='rules' label-width="100px">
            <!-- {{infoData}} -->
            <el-form-item label="流程模板编号:" prop="processNo">
                <span v-text='infoData.processNo'></span>
            </el-form-item>
            <el-form-item label="流程模板名称:" prop="processName">
                <el-input v-model="infoData.processName" :disabled="ctrl === 'view'">
                </el-input>
            </el-form-item>
            <el-form-item label="适用功能:" prop="auditType">
                <el-select v-model="infoData.auditType" placeholder="请选择" :disabled="ctrl === 'view'">
                    <el-option v-for="item in funcList" :key="item.code" :label="item.name" :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="流程描述:" prop="description">
                <el-input type='textarea' v-model="infoData.description" :disabled="ctrl === 'view'" resize='none' :rows='5'>
                </el-input>
            </el-form-item>
            <!-- <el-form-item label="流程相关模板:" prop="">
                <el-select v-model="infoData.templates" placeholder="请选择所属数据源" multiple collapse-tags filterable clearable>
                    <el-option v-for="item in templatesList" :key="item.code" :label="item.name" :value="item.code">
                        <span :title="item.name">{{ item.name }}</span>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上传模板:" prop="">
                <el-button size="mini" round>上传</el-button>
            </el-form-item> -->
        </el-form>
        <!-- 上传文件弹窗 -->
        <uploadDialog v-if="uploadFormData.show" :formData="uploadFormData" @refreshFun="getTemplateList"></uploadDialog>
    </div>
</template>
<script>
import uploadDialog from './uploadDialog';
export default {
    props: {
        'infoData': {
            type: Object,
            default: () => {
                return {
                    processNo: '系统自动生成',
                    processName: '',
                    description: '',
                    auditType: '',
                    templates: []
                };
            }
        },
        'ctrl': {
            type: String,
            default: 'add'
        }
    },
    data() {
        return {
            // 功能列表
            funcList: [],
            // 模板文件列表
            templatesList: [],
            // 上传文件弹框
            uploadFormData: {
                show: false,
                data: ''
            },
            // 表单规则
            rules: {
                code: [{
                    required: true
                }],
                processName: [{
                    required: true,
                    trigger: ['blur', 'change'],
                    message: '请输入流程模板名称'
                }, {
                    max: 100,
                    min: 1,
                    message: '输入长度不能超过100个字符',
                    trigger: ['blur', 'change']
                }],
                auditType: [{
                    required: true,
                    trigger: ['blur', 'change'],
                    message: '请选择适用功能'
                }],
                description: [{
                    required: true,
                    trigger: ['blur', 'change'],
                    message: '请输入流程描述'
                }, {
                    max: 200,
                    min: 1,
                    message: '输入长度不能超过200个字符',
                    trigger: ['blur', 'change']
                }]
            }
        };
    },
    mounted() {
        // 获取功能列表
        this.getFuncList();
        // 获取模板文件列表
        this.getTemplateList();
    },
    created() {},
    methods: {
        /**
         * @Author      SuLiang
         * @DateTime    2017-10-25
         * @lastTime    2017-10-25
         * @description 提交表单
         */
        validateFun() {
            // 验证表单
            this.$refs['rulform'].validate((valid) => {
                this.infoData._valid = valid;
            });
        },
        /**
         * @Author      SuLiang
         * @DateTime    2017-06-03
         * @lastTime    2017-06-03
         * @description 重置表单
         */
        resetForm(formName) {
            if (this.$refs[formName]) {
                this.$refs[formName].resetFields();
            }
        },
        // 获取功能列表
        getFuncList() {
            this.$factory('/wydataeye/audit/job/getAuditTypes.json', {}, 'GET').then((res) => {
                this.funcList = res.data || [];
            });
        },
        // 获取模板文件列表
        getTemplateList() {
            this.$factory('/wydataeye/audit/job/getAuditTypes.json', {}, 'GET').then((res) => {
                this.templatesList = res.data || [];
            });
        },
        // 上传按钮
        uploadFun: function() {
            this.uploadFormData = {
                show: true,
                data: {
                    directoryFlowId: '-1'
                }
            };
        }
    },
    components: {
        uploadDialog
    }
};

</script>
