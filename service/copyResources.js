/*
 * @moduleName: 拷贝公共和模块资源：images、js、fonts
 * @Author: dawdler
 * @Date: 2019-09-05 09:52:07
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-09-05 09:53:30
 */
const path = require('path');
const fse = require('fs-extra');
// 计算路径
const resolve = function (dir) {
    return path.join(__dirname, '../..', dir);
};
// 拷贝资源文件
const modules = require('../src/modules.js');
const setting = require(resolve('..') + '/javascript/system/copyAssets');
setting.copyAssetsFun(fse, resolve, modules);
