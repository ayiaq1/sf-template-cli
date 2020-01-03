<template>
    <div class="attr-info">
        <AsideHeader :header="header" />
        <el-form ref="attrForm"
            class="attr-form"
            :model="attrForm"
            label-width="90px">
            <el-form-item label="资源英文名">
                <span>XXX</span>
            </el-form-item>
            <el-form-item label="资源中文名">
                <span>XXX</span>
            </el-form-item>
            <el-form-item label="资源分类">
                <span>XXX</span>
            </el-form-item>
            <el-form-item label="用途分类">
                <span>XXX</span>
            </el-form-item>
            <el-form-item label="数据获取方式">
                <span>XXX</span>
            </el-form-item>
            <el-form-item label="数据更新周期">
                <span>XXX</span>
            </el-form-item>
            <el-form-item label="关联物理表">
                <span>XXX</span>
            </el-form-item>
            <el-form-item>
                <span class="color-blue">查看详细信息</span>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import AsideHeader from './../common/AsideHeader';
export default {
    name: 'AttributeInfo',
    components: {
        AsideHeader
    },
    data() {
        return {
            header: {
                type: 'attr',
                label: '属性'
            },
            attrForm: {}
        };
    }
};
</script>

<style lang="less" scoped>
.attr-info {
    .attr-form {
        margin: 20px;
    }
}
</style>
