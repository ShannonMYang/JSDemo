/**
 * 转化
 */
// Map => Object
let mapObj = new Map([ ['a', 1], ['b', 2], ['c', 3] ])

let obj = {}
for (const item of mapObj) {
  obj[item[0]] = item[1]
}

console.log(obj)

console.log('--------分割线--------')

// Set => Array
let setObj = new Set([1, 2, 3])

let arr = []
for (const item of setObj) {
  arr.push(item)
}

console.log(arr)

console.log('--------分割线--------')

/**
 * Array => String
 * arr.join(separator)
 */
console.log(['a', 'b', 'c', 'd', 'e'].join(''))
// toLocaleString 、toString 、valueOf：可以看作是join的特殊用法，不常用

console.log('--------分割线--------')

/**
 * String => Array
 * str.split(separator)
 */
console.log('hello world'.split(' ')) // ["hello", "world"]