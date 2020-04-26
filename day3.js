/*
 * @Author: your name
 * @Date: 2020-04-23 11:09:58
 * @LastEditTime: 2020-04-26 11:05:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JSDemo\day3.js
 */

 /**
  * var
  * 作用域：全局 和 函数作用域；
  */
//  使用var在全局作用域声明变量 name
var name = 'Shannon';
function callVar(isNew) {
    // 使用var在函数作用域申请变量age
    if (isNew) {
        var age = 20;
        // age还可以继续声明
        var age = 24;
    }
    // 可以正常访问if{}块级作用域中定义的age变量
    // 因为是函数作用域
    console.log(age);
}
callVar(true);
console.log(name);
// ReferenceError: age is not defined
// console.log(age);

// name可以继续声明
var name = 'leftRight';
console.log(name);


// let是块级作用域
function callLet(isNew) {
    if (isNew) {
        let address = 'BeiJing';
        // 可以再次被赋值
        address = 'XingHe';
        // Uncaught SyntaxError: Identifier 'address' has already been declared
        // 不能再次被定义
        // let address = 'BaoTou';
        console.log(address);
    }
    // Uncaught ReferenceError: address is not defined
    // address 只能在定义它的块级作用域中能够使用
    // console.log(address);

    // 在不同的作用域中是可以重复定义的
    let address = 'HuShi';
    console.log(address);
}
callLet(true);

// 提升（即 先使用后定义）
// call 这个函数被提升了
call();
// var 声明的变量，变量提升后，它的初始值是 undefined
function call() {
    // name 被提升了
    console.log(name);
    var name = '前端小课';
}

// const 也是块级作用域，它与 let 不同的是它的值一旦被指定是不能修改的
function callConst(isNew) {
    if (isNew) {
        //  Uncaught SyntaxError: Missing initializer in const declaration 必须初始化
        // const job;
        const job = 'iOS';
        // Uncaught TypeError: Assignment to constant variable.
        // const 变量不能修改
        // job = 'FE';
        console.log(job);
        const info = {
            tep: '10086',
            sex: '男'
        };
        info.sex = '女';
        // 属性可以修改
        console.log(info);
    }
    const job = 'Android';
    // 在不同作用域定义
    console.log(job);

}
callConst(true);

/**
 * 1.var 声明的变量的作用域是全局或者函数级别的，而 let 和 const 声明的变量是块级的，一个 { } 表示一个块；
 * 2.var 声明的变量可以更新，重新声明；let 声明的变量可以更新但不可以重新声明；const 声明的变量既不能更新也不能重新声明；
 * 3.var 和 let 申明的变量可以不初始化，但是 const 声明的变量必须初始化；
 * 4.var、let、const 申明的变量都会发生变量提升（先使用后定义），var 申明的变量被初始化为 undefined，而 let 和 const 声明的变量不会被初始化，会报错。
 */