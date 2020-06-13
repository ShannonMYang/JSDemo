/*
 * @Author: your name
 * @Date: 2020-05-27 10:03:52
 * @LastEditTime: 2020-05-27 10:36:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JSDemo\day8.js
 */

// 引入fs文件处理模块
var fs = require("fs");
var path = '/学习视频/小码哥-底层原理1+2'
fs.readdir(path, function (err, files) {
    if (!files) {
        console.log('路径错误，文件不存在')
    } else {
        // files是名称数组
        files.forEach(function (filename, index) {
            //运用正则表达式替换oldPath中不想要的部分
            var oldPath = path + '/' + filename,
                newPath = path + '/' + filename.replace(/瑞客论坛_www.ruike1.com/g, "");
            // console.log(newPath);
            fs.rename(oldPath, newPath, function (err) {
                if (!err) {
                    console.log(filename + '  ' + '替换成功!')
                }
            })
        })
    }

})