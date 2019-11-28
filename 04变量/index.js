/*
 * @Author: Shannon Yang
 * @Date: 2019-11-28 15:07:24
 * @LastEditTime: 2019-11-28 16:22:19
 * @LastEditors: Please set LastEditors
 * @Description: 变量和常量
 * @FilePath: \JSDemo\04变量\index.js
 */
/* 
 *大多数情况下，JavaScript 应用需要处理信息。这有两个例子：
 *
 *1.一个网上商店 —— 这里的信息可能包含正在售卖的商品和购物车。
 *2.一个聊天应用 —— 这里的信息可能包括用户和消息等等。
 *变量就是用来储存这些信息的。 
*/

/* 
 * 变量 是数据的 “命名存储”。我们可以使用变量来保存商品、访客和其他信息。 
 */
/*
let message;
message = 'hello'; // 保存字符串
alert(message); // 显示变量内容
*/

//等价于：
/*
let message = 'Hello!'; // 定义变量，并且赋值
alert(message); // Hello!
*/

// 一行中声明多个变量
// let user = 'John', age = 25, message = 'Hello';

// 等价于：
// 多行变量声明有点长，但更容易阅读：
/*
let user = 'John';
let age = 25;
let message = 'Hello';
*/

/*
 * var 关键字与 let 大体 相同，也用来声明变量，但稍微有些不同，也有点 “老派”。
 * let 和 var 之间有些微妙的差别，但目前对于我们来说并不重要。
 */
/*
 * 变量 message 可以被想象成一个标有 "message" 的盒子，盒子里面的值为 "Hello!"：
 *
 * 我们可以在盒子内放入任何值。
 * 并且，这个盒子的值，我们想改变多少次，就可以改变多少次：
 *
 *当值改变的时候，之前的数据就被从变量中删除了：
 */
/*
let message;
message = 'Hello!';
message = 'world!'; // 值改变了
alert(message);
*/

// 声明两个变量，然后将其中一个变量的数据拷贝到另一个变量。
let hello = 'Hello world!';
let message;
// 将字符串 'Hello world' 从变量 hello 拷贝到 message
message = hello;
// 现在两个变量保存着相同的数据
alert(hello); // Hello world!
alert(message); // Hello world!

/* 
 * JavaScript 的变量命名有两个限制：
 * 1.变量名称必须仅包含字母，数字，符号 $ 和 _。
 * 2.首字符必须非数字。 
 */


/*
 * 声明一个常数（不变）变量，可以使用 const 而非 let：
 */
const myBirthday = '18.04.1982';
/*
 * 使用 const 声明的变量称为 “常量”。它们不能被修改，如果你尝试修改就会发现报错：
 */
// myBirthday = '01.01.2001'; // 错误，不能对常量重新赋值

/*
 * 当程序员能确定这个变量永远不会改变的时候，就可以使用 const 来确保这种行为，并且清楚地向别人传递这一事实。

 * 大写形式的常数
 * 一个普遍的做法是将常量用作别名，以便记住那些在执行之前就已知的难以记住的值。

 * 使用大写字母和下划线来命名这些常量。
 */

//例如，让我们以所谓的 “web”（十六进制）格式为颜色声明常量：

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ……当我们需要选择一个颜色
let color = COLOR_ORANGE;
alert(color); // #FF7F00
/*
 * 好处：
 *
 * COLOR_ORANGE 比 "#FF7F00" 更容易记忆。
 * 比起 COLOR_ORANGE 而言，"#FF7F00" 更容易输错。
 * 阅读代码时，COLOR_ORANGE 比 #FF7F00 更易懂。
 */
/*
 * 什么时候该为常量使用大写命名，什么时候进行常规命名？让我们弄清楚一点。
 * 
 * 作为一个 “常数”，意味着值永远不变。但是有些常量在执行之前就已知了（比如红色的十六进制值），还有些在执行期间被 “计算” 出来，但初始赋值之后就不会改变。
 */

// 例如：
// const pageLoadTime = /* 网页加载所需的时间 */;
// pageLoadTime 的值在页面加载之前是未知的，所以采用常规命名。但是它仍然是个常量，因为赋值之后不会改变。
// 换句话说，大写命名的常量仅用作 “硬编码（hard-coded）” 值的别名。