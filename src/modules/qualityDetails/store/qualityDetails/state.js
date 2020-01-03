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
        /*
         * 跨组件 异步触发事件 标记
        */
        asynUpdateType: {
            type: 0,
            preventCache: 0
        }
    };
};
export default getDefaultState();
