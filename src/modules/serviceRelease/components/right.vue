<!--
 * @moduleName: 服务发布 - 右侧
 * @Author: suLiang
 * @Date: 2019-12-31 17:13:07
 * @LastModifiedBy: suLiang
 * @LastEditTime : 2020-01-02 14:11:33
 -->
<template>
    <div>
        <sf-header>
            <sf-header-title>
                <span>属性</span>
                <sf-link ><i class="sf-icon-state-close"></i></sf-link>
            </sf-header-title>
        </sf-header>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('serviceRelease');
export default {
    data() {
        return {
            activeName: 'first',
            treeList: [],
            customTreeList: []
        };
    },
    components: {},
    computed: {
    ...mapState({})
    },
    create() {
    },
    destroyed() {},
    mounted() {},
    methods: {
        ...mapMutations([]),
        ...mapActions([])
    }
};
</script>