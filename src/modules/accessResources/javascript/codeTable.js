/*
 * @Module: 接入资源码表
 * @Author: zhouyu
 * @Date: 2020-01-02 20:38:51
 * @Last Modified by: zhouyu
 * @Last Modified time: 2020-01-02 20:52:54
 */

'use strict';
import { i18n$t } from 'javascript@/i18n';

export const resourceTable = [{
    type: 'selection',
    minWidth: 55
}, {
    // 序号
    label: i18n$t('accessResources.serial'),
    width: 60,
    value: 'name',
    showOverflowTooltip: true,
    disabled: true
}, {
    // 资源名称
    label: i18n$t('accessResources.resourceList.table.resourceName'),
    minWidth: 100,
    value: 'statusDesc',
    showOverflowTooltip: true,
    disabled: true
}, {
    // 资源分类
    label: i18n$t('accessResources.resourceList.table.resourceClassification'),
    minWidth: 100,
    value: 'scheduleType',
    showOverflowTooltip: true
}, {
    // 数据项个数
    label: i18n$t('accessResources.resourceList.table.itemNumber'),
    minWidth: 100,
    value: 'typeDesc',
    showOverflowTooltip: true
}, {
    // 有效性状态
    label: i18n$t('accessResources.resourceList.table.effectiveState'),
    minWidth: 100,
    value: 'createUserName',
    showOverflowTooltip: true
}, {
    // 最新审核状态
    label: i18n$t('accessResources.resourceList.table.auditStatus'),
    minWidth: 150,
    value: 'createTime',
    showOverflowTooltip: true
}, {
    label: i18n$t('operation'),
    width: 160,
    fixed: 'right',
    value: 'opt'
}];
export default {
    resourceTable
};
