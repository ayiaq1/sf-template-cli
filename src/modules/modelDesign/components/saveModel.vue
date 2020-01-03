<!--
 * @moduleName: 模型设计 -- 保存模型
 * @Author: dawdler
 * @Date: 2019-12-31 14:31:45
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2019-12-31 17:59:26
 -->
<template>
    <div class="saveModel">
        <el-form :model="form" ref="form" label-width="80px">
            <el-form-item label="模型类型" cn="模型类型">
                <el-select v-model="form.type">
                    <el-option v-for="item in getModelList()" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="模型名称" cn="模型名称">
                <el-input maxlength="32" v-model="form.name" :placeholder="$t('pleaseEnter')" />
            </el-form-item>
            <el-form-item label="数据组织" cn="数据组织">
                <el-select v-model="form.class">
                    <el-option v-for="item in getModelList()" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="模型负责人" cn="模型负责人">
                <el-select v-model="form.class">
                    <el-option v-for="item in getModelList()" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="模型负责人" cn="模型负责人">
                <el-input maxlength="200" show-word-limit type="textarea" :rows="6" v-model="form.desc" resize="none" />
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="form.sk">是否创建外键<i class="sf-icon-state_tip"></i></el-checkbox>
                <el-checkbox v-model="form.get">从已有数据库中获取<i class="sf-icon-state_tip"></i></el-checkbox>
            </el-form-item>
            <el-form-item label="数据库" cn="数据库">
                <el-select v-model="form.class" :placeholder="$t('pleaseSelect')">
                    <el-option v-for="item in getModelList()" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <div class="dialog-footer">
                <el-button type="primary" @click="_saveFun">{{ $t('save') }}</el-button>
                <el-button>{{ $t('cancel') }}</el-button>
            </div>
        </el-form>
    </div>
</template>
<script>
import { modelList } from '../javascript/codeTable';
import { mapMutations, mapActions } from 'vuex';
import * as storeStatic from '../store/storeStatic.js';
import * as detailsStatic from '../store/details/storeStatic.js';
export default {
    name: 'saveModel',
    components: {},
    data() {
        return {
            form: {
                type: '',
                name: '',
                class: '',
                desc: '',
                sk: false,
                get: false
            }
        };
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
        ...mapMutations([storeStatic.M_DIALOG]),
        ...mapActions('details', [detailsStatic.A_GET_LIST]),
        // 获取模型列表
        getModelList() {
            return modelList;
        },
        _saveFun() {
            // 设置弹出框关闭
            this[storeStatic.M_DIALOG]({
                ctrl: '',
                type: '',
                title: '',
                data: null,
                show: false
            });
            // 刷新右侧列表
            this[detailsStatic.A_GET_LIST]();
        }
    }
};
</script>
