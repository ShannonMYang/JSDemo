/*
 * @Author: your name
 * @Date: 2020-06-11 09:47:35
 * @LastEditTime: 2020-06-11 10:02:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JSDemo\day10.js
 */ 

//  单例的普通写法
 var Singleton = function (name) {
     this.name = name
     this.instance = null
 }

//  Singleton.getInstance = function (name) {
//      if (!this.instance) {
//          this.instance = new Singleton(name)
//      }
//      return this.instance
//  }

Singleton.getInstance = (function (name) {
    var instance = null;
    return function (name) {
        if (!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})();

 let single1 = Singleton.getInstance('one');
 let single2 = Singleton.getInstance('two');

 console.log(single1, '= single1')
 console.log(single2, '= single2')
 console.log(Singleton.instance, '= Singleton.instance')
 console.log('single1 === single2 ?', single1 === single2)