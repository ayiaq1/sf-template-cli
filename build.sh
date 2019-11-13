###
# @moduleName: docker自动打包
# @Author: dawdler
# @Date: 2019-10-14 16:04:04
# @LastModifiedBy: dawdler
 # @LastEditTime: 2019-11-05 17:08:10
###
#! /bin/bash
path=`cd $(dirname $0); pwd -P`
echo `进入项目路径=>` $path
cd $path
# 执行npm打包
npm run build
ls
# 退出容器
exit
