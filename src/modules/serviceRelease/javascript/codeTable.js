// 资源表头
const resourcesColumnsList = [
    {
        name: '',
        type: 'selection',
        width: 50
    },
    {
        name: '序号',
        type: 'index',
        width: 55
    },
    {
        name: '资源中文名',
        code: 'cMame'
    },
    {
        name: '资源英文名',
        code: 'eMame'
    },
    {
        name: '数据组织',
        code: 'r1'
    },
    {
        name: '用途分类',
        code: 'r1'
    },
    {
        name: '数据项个数',
        code: 'r1'
    },
    {
        name: '有效性状态',
        code: 'r1'
    },
    {
        name: '最新审核状态',
        code: 'r1'
    },
    {
        name: 'ETL任务生成状态',
        code: 'r1'
    },
    {
        name: '操作',
        code: 'operation'
    }
];
// 配置文件表头
const profileColumnsList = [
    {
        name: '序号',
        type: 'index',
        width: 60
    },
    {
        name: '文件名',
        code: 'fileType'
    },
    {
        name: '内容',
        code: 'fileName'
    },
    {
        name: '操作',
        code: 'operation'
    }
];
/**
 * 表格表头数据
 */
export function getTableColumnsFun(type) {
    switch (type) {
        case 'RESOURCES':
            return resourcesColumnsList;
        case 'PROFILE':
            return profileColumnsList;
    }
};
export default {
    getTableColumnsFun
};