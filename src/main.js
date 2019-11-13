import { registerApplication, start } from 'single-spa';
import { createDomFun } from 'javascript@/system/domCreate';
import { list } from './modules.js';
import 'babel-polyfill';
// 引入项目样式表
import './index.less';

// 添加版本号
window.LOGIN_VERSTION = '2019.11.05';

// 根据引入的模块，创建dom
createDomFun(list);

// 创建路由，引入模块。不能对import做for或者变量，webpack会导致所有root文件夹被缓存！！！
registerApplication('messageCenter', () => import('modules@/messageCenter/main.js'), () => true);

registerApplication('login', () => import('./modules/login/main.js'), () => true);

// 启动
start();
