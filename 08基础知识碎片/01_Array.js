/*
 * @Author: Yang Xk
 * @Date: 2020-10-12 09:32:49
 * @LastEditors: Yang Xk
 * @LastEditTime: 2020-10-12 14:49:13
 * @FilePath: \JSDemo\08基础知识碎片\01_Array.js
 */

/*
 * 在使用JS编程的时候，常常会用到集合对象，集合对象其实是一种泛型，在JS中没有明确的规定其内元素的类型，但在强类型语言譬如Java中泛型强制要求指定类型。
 * ES6引入iterable类型，Array、Map、Set都属于iterable类型，它们可以使用fot...of循环变力，都内置forEach方法。
 */

/*
 * 遍历
 */
// 普通遍历
// 最简单的一种，也是使用频率最高的一种
let arr0 = ['a', 'b', 'c', 'd', 'e']
for (let i = 0; i < arr0.length; i++) {
    console.log(i, '=>', arr0[i])
}

console.log('--------分割线--------')

// 优化: 缓存数组长度
let arr1 = ['a', 'b', 'c', 'd', 'e']
for (let i = 0, len = arr1.length; i < len; i++) {
    console.log(i, '=>', arr1[i])
}

// 使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显

console.log('--------分割线--------')

// for in 
// 这个循环很多人爱用，但实际上，经测试分析，在众多的循环遍历方式中它的效率是最低的
let arr2 = ['a', 'b', 'c', 'd', 'e']
for (const i in arr2) {
    if (arr2.hasOwnProperty(i)) {
        const element = arr2[i];
        console.log(i, '=>', element)
    }
}

console.log('--------分割线--------')

// forEach
// 数组自带的foreach循环，使用频率较高，实际上性能比普通for循环弱
let arr3 = ['a', 'b', 'c', 'd', 'e']
arr3.forEach((v, k) => {
    console.log(k, '=>', v)
});

console.log('--------分割线--------')

// forEach接受第三个参数，指向原数组，没有返回值，对其进行操作会改变原数组对象
let arr4 = [12, 23, 34, 56, 78, 1]
let res4 = arr4.forEach((item, index, input) => {
    input[index] = item * 10
})
console.log(res4)  // undefined
console.log(arr4)  // 会对原数组产生改变

console.log('--------分割线--------')

// 如果版本低的浏览器不兼容(IE8-)，可以自定义方法实现
/**
 * forEach遍历数组
 * @param callback [function] 回调函数
 * @param context [object] 上下文
 */
Array.prototype.myForEach = function (callback, context) {
    // context = context || window  // window用于html页面加载js的情况，单独跑在node环境下，需要去掉window参数
    context = context
    if ('forEach' in Array.prototype) {
        this.forEach(callback, context)
        return
    }
    // IE6-8下自己编写回调函数执行的逻辑
    for (let i = 0; i < this.length; i++) {
        callback && callback.call(context, this[i], i, this)
    }
}

let arr5 = [11, 22, 33, 44, 55, 66, 77]
arr5.myForEach((v, k) => {
    console.log(k, '=>', v)
})

console.log('--------分割线--------')

// map
// map 会返回一个全新的数组，同样接受第三个参数，如果对其进行操作会改变原数组
let arr6 = [12, 34, 56, 78, 90]
let res6 = arr6.map((item, index, input) => {
    return item * 10
})
console.log(res6)  // [ 120, 340, 560, 780, 900 ]
console.log(arr6)  // [ 12, 34, 56, 78, 90 ]

console.log('--------分割线--------')

// 如果版本低的浏览器不兼容(IE8-)，可以自定义方法实现
/**
 * map遍历数组
 * @param callback [function] 回调函数
 * @param context [object] 上下文
 */
Array.prototype.myMap = function myMap(callback, context) {
    // context = context || window  // window用于html页面加载js的情况，单独跑在node环境下，需要去掉window参数
    context = context
    if ('map' in Array.prototype) {
        return this.map(callback, context)
    }
    // IE6-8下自己编写回调函数执行的逻辑
    let newArray = []
    for (let i = 0, len = this.length; i < len; i++) {
        if (typeof callback === 'function') {
            var val = callback.call(context, this[i], i, this)
            newArray[newArray.length] = val
        }     
    }
    return newArray
}
let arr7 = [112, 134, 156, 178, 190]
arr7.myMap((v, k) => {
    console.log(k, '=>', v)
})

console.log('--------分割线--------')

// 过滤
// filter
// 对数组中的每个元素都执行一次指定的函数（callback），并且创建一个新的数组，该数组元素是所有回调函数执行时返回值为true的原数组元素。
// 它只对数组中的非空元素执行指定的函数，没有赋值或者已经删除的元素将被忽略，同时，新创建的数组也不会包含这些元素。
let arr8 = [13, 14, 15, 87, 69, 53]
let ret8 = arr8.filter((el, index, array) => {
    return el > 16
})
console.log(ret8)  // [ 87, 69, 53 ]

console.log('--------分割线--------')

// map
// map也可以作为过滤器使用，不过返回的是对原数组每项元素进行操作变换后的数组，而不是每项元素返回true的元素集合
let str9 = ["hello", "Array", "WORLD"]
function makeUpperCase(v) {
    return v.toUpperCase()
}
let uppers = str9.map(makeUpperCase)
console.log(uppers)

console.log('--------分割线--------')

// some
// 对数组中的每个元素都执行一次指定的函数（callback），直到此函数返回true，如果发现这个元素，some将返回true，如果回调函数对每个元素执行后都返回false，some将返回false。
// 它只对数组中的非空元素执行指定的函数，没有赋值或者已经删除的元素将被忽略。

// 检查是否有数组元素大于10
function isBigEnough1(element, index, array) {
    return (element > 10)
}
let passed1 = [2, 3, 5, 7, 9].some(isBigEnough1)  // false
let passed2 = [11, 1, 2, 3, 5].some(isBigEnough1)  // true
console.log(passed1, passed2)

console.log('--------分割线--------')

// every
// 对数组中的每个元素都执行一次指定的函数（callback），直到此函数返回false，如果发现这个元素，every将返回false，如果回调函数对每个元素执行后都返回true，some将返回true。
// 它只对数组中的非空元素执行指定的函数，没有赋值或者已经删除的元素将被忽略。
function isBigEnough2(element, index, array) {
    return (element > 10)
}
let passed3 = [12, 13, 5, 7, 9].every(isBigEnough2)  // false
let passed4 = [11, 18, 12, 13, 15].every(isBigEnough2)  // true
console.log(passed3, passed4)

console.log('--------分割线--------')

// 排序
let arr10 = ['a', 1, 'b', 3, 'c', 2, 'd', 'e']
console.log(arr10)  // [ 'a', 1, 'b', 3, 'c', 2, 'd', 'e' ]
console.log(arr10.reverse()) // 反转数组(改变原数组) [ 'e', 'd', 2, 'c', 3, 'b', 1, 'a' ]
console.log(arr10.sort()) // 对数组元素排序(改变原数组) [ 1, 2, 3, 'a', 'b', 'c', 'd', 'e' ]
console.log(arr10)  // [ 1, 2, 3, 'a', 'b', 'c', 'd', 'e' ]

console.log('--------分割线--------')

// sort自定义排序
let arr11 = [1, 100, 52, 6, 88, 99]
let arr12 = arr11.sort((a, b) => a - b)  // 从小到大排序
console.log(arr12)  // [ 1, 6, 52, 88, 99, 100 ]
let arr13 = arr11.sort((a, b) => b - a)  // 从大到小排序
console.log(arr13)  // [ 100, 99, 88, 52, 6, 1 ]
console.log(arr11)  // 原数组也发生改变 [ 100, 99, 88, 52, 6, 1 ]

console.log('--------分割线--------')