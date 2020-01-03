<!--
 * @moduleName: 审核管理 - 审核流程配置 - 流程模板管理 - 流程详情弹框
 * @Author: SuLiang
 * @Date: 2019-01-23 11:37:29
 * @LastModifiedBy: SuLiang
 * @LastEditTime: 2019-01-29 11:33:42
 -->
<template>
    <el-dialog append-to-body title="新增" class="tiny" :close-on-click-modal="false" :visible.sync="formData.show">
        <ProcessInfo ref='info' :infoData='form' :ctrl='formData.ctrl'/>
        <div slot="footer" v-if='formData.ctrl !== "show" '>
            <el-button type="primary" @click="submitForm('save')" :loading='loading'>保存</el-button>
            <el-button type="primary" @click="submitForm('design')" :loading='loading'>流程设计</el-button>
            <el-button @click="formData.show = false">取消</el-button>
        </div>
    </el-dialog>
</template>
<script>
import ProcessInfo from './processInfo';
export default {
    props: ['formData'],
    data() {
        return {
            form: {
                processNo: '',
                processName: '',
                description: '',
                auditType: ''
            },
            // loading
            loading: false
        };
    },
    mounted() {
        this.initFun();
    },
    created() {},
    methods: {
        // 初始化函数
        initFun() {
            if (this.formData.ctrl === 'add') {
                this.form.processNo = '系统自动生成';
            }
        },
        /**
         * @Author      SuLiang
         * @DateTime    2017-10-25
         * @lastTime    2017-10-25
         * @description 提交表单
         */
        submitForm(type) {
            if (this.loading) return;
            // 触发内部校验 TODO
            this.$refs.info.validateFun();
            // 验证表单, 通过提交
            if (this.form._valid) {
                let postObj = {
                    // flowId: this.formData.data.flowId || '',
                    ...this.form
                };
                delete postObj._valid;
                this.loading = true;
                this.$factory('/wydataeye/audit/deploy/addProcess.json', {
                    process: postObj
                }, 'POST').then((res) => {
                    let resData = res.data || {};
                    // 解锁与触发表格刷新
                    this.loading = false;
                    this.$emit('getTableList');
                    if (type === 'design') {
                        this.$emit('processSetting', resData);
                    }
                    this.$nextTick(() => {
                        this.formData.show = false;
                    });
                }, () => {
                    this.loading = false;
                    this.$emit('getTableList');
                }).catch(() => {
                    this.loading = false;
                    this.$emit('getTableList');
                });
            }
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
    components: {
        ProcessInfo
    }
};

</script>
