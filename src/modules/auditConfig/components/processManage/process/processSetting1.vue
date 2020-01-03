<!-- 组件弹窗 -->
<template>
    <div class="webETLDialog iframeDialog">
        <el-dialog class="web-etl-iframeDialog" append-to-body :close-on-click-modal="false" fullscreen :title="title" :visible.sync="formData.show" :before-close="beforeCloseFun">
            <iframe id="webETLFrame" :src="url" width="100%" height="100%" scrolling="no" frameborder="0" />
        </el-dialog>
    </div>
</template>
<script>
import { mapState } from 'vuex';
let $ = window.$;
export default {
    props: ['formData'],
    data() {
        return {
            title: '',
            url: ''
        };
    },
    created() {},
    computed: {
        ...mapState({
            windowSize: state => state.windowSize
        })
    },
    watch: {
        windowSize(val) {
            $('.web-etl-iframeDialog .el-dialog__body').css({
                'height': val.height - 42 + 'px'
            });
        }
    },
    mounted() {
        // this.$factory('/wydataeye/checkSession.json').then((response) => {
        this.$factory('/wydataeye/apiService/statisticByServiceType.json').then((response) => {
            this.openDialog();
        });
    },
    methods: {
        openDialog() {
            this.$nextTick(function() {
                $('.web-etl-iframeDialog .el-dialog__body').css({
                    'height': this.windowSize.height - 42 + 'px'
                });
                this.title = '流程设计';
                // hash值判断按钮使用权限
                var hash = window.location.hash;
                if (hash.indexOf('params') >= 0) {
                    hash = hash.substring(1, hash.indexOf('params') - 1);
                } else {
                    hash = hash.substr(1);
                }
                var urlData = {
                    ctrl: this.formData.ctrl,
                    model: this.formData.model,
                    flowId: this.formData.data.flowId
                };
                if (process.env.NODE_ENV === 'production') {
                    this.url = '/wydataeye/modules/flow.jsp?type=flow&hash=' + encodeURIComponent(hash) + '&data=' + encodeURIComponent(JSON.stringify(urlData));
                } else {
                    this.url = '/modules/flow.html?type=flow&hash=' + encodeURIComponent(hash) + '&data=' + encodeURIComponent(JSON.stringify(urlData));
                }
            });
        },
        beforeCloseFun(done) {
            // 如果页面没加载完关闭窗口
            if (!$('#webETLFrame')[0].contentWindow) return false;
            this.$$confirm('是否离开?', this.i18n.message.SYSTEM_TXT, {
                closeOnClickModal: false,
                confirmButtonText: this.i18n.message.OK,
                cancelButtonText: this.i18n.message.CANCEL,
                type: 'warning'
            }).then(() => {
                done();
                this.$emit('child-info');
            }).catch(() => {});
        }
    },
    components: {}
};

</script>
<style>
.iframeDialog .el-dialog--full .el-dialog__header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.iframeDialog .el-dialog--full .el-dialog__body {
    height: 99%;
    padding: 42px 0 0 0;
}

</style>
