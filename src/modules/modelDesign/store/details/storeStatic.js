/************************************************************
 *
 * Mutations处理 以 M_ 开头
 *
 ************************************************************/
/**
 * 设置state对应的属性
 * 参数模式：this[storeStatic.M_SET_VALUE]({ type: 'isMain', value: true });
 * @data:
 */
export const M_SET_VALUE = 'M_SET_VALUE';
/************************************************************
 *
 * Actions 处理 以 A_ 开头
 *
 ************************************************************/
/**
 * 请求表格列表
 * 参数模式：this[storeStatic.A_GET_LIST]();
 * @data:
 */
export const A_GET_LIST = 'A_GET_LIST';
/**
 * 本模块统一请求方式
 * 参数模式：this[storeStatic.A_GET_DATA]({url,data,method,tips});
 * @data:
 */
export const A_GET_DATA = 'A_GET_DATA';
/************************************************************
 *
 * Getter 处理 以 G_ 开头
 *
 ************************************************************/
