export const getDefaultState = () => {
    return {
        // 主弹窗信息
        dialogFormData: {
            title: '', // dialog 标题
            class: '', // 弹窗的样式
            value: '', // 弹出框类型
            type: '', // 弹窗功能: add view edit
            data: {}, // 弹窗带的数据
            show: false
        },
        // 左侧选中页签
        activeName: '',
        // 选中树节点
        treeNode: null
    };
};
export default getDefaultState();
