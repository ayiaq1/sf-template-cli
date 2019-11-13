/*
 * @moduleName: 模块名称
 * @Author: dawdler
 * @Date: 2019-08-13 16:17:05
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-11-05 15:33:52
 */
import * as types from './storeStatic';
import { request, requestMethod, tip } from 'javascript@/axios/http';
const actions = {
    [types.A_GET_DATA]({ commit }, { data }) {
        // 请求接口
        return request({
            url: window.scheduler_hostName + '/test',
            data: data,
            method: requestMethod.__GET
        }, tip.__FAIL).then(response => {
            const data = response.data;
            commit(types.M_RESET_STATE, { data: data });
            return Promise.resolve(data);
        });
    }
};
export default actions;
