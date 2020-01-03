/*
 * @Module: 接入资源->接入资源列表上方过滤条件及提示
 * @Author: zhouyu
 * @Date: 2020-01-02 22:38:58
 * @Last Modified by: zhouyu
 * @Last Modified time: 2020-01-02 22:39:30
 */

<template>
    <div class="filter-group-list">
        <el-popover ref="filterList"
            placement="bottom-start"
            trigger="click">
            <template>
                <div class="check-list">
                    <div>
                        <el-checkbox v-model="checkAll"
                            @change="checkboxAll">全选</el-checkbox>
                    </div>
                    <el-checkbox-group v-model="checkList"
                        @change="changeCheckBox">
                        <ul>
                            <li v-for="(item, index) in allCheckList"
                                :key="index">
                                <el-checkbox :label="item.code">{{item.name}}</el-checkbox>
                            </li>
                        </ul>
                    </el-checkbox-group>
                </div>
            </template>
            <i class="sf-icon-c-filter btn mr10"
                slot="reference"></i>
        </el-popover>
        <div class="checked-filter-list">
            <span v-if="checkList.length > 0">过滤条件:</span>
            <span>{{checkedName}}</span>
            <el-tooltip content="清除筛选条件"
                placement="top"
                v-if="checkList.length > 0"
                effect="dark">
                <i class="sf-icon-c-clear btn mr10 ml10"
                    @click='clearAll'></i>
            </el-tooltip>
            <span>提示：当前页面共有2个资源关联的物理表在数据库中不存在；2个资源关联的物理表发生变化</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilterGroup',
    data() {
        return {
            checkAll: false,
            checkList: [],
            allCheckList: [{
                code: '0',
                name: '未注册资源'
            }, {
                code: '2',
                name: '已注册资源'
            }, {
                code: '3',
                name: '草稿'
            }, {
                code: '4',
                name: '变更中'
            }, {
                code: '5',
                name: '已启用'
            }, {
                code: '6',
                name: '已停用'
            }, {
                code: '7',
                name: '启用中'
            }, {
                code: '8',
                name: '停用中'
            }, {
                code: '9',
                name: '未落地'
            }, {
                code: '10',
                name: '已落地'
            }, {
                code: '11',
                name: '存在变更通知'
            }]
        };
    },
    computed: {
        allList() {
            let list = [];
            this.allCheckList.map((item, index) => {
                list[index] = item.code;
            });
            return list;
        },
        checkedName() {
            let checkName = '';
            let list = [];
            this.checkList.map(item => {
                this.allCheckList.map((ele, index) => {
                    if (ele.code === item) {
                        list[index] = ele.name;
                    }
                });
            });
            list.map((item, index) => {
                if (item) {
                    checkName += `${item};`;
                }
            });
            return checkName;
        }
    },
    methods: {
        changeCheckBox() {
            if (this.checkList.length < this.allList.length) {
                this.checkAll = false;
            } else if (this.checkList.length === this.allList.length) {
                this.checkAll = true;
            }
        },
        checkboxAll() {
            if (this.checkAll) {
                this.checkList = this.allList;
            }
        },
        clearAll() {
            this.checkList = [];
            this.checkAll = false;
        }
    }
};
</script>
<style lang="less" scoped>
@import '~less@/base/color';
.filter-group-list {
    display: inline;
    margin: 10px 0;
    .btn {
        color: @color-blue;
        cursor: pointer;
    }
    .checked-filter-list {
        display: inline;
    }
}
</style>
