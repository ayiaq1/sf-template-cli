<!--
 * @moduleName: 服务管理 - 服务发布
 * @Author: suLiang
 * @Date: 2020-01-01 16:06:18
 * @LastModifiedBy: suLiang
 * @LastEditTime : 2020-01-02 19:41:32
 -->
<template>
    <sf-no-side-container :id="$parent.moduleName">
       <sf-title-container class="mb20">
            截止目前，总共发布了
            <span class="fz18 color-blue-3">{{topCount.total}}</span>
            个接口，其中数据封装
            <span class="fz18 color-blue">{{topCount.type1}}</span>
            个，文件封装
            <span class="fz18 color-green">{{topCount.type2}}</span>
            个，内部接口封装
            <span class="fz18 color-red">{{topCount.type3}}</span>
            个，第三方接口
            <span class="fz18 color-yellow">{{topCount.type4}}</span>个。
        </sf-title-container>
        <el-container  class="container-wrap">
            <el-aside>
                <LeftSide />
            </el-aside>
            <el-container>
                <el-main>
                    <CenterContent/>
                </el-main>
            </el-container>
            <el-aside>
                <RightSide />
            </el-aside>
        </el-container>
    </sf-no-side-container>
</template>
<script>
// vuex
import { createNamespacedHelpers } from 'vuex';
import LeftSide from './components/left';
import CenterContent from './components/center';
import RightSide from './components/right';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('serviceRelease');
export default {
    name: 'serviceRelease',
    components: {
        LeftSide,
        RightSide,
        CenterContent
    },
    data() {
        return {
            topCount: {
                total: 100,
                type1: 90,
                type2: 5,
                type3: 2,
                type4: 3
            }
        };
    },
    computed: {
        ...mapState({})
    },
    created() {
    },
    destroyed() {},
    mounted() {},
    methods: {
        ...mapMutations([]),
        ...mapActions([])
    }
};
</script>
