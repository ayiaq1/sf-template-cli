import * as storeStatic from './storeStatic';
import { request, requestMethod, tip } from 'javascript@/axios/http';

const actions = {
    [storeStatic.A_GET_DATA]({ commit }, url) {
        // 请求接口
        return request({
            url: url,
            method: requestMethod.__GET
        }, tip.__FAIL).then(res => {
            const resData = res.data;
            commit(storeStatic.M_GET_DATA, { data: resData });
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
    }
};
export default actions;
