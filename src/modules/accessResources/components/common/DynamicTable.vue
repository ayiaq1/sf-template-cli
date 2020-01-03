<template>
    <div>
        <div class="article-column-con mt20">
            <div class="table-data mt10">
                <el-table :data="dataList.tableNodeList"
                    :header-cell-style="styleTheadObj"
                    v-loading="loading"
                    :empty-text="emptyText"
                    border
                    stripe>
                    <el-table-column v-for="(item, index) in dataList.tableTitleList"
                        :key="index"
                        min-width="100"
                        show-overflow-tooltip>
                        <template slot-scope="scope"
                            slot="header">
                            <el-tooltip effect="dark"
                                :content="item.fieldCode"
                                placement="top-start"
                                :disabled="thTooltipShow">
                                <div class="th-tooltip-box"
                                    @mouseenter="thTooltipFun(scope, $event)">
                                    <span class="th-tooltip-title">{{item.fieldCode}}</span>
                                </div>
                            </el-tooltip>
                        </template>
                        <template slot-scope="scope">
                            <div class="table-header-common"
                                v-if="scope.row[item.fieldCode]">
                                <span>{{scope.row[item.fieldCode]}}</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sampleTable',
    props: {
        emptyText: {
            type: String,
            default: '加载中...'
        },
        dataList: {
            type: Object,
            default: () => {
                return {};
            }
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            styleTheadObj: {
                background: '#fafafa'
            },
            thTooltipShow: true
        };
    },
    methods: {
        thTooltipFun(scope, event) {
            // 获取表头宽度
            let outerWidth = scope.column.realWidth != null ? scope.column.realWidth : scope.column.width;
            // 标题span的宽度加上样式的内边距31px，大于表头宽度时显示提示框
            if (event.target.children[0].offsetWidth + 31 >= outerWidth) {
                this.thTooltipShow = false;
            } else {
                this.thTooltipShow = true;
            }
        }
    }
};
</script>
<style lang="less">
.sample-table-header {
    min-width: 160px;
    .table-header-common {
        padding-left: 10px;
    }
}
</style>
