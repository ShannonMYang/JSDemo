/*
 * @Author: your name
 * @Date: 2020-04-26 11:05:58
 * @LastEditTime: 2020-04-26 13:22:52
 * @LastEditors: Please set LastEditors
 * @Description: 这是个测试题
 * @FilePath: \JSDemo\day4.js
 */

 
//  第1题
// var name = 'suyan';
// function call() {
//     // name 的值是什么 ? undefined
//     console.log(name);
//     var name = '前端小课';
// }
// call();


// 第2题
// var name = 'suyan';
// function call() {
//     // name 的值是什么 name is not defined 会报错
//     console.log(name);
//     let name = '前端小课';
// }
// call();


// 第3题
// var name = 'suyan';
// function call(isTrue) {
//     if (isTrue) {
//         let name = '前端小课';
//     }
//     // name 的值是什么 suyan
//     console.log(name);
// }
// call(true);


// 第4题
// var name = 'suyan';
// function call(isTrue) {
//     if (isTrue) {
//         // name 的值是什么 name is not defined 会报错
//         console.log(name);
//         let name = '前端小课';
//     }
// }
// call(true);


// 第5题
let from = 'BJ';
// undefiend
console.log(window.from);
var type = 1;
// 1
console.log(window.type);
// 首先要说明的是，此试题需要运行在html文件中才能生效。
// var声明的变量会被挂载到Windows对象上，使用let和const不会