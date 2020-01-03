<!--
 * @moduleName: 模型设计 --  右侧工具栏
 * @Author: dawdler
 * @Date: 2019-12-27 09:17:55
 * @LastModifiedBy: dawdler
 * @LastEditTime : 2020-01-02 11:37:11
 -->
<template>
    <el-aside>
        <sf-header>
            <sf-header-title>
                <span>工具</span>
            </sf-header-title>
        </sf-header>
        <div>
            <h6>模型设计工具</h6>
            <div>
                <sf-link>
                    <i class="sf-icon-c-table"></i>
                </sf-link>
                <sf-link>
                    <i class="sf-icon-c-delete"></i>
                </sf-link>
                <sf-link>
                    <i class="sf-icon-c-xls"></i>
                </sf-link>
                <sf-link>
                    <i class="sf-icon-c-xml"></i>
                </sf-link>
                <sf-link>
                    <i class="sf-icon-c-sql"></i>
                </sf-link>
            </div>
        </div>
    </el-aside>
</template>
<script>
export default {
    name: 'RightAsideContainer',
    components: {},
    data() {
        return {};
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {}
};
</script>
