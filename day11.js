/*
 * @Author: your name
 * @Date: 2020-06-11 10:18:37
 * @LastEditTime: 2020-06-11 11:00:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JSDemo\day11.js
 */ 

/*
 * 只负责创建单一实例，保证创建的唯一;
 * 符合设计模式的单一职责原则;
 * 后续的创建什么样的实例、如何创建实例，交给参数fn进行处理;
 */
 function createSingleton(fn) {
     var single = null
     return function () {
         if (!single) {
             single = fn.apply(this, arguments)
         }
         return single
     }
 }
/*....................................................*/
 let Person = function (name) {
     this.name = name
 }

 var createPerson = function () {
     console.log('call only once!')
     let instance1 = new Person('one')
     return instance1
 }

 var createPersonSingle = createSingleton(createPerson)
 let mumu = createPersonSingle()
 let yuyu = createPersonSingle()
 console.log(mumu)
 console.log(yuyu)
 console.log(mumu === yuyu)
/*....................................................*/
 let Animal = function (name) {
    this.name = name
}

var createAnimal = function () {
    console.log('call only once!')
    let instance1 = new Animal('cat')
    return instance1
}

var createAnimalSingle = createSingleton(createAnimal)
let cat1 = createAnimalSingle()
let cat2 = createAnimalSingle()
console.log(cat1)
console.log(cat2)
console.log(cat1 === cat2)