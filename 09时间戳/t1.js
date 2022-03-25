/**
     * 获取当前的日期时间 格式“yyyy-MM-dd HH:MM:SS”
     * @return {}
     */
 function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var hours = date.getHours();
    if (hours >= 0 && hours <= 9) {
        hours = "0" + hours;
    }
    var minutes = date.getMinutes();
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    var seconds = date.getSeconds();
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + hours + seperator2 + minutes
        + seperator2 + seconds;
    return currentdate;
}

  // 格式化时间为yy-mm-dd hh:mm:ss
  function formatDate(date) {
    var date = new Date(date);
    var YY = date.getFullYear() + '-';
    var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return YY + MM + DD + " " + hh + mm + ss;
  }

  function changeDateToString(datestring) {
    // 将格林尼治时间换算成秒
    let temp = Date.parse(datestring);
    // 格式化时间
    let result = formatDate(temp);
    let lastDateTime = result.slice(0, 16);
    return lastDateTime;
  }

// console.log(getNowFormatDate().slice(0, 10))
// 当天日期
let todayString = getNowFormatDate().slice(0, 10);
// 当日零点
let beginTodayString = todayString + ' ' + '23:30:00';
console.log(beginTodayString);

// 格式化为秒
let temp = Date.parse(beginTodayString);
console.log(temp);
console.log(formatDate(temp));

// 一天的时间戳 number 数据
let oneDayTotalSeconds = 24 * 60 * 60 * 1000;
let nextDaySeconds = temp + oneDayTotalSeconds;
console.log(nextDaySeconds);
// 次日日期时间
let nextDayString = formatDate(nextDaySeconds);
console.log(nextDayString);

// 当天日期
let nextDayBarString = nextDayString.slice(0, 10);
// 当日零点
let nextDayNeedString = nextDayBarString + ' ' + '02:00:00';
console.log(nextDayNeedString);
let endDateString = Date.parse(nextDayNeedString);

// 当前时间转化为时间戳
let num1 = getNowFormatDate();
let num2 = Date.parse('2022-03-25 22:59:00');
console.log(num2);
// 开始时间转化为时间戳 即 temp
// 结束时间转化为时间戳 即 nextDaySeconds
if (num2 > temp && num2 < nextDaySeconds) {
  console.log('当前在结算时间段内');
} else {
  console.log('当前在可充值时间段内');
}



/**
 * 
 * @param {*} date 需要截取的时间字符串
 * @returns 返回时间字符串
 */
const timeFromDate = date => date.toTimeString().slice(0, 9);
console.log(timeFromDate(new Date()));
console.log(new Date());