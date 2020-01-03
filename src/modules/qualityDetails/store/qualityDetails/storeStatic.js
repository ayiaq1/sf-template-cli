/*
 * Mutations处理 以 M_ 开头
*/

// 重置 store
export const M_RESET_STATE = 'M_RESET_STATE';

// 设置模块弹窗信息。
export const M_DIALOG_DATA = 'M_DIALOG_DATA';

// 跨组件 异步触发事件 标记 asynUpdate
export const M_ASYNUPDATE_TYPE = 'M_ASYNUPDATE_TYPE';

/*
 * Actions 处理 以 A_ 开头
*/

// 公共获取数据 [ 不需要任何数据转换的公共方法 ]
export const A_GET_COMMON_DATA = 'A_GET_COMMON_DATA';
