<!--
 * @moduleName: 质量调度 -> 任务运行分布图
 * @Author: Ma.yunlong
 * @Date: 2019-12-30 11:12:23
 * @LastModifiedBy: Ma.yunlong
 * @LastEditTime : 2019-12-30 11:12:23
 -->
<template>
    <div style="height:360px">
        <el-row class="calendar-wrap" type="flex" align="middle">
            <el-col :span="8">
                <el-tabs v-model="activeTab">
                    <el-tab-pane label="全部任务" name="0"></el-tab-pane>
                    <el-tab-pane label="周期执行" name="1"></el-tab-pane>
                    <el-tab-pane label="单次执行" name="2"></el-tab-pane>
                </el-tabs>
                <div style="height:280px">
                    <!-- calendarRange有数据之后才渲染,和charts一致,图表没有数据的不返回,需要判断data.day是否相等才是一致数据 -->
                    <el-calendar v-if="calendarRange.length > 0 && chartsData.length > 0" :range="calendarRange" v-model="nowTime">
                        <template slot="dateCell" slot-scope="{ date, data }">
                            <div class="calendar-bg-wrap" :title="_getChartsDataFun(data.day)[0].name">
                                <span>
                                    {{
                                        data.day
                                            .split('-')
                                            .slice(2)
                                            .join('-')
                                    }}
                                </span>
                                <div class="calendar-content-wrap">
                                    <WavesCharts :height="40" :data="_getChartsDataFun(data.day)" />
                                </div>
                            </div>
                        </template>
                    </el-calendar>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="runTitle">2019年1月1日  任务运行分布图</div>
                <BarCharts ref="barCharts" :height="290" :data="nowData" />
            </el-col>
        </el-row>
    </div>
</template>
<script>
// echarts
import BarCharts from 'components@/echarts/BarCharts.vue';
import WavesCharts from 'components@/echarts/WavesCharts.vue';
// dayjs
import dayjs from 'dayjs';
// vuex
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('qualityScheduling');
export default {
    components: {
        WavesCharts,
        BarCharts
    },
    data() {
        return {
            activeTab: '0',
            nowTime: 0,
            // 显示日期范围
            calendarRange: [],
            chartsData: [],
            // 柱状图
            nowData: [{
                name: '1时',
                value: 10
            }, {
                name: '2时',
                value: 30
            }, {
                name: '3时',
                value: 40
            }, {
                name: '4时',
                value: 20
            }, {
                name: '5时',
                value: 12
            }, {
                name: '6时',
                value: 80
            }, {
                name: '7时',
                value: 100
            }, {
                name: '8时',
                value: 120
            }, {
                name: '9时',
                value: 15
            }, {
                name: '10时',
                value: 30
            }, {
                name: '11时',
                value: 40
            }, {
                name: '12时',
                value: 20
            }, {
                name: '13时',
                value: 3
            }, {
                name: '14时',
                value: 34
            }, {
                name: '15时',
                value: 67
            }, {
                name: '16时',
                value: 109
            }, {
                name: '17时',
                value: 66
            }, {
                name: '18时',
                value: 27
            }, {
                name: '19时',
                value: 19
            }, {
                name: '20时',
                value: 101
            }, {
                name: '21时',
                value: 22
            }, {
                name: '22时',
                value: 89
            }, {
                name: '23时',
                value: 23
            }, {
                name: '24时',
                value: 57
            }]
        };
    },
    computed: {
        ...mapState({
            // 弹窗信息
            dialogFormData: state => state.dialogFormData
        })
    },
    create() {
    },
    destroyed() {},
    mounted() {
        let serverTime = 1577705120032;
        this.nowTime = dayjs(+serverTime).format('YYYY-MM-DD');
        this._getCalendarDataFun(serverTime);
    },
    methods: {
        ...mapMutations([]),
        ...mapActions([]),
        _getCalendarDataFun(serverTime) {
            // 当前这个月初 -7 之后的周一 为开始时间
            const startTime = dayjs(+serverTime)
                .startOf('month')
                .subtract(7, 'day')
                .day(1)
                .format('YYYY-MM-DD');
            // 当前这一个月的最后一天 +7 之后的周日 为结束时间
            const endTime = dayjs(+serverTime)
                .endOf('month')
                .add(7, 'day')
                .day(0)
                .format('YYYY-MM-DD');

            this.calendarRange = [startTime, endTime];
            // 模拟数据
            this.chartsData = [{
                time: '2019-12-30',
                count: 50678,
                proportion: 1
            }];
        },
        // 返回当前匹配的图表数据
        _getChartsDataFun(day) {
            const data = this.chartsData.find(item => item.time === day);
            return [
                {
                    name: data ? data.count : '',
                    value: data ? data.proportion : 0
                }
            ];
        }
    }
};
</script>

<style lang="less" scoped>
.runTitle{
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-indent: 40px;
    font-size: 14px;
    font-weight: 600;
}
</style>
