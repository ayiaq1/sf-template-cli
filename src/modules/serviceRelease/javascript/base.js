// 接口类型
let leftTreeList = [];
// 自定义分类
let leftTreeListC = [];
leftTreeList = [
    {
        label: '所有接口',
        id: '1',
        parentId: '-1',
        count: 400,
        children: [
            {
                label: '数据封装',
                id: '1-1',
                parentId: '1',
                count: 300,
                children: [
                    { label: '表数据封装', id: '1-1-1', count: 100, parentId: '1-1' },
                    { label: '资源封装', id: '1-1-2', count: 200, parentId: '1-1' }
                ]
            },
            { label: '文件封装', id: '1-2', count: 20, parentId: '1' },
            { label: '内部接口封装', id: '1-3', count: 60, parentId: '1' },
            { label: '第三方接口', id: '1-4', count: 20, parentId: '1' }
        ]
    }
];
leftTreeListC = [
    {
        label: '所有接口',
        id: '1',
        count: 400,
        parentId: '-1',
        children: [
            {
                label: '主题分类',
                id: '1-1',
                parentId: '1',
                count: 300,
                children: [
                    { label: 'xxxx主题', id: '1-1-1', count: 100, parentId: '1-1' },
                    { label: 'xxxxxxxx主题', id: '1-1-2', count: 200, parentId: '1-1' }
                ]
            },
            { label: '行内分类', id: '1-2', count: 20, parentId: '1' },
            { label: '资源形态分类', id: '1-3', count: 60, parentId: '1' }
        ]
    }
];

export default {
    // 接口类型
    leftTreeList,
    // 自定义分类
    leftTreeListC
};