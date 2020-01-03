<!--
 * @moduleName: 问题明细 -- 清除数据
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 15:57
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime: 2019-12-30 15:57
 -->
<template>
    <div>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px">
            <el-form-item label="">
                <i class="sf-icon-c-warning color-yellow mr10"></i>数据清除不可逆，同时所有操作将不能再看到该批次的问题明细，请谨慎操作！
            </el-form-item>
            <el-form-item label="删除原因" prop="reason">
                <el-input
                    type="textarea"
                    v-model="form.remark"
                    placeholder="请输入删除原因"
                    maxlength="1000"
                    show-word-limit
                ></el-input>
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
                    reason: ''
                },
                rules: {
                    reason: [{
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
