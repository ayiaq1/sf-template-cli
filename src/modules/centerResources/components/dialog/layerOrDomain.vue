<!--
 * @moduleName: 中心资源 -> 弹窗 -> 分层分域
 * @Author: zhangboxin
 * @Date: 2019-12-24 17:32:39
 * @LastModifiedBy: zhangboxin
 * @LastEditTime : 2020-01-02 14:54:05
 -->
<template>
    <div>
        <!-- 表单 -->
        <el-row :gutter="20">
            <el-form :model="form" :rules="rules" ref="form" label-width="110px">
                <el-col :span="24">
                    <!-- 新增、编辑 主题域 -->
                    <template v-if="type===TYPE_DOMAIN1||type===TYPE_DOMAIN2">
                        <!-- 一级主题域 级联 -->
                        <template v-if="type===TYPE_DOMAIN1">
                            <el-form-item label="所属分层" prop="parentName">
                                <el-cascader :disabled="formData.ctrl===CTRL_ADD" :show-all-levels="false" :options="layerList" :props="cascaderProps" v-model="layerIds" @change="_cascaderChangeFun"></el-cascader>
                            </el-form-item>
                        </template>
                        <!-- 二级主题域 列表-->
                        <template v-else>
                            <el-form-item label="所属分层" prop="parentName">
                                <!--  :disabled="true" -->
                                <el-select :disabled="formData.ctrl===CTRL_ADD||type===TYPE_DOMAIN2" v-model="form.parentId" @change="_selectChangeFun">
                                    <el-option v-for="item in layerList" :key="item.flowId" :label="item.nameZh" :value="item.flowId"></el-option>
                                </el-select>
                            </el-form-item>
                        </template>
                        <template v-if="form.parentDomainId==='root'">
                            <el-form-item label="上级主题域" prop="parentDomainName">{{form.parentDomainName}}</el-form-item>
                        </template>
                        <template v-else>
                            <el-form-item label="上级主题域" prop="parentDomainName">
                                <el-select :disabled="formData.ctrl===CTRL_ADD" v-model="form.parentDomainId">
                                    <el-option v-for="item in domainList" :key="item.flowId" :label="item.nameZh" :value="item.flowId"></el-option>
                                </el-select>
                            </el-form-item>
                        </template>
                    </template>
                    <!-- 新增、编辑 分层 -->
                    <template v-else>
                        <el-form-item label="上级分层" prop="parentName">
                            <template v-if="form.parentId==='root'">{{form.parentName}}</template>
                            <template v-else>
                                <el-select :disabled="formData.ctrl===CTRL_ADD" v-model="form.parentId" @change="_selectChangeFun">
                                    <el-option v-for="item in treeData" :key="item.flowId" :label="item.nameZh" :value="item.flowId"></el-option>
                                </el-select>
                            </template>
                        </el-form-item>
                    </template>
                </el-col>
                <el-col :span="12">
                    <el-form-item :label="title+'中文名'" prop="nameZh">
                        <el-input v-model="form.nameZh"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item :label="title+'英文名'" prop="nameEn">
                        <el-input v-model="form.nameEn"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="描述">
                        <el-input v-model="form.description" :maxlength="100" type="textarea" :rows="4" resize="none"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="表名命名规范">
                        <!-- 切换的时候，对当前的段数做一个赋值 -->
                        <el-checkbox v-model="form.namedRule" @change="_nameRuleChangeFun"></el-checkbox>
                    </el-form-item>
                </el-col>
                <template v-if="form.namedRule">
                    <el-col :span="12">
                        <el-form-item label="大小写约束">
                            <el-checkbox v-model="form.cap" @change="_capChangeFun"></el-checkbox>
                            <template v-if="form.cap===true">
                                <el-radio-group v-model="form.namedMatchCase" class="ml10">
                                    <el-radio label="upper">大写</el-radio>
                                    <el-radio label="lower">小写</el-radio>
                                </el-radio-group>
                            </template>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="表名长度约束">
                            <el-checkbox v-model="form.len"></el-checkbox>
                            <template v-if="form.len===true">
                                <span class="ml10">
                                    不超过
                                    <el-input-number size="mini" :min="1" :max="99999" v-model="form.namedMaxLength"></el-input-number>个字符
                                </span>
                            </template>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="段数分隔符" prop="namedSegmentsSeparator">_</el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="表名段数" prop="namedSegments">
                            <el-input-number size="mini" @change="_segmentChangeFun" :min="1" :max="10" v-model="form.namedSegments"></el-input-number>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="24" :key="index" v-for="(item,index) in form.namedSegmentsItem">
                                <el-form-item :label="'段数'+(index+1)+''" :prop="'namedSegmentsItem_'+index">
                                    <el-col :span="12">
                                        <el-select v-model="item.type" placeholder>
                                            <el-option v-for="(list,i) in segmentList" :key="i" :label="list.name" :value="list.type"></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :offset="1" :span="11" v-if="item.type===1">
                                        <el-input minlength="1" maxlength="10" v-model="item.value"></el-input>
                                    </el-col>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="命名描述">
                            <el-input type="textarea" maxlength="200" :row="20" resize="none" v-model="form.namedDescription"></el-input>
                        </el-form-item>
                    </el-col>
                </template>
            </el-form>
        </el-row>
        <!-- 底部按钮 -->
        <div class="dialog-footer">
            <el-button type="primary" :loading="loading" @click="_saveFun">保存</el-button>
            <el-button @click="formData.show = false">取消</el-button>
        </div>
    </div>
</template>
<script>
// import { dialogClass, globalStatic } from 'javascript@/event/globalStatic.js';
import * as storeStatic from '../../store/centerResources/storeStatic.js';
// import * as codeTable from '../../javascript/codeTable.js';
import { each, every, getPathIds } from '../../javascript/utils.js';
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapMutations } = createNamespacedHelpers('centerResources');
export default {
    name: 'layerOrDomain',
    inject: ['CTRL_ADD', 'CTRL_EDIT', 'NODE_TYPE_LAYER', 'NODE_TYPE_DOMAIN', 'TYPE_LAYER1', 'TYPE_LAYER2', 'TYPE_DOMAIN1', 'TYPE_DOMAIN2'],
    props: {
        formData: {
            type: Object,
            default() {
                return {};
            }
        }
        // treeData: {
        //     type: Array,
        //     default() {
        //         return [];
        //     }
        // }
    },
    data() {
        return {
            layerIds: [],
            cascaderProps: {
                label: 'nameZh',
                value: 'flowId',
                children: 'children'
            },
            type: this.formData.type,
            newType: this.formData.newType,
            loading: false,
            parentRow: null,
            domainList: [],
            // 默认分层
            segmentList: [
                {
                    name: '常量',
                    type: 1
                },
                {
                    name: '分层英文名',
                    type: 3
                },
                {
                    name: '自定义单词、缩写',
                    type: 4
                },
                {
                    name: '模型英文名',
                    type: 5
                }
            ],
            layerList: [],
            form: {
                type: '',
                parentDomainName: '无',
                parentName: '无',
                parentDomainId: 'root',
                parentId: 'root',
                flowId: '',
                nameZh: '',
                nameEn: '',
                namedRule: false,
                namedMatchCase: 'upper',
                cap: false,
                len: false,
                namedMaxLength: 1,
                namedSegments: 1,
                namedSegmentsSeparator: '_',
                description: '',
                namedDescription: '',
                namedSegmentsItem: []
            },
            rules: {
                parentDomainName: [
                    {
                        required: true
                    }
                ],
                parentName: [
                    {
                        required: true
                    }
                ],
                nameZh: [
                    {
                        required: true,
                        message: '请输入中文名',
                        trigger: ['blur,change']
                    },
                    {
                        max: 20,
                        min: 1,
                        message: '输入字段长度最大为20个字符',
                        trigger: ['blur', 'change']
                    }
                ],
                nameEn: [
                    {
                        required: true,
                        message: '请输入英文名',
                        trigger: ['blur,change']
                    },
                    {
                        max: 20,
                        min: 1,
                        message: '输入字段长度最大为20个字符',
                        trigger: ['blur', 'change']
                    },
                    {
                        validator: function(...arg) {
                            return 0;
                        },
                        rigger: 'blur'
                    }
                ],
                namedSegments: [
                    {
                        required: true,
                        message: '请输入表名段数',
                        trigger: ['blur,change']
                    }
                ],
                namedSegmentsSeparator: [
                    {
                        required: true
                    }
                ]
            },
            treeData: this.formData.treeData
        };
    },
    watch: {},
    computed: {
        title() {
            const { type } = this.formData;
            const { TYPE_DOMAIN1, TYPE_DOMAIN2 } = this;
            switch (type) {
                case TYPE_DOMAIN1:
                case TYPE_DOMAIN2:
                    return '主题域';
                default:
                    return '分层';
            }
        }
    },
    created() {
        const { CTRL_EDIT, CTRL_ADD, NODE_TYPE_DOMAIN, TYPE_DOMAIN1, TYPE_DOMAIN2, NODE_TYPE_LAYER, TYPE_LAYER1, TYPE_LAYER2 } = this;
        const { type, ctrl, row, newType } = this.formData;
        this.form.type = NODE_TYPE_LAYER;
        if (!row) {
            // 新增一级分层没有内容
            return;
        }
        if ([TYPE_DOMAIN1, TYPE_DOMAIN2].includes(type)) {
            // 主题域
            this.segmentList = [
                {
                    name: '常量',
                    type: 1
                },
                {
                    name: '主题域英文名',
                    type: 2
                },
                {
                    name: '自定义单词、缩写',
                    type: 4
                },
                {
                    name: '模型英文名',
                    type: 5
                }
            ];
        }
        // row=el-tree：node;
        const { data, parent, level } = row;
        this.form.type = data.type;
        if (CTRL_EDIT === ctrl) {
            // 编辑的是当前，因此 parentRow=parent
            this.parentRow = parent;
            this.form = { ...this.form, ...data };
        } else {
            // 新增的是下家，因此parentRow=row
            this.parentRow = row;
        }
        this._segmentChangeFun();
        this.layerList = [];
        this.domainList = [];
        switch (type) {
            case TYPE_LAYER1:
                // 上级分层
                if (CTRL_ADD === ctrl) {
                    if (newType === NODE_TYPE_LAYER) {
                        // 子分层
                        this.form.parentId = data.flowId;
                        this.form.parentName = data.nameZh;
                        this.form.type = NODE_TYPE_LAYER;
                    } else {
                        // 主题域
                        this.form.parentId = data.flowId;
                        this.form.parentName = data.nameZh;
                        this.form.parentDomainId = 'root';
                        this.form.parentDomainName = '无';
                        this.form.type = NODE_TYPE_DOMAIN;
                    }
                } else {
                    // 编辑就是当前
                    this.form.parentId = 'root';
                    this.form.parentName = '无';
                    this.form.type = NODE_TYPE_LAYER;
                }
                // 一级分层，二级分层 所属分层列表为 treeData
                break;
            case TYPE_LAYER2:
                // 上级分层
                if (CTRL_ADD === ctrl) {
                    // 新增就是当前
                    this.form.parentId = data.flowId;
                    this.form.parentName = data.nameZh;
                } else {
                    // 编辑
                    if (level === 1) {
                        // 一级分层应该为无
                        this.form.parentId = 'root';
                        this.form.parentName = '无';
                    } else {
                        // 二级分层
                        this.form.parentId = parent.data.flowId;
                        this.form.parentName = parent.data.nameZh;
                    }
                }
                this.form.type = NODE_TYPE_LAYER;
                // 一级分层，二级分层 所属分层列表为 treeData
                break;
            case TYPE_DOMAIN1:
                if (CTRL_ADD === ctrl) {
                    // 新增主题域
                    // 上级分层
                    if (data.type === NODE_TYPE_LAYER) {
                        // 一级主题域
                        this.form.parentDomainId = 'root';
                        this.form.parentDomainName = '无';
                        this.form.parentId = data.flowId;
                        this.form.parentName = data.nameZh;
                    } else {
                        // 新增二级主题域
                        // 上级主题域无
                        this.form.parentDomainId = data.flowId;
                        this.form.parentDomainName = data.nameZh;
                        // 所属分层，为再上一层
                        this.form.parentId = parent.data.flowId;
                        this.form.parentName = parent.data.nameZh;
                    }
                } else {
                    if (parent.data.type === NODE_TYPE_LAYER) {
                        // 一级主题域编辑
                        this.form.parentDomainId = 'root';
                        this.form.parentDomainName = '无';

                        this.form.parentId = parent.data.flowId;
                        this.form.parentName = parent.data.nameZh;
                    } else {
                        // 二级主题域编辑
                        this.form.parentDomainId = data.flowId;
                        this.form.parentDomainName = data.nameZh;
                        // 所属分层，为再上一层
                        this.form.parentId = parent.data.flowId;
                        this.form.parentName = parent.data.nameZh;
                    }
                }
                // 一级主题域的所属分层为级联，请求后台
                this._getLayerDataFun();
                this.form.type = NODE_TYPE_DOMAIN;
                break;
            case TYPE_DOMAIN2:
                if (CTRL_ADD === ctrl) {
                    // 新增，上级主题域就是当前
                    this.form.parentId = parent.data.flowId;
                    this.form.parentName = parent.data.nameZh;
                    // 取上级所属分层
                    this.form.parentDomainId = data.flowId;
                    this.form.parentDomainName = data.nameZh;
                    // 所属分层
                    this.layerList = parent.parent.data.children ? parent.parent.data.children : parent.parent.data;
                    // 所属分层下的所有一级域
                    this.domainList = parent.data.children ? parent.data.children : parent.data;
                } else {
                    // 编辑
                    if (parent.data.type === NODE_TYPE_LAYER) {
                        // 一级主题域编辑
                        // 上级主题域
                        this.form.parentDomainId = 'root';
                        this.form.parentDomainName = '无';
                        // 取上级的所属分层
                        this.form.parentId = parent.data.flowId;
                        this.form.parentName = parent.data.nameZh;
                        // 所属分层上一级的子节点
                        this.layerList = parent.parent.data.children ? parent.parent.data.children : parent.parent.data;
                    } else {
                        // 二级主题域编辑
                        this.form.parentDomainId = parent.data.flowId;
                        this.form.parentDomainName = parent.data.nameZh;
                        // 取上级的所属分层
                        this.form.parentId = parent.parent.data.flowId;
                        this.form.parentName = parent.parent.data.nameZh;
                        // 所属分层
                        this.layerList = parent.parent.parent.data.children ? parent.parent.parent.data.children : parent.parent.parent.data;
                        // 所属分层下的所有一级域
                        this.domainList = parent.parent.data.children ? parent.parent.data.children : parent.parent.data;
                    }
                }
                this.form.type = NODE_TYPE_DOMAIN;
                break;
        }
        console.log('this.form==>', this.form);
    },
    destroyed() {},
    mounted() {
        // this.init();
    },
    methods: {
        ...mapMutations([storeStatic.M_DIALOG_DATA, storeStatic.M_FILTER_SEARCH_DATA, storeStatic.M_PAGE_DATA]),
        ...mapActions([storeStatic.A_DATABASE_TYPE_DATA, storeStatic.A_BUSINESS_TYPE_DATA, storeStatic.A_DATA_SOURCE_DATA, storeStatic.A_DEL_DATASOURCE_DATA]),
        /**
         * 初始化
         */
        init() {
            this.getDatabaseTypeDataFun();
            this.getBusinessTypeDataFun();
            this.getDataSourceListFun();
        },
        // 大写约束默认为大写，判断如果回显的时候为空就设置大写
        _capChangeFun(val) {
            if (val && this.form.namedMatchCase === '') {
                this.form.namedMatchCase = 'upper';
            }
        },
        // 命名规范change
        _nameRuleChangeFun(val) {
            // 取消命名规范， 给后台的表名段数数据要求为0，但是约束要求 段数默认为1
            // 因此判断，如果勾选命名规范，并且段数为0时设置为1
            if (val && this.form.namedSegments === 0) {
                this.form.namedSegments = 1;
            }
            this._segmentChangeFun();
        },
        // 获取 级联 所属分层
        _getLayerDataFun() {
            this.$factory('/wydataeye/datamodel/layerdomain/selectLayerTree.json').then(response => {
                if (response.status) {
                    this.layerList = response.data;
                    this.layerIds = getPathIds(this.layerList, this.form.parentId);
                }
            });
        },
        // 所属分层级联change
        _cascaderChangeFun(ids) {
            const id = ids[ids.length - 1];
            this.form.parentId = id;
            each(this.treeData, (item, children) => {
                if (item.flowId === id) {
                    this.form.parentName = item.nameZh;
                    this.parentRow = item;
                    // 上级主题域不能编辑
                    this.form.parentDomainId = 'root';
                    this.form.parentDomainName = '无';
                    this.domainList = children;
                }
            });
        },
        // 上级分层change
        _selectChangeFun(id) {
            this.treeData.every((item, index) => {
                if (item.flowId === id) {
                    this.form.parentName = item.nameZh;
                    this.parentRow = item;
                    // 上级主题域不能编辑
                    this.form.parentDomainId = 'root';
                    this.form.parentDomainName = '无';
                    this.domainList = item.children || [];
                    return false;
                } else {
                    return true;
                }
            });
        },
        // 段数change
        _segmentChangeFun() {
            let rules = this.rules;
            let namedSegmentsItem = [];
            let list = this.segmentList[0];
            for (let i = 0; i < this.form.namedSegments; i++) {
                let obj = {
                    value: '',
                    name: list.name,
                    order: i + 1,
                    type: list.type
                };
                if (this.form.namedSegmentsItem) {
                    let data = this.form.namedSegmentsItem[i];
                    if (data) {
                        obj = data;
                    }
                }
                namedSegmentsItem[i] = obj;
                this.$set(this.form, 'namedSegmentsItem_' + i, obj.type);
                rules['namedSegmentsItem_' + i] = [
                    {
                        required: true,
                        message: '请选择段数' + i,
                        trigger: ['blur,change']
                    }
                ];
            }
            this.$set(this.form, 'namedSegmentsItem', namedSegmentsItem);
            this.rules = rules;
        },
        _saveFun() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    let message;
                    if (this.form.namedRule) {
                        this.form.namedSegmentsItem.every(item => {
                            if (item.type === 1) {
                                if (item.value === '') {
                                    message = '请输入常量！';
                                    return false;
                                }
                                // else if (new RegExp(`${NoCn.reg}`, 'ig').test(item.value)) {
                                //     message = '常量只能为：1-10个字符（字母、数字、符号的组合）';
                                //     return false;
                                // }
                            }
                            return true;
                        });
                    }
                    if (message) {
                        this.$message.warning(message);
                        return false;
                    }
                    const { row, type } = this.formData;
                    if (!row) {
                        // 新增一级分层
                        this._postFun();
                        return;
                    }
                    const tips = '当前分层或主题域下存在逻辑模型实体，继续添加，系统会自动将对应的逻辑实体挂载到新增的分层或主题域，保存后您可通过移动功能进行修改，是否继续？';
                    const { data } = row;
                    const parentData = this.parentRow.data ? this.parentRow.data : this.parentRow;
                    const { NODE_TYPE_LAYER, TYPE_LAYER1, TYPE_LAYER2, NODE_TYPE_DOMAIN, TYPE_DOMAIN1 } = this;
                    if (data.tableNumber > 0 && (!data.children || data.children.length === 0)) {
                        if (this.formData.ctrl === this.CTRL_ADD) {
                            // 新增的时候，自身挂载实体 需要给弹出框提示
                            this.$$confirm(tips, this.i18n.message.SYSTEM_TXT, {
                                cancelButtonText: this.i18n.message.CANCEL,
                                confirmButtonText: this.i18n.message.OK,
                                type: 'warning'
                            }).then(() => {
                                this._postFun(row);
                            });
                        } else {
                            // 编辑直接保存
                            this._postFun(row);
                        }
                        return;
                    } else if (type === TYPE_LAYER1 || type === TYPE_LAYER2) {
                        // 分层
                        const { children = [], tableNumber } = parentData;
                        // 解构 children =null 依然为null
                        const hasLayer = children ? children.find(item => item.type === NODE_TYPE_LAYER) : null;
                        const hasDomain = children ? children.find(item => item.type === NODE_TYPE_DOMAIN) : null;
                        if (type === TYPE_LAYER2 && !hasLayer && tableNumber !== 0) {
                            // 编辑二级分层时，如果修改上级分层，修改后的上级分层没有子分层并且一级分层下已经有逻辑实体，则在保存时需要给出提示
                            this.$$confirm(tips, this.i18n.message.SYSTEM_TXT, {
                                cancelButtonText: this.i18n.message.CANCEL,
                                confirmButtonText: this.i18n.message.OK,
                                type: 'warning'
                            }).then(() => {
                                this._postFun(row);
                            });
                            return;
                        } else if (hasDomain) {
                            // 如果一级分层存在主题域,并且挂载实体，新增子分层时需要保存时需要给出提示
                            this.$$confirm('当前分层下存在主题域，继续添加，系统会自动将对应的主题域的“所属分层”调整为新增的分层，保存后您也可以通过编辑功能进行修改，是否继续？', this.i18n.message.SYSTEM_TXT, {
                                cancelButtonText: this.i18n.message.CANCEL,
                                confirmButtonText: this.i18n.message.OK,
                                type: 'warning'
                            }).then(() => {
                                this._postFun(row);
                            });
                        } else {
                            // 修改所属分层
                            let { children = [], tableNumber } = parentData;
                            children = children ? children : [];
                            // 解构 children =null 依然为null
                            const hasDomain = children.find(item => item.type === NODE_TYPE_DOMAIN);
                            if (children.length === 0 && tableNumber > 0) {
                                // 移动的分层自身有实体
                                this.$$confirm('当前所选的一级分层下存在逻辑模型实体，继续添加，系统会自动将对应的逻辑实体挂载到当前的二级分层，保存后您可通过移动功能进行修改，是否继续？', this.i18n.message.SYSTEM_TXT, {
                                    cancelButtonText: this.i18n.message.CANCEL,
                                    confirmButtonText: this.i18n.message.OK,
                                    type: 'warning'
                                }).then(() => {
                                    this._postFun(row);
                                });
                            } else if (hasDomain) {
                                // 移动的分层下有 主题域
                                this.$$confirm('当前所选的一级分层下存在主题域，继续添加，系统会自动将该子分层下的逻辑实体挂到该分层最新创建的主题域下，同时将该分层下的所有主题域均挂载到此子分层下，是否继续？', this.i18n.message.SYSTEM_TXT, {
                                    cancelButtonText: this.i18n.message.CANCEL,
                                    confirmButtonText: this.i18n.message.OK,
                                    type: 'warning'
                                }).then(() => {
                                    this._postFun(row);
                                });
                            } else {
                                this._postFun(row);
                            }
                        }
                        return;
                    } else {
                        // 主题域
                        const { children = [], tableNumber } = parentData;
                        // 解构 children =null 依然为null
                        const hasDomain = children ? children.find(item => item.type === NODE_TYPE_DOMAIN) : null;
                        if (type === TYPE_DOMAIN1 && !hasDomain && tableNumber > 0) {
                            // 编辑一级主题域时，如果修改所属分层，修改后的所属分层没有主题域并且分层下已经有逻辑实体，则在保存时需要给出提示
                            this.$$confirm(tips, this.i18n.message.SYSTEM_TXT, {
                                cancelButtonText: this.i18n.message.CANCEL,
                                confirmButtonText: this.i18n.message.OK,
                                type: 'warning'
                            }).then(() => {
                                this._postFun(row);
                            });
                            return;
                        }
                        // 判断当前主题域下是否有逻辑实体
                        let parentDomainData;
                        every({ data: this.treeData }, item => {
                            if (item.flowId === this.form.parentDomainId) {
                                parentDomainData = item;
                                return false;
                            }
                            return true;
                        });
                        // 如果移动到的主题域有实体，给弹出框提示
                        if (parentDomainData && parentDomainData.tableNumber !== 0) {
                            this.$$confirm(tips, this.i18n.message.SYSTEM_TXT, {
                                cancelButtonText: this.i18n.message.CANCEL,
                                confirmButtonText: this.i18n.message.OK,
                                type: 'warning'
                            }).then(() => {
                                this._postFun(row);
                            });
                            return;
                        }
                    }
                    // 前面有判断的跳出，正常情况下提交保存
                    this._postFun(row);
                }
            });
        },
        _postFun(row = null) {
            this.loading = true;
            let postObj = { ...this.form };
            if (postObj.len === false) {
                postObj.namedMaxLength = 0;
            }
            if (postObj.cap === false) {
                postObj.namedMatchCase = '';
            }
            if (postObj.namedRule === false) {
                // 取消命名规范，后台要数据重置
                postObj.namedMatchCase = '';
                postObj.cap = false;
                postObj.len = false;
                postObj.namedMaxLength = 0;
                postObj.namedSegments = 0;
                postObj.namedDescription = '';
                postObj.namedSegmentsItem = [];
            }
            let url = '/wydataeye/datamodel/layerdomain/insert.json';
            if (this.CTRL_EDIT === this.formData.ctrl) {
                url = '/wydataeye/datamodel/layerdomain/update.json';
            }
            let data;
            if (row) {
                if (row.type) {
                    data = row;
                } else if (row.data) {
                    data = row.data;
                }
            }
            if (data && data.type === this.NODE_TYPE_DOMAIN && this.form.parentDomainId !== 'root') {
                // 如果当前是主题域，那么所属分层parentId调整为 主题域ID
                postObj.parentId = this.form.parentDomainId;
            }
            this.$factory(url, { data: postObj }, 'POST')
                .then(response => {
                    this.loading = false;
                    if (response.status) {
                        this.formData.show = false;
                        this.$emit('updateFun');
                    }
                })
                .catch(e => {
                    this.loading = false;
                });
        }
    }
};
</script>
