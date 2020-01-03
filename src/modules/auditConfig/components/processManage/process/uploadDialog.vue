<!--
*  @moduleName:
* @Author: weiber
* @Date:   2018-03-29 11:27:13
* @Last Modified by:   weiber
* @Last Modified time: 2019-06-23 20:58:39
-->
<template>
    <el-dialog append-to-body :close-on-click-modal="false" title="文件上传" :visible.sync="formData.show" class="tiny">
        <el-upload with-credentials class="upload-demo" ref="upload" multiple :data="formData.data" :action="uploadAction" :on-preview="handlePreviewFun" :before-upload="handleBeforeUploadFun" :on-remove="handleRemove" :on-success="handleSuccessFun" :on-error="handleErrorFun" :on-change="handleChangeFun" :on-exceed="handleExceedFun" :file-list="fileList" :auto-upload="false" :limit="20" :disabled="showTips">
            <el-button slot="trigger" size="small" type="primary" :disabled="showTips">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUploadFun">上传</el-button>
            <div v-show="showTips" slot="tip" class="el-upload__tip">本次共选择{{ count }}个
                <br>成功{{ successcount }}个，失败{{ failcount }}个</div>
            <div slot="tip" class="my-files-list" v-if="fileList.length>0">
                <ul>
                    <li v-for="item in fileList" :key="item.uid" :class="{'fail':item.status==='fail'}"><i class="el-icon-document"></i>{{item.name}}
                        <el-tooltip :content="item.response.data.message" placement="top" v-if="item.status==='fail'&&item.response&&item.response.data&&item.response.data.message">
                            <span> <span class="el-icon-info"></span></span>
                        </el-tooltip>
                    </li>
                </ul>
            </div>
        </el-upload>
    </el-dialog>
</template>
<script>
export default {
    name: 'uploadFile',
    props: ['formData'],
    data() {
        return {
            uploadAction: '',
            showTips: false,
            fileList: [],
            count: 0,
            successcount: 0,
            failcount: 0
        };
    },
    mounted() {
        this.uploadAction = window.wydataeye.url + '/wydataeye/public/rs/skydrive/uploadFile.json';
    },
    methods: {

        /**
         * @Author      weiberZeng
         * @DateTime    2018-03-29
         * @lastTime    2018-03-29
         * @description 上传前
         */
        handleBeforeUploadFun(file) {},

        /**
         * @Author      weiberZeng
         * @DateTime    2018-03-29
         * @lastTime    2018-03-29
         * @description 上传文件大于限制个数
         */
        handleExceedFun(file, fileList) {
            this.$alert('文件数量超过20个，无法上传', this.i18n.message.SYSTEM_TXT, {
                confirmButtonText: this.i18n.message.OK,
                type: 'warning'
            });
        },

        /**
         * @Author      weiberZeng
         * @DateTime    2018-03-29
         * @lastTime    2018-03-29
         * @description 未上传，点击单个文件，单个文件信息
         */
        handlePreviewFun(file) {},

        /**
         * @Author      weiberZeng
         * @DateTime    2018-03-29
         * @lastTime    2018-03-29
         * @description 未上传，删除单个文件，删除文件信息，文件列表
         */
        handleRemove(file, fileList) {},

        /**
         * @Author      weiberZeng
         * @DateTime    2018-03-29
         * @lastTime    2018-03-29
         * @description 成功执行函数，200
         */
        handleSuccessFun(response, file, fileList) {
            if (response.data.status) {
                this.successcount++;
                this.$emit('refreshFun');
            } else {
                this.failcount++;
            }
        },

        /**
         * @Author      weiberZeng
         * @DateTime    2018-03-29
         * @lastTime    2018-03-29
         * @description 失败执行函数，非200状态
         */
        handleErrorFun() {
            this.failcount++;
        },

        handleChangeFun(file, fileList) {
            this.fileList = this.setFileList(fileList);
            // this.fileList = fileList;
            this.count++;
        },

        /**
         * @Author      weiberZeng
         * @DateTime    2018-03-29
         * @lastTime    2018-03-29
         * @description 上传文件到服务器
         */
        submitUploadFun: function() {
            this.showTips = true;
            this.count = 0;
            this.successcount = 0;
            this.failcount = 0;

            for (var i = 0; i < this.fileList.length; i++) {
                if (this.fileList[i].status === 'fail') {
                    this.fileList[i].status = 'ready';
                }
            }
            this.$refs.upload.submit();
        },

        /**
         * @Author      weiberZeng
         * @DateTime    2018-03-29
         * @lastTime    2018-03-29
         * @description 设置未见列表
         */
        setFileList(arr) {
            let returnArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].response && !arr[i].response.data.status) {
                    // 上传失败，重置上传状态
                    arr[i].status = 'fail';
                } else {
                    if (arr[i].size / 1024 / 1024 / 1024 >= 2) {
                        this.$message.error(this.i18n.assets.disk.checkFileSize);
                        continue;
                    }
                }
                returnArr.push(arr[i]);
            }
            return returnArr;
        }
    }

};

</script>
