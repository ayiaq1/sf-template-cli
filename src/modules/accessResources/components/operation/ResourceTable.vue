/*
 * @Module: 接入资源->资源列表操作栏
 * @Author: zhouyu
 * @Date: 2020-01-02 22:18:03
 * @Last Modified by: zhouyu
 * @Last Modified time: 2020-01-02 22:37:24
 */

<template>
    <sf-table-operation>
        <template>
            <el-tooltip cn="编辑"
                :enterable="false"
                :open-delay="500"
                :content="$t('accessResources.resourceList.operation.edit')"
                placement="top">
                <span class="obtn">
                    <i class="sf-icon-c-edit-outline"
                        @click.stop="emitFun(actionType.editFun, row)"></i>
                </span>
            </el-tooltip>
            <el-tooltip cn="删除"
                :enterable="false"
                :open-delay="500"
                :content="$t('accessResources.resourceList.operation.delete')"
                placement="top">
                <span class="obtn">
                    <i class="sf-icon-c-delete"
                        @click.stop="emitFun(actionType.deleteFun, row)"></i>
                </span>
            </el-tooltip>
            <el-tooltip cn="预览"
                :enterable="false"
                :open-delay="500"
                :content="$t('accessResources.resourceList.operation.preview')"
                placement="top">
                <span class="obtn">
                    <i class="sf-icon-c-view-outline"
                        @click.stop="emitFun(actionType.previewFun, row)"></i>
                </span>
            </el-tooltip>
            <el-tooltip cn="送审"
                :enterable="false"
                :open-delay="500"
                :content="$t('accessResources.resourceList.operation.verify')"
                placement="top">
                <span class="obtn">
                    <i class="sf-icon-c-upload"
                        @click.stop="emitFun(actionType.verifyFun, row)"></i>
                </span>
            </el-tooltip>
        </template>
    </sf-table-operation>
</template>

<script>
export default {
    name: 'ResourceTable',
    props: ['row'],
    data() {
        return {
            actionType: {
                editFun: '_edit',
                deleteFun: '_delete',
                previewFun: '_preview',
                verifyFun: '_verify'
            }
        };
    },
    methods: {
        emitFun(type, row) {
            this.$emit('operationMethods', type, row);
        }
    }
};
</script>
