// import { i18n$t } from 'javascript@/i18n';

/**
 * 数据源图标
 */
export function getDatabaseIconFun(type) {
    let str = 'sf-icon-source-relation'; // DATABASE
    switch (type) {
        case 'MYSQL':
            str = 'sf-icon-source-mysql';
            break;
        case 'GBASE':
            str = 'sf-icon-source-gbase';
            break;
        case 'GAUSSDB':
            str = 'sf-icon-source-gaussdb';
            break;
        case 'SYBASE':
            str = 'sf-icon-source-sybaseASE';
            break;
        case 'KINGBASE':
            str = 'sf-icon-source-kingBase';
            break;
        case 'GBASE8T':
            str = 'sf-icon-source-gbase8t';
            break;
        case 'KSTORE':
            str = 'sf-icon-source-kStore';
            break;
        case 'ORACLE':
            str = 'sf-icon-source-oracle';
            break;
        case 'MSSQL':
            str = 'sf-icon-source-mssql';
            break;
        case 'DB2':
            str = 'sf-icon-source-db2';
            break;
        case 'DM':
            str = 'sf-icon-source-dm';
            break;
        case 'GREENPLUM':
            str = 'sf-icon-source-greenplum';
            break;
        case 'LIBRA':
            str = 'sf-icon-source-libra';
            break;
        case 'TBASE':
            str = 'sf-icon-source-tbase';
            break;
        case 'POSTGRESQL':
            str = 'sf-icon-source-pg';
            break;
        case 'HDFS':
            str = 'sf-icon-source-hdfs';
            break;
        case 'HIVE':
        case 'INCEPTOR':
            str = 'sf-icon-source-hive';
            break;
        case 'HBASE':
        case 'HYPERBASE':
            str = 'sf-icon-source-hbase';
            break;
        case 'MONGO':
            str = 'sf-icon-source-mongodb';
            break;
        case 'FILE':
            str = 'sf-icon-source-ftp';
            break;
        case 'SHELL_HDFS':
            str = 'sf-icon-source-shell-hdfs';
            break;
        case 'SDC_SHELL':
            str = 'sf-icon-source-sdc-shell';
            break;
        case 'SDC_ETL':
            str = 'sf-icon-source-sdc-etl';
            break;
        case 'HW_DATAIDE':
            str = 'sf-icon-source-process';
            break;
        case 'FTP':
            str = 'sf-icon-source-ftp';
            break;
        default:
            str = 'sf-icon-source-relation';
            break;
    }
    return str;
};
// 数据源类型
const dataSourceList = [
    {
        label: '关系型',
        type: 'DATABASE',
        icon: 'sf-icon-source-relation'
    },
    {
        label: 'MPP',
        type: 'MPP',
        // type: 'DATABASE',
        icon: 'sf-icon-source-mpp'
    },
    {
        label: '大数据',
        type: 'BIGDATA',
        icon: 'sf-icon-source-bigdata'
    },
    {
        label: '文件服务器',
        type: 'FILE',
        icon: 'sf-icon-source-ftp'
    },
    {
        label: '图数据库',
        type: 'GRAPH_DATABASE',
        icon: 'sf-icon-source-relation'
    },
    {
        label: 'Http接口',
        type: 'HTTP',
        icon: 'sf-icon-source-relation'
    },
    {
        label: 'Kafka',
        type: 'KAFKA',
        icon: 'sf-icon-source-relation'
    },
    {
        label: '处理过程',
        type: 'PROCESS',
        icon: 'sf-icon-source-etl'
    }
];
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
    getDatabaseIconFun,
    getTableColumnsFun,
    dataSourceList
};
