<!--
 * @moduleName: 问题明细 -- 作废
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 15:57
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime: 2019-12-30 15:57
 -->
<template>
    <div>
        <div class='systemTitle'>
            <i class="sf-icon-c-warning color-yellow mr10"></i>{{ this.title }}
        </div>
        <div class="dialog-footer">
            <el-button :loading="loading" type="primary">确定</el-button>
            <el-button :loading="loading" @click="formData.show = false">取消</el-button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['formData'],
    data() {
        return {
            loading: false,
            title: ''
        };
    },
    created() {
        if (this.formData.data === undefined) {
            this.title = '工单作废后将不能再对工单进行处理，是否确认将所选的10个工单，共1000个问题作废！';
        } else {
            this.title = '工单作废后将不能再对工单进行处理，是否确认将该工单的100条问题作废？';
        }
    },
    methods: {}
};
</script>

<style lang="less" scoped>
.systemTitle{
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    i{
        font-size: 36px;
    }
}
</style>
