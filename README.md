<!--
 * @moduleName: shellAutoDockerVue
 * @Author: dawdler
 * @Date: 2019-10-10 15:45:03
 * @LastModifiedBy: dawdler
 * @LastEditTime: 2019-11-04 15:19:26
 -->

# shell+docker 自动化打包提交

auto.sh 设置可执行：chmod +x auto.sh

## 生成容器,执行 npm install

./auto.sh "install"

## 进入容器，执行打包

./auto.sh "build"
