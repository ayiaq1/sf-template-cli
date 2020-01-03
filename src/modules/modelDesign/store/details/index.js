import state from './state';
import mutations from './mutations';
import actions from './actions';
export default {
    install(_this, stroeName) {
        if (!_this.$store) {
            console.warn('父级没有挂载stroe');
        }
        _this.$store.registerModule([stroeName], {
            namespaced: true,
            state: state,
            actions: actions,
            mutations: mutations
        });
    },
    uninstall(_this, stroeName) {
        _this.$store.unregisterModule([stroeName]);
    }
};
