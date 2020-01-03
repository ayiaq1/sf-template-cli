<template>
    <div class="audit-records">
        <AsideHeader :header="header" />
        <div class="audit-list">
            <el-timeline>
                <el-timeline-item v-for="(activity, index) in activities"
                    :key="index"
                    :icon="activity.icon"
                    :type="activity.type"
                    :color="activity.color"
                    :size="activity.size">
                    {{activity.content}}
                    {{activity.timestamp}}
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
import AsideHeader from './../common/AsideHeader.vue';
export default {
    name: 'AuditRecords',
    components: {
        AsideHeader
    },
    data() {
        return {
            header: {
                type: 'attr',
                label: '审核记录'
            },
            activities: [{
                content: '张三',
                timestamp: '2018-04-12 20:46',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-more'
            }, {
                content: '张三',
                timestamp: '2018-04-03 20:46',
                color: '#0bbd87'
            }, {
                content: '张三',
                timestamp: '2018-04-03 20:46',
                size: 'large'
            }, {
                content: '张三',
                timestamp: '2018-04-03 20:46'
            }]
        };
    }
};
</script>

<style lang="less" scoped>
.audit-records {
    .audit-list {
        margin: 20px;
    }
}
</style>
