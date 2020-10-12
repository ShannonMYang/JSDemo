/**
 * Set
 * 
 * Set和Map类似，但set只存储key，且key不重复。
 */

/**
 * 创建
 */

// 方法一: 创建的时候初始化
let setObj01 = new Set([1, 2, 3])
console.log(setObj01.size)

console.log('--------分割线--------')

// 方法二: 创建空Map，之后添加元素
let setObj02 = new Set()
setObj02.add(1)
setObj02.add(2)
setObj02.add(3)
console.log(setObj02.size)
// 注意: Map对象的长度不是length，而是size

console.log('--------分割线--------')

/**
 * 基础操作
 */
let s = new Set([1, 2, 3])
s.add(3) // 由于key重复，添加不进
s.delete(3) // 删除指定key
console.log(s) // 1 2

console.log('--------分割线--------')

/**
 * 遍历
 */
// 使用上面创建的Set进行操作

/**
 * forEach
 * 
 * Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身
 */
let s1 = new Set([1, 3, 5])
s1.forEach(function (element, sameElement, set) {
  console.log(element) // element === sameElement
})
// 打印 1 3 5

console.log('--------分割线--------')

// for-of
for (const item of s1) {
  console.log(item)
}
// 打印 1 3 5