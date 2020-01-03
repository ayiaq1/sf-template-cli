/*
 * @Module: 接入资源->数据预览
 * @Author: zhouyu
 * @Date: 2020-01-02 23:05:09
 * @Last Modified by: zhouyu
 * @Last Modified time: 2020-01-02 23:24:15
 */
 <template>
    <div class="preview-list">
        <el-tabs v-model="active">
            <el-tab-pane label="数据预览"
                name="0">
                <template>
                    <div>
                        <DynamicTable :loading="loading"
                            :empty-text="emptyText" />
                    </div>
                </template>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

 <script>
import DynamicTable from 'localModules@/accessResources/components/common/DynamicTable.vue';
export default {
    name: 'PreviewList',
    components: {
        DynamicTable
    },
    data() {
        return {
            active: 0,
            loading: false,
            emptyText: '暂无数据'
        };
    },
    methods: {
    }
};
 </script>

 <style lang="less" scoped>
.preview-list {
    margin: 20px;
}
</style>
