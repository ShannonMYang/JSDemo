
/**
 * Map是一组键值对的结构，具有极快的查找速度。
 */

/**
 * 创建
 */
// 方法一: 创建的时候初始化
let mapObj0 = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
])
console.log(mapObj0.size) // 3

console.log('--------分割线--------')

// 方法二: 创建空Map，之后添加元素
let mapObj1 = new Map()
mapObj1.set('a', 1)
mapObj1.set('b', 2)
mapObj1.set('c', 3)
console.log(mapObj1.size) // 3
// 注意: Map对象的长度不是length，而是size

console.log('--------分割线--------')

/**
 * 基础操作
 */
// Map对象的创建、添加元素、删除元素...
let mapObj2 = new Map([
    ['b', 2],
    ['c', 3],
    ['d', 4]
  ])
mapObj2.set('a', 1) // 添加元素
console.log(mapObj2)

mapObj2.delete('d') // 删除指定元素
console.log(mapObj2)

console.log(mapObj2.has('a')) // true

console.log(mapObj2.get('a')) // 1

console.log('--------分割线--------')

/**
 * 遍历
 */
// 使用上面创建的Map进行操作

// forEach
// 同数组的forEach遍历，三个参数分别代表: value、key、map本身

mapObj1.forEach((e, index, self) => {
  console.log(index, ' => ', e)
})
/**
 * 打印出:
 * 
 * a  =>  1
 * b  =>  2
 * c  =>  3
 */

console.log('--------分割线--------')

//  for-of
for (const e of mapObj1) {
  console.log(e)
}

/**
 * 打印出:
 * 
 * ["a", 1]
 * ["b", 2]
 * ["c", 3]
 */
// 注意: for-of遍历出来的是一个数组，其中e[0]为key，e[1]为value