/*
 * @moduleName: 数据接入 -- 任务管理
 * @Author: Ma.yunlong
 * @Date: 2019-11-28 17:25
 */
import { request, tip } from 'javascript@/axios/http';
import * as storeStatic from './storeStatic';

const actions = {
    /**
     * 质量管理 -- 问题明细： 公共数据 -- 处理方法
     * @param url
     * @param method
     * @param params
     * @returns { data }
     */
    [storeStatic.A_GET_COMMON_DATA]({ state, commit, dispatch }, parameter) {
        let requestPar = {
            url: window.Datasync.hostName + parameter.url,
            method: parameter.method,
            data: parameter.params ? parameter.params : ''
        };
        const { url, method, data } = requestPar;
        // 此处 处理提示 [ get -- 不提示 ]
        let _tip = parameter.method !== 'get' ? tip.__DOUBLE : tip.__FAIL;
        return request({
            url: url,
            method: method,
            data: data
        }, _tip).then(response => {
            // 此处做数据处理 [ 注：本 action 属于未做任何数据转换使用 ]
            const data = response.data;
            return Promise.resolve(data);
        }).catch(e => {
            return Promise.reject(e);
        });
    }
};
export default actions;
