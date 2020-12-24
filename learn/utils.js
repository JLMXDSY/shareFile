randomString(len = 10) {
    // 生成随机字符串并加上时间戳的后5位 后台会验证这个字符串10分钟之内的唯一性
    // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    var tempLen = chars.length
    var timeStamp = new Date().getTime().toString().slice(-6, -1) // 取时间戳后5位
    var tempStr = ''
    for (var i = 0; i < len; ++i) {
      tempStr += chars.charAt(Math.floor(Math.random() * tempLen))
    }
    return tempStr + timeStamp
  }