/*
 * @moduleName: 模块名称
 * @Author: dawdler
 * @Date: 2019-08-13 16:17:05
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-09-16 10:06:26
 */
import * as types from './storeStatic';
import { request, tip } from 'javascript@/axios/http';
const actions = {
    [types.A_GET_DATA]({ commit }, url) {
        // 请求  接口
        return request({
            url: url
        }, tip.__FAIL).then(response => {
            const data = response.data;
            commit(types.M_SET_DATA, { data: data });
            return Promise.resolve(data);
        });
    }
};
export default actions;
