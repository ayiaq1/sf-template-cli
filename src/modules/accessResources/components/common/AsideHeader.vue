<template>
    <div class="aside-header">
        <sf-header>
            <div class="header-content">
                <sf-header-title>
                    <span>{{header.label}}</span>
                    <sf-link v-if="header.type === 'search'"
                        @click="isSearch = !isSearch">
                        <i class="sf-icon-c-search"></i>
                    </sf-link>
                    <sf-link v-else-if="header.type === 'attr' && header.close"
                        @click="isSearch = !isSearch">
                        <i class="sf-icon-state-close"></i>
                    </sf-link>
                </sf-header-title>
                <sf-search-bar v-if="header.type === 'search'"
                    v-model="keywords"
                    v-show="isSearch"
                    @searchFun="_searchFun" />
            </div>
        </sf-header>
    </div>
</template>

<script>
export default {
    name: 'AsideHeader',
    props: {
        header: {
            type: Object,
            default: () => {
                return {
                    type: 'attr',
                    laebl: 'header',
                    close: false
                };
            }
        }
    },
    data() {
        return {
            isSearch: false,
            keywords: ''
        };
    },
    methods: {
        _searchFun() {

        }
    }
};
</script>
<style lang="less" scoped>
@import '~less@/base/color';
.aside-header {
    .header-content {
        padding: 0 15px;
        .sf-search-bar {
            margin: 5px 0;
        }
    }
}
</style>
