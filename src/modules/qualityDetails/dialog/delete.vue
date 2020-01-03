<!--
 * @moduleName: 问题明细 -- 删除
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 15:57
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime: 2019-12-30 15:57
 -->
<template>
    <div>
        <div class='systemTitle'>
            <i class="sf-icon-c-warning color-yellow mr10"></i>
            工单删除操作不可逆，删除后将无法查看此工单，请谨慎操作。
            <span>工单删除不影响质量报告结果</span>
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
            loading: false
        };
    },
    created() {},
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
    span{
        color: red;
    }
}
</style>
