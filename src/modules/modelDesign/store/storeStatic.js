/************************************************************
 *
 * Mutations处理 以 M_ 开头
 *
 ************************************************************/
/**
 * 主页的大弹出框设置
 * 参数模式：this[storeStatic.M_DIALOG]({
        ctrl: '',
        type: '',
        data: null,
        show: false
    });
 * @dialogFormData:
 */
export const M_DIALOG = 'M_DIALOG';
/**
 * 只修改大弹框的局部属性
 * 参数模式：this[storeStatic.M_DIALOG_VALUE]({ key: 'type', data: this.SAVE_MODEL });
 * @type:
 */
export const M_DIALOG_VALUE = 'M_DIALOG_VALUE';
/************************************************************
 *
 * Actions 处理 以 A_ 开头
 *
 ************************************************************/
/**
 * 统一请求获取Data信息;
 * 参数模式：this[storeStatic.A_GET_DATA]({data});
 * @data:
 */
export const A_GET_DATA = 'A_GET_DATA';
/************************************************************
 *
 * Getter 处理 以 G_ 开头
 *
 ************************************************************/
