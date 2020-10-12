/**
 * String也是一个类数组对象
 * 
 * 由于字符串对象也存在length，且序号从0开始增加，因此字符串也可以看做一个只读的类数组对象，这意味着String对象可以使用Array的所有原型方法。
 */

let str1 = 'hello world'
console.log(Array.prototype.slice.call(str1, 0, 5)) // ["h", "e", "l", "l", "o"]

console.log('--------分割线--------')

// String也可以使用for-of进行遍历
let str2 = 'hello world'
for (const s of str2) {
  console.log(s)
}

console.log('--------分割线--------')

/**
 * String独有方法
 * 
 * 除了使用Array原型对象的方法，String还包含其他一些自己独有的方法:
 * 
 * 与Array使用方法相同的方法
 * 
 * 搜索: indexOf()、lastIndexOf()、concat()
 * 
 * 转换
 * toLowerCase()、toUpperCase()
 * 
 * 截取
 * substr(start, len)
 * substring(start, end)
 * slice(start, end)
*/

let str3 = 'hello world'
let ret31 = str3.substr(6, 5)  // "world"
console.log(ret31)

let ret32 = str3.substring(6, 11)  // "world"
console.log(ret32)

let ret33 = str3.slice(3, 8)  // "lo wo"
console.log(ret33)

console.log('--------分割线--------')

// substring 是以两个参数中较小一个作为起始位置，较大的参数作为结束位置。
// slice 是第一参数为起始位置，第二参数为结束位置，如果结束位置小于起始位置返回空字符串
console.log(str3.substring(11, 6) === str3.substring(6, 11)) // true

console.log('--------分割线--------')

/**
 * 接收负数为参数时:
 * 
 * slice会将它字符串的长度与对应的负数相加，结果作为参数；
 * substr则仅仅是将第一个参数与字符串长度相加后的结果作为第一个参数；
 * substring则干脆将负参数都直接转换为0。
 */
let str4 = 'hello world'
let ret41 = str4.substr(-5) // "world"
let ret42 = str4.substr(-5, 3) // "wor"
let ret43 = str4.substring(6, -1) // "hello"
let ret44 = str4.slice(6, -1) // "worl"

console.log(ret41 === str4.substr(str4.length - 5)) // true
console.log(ret42 === str4.substr(str4.length - 5, 3)) // true
console.log(ret43 === str4.substring(6, 0)) // true
console.log(ret44 === str4.slice(6, str4.length - 1)) // true

console.log('--------分割线--------')

/**
 * 正则
 *
 * match()
 * replace()
 * search()
 */
let str5 = 'hello world'
let ret0 = str5.match(/r/)  // 非全局搜索，返回匹配的第一个字符串数组(length为1)，包括index和input
let ret1 = str5.match(/o/g)  // 全局搜索，返回匹配的字符串数组，length为搜索到的匹配正则表达式的长度
let ret2 = str5.replace(/o/g, 'e')  // 全局替换
let ret3 = str5.replace(/O/i, 'e')  // 不区分大小写，只替换搜索到的第一个字串
let ret4 = str5.search(/l/)  // 返回搜索到的第一个匹配字串的索引
let ret5 = str5.search(/l/g)  // 全局无效，同上

console.log(ret0)  // ["r", index: 8, input: "hello world"]
console.log(ret1)  // ["o", "o"]
console.log(ret2)  // "helle werld"
console.log(ret3)  // "helle world"
console.log(ret4)  // 2
console.log(ret5)  // 2
console.log(str5)  // 不改变源字符串 'hello world'
