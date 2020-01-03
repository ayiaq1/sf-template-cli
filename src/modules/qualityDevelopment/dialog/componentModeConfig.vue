<!--
 * @moduleName: 质量开发 -- 组件方式配置
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 15:57
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime: 2019-12-30 15:57
 -->
<template>
    <div>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px">
            <el-form-item label="备注信息" prop="remark">
                <el-input type="textarea" v-model="form.remark" placeholder="请输入备注信息"></el-input>
            </el-form-item>
            <el-form-item label="说明：">
                <span>任务提交后即为上线状态, 将根据调度执行任务。</span>
            </el-form-item>
        </el-form>
        <div class="dialog-footer">
            <el-button :loading="loading" type="primary">确定</el-button>
            <el-button :loading="loading" @click="formData.show = false">取消</el-button>
        </div>
    </div>
</template>
<script>
    // Vuex
    export default {
        props: ['formData'],
        data() {
            return {
                loading: false,
                form: {
                    remark: ''
                },
                rules: {
                    remark: [{
                        required: true,
                        message: '请输入备注信息',
                        trigger: ['blur', 'change']
                    }, {
                        max: 200,
                        min: 1,
                        message: '输入字段长度不能超过200个字符',
                        trigger: ['blur', 'change']
                    }]
                }
            };
        },
        created() {},
        methods: {}
    };
</script>
