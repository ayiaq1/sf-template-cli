<!--
 * @moduleName: 移动目录
 * @Author: Ma.yunlong
 * @Date: 2020-1-2 15:57
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime: 2020-1-2 15:57
 -->
<template>
    <div>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" style="height:150px">
            <el-form-item label="待移动总数">
                100条
            </el-form-item>
            <el-form-item label="选择目录" prop="directory">
                <el-cascader
                    :options="catalogsList"
                    checkStrictly
                    :show-all-levels="false"
                    :props="cascaderProps"
                    v-model="form.directory"
                    @change="changeFun"
                    :disabled="loading"
                ></el-cascader>
            </el-form-item>
        </el-form>
        <div class="dialog-footer">
            <el-button :loading="loading" type="primary" @click="saveFun">{{ $t('confirm') }}</el-button>
            <el-button :loading="loading" @click="formData.show = false">{{ $t('cancel') }}</el-button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['formData'],
    data() {
        return {
            loading: false,
            form: {
                directory: [],
                directoryId: ''
            },
            rules: {
                directory: [
                    {
                        required: true,
                        message: '请选择要移动的目录',
                        trigger: ['blur', 'change']
                    }
                ]
            },
            catalogsList: [],
            cascaderProps: {
                label: 'name',
                value: 'id',
                checkStrictly: true,
                parentId: 'parentId',
                disabled: 'disabled',
                children: 'subCatalogs'
            }
        };
    },
    created() {
    },
    methods: {
        /**
         * 移动目录切换
         */
        changeFun(val) {
            this.form.directoryId = val[val.length - 1];
        },
        /**
         * 保存
         */
        saveFun() {
            this.$refs['ruleForm'].validate(valid => {
                if (valid) {
                    this.formData.show = false;
                } else {
                    return false;
                }
            });
        }
    }
};
</script>
