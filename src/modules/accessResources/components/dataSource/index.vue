/*
 * @Module: 接入资源->系统、数据源、配置管理
 * @Author: zhouyu
 * @Date: 2020-01-02 23:01:45
 * @Last Modified by: zhouyu
 * @Last Modified time: 2020-01-02 23:02:22
 */

<template>
    <div class="data-source-content">
        <AsideHeader :header="header" />
        <div class="btn-group mb20">
            <el-tooltip cn="新增"
                content="新增"
                placement="top"
                effect="dark">
                <i class="sf-icon-c-add-1"></i>
            </el-tooltip>
            <el-tooltip cn="导入"
                content="导入"
                placement="top"
                effect="dark">
                <i class="sf-icon-c-download"></i>
            </el-tooltip>
            <el-tooltip cn="导出"
                content="导出"
                placement="top"
                effect="dark">
                <i class="sf-icon-c-download"></i>
            </el-tooltip>
        </div>
        <div class="data-source-tree">
            <el-tree ref="tree"
                :data="dataList"
                :props="props"
                @node-click="handleNodeClick"
                :node-key="props.id"
                accordion
                highlight-current>
                <span class="node"
                    slot-scope="{ node, data }">
                    <div class="node-box">
                        <i class="sf-icon-c-folder-opened header-icon"
                            v-if="data.children"></i>
                        <i class="sf-icon-c-base header-icon"
                            v-else></i>
                        <span class="mr5 node-name"
                            :title="`${data.name}(${data.num})`">{{ `${data.name}(${data.num})` }}</span>
                    </div>
                    <el-dropdown trigger="click"
                        @command="action">
                        <span>
                            <i class="sf-icon-cr-more btn-more"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-popover cn="新增"
                                ref="ctrlPopover"
                                placement="right"
                                popper-class="add-source-popover"
                                trigger="hover">
                                <ul>
                                    <li class="btn-popover-item">
                                        <div>
                                            <i class="sf-icon-c-add"></i>
                                        </div>
                                        <div class="source-desc">
                                            <p class="title">选择已有数据源</p>
                                            <p>如果某个数据源在多个系统中均存在，请使用此选项选择已有的数据源</p>
                                        </div>
                                    </li>
                                    <li class="btn-popover-item">
                                        <div>
                                            <i class="sf-icon-c-edit-outline"></i>
                                        </div>
                                        <div class="source-desc">
                                            <p class="title">新增新的数据源</p>
                                            <p>如果数据源还未添加，请使用此项进行添加</p>
                                        </div>
                                    </li>
                                </ul>
                                <el-dropdown-item command="add"
                                    slot="reference"
                                    v-if="data.children">
                                    <i class="sf-icon-c-add"></i>
                                </el-dropdown-item>
                            </el-popover>
                            <el-tooltip cn="编辑"
                                content="编辑"
                                placement="right"
                                effect="dark">
                                <el-dropdown-item command="add">
                                    <i class="sf-icon-c-edit-outline"></i>
                                </el-dropdown-item>
                            </el-tooltip>
                            <el-tooltip cn="删除"
                                content="删除"
                                placement="right">
                                <el-dropdown-item command="delete">
                                    <i class="sf-icon-c-delete"></i>
                                </el-dropdown-item>
                            </el-tooltip>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </el-tree>
        </div>
    </div>
</template>

<script>
import AsideHeader from './../common/AsideHeader';
export default {
    name: 'DataSourceList',
    components: {
        AsideHeader
    },
    data() {
        return {
            header: {
                type: 'search',
                label: '数据源'
            },
            dataList: [{
                id: '1',
                name: 'laskjd;lajsld;ajs;ldjasdldjasdldjasdldjasdldjasd',
                num: 20,
                children: [{
                    id: '1-1',
                    num: 20,
                    name: 'ldjasdldjasdldjasdldjasdldjasdldjasdldjasdldjasdldjasdldjasd'
                }]
            }],
            props: {
                id: 'id',
                label: 'name',
                children: 'children'
            },
            actionItems: [{

            }]
        };
    },
    methods: {
        handleNodeClick() {

        },
        action(item) {
            console.log(item);
        }
    }
};
</script>
<style lang="less" scoped>
@import '~less@/base/color';
.add-source-popover {
    .btn-popover-item {
        margin: 5px 0;
        padding: 5px;
        display: flex;
        justify-content: flex-start;
        cursor: pointer;
        font-size: 14px;
        &:hover {
            background: @user-bgcolor-hover;
        }
        i {
            margin-right: 10px;
            color: @color-blue;
        }
        .source-desc {
            width: 140px;
            color: @text-color-four;
            .title {
                color: @color-black;
            }
        }
    }
}
.btn-more {
    margin-right: 5px;
}
</style>
