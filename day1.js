/*
 * @Author: ShannonMYang
 * @Date: 2020-04-23 10:37:09
 * @LastEditTime: 2020-04-23 11:08:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JSDemo\day1.js
 */

//  创建一个变量
let name = 'JS';
// 打印变量name的值
console.log(name);
// 定义一个函数，并把这个函数赋值给变量call
let call = function () {
    console.log('call fun:', name);
};
// 调用函数
call();

console.log('-----------------');

let sub = function (a, b) {
    return a - b;
}
console.log(sub);

console.log('-----------------');

let sub2 = new Function('a', 'b', 'return a - b');
console.log(sub2(8, 6));

console.log('-----------------');

function invoke(a, b, fun) {
    if (!a || !b) {
        return;
    }
    console.log(arguments);
    return fun(a, b);
}

let ret = invoke(5, 2, function(a, b) {
    console.log(arguments);
    return a + b;
});
console.log(ret);

console.log('-----------------');


function kill(a, b) {
    // { '0': 3, '1': 2 }
    console.log(arguments);
    return a * a - b;
}
kill(3, 2);