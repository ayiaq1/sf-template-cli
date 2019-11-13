const pathJoin = require('path').join;
const chokidar = require('chokidar');
const fse = require('fs-extra');
const resolve = function (dir) {
    return pathJoin(__dirname, '../..', dir);
};
const resolveLoc = function (dir) {
    return pathJoin(__dirname, '..', dir);
};
const modules = require('../src/modules.js');
const mergeLang = require(resolve('..') + '/javascript/system/updataLangFiles.js');
mergeLang.mergeLang(fse, pathJoin, resolve, resolveLoc, modules, chokidar);
