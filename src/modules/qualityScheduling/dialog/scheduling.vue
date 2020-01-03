<!--
 * @moduleName: 调度设置
 * @Author: Ma.yunlong
 * @Date: 2020-1-2 15:57
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime: 2020-1-2 15:57
 -->
<template>
    <div>
        <el-form :model="form" ref="ruleForm" label-width="100px">
            <sf-cron ref="sfCron" :schedule="schedule" labelWidth="100px"></sf-cron>
        </el-form>
        <div class="dialog-footer">
            <el-button :loading="loading" type="primary" @click="confirm()">确定</el-button>
            <el-button @click="cancel()">取消</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['formData'],
        data() {
            return {
                loading: false,
                schedule: {},
                form: {
                    test: 'test'
                }
            };
        },
        created() {},
        methods: {
            /**
             * 确定
             */
            confirm() {
                this.$refs['ruleForm'].validate(valid => {
                    if (valid) {
                        this.$refs['sfCron'].validateCheckFun().then(data => {
                            this.formData.show = false;
                        }).catch(() => {
                            return false;
                        });
                    } else {
                        return false;
                    }
                });
            },
            /**
             * 取消
             */
            cancel() {
                this.formData.show = false;
            }
        }
    };
</script>
