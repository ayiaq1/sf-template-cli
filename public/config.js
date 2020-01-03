/*
 * @moduleName: 系统配置文件
 * @Author: dawdler
 * @Date: 2019-01-15 17:08:28
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-12-26 15:12:14
 */
window.config = {
    // 是否显示 license 过期弹窗
    showLicenseDialog: false,
    // 是否启用研发环境本地菜单
    devMenu: true,
    showSefonLogo: true,
    // 是否显示导航
    showMenu: true,
    // 支持的语言,第一个为默认显示语言
    langs: 'zh_CN,en',
    // websocket地址
    socketURL: 'ws://10.0.8.148/sdi-design/ws',
    superMenu: [{
        tips: '数据地图',
        label: '数据地图',
        url: 'http://www.wydataeye/xx.html',
        class: 'btn',
        icon: 'el-icon-caret-right',
        authorKey: 'MAP'
    }, {
        tips: '消息中心',
        message: 'SHOW_MEG',
        icon: 'el-icon-message-solid',
        authorKey: 'MSG'
    }, {
        tips: 'License',
        message: 'SHOW_CORYRIGHT',
        icon: 'el-icon-info',
        authorKey: 'LICENSE'
    }, {
        class: 'sep'
    }, {
        icon: 'el-icon-s-custom'
    }, {
        tips: '退出',
        // 没有URL,退回到登录,有URL跳转到URL地址
        url: 'http://www.sefoncloud.com',
        icon: 'el-icon-switch-button'
    }]
};
