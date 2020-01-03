<!--
 * @moduleName: 模型设计 -- 头部操作栏
 * @Author: dawdler
 * @Date: 2019-12-26 16:02:21
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2020-01-02 14:13:05
 -->
<template>
    <sf-title-container class="design-top-wrap">
        <template v-for="(item, index) in linkList">
            <template v-if="item.name">
                <sf-link :key="index" @click="item.fun(item)">
                    <i :class="'sf-icon-' + item.icon"></i>
                    <span>{{ item.name }}</span>
                </sf-link>
            </template>
            <template v-else>
                <el-divider :key="index" />
            </template>
        </template>
    </sf-title-container>
</template>
<script>
import { mapMutations } from 'vuex';
import * as storeStatic from '../store/storeStatic.js';
import globalStatic from 'javascript@/event/globalStatic';
import { i18n$t } from 'javascript@/i18n';
export default {
    name: 'TopContainer',
    inject: {
        // ======= 组件类型 ===========
        ADD_MODEL: {
            // 添加模型
            default: 'addModel'
        },
        VERSION_LIST: {
            // 版本列表
            default: 'version'
        }
    },
    components: {},
    data() {
        return {
            linkList: [
                {
                    name: '新建模型',
                    icon: 'c-add-1',
                    fun: this._addFun
                },
                {
                    name: '导入模型',
                    icon: 'c-import',
                    fun: this._addFun
                },
                {
                    name: '数据库逆向',
                    icon: 'c-databaseReverse',
                    fun: this._addFun
                },
                {
                    icon: 'el-divider'
                },
                {
                    name: '导出实体/表',
                    icon: 'c-export',
                    fun: this._addFun
                },
                {
                    name: '下载导入模板',
                    icon: 'c-download',
                    fun: this._addFun
                },
                {
                    name: '模型转换',
                    icon: 'c-transform',
                    fun: this._addFun
                },
                {
                    name: '模型比较',
                    icon: 'c-compare',
                    fun: this._addFun
                },
                {
                    name: '模型检查',
                    icon: 'c-search',
                    fun: this._addFun
                },
                {
                    name: '生成到数据库',
                    icon: 'c-base',
                    fun: this._addFun
                },
                {
                    name: '生成记录',
                    icon: 'c-record',
                    fun: this._addFun
                },
                {
                    name: '生成dd脚本',
                    icon: 'c-import',
                    fun: this._addFun
                },
                {
                    name: '生成版本',
                    icon: 'c-programme',
                    fun: this._addFun
                },
                {
                    name: '版本列表',
                    icon: 'c-view-outline',
                    fun: this._versionFun
                },
                {
                    icon: 'el-divider'
                },
                {
                    name: '保存',
                    icon: 'c-save',
                    fun: this._addFun
                },
                {
                    name: '变更',
                    icon: 'state_change',
                    fun: this._addFun
                },
                {
                    icon: 'el-divider'
                },
                {
                    name: '使用说明',
                    icon: 'state_tip',
                    fun: this._addFun
                }
            ]
        };
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
        ...mapMutations([storeStatic.M_DIALOG]),
        // 设置弹出框类型为 新增模型
        _addFun(item) {
            this[storeStatic.M_DIALOG]({
                ctrl: globalStatic.ADD,
                type: this.ADD_MODEL,
                title: i18n$t('modelDesign.add_model'),
                data: null,
                show: true
            });
        },
        _versionFun(item) {
            this[storeStatic.M_DIALOG]({
                ctrl: globalStatic.ADD,
                type: this.VERSION_LIST,
                title: i18n$t('modelDesign.version_list'),
                data: null,
                show: true
            });
        }
    }
};
</script>
