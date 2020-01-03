/*
 * @moduleName:
 * @Author: dawdler
 * @Date: 2019-01-21 09:49:52
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-07-21 23:15:03
 */
/**
 * @Author      weiberZeng
 * @DateTime    2017-06-21
 * @lastTime    2017-06-021
 * @description 通用工具类
 */

export default {
    starReplaceEndFun,
    cutStrFun,
    cutStrNewFun,
    hexToRgb,
    compare,
    dateFormatter,
    download,
    trim,
    getRandomNumber,
    getTreeData,
    getPathIds,
    getFormatSize,
    initTableList,
    getDelAfterPageIndex,
    skipRefresh,
    every,
    each,
    getFlowIds,
    isStrInArrField,
    cloneFun,
    splitFormatFun,
    setTreeDataDisable,
    // 类型判断
    isFunction,
    isObject,
    isArray,
    isPlainObject,
    isEmptyObj,
    // cron 相关
    cronSplitFun,
    cronToArrFun,
    arrToCronFun,
    cronToDate,
    dataToCron,
    cronToText,
    arrToCronTextFun,
    cronNumTranWeek,
    cronWeekTranNum,
    Base64,
    // 数组去重
    distinctArray,
    // 阻止冒泡
    preventDefault,
    autoFont,
    // 获取中英文组合名称
    getNameFun
};
// 批量替换名称的公共方法
export function starReplaceEndFun({ startIndex, endIndex, srcStr, distStr, name }) {
    let title;
    if (name.length < endIndex) {
        title = name.substring(startIndex - 1, name.length);
        return name.substring(0, startIndex - 1) + title.replace(new RegExp(srcStr, 'g'), distStr);
    } else {
        title = name.substring(startIndex - 1, endIndex);
        return name.substring(0, startIndex - 1) + title.replace(new RegExp(srcStr, 'g'), distStr) + name.substring(endIndex, name.length);
    }
};
/**
 * 文字自动大小
 * @param {*} maxW  最大宽度
 * @param {*} str   内容
 * @param {*} maxSize 最大字体
 */
export function autoFont(maxW, str = '', maxSize = 30) {
    if (str === '') {
        return null;
    }
    let size = 12;
    // 如果有中文，转化为2个英文串
    let len = str.toString().replace(/[\u0391-\uFFE5]/g, 'aa').length;
    // 一个字节宽度=size/2+1
    // str总宽度=一个字节宽度*len
    let fw = (size / 2 + 1) * len;
    // 判断每个字节宽度*总长度是否大于宽度
    if (fw < maxW) {
        // 小于宽度，字号放大
        for (let i = 0; i < 100; i++) {
            size++;
            if (size >= maxSize) {
                size = maxSize;
                break;
            }
            fw = (size / 2 + 1) * len;
            if (fw >= maxW) {
                break;
            }
        }
    } else if (fw > maxW) {
        // 大于宽度，字号缩小
        for (let i = 100; i > 0; i--) {
            size--;
            fw = (size / 2 + 1) * len;
            if (fw <= maxW) {
                break;
            }
        }
    }
    return {
        fontSize: size - 1 + 'px',
        maxWidth: maxW + 'px',
        display: 'inline-block',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    };
}
// 阻止冒泡
export function preventDefault(e) {
    if (e) {
        e.stopPropagation(); // 阻止事件冒泡
        e.preventDefault(); // 阻止原生样式
    }
}
/**
 * @Author      weiberZeng
 * @DateTime    2017-05-31
 * @lastTime    2017-05-31
 * @description 对数字进行隔三位加逗号(保留小数位)
 */
export function splitFormatFun(val) {
    const str = val + '';
    return str.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}
/**
 * [setArr description]  2个一维数组对象去重
 * @param {[type]} arr   [description] 比对的数组1
 * @param {[type]} nodes [description] 比对的数组2
 * @param {[type]} id    [description] 要比对的id
 */
export function setArr(arr, nodes, id) {
    return arr.filter(item => {
        return nodes.every(list => {
            return list[id] !== item[id];
        });
    });
}
/** 多层级节点的循环处理
 * 同数组的every一样，返回true继续循环，false终止循环
 every({ data: arr, childName = 'children' }, (item, children) => {
    if (item.id === 9) {
        return false;
    } else {
        let obj = {
            id: item.id,
            text: item.text
        };
        arr.push(obj);
        return true;
    }
});
 * @param {*} { data:Array, childName: 子集名称 默认：children}
 * @param {*} callback:Function 回调方法
 */
export function every({ data = [], childName = 'children' }, callback) {
    let testResult = true;
    let current;
    let children;

    function loop(arr = [], thisArg) {
        // 参考Array.prototye.every
        // 如果为 loop 提供一个 thisArg 参数，则该参数为调用 callback 时的 this 值。
        // 如果省略该参数，则 callback 被调用时的 this 值
        // 在非严格模式下为全局对象，在严格模式下传入 undefined。
        let T;
        if (arguments.length > 1) {
            T = thisArg;
        }
        for (let i = 0, len = arr.length; i < len; i++) {
            if (!testResult) {
                // 需要放到这里，避免嵌套循环
                return false;
            }
            current = arr[i];
            children = [];
            testResult = callback.call(T, current, children, i);
            if (!testResult) {
                return false;
            }
            if (current[childName] && current[childName].length > 0) {
                children = current[childName];
            }
            if (children.length > 0) {
                loop(children);
            }
        }
        return true;
    }
    loop(data);
}
/*
each(arr, (item, children) => {
    item.value = xx;
    // 该item 包含children，因此直接赋值,不需要单独处理children里面的值
});
 * [_each description]  倒查、展平、数据回调返回回当前一条数据和子集
 * @param  {[Array]}   data     [description]
 * @param  {Function}  callback [description]
 * @param  {String}    childName[description]
 * @return {[Array]}            [description]
 * 默认使用副本,在callback处理数据，如果不使用副本，那么需要重新对treeData赋值
    treeData = each(treeData, (item, children) => {
        item.value = xx;
    });
 */
export function each(data, callback, childName = 'children') {
    let current;
    let children;
    for (let i = 0, len = data.length; i < len; i++) {
        current = data[i];
        children = [];
        if (current[childName] && current[childName].length > 0) {
            children = current[childName];
        }
        callback && callback(current, children, i);
        if (children.length > 0) {
            each(children, callback, childName);
        }
    }
}

/**
 * @author weiberZeng
 * @param {string} str 原字符串
 * @param {int} length 展示的最大长度
 * @returns {string} 返回处理后的字符串
 * @description 原来版本 截取前(length)位 后用...展示
 */
export function cutStrFun(str, length) {
    length = length - 1;
    if (!str && str + '' !== '0') return '';
    // let chineseRegex = /[^\x00-\xff]/g;
    let chineseRegex = /[\u4e00-\u9fa5]/g;
    let len = str.replace(chineseRegex, '**').length;
    let newlen = 0;
    let returnStr = '';

    for (let i = 0; i < len; i++) {
        let a = str.charAt(i);
        returnStr += a;
        // if (a.match(/[^\x00-\xff]/ig) != null) {
        if (a.match(/[\u4e00-\u9fa5]/gi) != null) {
            newlen += 2;
        } else {
            newlen += 1;
        }
        if (newlen >= length) break;
    }
    if (len > length) {
        returnStr += '...';
    }
    return returnStr;
}
/**
 * @author zhouyu
 * @param {string} str 原字符串
 * @param {int} length 展示的最大长度
 * @returns {string} 返回处理后的字符串
 * @description 原来版本 截取(length-1)位 后用...展示
 * @description 修改为 截取前(length)位 后用...展示
 */
export function cutStrNewFun(str, length) {
    if (!str && str + '' !== '0') return '';
    // let chineseRegex = /[^\x00-\xff]/g;
    let chineseRegex = /[\u4e00-\u9fa5]/g;
    let len = str.replace(chineseRegex, '**').length;
    let newlen = 0;
    let returnStr = '';

    for (let i = 0; i < len; i++) {
        let a = str.charAt(i);
        returnStr += a;
        // if (a.match(/[^\x00-\xff]/ig) != null) {
        if (a.match(/[\u4e00-\u9fa5]/gi) != null) {
            newlen += 2;
        } else {
            newlen += 1;
        }
        if (newlen >= length) break;
    }
    if (len > length) {
        returnStr += '...';
    }
    return returnStr;
}

/**
 * @Author      weiberZeng
 * @DateTime    2017-06-07
 * @lastTime    2017-06-07
 * @description hex 颜色值转换为 rgba值
 * @param       {string}   hex     eg: #000000
 * @param       {int}      opacity eg: 0.8
 * @return      {string}   rgba(0,0,0,0.8)
 */
export function hexToRgb(hex, opacity) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? 'rgba(' +
        parseInt(result[1], 16) +
        ',' +
        parseInt(result[2], 16) +
        ',' +
        parseInt(result[3], 16) +
        ',' +
        opacity +
        ')'
        : 'rgba(0,0,0,0)';
}

// 对数字里面的对象某个属性做排序 data.sort(J.compare('size'))//按照size做排序
export function compare(prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
            val1 = Number(val1);
            val2 = Number(val2);
        }
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    };
}

/**
 * @Author      weiberZeng
 * @DateTime    2018-09-21
 * @lastTime    2018-09-21
 * @description 毫秒，格式化
 */
export function dateFormatter(date, format) {
    if (date) {
        let str = format || 'yyyy-MM-dd hh:mm:ss';
        try {
            let d = new Date(date);
            let o = {
                'M+': d.getMonth() + 1,
                'd+': d.getDate(),
                'h+': d.getHours(),
                'm+': d.getMinutes(),
                's+': d.getSeconds(),
                'q+': Math.floor((d.getMonth() + 3) / 3),
                S: d.getMilliseconds()
            };
            if (/(y+)/.test(str)) {
                str = str.replace(
                    RegExp.$1,
                    (d.getFullYear() + '').substr(4 - RegExp.$1.length)
                );
            }
            for (let k in o) {
                if (new RegExp('(' + k + ')').test(str)) {
                    str = str.replace(
                        RegExp.$1,
                        RegExp.$1.length === 1
                            ? o[k]
                            : ('00' + o[k]).substr(('' + o[k]).length)
                    );
                }
            }
            return str;
        } catch (e) {
            return '---';
        }
    } else {
        return '---';
    }
}

/**
 * @Author      DangChaofeng
 * @DateTime    2017-07-15
 * @lastTime    2017-07-15
 * @description 根据uri,params下载对应模板
 * @param       {string}   uri
 * @param       {object}   参数对象
 */
export function download(api, params) {
    let doc = window.document;
    let form = doc.createDocumentFragment();
    let div = doc.createElement('div');
    let str = '';
    let key;
    for (key in params) {
        if (isArray(params[key]) && params[key].length > 0) {
            let tmp = '';
            for (let j = 0, length2 = params[key].length; j < length2; j++) {
                tmp = tmp + (j === 0 ? '' : ',') + "'" + params[key][j] + "'";
            }
            params[key] = '[' + tmp + ']';
        }
        str +=
            '<input type="hidden" name="' +
            key +
            '" value="' +
            params[key] +
            '" />';
    }

    if (api.indexOf('http') >= 0) {
        div.innerHTML =
            '<form id="downLoad" target="_blank" method="post" action="' +
            api +
            '" name="downLoad">' +
            str +
            '</form>';
    } else {
        div.innerHTML =
            '<form id="downLoad" target="_blank" method="post" action="' +
            api +
            '" name="downLoad">' +
            str +
            '</form>';
    }

    form.appendChild(div);
    doc.body.appendChild(form);
    let downLoadForm = doc.getElementById('downLoad');
    downLoadForm.submit();
    doc.body.removeChild(div);
}

/**
 * @Author      SuLiang
 * @DateTime    2017-08-11
 * @lastTime    2017-08-11
 * @description 去除空格
 * @param       {[type]}      str       [description]
 * @param       {Boolean}     isGlobal 去除中间空格
 * @return      {[type]}                [description]
 */
export function trim(str, isGlobal) {
    if (typeof str === 'undefined' || str.length === 0) return '';
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, '');
    if (isGlobal) {
        result = result.replace(/\s/g, '');
    }
    return result;
}

/**
 * @Author      weiberZeng
 * @DateTime    2018-09-21
 * @lastTime    2018-09-21
 * @description 随机uuid
 */
export function getRandomNumber() {
    // Private array of chars to use
    let CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
        ''
    );
    return {
        uuid: function (len, rad) {
            let chars = CHARS;
            let uuid = [];
            let radix = rad || chars.length;
            let i;
            let r;
            if (len) {
                // Compact form
                for (i = 0; i < len; i++) {
                    uuid[i] = chars[0 | (Math.random() * radix)];
                }
            } else {
                // rfc4122, version 4 form\
                // rfc4122 requires these characters
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';
                // Fill in random data.  At i===19 set the high bits of clock sequence as
                // per rfc4122, sec. 4.1.5
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | (Math.random() * 16);
                        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
                    }
                }
            }
            return uuid.join('');
        },
        // A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance by minimizing calls to random()
        uuidFast: function () {
            let chars = CHARS;
            let uuid = new Array(36);
            let rnd = 0;
            let r;
            let i;
            for (i = 0; i < 36; i++) {
                if (i === 8 || i === 13 || i === 18 || i === 23) {
                    uuid[i] = '-';
                } else if (i === 14) {
                    uuid[i] = '4';
                } else {
                    if (rnd <= 0x02) {
                        rnd = (0x2000000 + Math.random() * 0x1000000) | 0;
                    }
                    r = rnd & 0xf;
                    rnd = rnd >> 4;
                    uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
                }
            }
            return uuid.join('');
        },
        // 返回不带横线的UUID
        uuidString: function () {
            let str = this.uuidFast().replace(new RegExp('-', 'g'), '');
            return str;
        },
        // A more compact, but less performant, RFC4122v4 solution:
        uuidCompact: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                /[xy]/g,
                function (c) {
                    let r = (Math.random() * 16) | 0;
                    let v = c === 'x' ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
                }
            );
        }
    };
}
/**
 * @Author yihuang",
 * @param data     数据
 * @param id       要比对的名称
 * @param val      要比对的值
 * @param name     要返回的名称
 * @param children 子集名称
 * @param isRow    是否返回这一行的数据
 * @注 迭代判断多层
 * //=======================
 * 返回这一条数据的中文名
 * let name=utils.getTreeData(arr, 'flowId', item.decategoryId, 'name');
 * //=======================
 * 返回所有匹配的数据
 * let arr=utils.getTreeData(arr, 'flowId', item.decategoryId, 'name','children',true);
 */
export function getTreeData(
    data,
    id = 'id',
    val = '',
    name = 'name',
    children = 'children',
    isRow = false
) {
    let arr = [];
    each(
        data,
        item => {
            if (item[id] === val) {
                arr.push(item);
            }
        },
        children
    );
    return arr.length > 0 ? (isRow ? arr : arr[0][name]) : null;
}
/**
 * 返回级联的id路径,通过最后一层的id，拿到整个级联的id集合(这里我觉得应该让后台存多个id0,id1字符串)我们不用再处理回显
 * [getPathIds description]
 * @param  {[type]} arr    数组列表
 * @param  {[type]} flowId 最后一个id
 * @return {[type]}        返回级联的id路径
 */
export function getPathIds(
    arr,
    flowId,
    idKey = 'flowId',
    parentIdKey = 'parentId'
) {
    if (arr.length === 0 || flowId === '') return [];
    let ids = [flowId];
    let newArr = [];
    let parentId = '';
    each(arr, item => {
        // 拿到最顶层的flowId
        if (parentId === '' && item[idKey] === flowId) {
            parentId = item[parentIdKey];
        }
        // 展平数据
        newArr.push(item);
    });
    const loop = function (id) {
        newArr.forEach(item => {
            if (item[idKey] === id) {
                ids.unshift(item[idKey]); // 保证添加顺序路径
                loop(item[parentIdKey]); // 用parentId查找上一级id
            }
        });
    };
    loop(parentId);
    return ids;
}

/**
 * @Author      LJW
 * @DateTime    2017-07-13
 * @lastTime    2017-07-13
 * @description KB单位换算
 * @param       {sum}   原始大小
 * @return      {result}   返回处理后的大小
 */
export function getFormatSize(sum) {
    var kb = sum / 1024;
    var result = null;
    if (kb / 1024 < 1 || kb === 0) {
        result = Math.ceil(kb) + 'KB';
    } else if (kb / 1024 > 1) {
        result = Math.ceil(kb / 1024) + 'MB';
    } else if (kb / 1024 > 1024) {
        result = Math.ceil(kb / 1024 / 1024) + 'GB';
    }
    return result;
}

/**
 * @Author      DangChaofeng
 * @DateTime    2017-08-31
 * @lastTime    2017-08-31
 * @description 将数组遍历一遍，判断每个对象是否有show这个标识符，如果有跳过，没有的话增加标识符，将新对象返回
 * @param       {array}   需要初始化增加标识符的表格数组
 */
export function initTableList(arr, self, show = 'show', status = false) {
    if (arr[0] instanceof Array) {
        let newArr = [];
        arr.forEach(cur => {
            cur.forEach(item => {
                if (!item.hasOwnProperty(show) || item[show]) {
                    self.$set(item, show, status);
                    self.$set(item, show, status);
                }
            });
            newArr.push(cur);
        });
        return newArr;
    } else {
        arr.forEach(item => {
            if (!item.hasOwnProperty(show) || item[show]) {
                self.$set(item, show, status);
                self.$set(item, show, status);
            }
        });
        return arr;
    }
}

/**
 * @Author      DangChaofeng
 * @DateTime    2017-12-25
 * @description description    当前选中的数据量=当前页全部的数据量时，返回前一页的页码
 * @param       {[Number]}     currentPageSum  [当前页总数]
 * @param       {[Number]}     selectNum   [选中要删除的数量]
 * @param       {[Number]}     pageIndex [当前页码]
 * @return      {[type]}
 */
export function getDelAfterPageIndex(currentPageSum, selectNum, pageIndex) {
    if (
        typeof currentPageSum !== 'number' ||
        typeof selectNum !== 'number' ||
        typeof pageIndex !== 'number'
    ) {
        // throw new Error('getDelAfterPageIndex 方法参数 必须为number类型！');
        return 1;
    }
    currentPageSum === selectNum && pageIndex--;
    return pageIndex;
}

/**
 * @Author      SuLiang
 * @DateTime    2018-01-08
 * @lastTime    2018-01-08
 * @description [description] 本地翻页
 * @param       {[skip]}      skip      skip [是一个对象：{type:'current'}-> 当前页跳转； {type:'cut', selectLen: 1}-> 类似删除等操作；undefined -> 跳转第一页]
 * @param       {[type]}      page      page: { index(当前页码): 1, rows: 10, total: 0} 必须是这三个参数
 * @param       {[length]}    tableData  表格长度
 * @return      {[page]}      page
 */
export function skipRefresh(skip, page, tableData) {
    let type = (skip && skip.type) || '';
    switch (type) {
        case 'current':
            break;
        case 'cut':
            page.total = 0;
            page.index = getDelAfterPageIndex(
                tableData.length,
                skip.selectLen || 1,
                page.index
            );
            break;
        default:
            page.total = 0;
            page.index = 1;
            break;
    }
    return page;
}

/**
 * 批量操作获取id
 * @Author      Hankill
 * @DateTime    2018-01-16
 * @description description
 * @param       {[type]}    selections [来自表格函数handle处理的数组]
 * @param       {[type]}    self       [this对象]
 * @param       {[type]}    sign       [id隔开标志，不传默认返回简单数组]
 * @return      {[type]}
 */
export function getFlowIds(selections, self, sign) {
    var arr = [];
    if (!selections || selections.length === 0) {
        self.$message({
            message: self.i18n.message.CHECK_TIP,
            type: 'warning'
        });
        return false;
    }
    selections.map(function (item) {
        arr.push(item.flowId);
    });
    if (sign) {
        return arr.join(sign);
    } else {
        return arr;
    }
}

/*
 * @Author: hewuchang
 * @Date:   2018-09-26 16:36:00
 * @param   {String} str 要检查的字符串
 * @param   {Array}  arr 被比较对象数组
 * @param   {String} field 参与比较的对象属性
 * @Description 字符串是否存在于数组中某个字段
 */
export function isStrInArrField(str, arr = [], field) {
    for (let i = 0, len = arr.length; i < len; i++) {
        const compareObj = arr[i];
        if (str === compareObj[field]) {
            return true;
        }
    }
    return false;
}

/**
 * @Author      D.chaofeng
 * @DateTime    2018-10-24
 * @description [深度copy返回新对象]
 * @param       {[type]}      obj [原始对象]
 */
export function cloneFun(obj) {
    let o = isArray(obj) ? [] : {};
    for (let k in obj) {
        o[k] = isObject(obj[k]) ? cloneFun(obj[k]) : obj[k];
    }
    return o;
}

export function cronNumTranWeek(cronstr) {
    let tobj = {
        '1': 'MON',
        '2': 'TUE',
        '3': 'WED',
        '4': 'THU',
        '5': 'FRI',
        '6': 'SAT',
        '7': 'SUN'
    };
    let _cronArr = cronstr.split(' ');

    for (let i = _cronArr.length - 1; i >= 0; i--) {
        if (_cronArr[i] !== '*' && _cronArr[i] !== '?') {
            switch (i) {
                case 5:
                    let weekArr = cronSplitFun(_cronArr[i]);
                    let tmp = [];
                    for (let j = 0; j < weekArr.length; j++) {
                        tmp[j] = tobj[weekArr[j]]
                            ? tobj[weekArr[j]]
                            : weekArr[j];
                    }
                    _cronArr[i] = tmp.join(',');
                    break;
                default:
                    break;
            }
            // 跳出循环
            break;
        }
    }
    return _cronArr.join(' ');
}

export function cronWeekTranNum(cronstr) {
    let tobj = {
        MON: '1',
        TUE: '2',
        WED: '3',
        THU: '4',
        FRI: '5',
        SAT: '6',
        SUN: '7'
    };
    let _cronArr = cronstr.split(' ');

    for (let i = _cronArr.length - 1; i >= 0; i--) {
        if (_cronArr[i] !== '*' && _cronArr[i] !== '?') {
            switch (i) {
                case 5:
                    let weekArr = _cronArr[i].split(',');
                    let tmp = [];
                    for (let j = 0; j < weekArr.length; j++) {
                        tmp[j] = tobj[weekArr[j]];
                        tmp[j] = tobj[weekArr[j]]
                            ? tobj[weekArr[j]]
                            : weekArr[j];
                    }
                    _cronArr[i] = tmp.join(',');
                    break;
                default:
                    break;
            }
            // 跳出循环
            break;
        }
    }
    return _cronArr.join(' ');
}

/**
 * @Author      weiberZeng
 * @DateTime    2017-05-31
 * @lastTime    2017-05-31
 * @description cron表达式转化为数组
 */
export function cronToArrFun(cronstr, period) {
    let _cronArr = cronstr.split(' ');
    let returnObj = {
        sec: [],
        min: [],
        hour: [],
        day: [],
        month: [],
        week: [],
        year: [],
        type: ''
    };
    // 1.        Seconds
    // 2.        Minutes
    // 3.        Hours
    // 4.        Day
    // 5.        Month
    // 6.       Week
    // 7.        Year
    // 从末尾开始倒查第一个有值得字段来判断调度周期
    for (let i = _cronArr.length - 1; i >= 0; i--) {
        if (_cronArr[i] !== '*' && _cronArr[i] !== '?') {
            switch (i) {
                case 7:
                case 6:
                    break;
                case 5:
                    returnObj.type = 'WEEK';
                    break;
                case 4:
                    returnObj.type = 'YEAR';
                    break;
                case 3:
                    returnObj.type = 'MONTH';
                    break;
                case 2:
                    returnObj.type = 'DAY';
                    break;
                case 1:
                    returnObj.type = 'HOUR';
                    break;
                default:
                    returnObj.type = period || 'HOUR';
                    break;
            }
            // 跳出循环
            break;
        }
    }

    // 解析 cron表达式为数组
    for (let i = _cronArr.length - 1; i >= 0; i--) {
        if (_cronArr[i] !== '*' && _cronArr[i] !== '?') {
            switch (i) {
                case 6:
                    returnObj.year = cronSplitFun(_cronArr[i]);
                    break;
                case 5:
                    returnObj.week = cronSplitFun(_cronArr[i]);
                    break;
                case 4:
                    returnObj.month = cronSplitFun(_cronArr[i]);
                    break;
                case 3:
                    returnObj.day = cronSplitFun(_cronArr[i]);
                    break;
                case 2:
                    returnObj.hour = cronSplitFun(_cronArr[i]);
                    break;
                case 1:
                    returnObj.min = cronSplitFun(_cronArr[i]);
                    break;
                case 0:
                    returnObj.sec = cronSplitFun(_cronArr[i]);
                    break;
            }
        }
    }
    return returnObj;
}

/**
 * @Author      weiberZeng
 * @DateTime    2017-05-31
 * @lastTime    2017-05-31
 * @description 对象数组转换成 cron 表达式
 */
export function arrToCronFun(obj) {
    // 根据对象数组构造默认表达式
    let year = obj.year.length > 0 ? obj.year.join(',') : '?';
    let week = obj.week.length > 0 ? obj.week.join(',') : '?';
    let month = obj.month.length > 0 ? obj.month.join(',') : '*';
    let day = obj.day.length > 0 ? obj.day.join(',') : '*';
    let hour = obj.hour.length > 0 ? obj.hour.join(',') : '*';
    let min = obj.min.length > 0 ? obj.min.join(',') : '*';
    let sec = obj.sec.length > 0 ? obj.sec.join(',') : '00';
    let defaultCron = [sec, min, hour, day, month, week, year];
    // 根据cron表达式调度周期生成表达式数组
    switch (obj.type) {
        case 'WEEK':
            defaultCron[5] = '*';
            defaultCron[4] = '*';
            defaultCron[3] = '?';
            break;
        case 'YEAR':
            defaultCron[5] = '?';
            break;
        case 'MONTH':
            defaultCron[5] = '?';
            defaultCron[4] = '*';
            break;
        case 'DAY':
            defaultCron[5] = '?';
            defaultCron[4] = '*';
            defaultCron[3] = '*';
            break;
        case 'HOUR':
            defaultCron[5] = '?';
            defaultCron[4] = '*';
            defaultCron[3] = '*';
            defaultCron[2] = '*';
            break;
        default:
            defaultCron[5] = '?';
            defaultCron[4] = '*';
            defaultCron[3] = '*';
            defaultCron[2] = '*';
            defaultCron[1] = '*';
            break;
    }
    // 返回 cron表达式
    return defaultCron.join(' ');
}

/**
 * @Author      weiberZeng
 * @DateTime    2018-09-21
 * @lastTime    2018-09-21
 * @description cron表达式转时间
 * @param       cron 格式：16 55 16 05 01 ? 2018
 */
export function cronToDate(cron) {
    if (cron) {
        let obj = cronToArrFun(cron);
        let _year = obj.year;
        let _month =
            obj.month.toString().length > 1 ? obj.month : '0' + obj.month;
        let _day = obj.day.toString().length > 1 ? obj.day : '0' + obj.day;
        let _hour = obj.hour.toString().length > 1 ? obj.hour : '0' + obj.hour;
        let _min = obj.min.toString().length > 1 ? obj.min : '0' + obj.min;
        let _sec = obj.sec.toString().length > 1 ? obj.sec : '0' + obj.sec;
        return (
            _year +
            '-' +
            _month +
            '-' +
            _day +
            ' ' +
            _hour +
            ':' +
            _min +
            ':' +
            _sec
        );
    } else {
        return cron;
    }
}

/**
 * @Author      weiberZeng
 * @DateTime    2018-09-21
 * @lastTime    2018-09-21
 * @description 时间转cron表达式
 * @param       date 格式：2018-01-05 16:55:16
 * 修改: 如果代码传入空或者其他非选择输入直接返回空, add by hwc 2018/11/29
 */
export function dataToCron(date) {
    if (!!date === false) {
        return '';
    }
    let time = date.split(' ');
    let a = time[0].split('-');
    let b = time[1].split(':');
    let cronObj = {
        type: 'YEAR',
        year: [a[0]],
        month: [a[1]],
        day: [a[2]],
        hour: [b[0]],
        min: [b[1]],
        sec: [b[2]],
        week: []
    };
    return arrToCronFun(cronObj);
}

/**
 * @Author      weiberZeng
 * @DateTime    2018-09-21
 * @lastTime    2018-09-21
 * @description cron 转为可理解的文案
 */
export function cronToText(cron) {
    let str = '';
    if (cron) {
        let arr = cronToArrFun(cron);
        if (arr.type) {
            switch (arr.type) {
                case 'YEAR':
                    str += '每年';
                    break;
                case 'MONTH':
                    str += '每月';
                    break;
                case 'DAY':
                    str += '每天';
                    break;
                case 'WEEK':
                    str += '每周';
                    if (arr.week.length > 0) {
                        str = str + ' ' + arrToWeekFun(arr.week) + ' 的';
                    }
                    break;
                case 'HOUR':
                    str += '每小时';
                    break;
            }
        }
        if (arr.month.length > 0) {
            str = str + ' ' + arrToCronTextFun(arr.month) + '月';
        } else if (arr.type === 'YEAR') {
            str += ' 每月';
        }
        if (arr.day.length > 0) {
            str = str + ' ' + arrToCronTextFun(arr.day) + '日';
        } else if (arr.type === 'YEAR' || arr.type === 'MONTH') {
            str += ' 每天';
        }
        if (arr.hour.length > 0) {
            str = str + ' ' + arrToCronTextFun(arr.hour) + '时';
        } else if (arr.type === 'YEAR' || arr.type === 'MONTH' || arr.type === 'DAY' || arr.type === '每周') {
            str += ' 每小时';
        }
        if (arr.min.length > 0) {
            str = str + ' ' + arrToCronTextFun(arr.min) + '分';
        } else {
            str += ' 每分钟';
        }
    }
    return str;
}

export function arrToWeekFun(arr) {
    let obj = {
        MON: '1',
        TUE: '2',
        WED: '3',
        THU: '4',
        FRI: '5',
        SAT: '6',
        SUN: '7'
    };
    let tmp = [];
    for (let i = 0; i < arr.length; i++) {
        tmp.push(obj[arr[i]]);
    }
    return tmp.join('、');
}

export function arrToCronTextFun(arr) {
    if (arr && arr.length < 1) return '';
    let str = '';

    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    // 对数组进行排序
    let bubbleSort = function (tmparr) {
        let len = tmparr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (tmparr[j] > tmparr[j + 1]) {
                    let temp = tmparr[j + 1];
                    tmparr[j + 1] = tmparr[j];
                    tmparr[j] = temp;
                }
            }
        }
        return tmparr;
    };
    arr = bubbleSort(arr);

    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            if (arr[i + 1] - arr[i] === 1 && !flag) {
                str += arr[i];
                str += '-';
                flag = true;
            }
            if (arr[i + 1] - arr[i] === 1 && flag) {
                continue;
            }
            if (arr[i + 1] - arr[i] > 1 && !flag) {
                str += arr[i];
                str += ',';
            }
            if (arr[i + 1] - arr[i] > 1 && flag) {
                str += arr[i];
                str += ',';
                flag = false;
            }
        } else {
            str += arr[i];
        }
    }
    return str;
}

/**
 * @Author      weiberZeng
 * @DateTime    2017-05-31
 * @lastTime    2017-05-31
 * @description 拆解 cron表达式单个字段中的 - 连字符
 */
export function cronSplitFun(str, isInt) {
    let tmpArr = str.split(',');
    for (let i = tmpArr.length - 1; i >= 0; i--) {
        if (tmpArr[i].indexOf('-') > 0) {
            // 处理连值
            let _idx = tmpArr[i].indexOf('-');
            let start = parseInt(tmpArr[i].substring(0, _idx));
            let end = parseInt(tmpArr[i].substr(_idx + 1));
            // 删除连值
            tmpArr.splice(i, 1);
            // 推入连值实际值
            for (let j = start; j <= end; j++) {
                if (isInt) {
                    tmpArr.push(j);
                } else {
                    tmpArr.push(j + '');
                }
            }
        } else if (isInt) {
            tmpArr[i] = parseInt(tmpArr[i]);
        }
    }
    return tmpArr;
}

/**
 * @Author      weiberZeng
 * @DateTime    2017-06-05
 * @lastTime    2017-06-05
 * @description 是否是函数
 */
export function isFunction(val) {
    return typeof val === 'function';
}

/**
 * @Author      weiberZeng
 * @DateTime    2017-06-05
 * @lastTime    2017-06-05
 * @description 是否是对象
 */
export function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

/**
 * 是否是数组
 * @type {Boolean}
 */
export function isArray(val) {
    return Array.isArray(val);
}

/**
 * @Author      weiberZeng
 * @DateTime    2017-06-05
 * @lastTime    2017-06-05
 * @description 是否是简单对象
 */
export function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype;
}

/**
 * @Author      weiberZeng
 * @DateTime    2018-09-21
 * @lastTime    2018-09-21
 * @description 判断obj非空
 */
export function isEmptyObj(obj) {
    for (let t in obj) {
        return !1;
    }
    return !0;
}
/**
 * @Author      Hewc
 * @DateTime    2018-12-19
 * @lastTime    2018-12-19
 * @description 提供一个将字符串编译/转译base64的类
 */
export function Base64() {
    // private property
    var _keyStr =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    // public method for encoding
    this.encode = function (input) {
        var output = '';
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8Encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output =
                output +
                _keyStr.charAt(enc1) +
                _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) +
                _keyStr.charAt(enc4);
        }
        return output;
    };

    // public method for decoding
    this.decode = function (input) {
        var output = '';
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        // input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        input = input.replace(/[^A-Za-z0-9+/=]/g, '');
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 !== 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8Decode(output);
        return output;
    };

    // private method for UTF-8 encoding
    function _utf8Encode(string) {
        string = string.replace(/\r\n/g, '\n');
        var utftext = '';
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }

    // private method for UTF-8 decoding
    function _utf8Decode(utftext) {
        var string = '';
        var i = 0;
        var c = 0;
        var c2 = 0;
        var c3;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if (c > 191 && c < 224) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(
                    ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
                );
                i += 3;
            }
        }
        return string;
    }
}

/**
 * @Author      SuLiang
 * @DateTime    2018-12-20
 * @lastTime    2018-12-20
 * @description 数组去重
 * @param       {[type]}      list       [需要去重的数组]
 * @param       {[type]}      compareKey [对比字段]
 * @return      {[type]}                 [去重后的数组]
 */
export function distinctArray(list, compareKey) {
    let arr = [];
    list.forEach(item => {
        // 重复标识
        let flag = false;
        arr.forEach(subItem => {
            if (subItem[compareKey] === item[compareKey]) {
                flag = true;
            }
        });
        if (!flag) {
            arr.push(item);
        }
    });
    return arr;
}

/**
 * @Author      weiberZeng
 * @DateTime    2019-04-18
 * @lastTime    2019-04-18
 * @description 设置树子节点为 disable
 */
export function setTreeDataDisable(data, checkKey, checkValue, childrenKey) {
    let _childrenKey = childrenKey || 'children';
    let _checkKey = checkKey || 'usePattern';
    let _checkValue = checkValue || 'AREA';

    for (let i = data.length - 1; i >= 0; i--) {
        if (
            (!data[i][_childrenKey] || !data[i][_childrenKey].length === 0) &&
            data[i][_checkKey] === _checkValue
        ) {
            data[i].disabled = true;
        }
        if (data[i][_childrenKey]) {
            setTreeDataDisable(
                data[i][_childrenKey],
                _checkKey,
                _checkValue,
                _childrenKey
            );
        }
    }
}

export function getNameFun(ename, cname) {
    let str = '';
    str += ename;
    if (cname) {
        str = str + '(' + cname + ')';
    }
    return str;
}
