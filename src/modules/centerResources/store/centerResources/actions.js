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
    },
    // 获取数据库类型
    [storeStatic.A_DATABASE_TYPE_DATA]({ commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/sys/v1/data-source-types'
        };
        return request({ ...reqParams }, tip.__FAIL).then(res => {
            const resData = res.data;
            commit(storeStatic.M_DATABASE_TYPE_DATA, { data: resData });
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
        // coding
        // commit(storeStatic.M_DATABASE_TYPE_DATA, { data: datas.databaseTypeData });
    },
    // 获取业务类型
    [storeStatic.A_BUSINESS_TYPE_DATA]({ commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/sys/v1/business-type'
        };
        return request({ ...reqParams }, tip.__FAIL).then(res => {
            const resData = res.data;
            commit(storeStatic.M_BUSINESS_TYPE_DATA, { data: resData });
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
        // coding
        // commit(storeStatic.M_BUSINESS_TYPE_DATA, { data: datas.businessTypeData });
    },
    // 获取数据源列表
    [storeStatic.A_DATA_SOURCE_DATA]({ state, commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/app/v1/view/datasource/' + state.pageData.index + '/' + state.pageData.size + '/query-page',
            method: requestMethod.__POST,
            data: { ...state.filterSearchData }
        };
        return request({ ...reqParams }, tip.__FAIL).then(res => {
            const resData = {
                data: res.data,
                extra: res.extra
            };
            commit(storeStatic.M_DATA_SOURCE_DATA, { data: resData });
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
        // coding
        // return Promise.resolve({ data: {} });
    },
    // 获取模式
    [storeStatic.A_MODE_DATA]({ commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/app/v1/view/datasource/_pull-schemas',
            method: requestMethod.__POST,
            data: { ...params }
        };
        return request({ ...reqParams }, tip.__FAIL).then(res => {
            const resData = res.data;
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
    },
    // 获取HIVE模式
    [storeStatic.A_HIVE_MODE_DATA]({ commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/app/v1/view/datasource/_pull-schemas',
            method: requestMethod.__POST,
            data: { ...params }
        };
        return request({ ...reqParams }, tip.__FAIL).then(res => {
            const resData = res.data;
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
    },
    // 获取厂商
    [storeStatic.A_VENDOR_DATA]({ commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/sys/v1/bigdata-supplierinfo',
            method: requestMethod.__GET,
            data: { ...params }
        };
        return request({ ...reqParams }, tip.__FAIL).then(res => {
            const resData = res.data;
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
        // coding
        // commit(storeStatic.M_MODE_DATA, { data: {} });
    },
    // 连接调试
    [storeStatic.A_CONNECT_RESULT_DATA]({ commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/app/v1/view/datasource/_debug',
            method: requestMethod.__POST,
            data: { ...params }
        };
        return request({ ...reqParams }, tip.__FAIL).then(res => {
            const resData = res.data;
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
        // coding
        // return Promise.resolve({});
    },
    // 保存数据源
    [storeStatic.A_SAVE_DATASOURCE_DATA]({ commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/app/v1/view/datasource/_save',
            method: requestMethod.__POST,
            data: { ...params }
        };
        return request({ ...reqParams }, tip.__DOUBLE).then(res => {
            const resData = res.data;
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
        // coding
        // return Promise.resolve({});
    },
    // 更新数据源
    [storeStatic.A_EDIT_DATASOURCE_DATA]({ commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/app/v1/view/datasource/_update',
            method: requestMethod.__PUT,
            data: { ...params }
        };
        return request({ ...reqParams }, tip.__DOUBLE).then(res => {
            const resData = res.data;
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
        // coding
        // return Promise.resolve({});
    },
    // 获取指定数据源
    [storeStatic.A_GET_DATASOURCE_DATA]({ commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/app/v1/view/datasource/query/' + params.dataSourceId,
            method: requestMethod.__GET
        };
        return request({ ...reqParams }, tip.__FAIL).then(res => {
            const resData = res.data;
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
    },
    // 删除指定数据源
    [storeStatic.A_DEL_DATASOURCE_DATA]({ commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/app/v1/view/datasource/' + params.dataSourceId + '/_del',
            method: requestMethod.__DELETE,
            data: { ...params }
        };
        return request({ ...reqParams }, tip.__DOUBLE).then(res => {
            const resData = res.data;
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
    },
    // 删除配置文件
    [storeStatic.A_DEL_PROFILE_DATA]({ commit }, params) {
        let reqParams = {
            url: 'file-server/catalogs/_mdelete',
            method: requestMethod.__POST,
            data: { ...params }
        };
        return request({ ...reqParams }, tip.__DOUBLE).then(res => {
            const resData = res.data;
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
    },
    // 获取主题
    [storeStatic.A_THEME_DATA]({ commit }, params) {
        let reqParams = {
            url: window.DataSource.hostName + '/app/v1/view/datasource/_pull-schemas',
            method: requestMethod.__POST,
            data: { ...params }
        };
        return request({ ...reqParams }, tip.__FAIL).then(res => {
            const resData = res.data;
            return Promise.resolve(resData);
        }).catch(err => {
            return Promise.reject(err);
        });
    }
};
export default actions;
