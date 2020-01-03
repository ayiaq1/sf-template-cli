/*
 * @moduleName: 主文件
 * @Author: dawdler
 * @Date: 2019-09-10 09:24:38
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-12-30 20:25:34
 */
import { registerApplication, start } from 'single-spa';
import { messageCenterEvents } from 'javascript@/system/messageCenter.js';
import { globalStatic } from 'javascript@/event/globalStatic.js';
import { createDomFun } from 'javascript@/system/domCreate';
import { list } from './modules.js';
import 'babel-polyfill';
// 引入项目样式表
import './index.less';
// 添加版本号
window.VERSTION = '20191219C06';
// 获取接口前缀
window.Govern = {
    hostName: process.env.VUE_APP_GOVERN_HOST
};

// 配置模块的访问路径
const _prefixFun = function (prefix) {
    return function (location) {
        return location.hash.indexOf(`${prefix}`) === 0;
    };
};
// 根据引入的模块，创建dom
createDomFun(list);

/*********************************************
 *
 * 公共模块的配置；
 *
 *********************************************/
// 暴力登录,暂时不做登录
window.sessionStorage.setItem('isLogin', true);

// 创建路由，引入模块。不能对import做for或者变量，webpack会导致所有root文件夹被缓存！！！
registerApplication('messageCenter', () => import('modules@/messageCenter/main.js'), () => true);
registerApplication('breadCrumbs', () => import('modules@/breadCrumbs/main.js'), () => true);
registerApplication('login', () => import('modules@/login/main.js'), _prefixFun('#/login'));
if (window.config.showMenu) {
    registerApplication('topMenu', () => import('modules@/topMenu/main.js'), () => true);
    registerApplication('subMenu', () => import('modules@/subMenu/main.js'), () => true);
}

registerApplication('demo', () => import('modules@/demo/main.js'), _prefixFun('#/demo'));
registerApplication('404', () => import('modules@/404/main.js'), _prefixFun('#/404'));

/*********************************************
 *
 * 当前项目的路由配置；
 *
 *********************************************/

// 工作台
registerApplication('workBench', () => import('./modules/workBench/main.js'), _prefixFun('#/workBench'));
// ============= 标准管理 - 本地标准 ============
// =============== 基础标准  ============
// 基础标准 - 数据元
registerApplication('localDataElement', () => import('./modules/localDataElement/main.js'), _prefixFun('#/localDataElement'));
// 基础标准 - 代码集
registerApplication('localCodeSet', () => import('./modules/localCodeSet/main.js'), _prefixFun('#/localCodeSet'));
// 基础标准 - 编码集
registerApplication('localCodingSet', () => import('./modules/localCodingSet/main.js'), _prefixFun('#/localCodingSet'));
// 基础标准 - 同义词
registerApplication('localSynonyms', () => import('./modules/localSynonyms/main.js'), _prefixFun('#/localSynonyms'));
// 基础标准 - 限定词
registerApplication('localQualifiers', () => import('./modules/localQualifiers/main.js'), _prefixFun('#/localQualifiers'));
// =============== 指标标准  ============
// 指标标准 - 指标
registerApplication('localNorm', () => import('./modules/localNorm/main.js'), _prefixFun('#/localNorm'));
// 指标标准 - 维度
registerApplication('localDimension', () => import('./modules/localDimension/main.js'), _prefixFun('#/localDimension'));
// 指标标准 - 度量
registerApplication('localMeasure', () => import('./modules/localMeasure/main.js'), _prefixFun('#/localMeasure'));

// =============== 其他标准  ============
// 其他标准 - 标准文件
registerApplication('localStandardDocument', () => import('./modules/localStandardDocument/main.js'), _prefixFun('#/localStandardDocument'));
// ============= 标准管理 - 本地标准 end ============

// ============= 标准管理 - 国家标准 ============
// 数据元
registerApplication('countryDataElement', () => import('./modules/countryDataElement/main.js'), _prefixFun('#/countryDataElement'));
// 代码集
registerApplication('countryCodeSet', () => import('./modules/countryCodeSet/main.js'), _prefixFun('#/countryCodeSet'));
// 编码集
registerApplication('countryCodingSet', () => import('./modules/countryCodingSet/main.js'), _prefixFun('#/countryCodingSet'));
// ============= 标准管理 - 国家标准 end ============

// ============= 标准管理 - 行业标准 ============
// 数据元
registerApplication('industryDataElement', () => import('./modules/industryDataElement/main.js'), _prefixFun('#/industryDataElement'));
// 代码集
registerApplication('industryCodeSet', () => import('./modules/industryCodeSet/main.js'), _prefixFun('#/industryCodeSet'));
// 编码集
registerApplication('industryCodingSet', () => import('./modules/industryCodingSet/main.js'), _prefixFun('#/industryCodingSet'));
// ============= 标准管理 - 行业标准 end ============

// ============= 标准管理 - 地方标准 ============
// 数据元
registerApplication('placeDataElement', () => import('./modules/placeDataElement/main.js'), _prefixFun('#/placeDataElement'));
// 代码集
registerApplication('placeCodeSet', () => import('./modules/placeCodeSet/main.js'), _prefixFun('#/placeCodeSet'));
// 编码集
registerApplication('placeCodingSet', () => import('./modules/placeCodingSet/main.js'), _prefixFun('#/placeCodingSet'));
// ============= 标准管理 - 地方标准 end ============

// ============= 元数据管理 ============
// 元数据采集
registerApplication('metadataCollection', () => import('./modules/metadataCollection/main.js'), _prefixFun('#/metadataCollection'));
// 元数据维护
registerApplication('metadataMaintenance', () => import('./modules/metadataMaintenance/main.js'), _prefixFun('#/metadataMaintenance'));
// 元数据稽核 -- 稽核设计
registerApplication('auditDesign', () => import('./modules/auditDesign/main.js'), _prefixFun('#/auditDesign'));
// 元数据稽核 -- 稽核结果
registerApplication('auditResults', () => import('./modules/auditResults/main.js'), _prefixFun('#/auditResults'));
// 元数据定版
registerApplication('metadataFinalization', () => import('./modules/metadataFinalization/main.js'), _prefixFun('#/metadataFinalization'));
// 元数据统计
registerApplication('metadataStatistics', () => import('./modules/metadataStatistics/main.js'), _prefixFun('#/metadataStatistics'));
// 元数据分析 -- 元数据地图
registerApplication('metadataMap', () => import('./modules/metadataMap/main.js'), _prefixFun('#/metadataMap'));
// 元数据分析 -- 重要程度分析
registerApplication('metadataAnalysis', () => import('./modules/metadataAnalysis/main.js'), _prefixFun('#/metadataAnalysis'));
// ============= 元数据管理 end ============

// ============= 接入资源 ============
registerApplication('accessResources', () => import('./modules/accessResources/main.js'), _prefixFun('#/accessResources'));
// ============= 接入资源 end ============

// ============= 模型管理 ============
// 中心资源
registerApplication('centerResources', () => import('./modules/centerResources/main.js'), _prefixFun('#/centerResources'));
// 模型设计
registerApplication('modelDesign', () => import('./modules/modelDesign/main.js'), _prefixFun('#/modelDesign'));
// ============= 模型管理 end ============

// ============= 质量管理 ============
// 质量开发
registerApplication('qualityDevelopment', () => import('./modules/qualityDevelopment/main.js'), _prefixFun('#/qualityDevelopment'));
// 质量调度
registerApplication('qualityScheduling', () => import('./modules/qualityScheduling/main.js'), _prefixFun('#/qualityScheduling'));
// 问题明细
registerApplication('qualityDetails', () => import('./modules/qualityDetails/main.js'), _prefixFun('#/qualityDetails'));
// 质量报告
registerApplication('qualityReport', () => import('./modules/qualityReport/main.js'), _prefixFun('#/qualityReport'));
// ============= 质量管理 end ============

// ============= 资产管理 ============
// 生命周期管理
registerApplication('lifeCycleManagement', () => import('./modules/lifeCycleManagement/main.js'), _prefixFun('#/lifeCycleManagement'));
// 主数据维护
registerApplication('masterDataMaintenance', () => import('./modules/masterDataMaintenance/main.js'), _prefixFun('#/masterDataMaintenance'));
// 资产目录
registerApplication('assetCatalog', () => import('./modules/assetCatalog/main.js'), _prefixFun('#/assetCatalog'));
// 数据查询
registerApplication('dataQuery', () => import('./modules/dataQuery/main.js'), _prefixFun('#/dataQuery'));
// 网盘
registerApplication('netdisc', () => import('./modules/netdisc/main.js'), _prefixFun('#/netdisc'));
// ============= 资产管理 end ============

// ============= 代办中心 ============
registerApplication('agencyCenter', () => import('./modules/agencyCenter/main.js'), _prefixFun('#/agencyCenter'));
// ============= 代办中心 end ============

// ============= 服务管理 ============
// 服务发布
registerApplication('serviceRelease', () => import('./modules/serviceRelease/main.js'), _prefixFun('#/serviceRelease'));
// 服务监控
registerApplication('serviceMonitoring', () => import('./modules/serviceMonitoring/main.js'), _prefixFun('#/serviceMonitoring'));
// 黑名单管理
registerApplication('blacklistManagement', () => import('./modules/blacklistManagement/main.js'), _prefixFun('#/blacklistManagement'));
// ============= 服务管理 end ============

// ============= 系统管理 ============
// 元模型
registerApplication('metaModel', () => import('./modules/metaModel/main.js'), _prefixFun('#/metaModel'));
// 数据源配置
registerApplication('dataSourceConfig', () => import('./modules/dataSourceConfig/main.js'), _prefixFun('#/dataSourceConfig'));
// 质量评估模型
registerApplication('qualityAssessmentModel', () => import('./modules/qualityAssessmentModel/main.js'), _prefixFun('#/qualityAssessmentModel'));
// 审核流程配置
registerApplication('auditConfig', () => import('./modules/auditConfig/main.js'), _prefixFun('#/auditConfig'));
// 数据分级分类
registerApplication('dataClassification', () => import('./modules/dataClassification/main.js'), _prefixFun('#/dataClassification'));
// 模块数据权限
registerApplication('moduleDataPermissions', () => import('./modules/moduleDataPermissions/main.js'), _prefixFun('#/moduleDataPermissions'));
// 系统日志
registerApplication('systemLog', () => import('./modules/systemLog/main.js'), _prefixFun('#/systemLog'));
// 码表管理
registerApplication('codeTableManagement', () => import('./modules/codeTableManagement/main.js'), _prefixFun('#/codeTableManagement'));
// ============= 系统管理 end ============

// 启动
start();

// 请求菜单
messageCenterEvents.next({ type: globalStatic.GET_INITDATA, url: '/govern/initData' });
