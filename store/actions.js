/*
 * @moduleName: 模块名称
 * @Author: dawdler
 * @Date: 2019-08-13 16:17:05
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-12-24 16:10:04
 */
import { request, requestMethod, tip } from 'javascript@/axios/http';
import * as storeStatic from './storeStatic';

const actions = {
    // 本地数据统一请求方法
    [storeStatic.A_GET_DATA]({ commit }, { url, data = {}, prefixPath = window.Datasync.hostName, method = requestMethod.__GET }, tips = tip.__FAIL) {
        return request({
            url: prefixPath + url,
            data: data,
            method: method
        }, tips).then(response => {
            return Promise.resolve(response);
        });
    }
};
export default actions;
