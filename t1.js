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
    let result = this.formatDate(temp);
    let lastDateTime = result.slice(0, 16);
    this.setState({
      selectDateTime: lastDateTime,
      selectBasicTime: datestring
    })
  }

console.log(getNowFormatDate())