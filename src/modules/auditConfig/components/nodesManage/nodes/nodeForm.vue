<!--
 * @moduleName: 审核管理 - 审核流程配置 - 环节模板管理 - 环节编辑框
 * @Author: SuLiang
 * @Date: 2019-01-23 11:37:29
 * @LastModifiedBy: SuLiang
 * @LastEditTime: 2019-03-15 16:09:55
 -->
<template>
    <el-dialog append-to-body :title="title" :close-on-click-modal="false" :visible.sync="formData.show">
        <div class='subfield-horizontal'>
            <el-form ref="rulform" :model="form" :rules.sync="rules" label-width="120px">
                <h5 class='subfield-text-item'>
                    <span>环节基本信息</span>
                </h5>
                <div class="clearfix">
                    <el-form-item label="环节编号:" prop="nodeNo" class="half">
                        <span v-text='form.nodeNo'></span>
                    </el-form-item>
                    <el-form-item label="环节名称:" prop="nodeName" class="half">
                        <el-input v-model="form.nodeName" :maxlength="64" :disabled="ctrlType === 'view'"></el-input>
                    </el-form-item>
                </div>
                <el-form-item label="环节描述:" prop="description">
                    <el-input type="textarea" resize='none' :rows='3' v-model="form.description" :maxlength="200" :disabled="ctrlType === 'view'"></el-input>
                </el-form-item>
                <!-- 办理时限 -->
                <div class="clearfix">
                    <el-form-item label="办理时限:" prop="isTime" class="half">
                        <el-switch v-model="form.isTime" :disabled="ctrlType === 'view'"></el-switch>
                    </el-form-item>
                    <template v-if="form.isTime">
                        <el-form-item label prop="timeLimitDay" class="half">
                            <el-input v-model="form.timeLimitDay" :disabled="ctrlType === 'view'"></el-input><span>天</span>
                        </el-form-item>
                    </template>
                </div>
                <el-form-item label="环节办理人意见:" prop="commentStatus">
                    <el-radio-group v-model="form.commentStatus" :disabled="ctrlType === 'view'">
                        <el-radio label="">非必填</el-radio>
                        <el-radio label="commentRequire">必填</el-radio>
                    </el-radio-group>
                </el-form-item>
                <h5 class='subfield-text-item'>
                    <span>环节审核人员</span>
                </h5>
                <el-form-item label="审核人员类型:" prop="memberType">
                    <el-radio-group v-model="form.memberType" :disabled="ctrlType === 'view'">
                        <!-- <el-radio label="userGroup">指定用户组</el-radio> -->
                        <el-radio label="users">指定人员</el-radio>
                        <el-radio label="createUser">发起人</el-radio>
                        <el-radio label="selectUser">人工指派</el-radio>
                    </el-radio-group>
                </el-form-item>
                <div v-if="form.memberType === 'userGroup' || form.memberType === 'users'" style='padding-left:120px; padding-bottom: 20px;'>
                    <!-- <el-form-item label="" > -->
                    <UserSetting :ref='form.memberType' :key='form.memberType' :userData='form.userData' @setUserList='setUserList' :ctrl="ctrlType" v-if="form.memberType === 'users'" />
                    <UserSetting :ref='form.memberType' :key='form.memberType' :userData='form.userGroup' @setUserList='setUserList' :ctrl="ctrlType" v-if="form.memberType === 'userGroup'" />
                    <!-- </el-form-item> -->
                </div>
                <el-form-item label="审核方式:" prop="allAuditStatus">
                    <el-radio-group v-model="form.allAuditStatus" :disabled="ctrlType === 'view'">
                        <!-- 问题单#98684 修改 -->
                        <el-radio label="single">
                            单人审核
                            <el-tooltip :enterable="false" effect="dark" content="该环节只需要审核人员中的一人审核通过，即可进入下一审核环节" placement="top" >
                                <span class="item">
                                    <span>
                                        <i class="el-icon-question" @click="delFun(item)"></i>
                                    </span>
                                </span>
                            </el-tooltip>
                        </el-radio>
                        <el-radio label="allAudit">
                            多人并行审核
                            <el-tooltip :enterable="false" effect="dark" content="该环节需要所有审核人员审核通过，才可进入下一审核环节" placement="top" >
                                <span class="item">
                                    <span>
                                        <i class="el-icon-question" @click="delFun(item)"></i>
                                    </span>
                                </span>
                            </el-tooltip>
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <div class="clearfix">
                    <el-form-item label="上传附件:" prop="" class="half">
                        <el-checkbox v-model="form.needFile" :disabled="ctrlType === 'view'" ></el-checkbox>
                    </el-form-item>
                    <el-form-item v-if="form.needFile" label="是否必填:" prop="" class="half">
                        <el-checkbox v-model="form.fileStatus" true-label='fileRequire' false-label='' :disabled="ctrlType === 'view'"></el-checkbox>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <div slot="footer" v-if="formData.ctrl !== 'view' ">
            <el-button type="primary" @click="submitForm('rulform')" :loading="loading" v-if="formData.ctrl === 'nodeInfo'">保存</el-button>
            <el-button type="primary" @click="submitForm('rulform')" :loading="loading" v-else>提交</el-button>
            <el-button @click="formData.show = false">取消</el-button>
        </div>
    </el-dialog>
</template>
<script>
import { cloneFun } from 'javascript@/utils/utils.js';
import UserSetting from './userSetting.vue';
// js
export default {
    props: ['formData'],
    data() {
        return {
            title: '新增',
            form: {
                // 编号
                nodeNo: '系统自动生成',
                // 名称
                nodeName: '',
                // 描述
                description: '',
                // 办理时限
                isTime: false,
                // 时限
                timeLimitDay: '',
                // 办理人意见
                commentStatus: 'commentRequire',
                // 人员类型
                memberType: 'createUser',
                // 指定人员
                userData: [],
                // 组人员
                userGroup: [],
                // 审核方式
                allAuditStatus: 'single',
                // 是否上传附件
                // 模版添加字段上传附件：needFile:true/false 为空默认为false
                needFile: false,
                // 附件是否必填：
                // fileStatus:fileRequire 为空默认不必填
                fileStatus: ''
            },
            // 表单规则
            rules: {
                // 节点编号
                nodeNo: [{
                        required: true,
                        trigger: ['blur', 'change'],
                        message: '请输入环节编号'
                    },
                    {
                        max: 100,
                        min: 1,
                        message: '输入长度不能超过100个字符',
                        trigger: ['blur', 'change']
                    }
                ],
                // 节点名称
                nodeName: [{
                    required: true,
                    trigger: ['blur', 'change'],
                    message: '请输入环节名称'
                }],
                timeLimitDay: [{
                        required: true,
                        trigger: ['blur', 'change'],
                        message: '请输入时限'
                    },
                    {
                        max: 3,
                        min: 1,
                        message: '输入长度不能超过3个字符',
                        trigger: ['blur', 'change']
                    },
                    {
                        validator(...arg) {
                          if (/^[1-9]\d*$/.test(arg[1])) {
                            return arg[2]('只能输入正整数');
                          }
                          return arg[2]();
                        },
                        trigger: ['blur', 'change']
                    }
                ],
                // 节点描述
                description: [{
                        required: false,
                        trigger: ['blur', 'change'],
                        message: '请输入环节描述'
                    }
                ],
                // 审核人员类型
                memberType: [{
                    required: true
                }],
                // 审核方式
                allAuditStatus: [{
                    required: true
                }]
            },
            // loading
            loading: false,
            ctrlType: 'add'
        };
    },
    watch: {
        'form.needFile': function(val) {
            if (!val) {
                this.form.fileStatus = '';
            }
        }
    },
    created() {},
    mounted() {
        this.initFun();
    },
    methods: {
        // 初始化函数
        initFun() {
            // let ctrlType = this.formData.ctrl || 'add';
            let { ctrl: ctrlType } = this.formData;
            this.ctrlType = ctrlType;
            if (ctrlType !== 'add') {
                this.getInfo();
            }
            this.title = this.titleFun(ctrlType);
        },
        // 获取数据
        getInfo() {
            let { data } = this.formData;
            let { voInfo = [], timeLimitStatus, allAuditStatus, memberType } = data;
            this.form = { ...this.form, ...data };
            let userList = [];
            voInfo.forEach(item => {
                userList.push({
                    userName: item.name || '',
                    name: item.name || '',
                    flowId: item.id || ''
                });
            });
            this.form.isTime = !!timeLimitStatus;
            this.form.allAuditStatus = allAuditStatus === '' ? 'single' : allAuditStatus;
            // 问题单#97497，98377 修改；
            this.form.timeLimitDay = (this.form.timeLimitDay || '') + '';
            if (memberType === 'users') {
                this.form.userData = userList;
            }
            if (memberType === 'userGroup') {
                this.form.userGroup = userList;
            }
        },
        /**
         * @Author      SuLiang
         * @DateTime    2017-10-25
         * @lastTime    2017-10-25
         * @description 提交表单
         */
        submitForm(formName) {
            if (this.loading) return;
            // 验证表单
            this.$refs[formName].validate(valid => {
                if (valid) {
                    // 获取选中数据
                    if (this.form.memberType === 'userGroup' || this.form.memberType === 'users') {
                        this.$refs[this.form.memberType] && this.$refs[this.form.memberType].submitFun();
                    }
                    let { flowId = '' } = this.formData.data;
                    let form = cloneFun(this.form);
                    let voInfo = (form.memberType === 'userGroup') ? form.userGroup || [] : form.userData || [];
                    let postObj = {
                        ...form,
                        timeLimitStatus: form.isTime ? 'timeLimit' : '',
                        voInfo: voInfo
                    };
                    // 去除多余的项
                    delete postObj.userGroup;
                    delete postObj.userData;
                    delete postObj.isTime;

                    // 流程中的节点数据不走保存接口，由外部流程一起保存
                    if (this.formData.ctrl === 'nodeInfo') {
                        this.$emit('setNodeInfo', postObj);
                        // 关闭弹框
                        this.$nextTick(() => {
                            this.formData.show = false;
                        });
                        return false;
                    }
                    // 走保存接口
                    let url = '/wydataeye/audit/deploy/addNodeModel.json';
                    if (this.ctrlType === 'edit') {
                        url = '/wydataeye/audit/deploy/modifyNodeModel.json';
                        postObj.flowId = flowId;
                    }
                    this.loading = true;
                    this.$factory(url, {
                            node: postObj
                        }, 'POST')
                        .then(
                            res => {
                                this.formData.show = false;
                                // 解锁与触发表格刷新
                                this.loading = false;
                                this.$emit('getTableList');
                            },
                            () => {
                                this.loading = false;
                                this.$emit('getTableList');
                            }
                        )
                        .catch(() => {
                            this.loading = false;
                            this.$emit('getTableList');
                        });
                }
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
        // 弹框标题函数
        titleFun(type = 'add') {
            let str = '新增';
            switch (type) {
                case 'add':
                    str = '新增';
                    break;
                case 'edit':
                    str = '编辑';
                    break;
                case 'view':
                    str = '查看';
                    break;
                case 'nodeInfo':
                    str = '节点信息';
                    break;
                default:
                    break;
            }
            return str;
        },
        // 获取人员信息 String, String, List
        setUserList(names, ids, list) {
            let _list = [];
            list.forEach((item) => {
                _list.push({
                    name: item.userName,
                    id: item.flowId
                });
            });
            if (this.form.memberType === 'userGroup') {
                this.form.userGroup = _list;
            } else {
                this.form.userData = _list;
            }
        }
    },
    components: {
        UserSetting
    }
};

</script>
