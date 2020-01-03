<!--
 * @moduleName: 中心资源 -> 主页
 * @Author: zhangboxin
 * @Date: 2019-12-24 14:22:14
 * @LastModifiedBy: zhangboxin
 * @LastEditTime : 2020-01-02 15:46:35
 -->
<template>
    <sf-no-side-container :id="$parent.moduleName">
        <!-- 布局 -->
        <div class="cr-appLayout">
            <sf-title-container class="cr-header">
                <header-summary></header-summary>
            </sf-title-container>
            <el-container class="cr-container">
                <aside-dataOrganization></aside-dataOrganization>
                <main-resources></main-resources>
                <aside-attributes></aside-attributes>
            </el-container>
        </div>
        <!-- 弹窗 -->
        <el-dialog append-to-body :title="dialogFormData.title" :class="dialogFormData.class" :close-on-click-modal="false" :visible.sync="dialogFormData.show">
            <component v-if="dialogFormData.show" :is="dialogFormData.value" :formData="dialogFormData"></component>
        </el-dialog>
    </sf-no-side-container>
</template>
<script>
import headerSummary from './components/headerSummary';
import asideDataOrganization from './components/asideDataOrganization';
import mainResources from './components/mainResources';
import asideAttributes from './components/asideAttributes';
import layerOrDomain from './components/dialog/layerOrDomain';
import selectSource from './components/dialog/selectSource/index';
// import codeTable from './javascript/codeTable';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('centerResources');
export default {
    name: 'centerResources',
    provide: {
        // 树节点数据类型
        NODE_TYPE_LAYER: 'layer',
        NODE_TYPE_DOMAIN: 'domain',
        // 数据类型分类
        TYPE_LAYER1: 'layer1', // 一级分层
        TYPE_LAYER2: 'layer2', // 子分层
        TYPE_DOMAIN1: 'domain1', // 主题域
        TYPE_DOMAIN2: 'domain2', // 子主题域
        // 弹窗类型
        CTRL_ADD: 'add',
        CTRL_VIEW: 'view',
        CTRL_EDIT: 'edit',
        CTRL_DEL: 'del'
    },
    components: {
        headerSummary,
        asideDataOrganization,
        mainResources,
        asideAttributes,
        layerOrDomain,
        selectSource
    },
    data() {
        return {};
    },
    computed: {
        ...mapState({
            // 主弹窗信息
            dialogFormData: state => state.dialogFormData
        })
    },
    create() {},
    destroyed() {},
    mounted() {},
    methods: {
        ...mapMutations([]),
        ...mapActions([])
    }
};
</script>
