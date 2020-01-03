#! /bin/sh

path=`cd $(dirname $0); pwd -P`
echo $path

rm -rf $path/../public/css/fontcustom/*

expect -c "
    spawn ssh root@10.0.8.69
    expect {
          \"*yes/no*\" {send \"yes\r\";exp_continue;}
          \"*assword*\" {send \"sefoncloud\r\";exp_continue;}
          \"*root*\" {send \"cd /usr/share/fontcustom/fonts\r\";send \"rm -rf *\r\";send \"exit\r\";}
          }
expect eof "

echo "删除完成了"

expect -c "
    set timeout 2000
    spawn scp -r $path/../public/css/fonts root@10.0.8.69:/usr/share/fontcustom
    expect {
          \"*yes/no*\" {send \"yes\r\";}
          \"*assword*\" {send \"sefoncloud\r\";}
          timeout { exit 1 }
          }
expect eof "

echo "上传完成咯;"

expect -c "
    spawn ssh root@10.0.8.69
    expect {
          \"*yes/no*\" {send \"yes\r\";exp_continue;}
          \"*assword*\" {send \"sefoncloud\r\";exp_continue;}
          \"*root*\" {send \"cd /usr/share/fontcustom\r\";send \"fontcustom compile\r\";send \"exit\r\";}
          }
expect eof "

echo "去打包咯;"

expect -c "
    set timeout 2000
    spawn scp -r root@10.0.8.69:/usr/share/fontcustom/fontcustom $path/../public/css/
    expect {
          \"*yes/no*\" {send \"yes\r\";}
          \"*assword*\" {send \"sefoncloud\r\";}
          timeout { exit 1 }
          }
expect eof "

echo "下载完成"

filePath="$path/../public/css/fonts/.gitkeep"
if [ ! -f "$filePath" ];then
touch $filePath
echo "去创建文件" > $filePath
echo "文件创建完成"
else
echo "文件已经存在"
fi
