<!--
 * @moduleName: 模型设计 -- 添加模型
 * @Author: dawdler
 * @Date: 2019-12-31 11:29:16
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2019-12-31 17:46:11
 -->
<template>
    <sf-no-side-container class="addModel">
        <ul>
            <li v-for="(item, index) in modelList" :key="index">
                <div class="title-wrap">
                    {{ item.label }}
                    <span class="unit">({{ item.children.length }})</span>
                </div>
                <div class="box-wrap" v-for="(list, i) in item.children" :key="i">
                    <div class="icon-wrap">
                        <i :class="'sf-icon-' + list.icon"></i>
                    </div>
                    <strong>{{ list.label }}</strong>
                </div>
            </li>
        </ul>
        <div class="dialog-footer">
            <el-button type="primary" @click="_nextFun">{{ $t('next_step') }}</el-button>
            <el-button @click="dialogFormData.show = false">{{ $t('cancel') }}</el-button>
        </div>
    </sf-no-side-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import * as storeStatic from '../store/storeStatic.js';
export default {
    name: 'addModel',
    inject: {
        SAVE_MODEL: {
            // 组件类型: 保存模型
            default: 'saveModel'
        }
    },
    components: {},
    data() {
        return {
            modelList: [
                {
                    label: '逻辑模型',
                    children: [
                        {
                            label: 'Logic Model',
                            icon: 'c-logic'
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        ...mapState({
            dialogFormData: state => state.dialogFormData
        })
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
        ...mapMutations([storeStatic.M_DIALOG_VALUE]),
        _nextFun() {
            this[storeStatic.M_DIALOG_VALUE]({ key: 'type', data: this.SAVE_MODEL });
        }
    }
};
</script>
