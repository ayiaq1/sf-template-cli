<!--
 * @moduleName: 审核管理 - 审核流程配置 - 流程模板管理 - 变更
 * @Author: SuLiang
 * @Date: 2019-01-23 11:37:29
 * @LastModifiedBy: SuLiang
 * @LastEditTime: 2019-01-30 09:54:44
 -->
<template>
    <el-dialog append-to-body title="变更" class="tiny" :close-on-click-modal="false" :visible.sync="formData.show">
        <!-- 问题单#101437修改 -->
        <el-form ref="rulform" :model="form" :rules.sync='rules' label-width="100px">
            <el-form-item label="变更原因：" prop="reason">
                <el-input type='textarea' v-model="form.reason" resize='none' :rows='5'>
                </el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" v-if='formData.ctrl !== "show" '>
            <el-button type="primary" @click="submitForm('rulform')" :loading='loading'>提交</el-button>
            <el-button @click="formData.show = false">取消</el-button>
        </div>
    </el-dialog>
</template>
<script>
// js
export default {
    props: ['formData'],
    data() {
        return {
            form: {
                // 提示框显示状态
                reason: ''
            },
            // 表单规则
            rules: {
                // 问题单#98724 修改
                reason: [{
                    required: true,
                    trigger: ['blur', 'change'],
                    message: '请输入变更原因'
                }, {
                    max: 200,
                    min: 1,
                    message: '输入长度不能超过200个字符',
                    trigger: ['blur', 'change']
                }]
            },
            // loading
            loading: false
        };
    },
    methods: {
        /**
         * @Author      SuLiang
         * @DateTime    2017-10-25
         * @lastTime    2017-10-25
         * @description 提交表单
         */
        submitForm(formName) {
            if (this.loading) return;
            // 验证表单
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let postObj = {
                        processId: this.formData.data.flowId || '',
                        comment: this.form.reason
                    };
                    this.loading = true;
                    this.$factory('/wydataeye/audit/deploy/changeProcess.json', postObj, 'POST').then((res) => {
                        this.formData.show = false;
                        // 解锁与触发表格刷新
                        this.loading = false;
                        this.$emit('getTableList');
                    }, () => {
                        this.loading = false;
                        this.$emit('getTableList');
                    }).catch(() => {
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
        }
    },
    components: {}
};

</script>
