/*
 * @moduleName: 模块名称
 * @Author: dawdler
 * @Date: 2019-08-13 16:17:05
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-12-12 17:11:18
 */
import * as types from './storeStatic';
import { request, tip } from 'javascript@/axios/http';
const actions = {
    [types.A_GET_DATA]({ state }, { url }) {
        // 请求  接口
        return request({
            url: window.scheduler.hostName + url
        }, tip.__FAIL).then(response => {
            return Promise.resolve(response);
        });
    }
};
export default actions;
