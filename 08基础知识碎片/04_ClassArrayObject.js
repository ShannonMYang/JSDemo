/**
 * 类数组对象
 * 
 * JavaScript中，数组是一个特殊的对象，其property名为正整数，且其length属性会随着数组成员的增减而发生变化，
 * 同时又从Array构造函数中继承了一些用于进行数组操作的方法。而对于一个普通的对象来说:
 * 
 * 如果它的所有property名均为正整数，同时也有相应的length属性，那么虽然该对象并不是由Array构造函数所创建的，
 * 它依然呈现出数组的行为，在这种情况下，这些对象被称为“类数组对象”。
 */

// 形如:
let obj = {
  0: 'qzy',
  1: 22,
  2: false,
  length: 3
}
// 类数组对象可以使用Array对象原生方法进行操作。

/**
 * 遍历
 */
// 沿用上述对象进行操作

// forEach
Array.prototype.forEach.call(obj, function(el, index){  
   console.log(index, ' => ', el)
})

console.log('--------分割线--------')

// map
Array.prototype.map.call(obj, function(el, index){  
   console.log(index, ' => ', el)
})
// 注意: 类数组对象不支持使用for-of进行遍历，否则会报错: [Symbol.iterator] is not a function

console.log('--------分割线--------')

/**
 * 增删截取操作
 */
// 沿用上述对象进行操作

console.log(Array.prototype.join.call(obj, '-'))  // qzy-22-false

console.log(Array.prototype.slice.call(obj, 1, 2))  // [22]

Array.prototype.push.call(obj, 5)  // Object {0: "qzy", 1: 22, 2: false, 3: 5, length: 4}
console.log(obj)