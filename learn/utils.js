// 生成随机字符串
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

// 两个数组求重差异
function compare (ar1,ar2){
  const comArry1 = []; // 相同取a1数组里的
  const comArry2 = []; // 相同取a2数组里的
  const newAr1 = []; //不同a1数组里的
  let newAr2 = []; //不同a2数组里的
  for(let i=0; i<ar1.length; i++){
      var flag = false;
      for(let j=0; j<ar2.length; j++){
          console.log(ar1[i],'i:',i);
          console.log(ar2[j],'j:',j);
          if(ar1[i].id===ar2[j].id){
              flag = true;
              // 在ar2的循环里只能处理ar2，因为处理ar1的话会处理多次
              comArry2.push(ar2[j])
          }
          // 如果想得出ar2里不同的，不能在这里写，会多次添加
          // 也就是处理里层循环的数据是困难的，但是处理外层循环的数据是方便的
          // 。。实际业务处理可以索性只在外层循环处理，如果需要得到两个数组分别的相同和不同，可以再次调用函数，把传参调换就可以了
          // else{
          //     newAr2.push(ar2[j]);
          // }
      }
      console.log(flag,'======')
      if(flag) {
          comArry1.push(ar1[i]);
      }else{
          newAr1.push(ar1[i]); 
      }
                        
  }
  console.log(comArry1,comArry2,newAr1,newAr2);
}

// 科学计数 转数字
/**
 * @description 科学计数法转为string
 * @param {string, number} param
 */
function scientificNotationToString(param) {
    let strParam = String(param)
    let flag = /(e｜E)/.test(strParam)
    if (!flag) return param
  
    // 指数符号 true: 正，false: 负
    let sysbol = true
    if (/(e-|E-)/.test(strParam)) {
      sysbol = false
    }
    // 指数
    let index = Number(strParam.match(/\d+$/)[0])
    // 基数
    let basis = strParam.match(/^[\d\.]+/)[0].replace(/\./, '')
  
    if (sysbol) {
      return basis.padEnd(index + 1, 0)
    } else {
      return basis.padStart(index + basis.length, 0).replace(/^0/, '0.')
    }
  }
  