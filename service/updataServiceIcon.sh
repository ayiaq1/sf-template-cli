#! /bin/sh

targetFontsPath="/usr/share/fontcustom/fonts"
echo $targetFontsPath

targetDoFontsPath="/usr/share/fontcustom/"
echo $targetDoFontsPath

rootPath=$(dirname $(dirname "$PWD"))
echo $rootPath

parentPath=$(dirname "$PWD")
echo $parentPath

path=`cd $(dirname $0); pwd -P`
echo $path

if [$rootPath == "/usr/share/project/webmanager"]; then
    echo "脚本路径是服务端路径"
    cd $rootPath && git pull
    echo "更新操作完成"
    cd $targetFontsPath && rm -rf *
    echo "删除准备打包的字体文件夹下的内容"
    cd $path
    scp -r $path/../public/css/fonts $targetDoFontsPath
    echo "拷贝git上的对应目录资源到"
    cd $targetDoFontsPath
    fontcustom compile
    cd $path
    rm -rf $path/../public/css/fontcustom/*
    scp -r $targetDoFontsPath/fontcustom $path/../public/css/
    echo "打包完成复制到对应目录了，但没有git提交"
else
    echo "当前目录非10.0.8.69服务端路径，请不要在本地执行，服务端执行的字体打包脚本"

fi


