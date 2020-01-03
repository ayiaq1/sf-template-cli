/*
 * @moduleName: 引入的资源模块
 * @Author: dawdler
 * @Date: 2019-08-28 10:02:48
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-12-30 19:05:43
 */
const list = [{
    type: 'public',
    label: 'top菜单',
    value: 'topMenu'
}, {
    type: 'public',
    label: 'sub子菜单',
    value: 'subMenu'
}, {
    type: 'public',
    label: '面包屑',
    value: 'breadCrumbs'
}, {
    type: 'public',
    label: 'demo',
    value: 'demo'
}, {
    type: 'public',
    label: 'login',
    value: 'login'
}, {
    type: 'public',
    label: '404',
    value: '404'
}, {
    type: 'private',
    label: '项目公共资源',
    value: 'modules-common'
}, {
    type: 'private',
    label: '工作台',
    value: 'modules-workBench'
}, {
    type: 'private',
    label: '基础标准 - 数据元',
    value: 'modules-localDataElement'
}, {
    type: 'private',
    label: '基础标准 - 代码集',
    value: 'modules-localCodeSet'
}, {
    type: 'private',
    label: '基础标准 - 编码集',
    value: 'modules-localCodingSet'
}, {
    type: 'private',
    label: '基础标准 - 同义词',
    value: 'modules-localSynonyms'
}, {
    type: 'private',
    label: '基础标准 - 限定词',
    value: 'modules-localQualifiers'
}, {
    type: 'private',
    label: '指标标准 - 指标',
    value: 'modules-localNorm'
}, {
    type: 'private',
    label: '指标标准 - 维度',
    value: 'modules-localDimension'
}, {
    type: 'private',
    label: '指标标准 - 度量',
    value: 'modules-localMeasure'
}, {
    type: 'private',
    label: '其他标准 - 标准文件',
    value: 'modules-localStandardDocument'
}, {
    type: 'private',
    label: '国家标准 - 数据元',
    value: 'modules-countryDataElement'
}, {
    type: 'private',
    label: '国家标准 - 代码集',
    value: 'modules-countryCodeSet'
}, {
    type: 'private',
    label: '国家标准 - 编码集',
    value: 'modules-countryCodingSet'
}, {
    type: 'private',
    label: '行业标准 - 数据元',
    value: 'modules-industryDataElement'
}, {
    type: 'private',
    label: '行业标准 - 代码集',
    value: 'modules-industryCodeSet'
}, {
    type: 'private',
    label: '行业标准 - 编码集',
    value: 'modules-industryCodingSet'
}, {
    type: 'private',
    label: '地方标准 - 数据元',
    value: 'modules-placeDataElement'
},
{
    type: 'private',
    label: '地方标准 - 代码集',
    value: 'modules-placeCodeSet'
},
{
    type: 'private',
    label: '地方标准 - 编码集',
    value: 'modules-placeCodingSet'
},
{
    type: 'private',
    label: '元数据管理 - 元数据采集',
    value: 'modules-metadataCollection'
},
{
    type: 'private',
    label: '元数据管理 - 元数据维护',
    value: 'modules-metadataMaintenance'
},
{
    type: 'private',
    label: '元数据管理 - 元数据稽核 -- 稽核设计',
    value: 'modules-auditDesign'
},
{
    type: 'private',
    label: '元数据管理 - 元数据稽核 -- 稽核结果',
    value: 'modules-auditResults'
},
{
    type: 'private',
    label: '元数据管理 - 元数据定版',
    value: 'modules-metadataFinalization'
},
{
    type: 'private',
    label: '元数据管理 - 元数据统计',
    value: 'modules-metadataStatistics'
},
{
    type: 'private',
    label: '元数据管理 - 元数据分析 -- 元数据地图',
    value: 'modules-metadataMap'
},
{
    type: 'private',
    label: '元数据管理 - 元数据分析 -- 重要程度分析',
    value: 'modules-metadataAnalysis'
},
{
    type: 'private',
    label: '接入资源',
    value: 'modules-accessResources'
},
{
    type: 'private',
    label: '模型管理 - 中心资源',
    value: 'modules-centerResources'
},
{
    type: 'private',
    label: '模型管理 - 模型设计',
    value: 'modules-modelDesign'
},
{
    type: 'private',
    label: '质量管理 - 质量开发',
    value: 'modules-qualityDevelopment'
},
{
    type: 'private',
    label: '质量管理 - 质量调度',
    value: 'modules-qualityScheduling'
},
{
    type: 'private',
    label: '质量管理 - 问题明细',
    value: 'modules-qualityDetails'
},
{
    type: 'private',
    label: '质量管理 - 质量报告',
    value: 'modules-qualityReport'
},
{
    type: 'private',
    label: '资产管理 - 生命周期管理',
    value: 'modules-lifeCycleManagement'
},
{
    type: 'private',
    label: '资产管理 - 主数据维护',
    value: 'modules-masterDataMaintenance'
},
{
    type: 'private',
    label: '资产管理 - 资产目录',
    value: 'modules-assetCatalog'
},
{
    type: 'private',
    label: '资产管理 - 数据查询',
    value: 'modules-dataQuery'
},
{
    type: 'private',
    label: '资产管理 - 网盘',
    value: 'modules-netdisc'
},
{
    type: 'private',
    label: '资产管理 - 网盘',
    value: 'modules-netdisc'
},
{
    type: 'private',
    label: '代办中心',
    value: 'modules-agencyCenter'
},
{
    type: 'private',
    label: '服务管理 - 服务发布',
    value: 'modules-serviceRelease'
},
{
    type: 'private',
    label: '服务管理 - 服务监控',
    value: 'modules-serviceMonitoring'
},
{
    type: 'private',
    label: '服务管理 - 黑名单管理',
    value: 'modules-blacklistManagement'
},
{
    type: 'private',
    label: '系统管理 - 元模型',
    value: 'modules-metaModel'
},
{
    type: 'private',
    label: '系统管理 - 数据源配置',
    value: 'modules-dataSourceConfig'
},
{
    type: 'private',
    label: '系统管理 - 质量评估模型',
    value: 'modules-qualityAssessmentModel'
},
{
    type: 'private',
    label: '系统管理 - 审核流程配置',
    value: 'modules-auditConfig'
},
{
    type: 'private',
    label: '系统管理 - 数据分级分类',
    value: 'modules-dataClassification'
},
{
    type: 'private',
    label: '系统管理 - 模块数据权限',
    value: 'modules-moduleDataPermissions'
},
{
    type: 'private',
    label: '系统管理 - 系统日志',
    value: 'modules-systemLog'
},
{
    type: 'private',
    label: '系统管理 - 码表管理',
    value: 'modules-codeTableManagement'
}
];
module.exports = {
    list
};
