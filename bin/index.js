#!/usr/bin/env node
const program = require('commander')
const download = require('download-git-repo')
const inquirer = require('inquirer')
const fs = require('fs')
const { exec } = require('child_process');
const ora = require('ora')
const chalk = require('chalk')
const logSymbols = require('log-symbols')
const templates = require('./templates')

// 下载文件方法
const downloadFun = function (templateName, projectName) {
    // loading 提示
    const spinner = ora('正在下载模板...').start()
    // download
    //    第一个参数：仓库地址
    //    第二个参数：下载路径
    const { downloadUrl } = templates[templateName]
    download(downloadUrl, projectName, { clone: true }, (err) => {
        if (err) {
            spinner.fail()
            console.log(logSymbols.error, chalk.red(err))
            return
        }
        spinner.succeed()
        // 把项目下的 package.json 文件读取出来
        // fs.access(`${projectName}/package.json`, fs.F_OK, error => {
        //     if (error) {
        //         console.log('package.json文件不存在，不做install安装');
        //     } else {
        //         console.log('package.json文件存在');
        //     }
        // });
        console.log(logSymbols.success, chalk.yellow('初始化模板成功'))
    })
}
program
    .version('0.0.1') // -v 或者 --version 的时候会输出该版本号
program
    .command('init [project-name]')
    .description('输入生成的文件夹名称: sf-template-cli init test')
    .action(projectName => {
        projectName = projectName ? projectName : 'init'
        console.log('文件夹名称为：', projectName)
        let choices = [];
        for (let key in templates) {
            choices.push(key)
        }
        inquirer.prompt([{
            type: 'list',
            message: '请选择要生成的模板类型',
            name: 'choices',
            choices: choices
        }]).then((answers) => {
            downloadFun(answers.choices, projectName)
        })
    })
// 没有任何命令的时候输出使用帮助
if (!process.argv.slice(2).length) {
    program.outputHelp()
}

program.parse(process.argv)
