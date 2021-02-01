console.log('1111');
// 生成随机字符串
function randomString(len = 10) {
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
    let flag = /(e)/.test(strParam)
    if (!flag) return param
    console.log(flag);
    // 指数符号 true: 正，false: 负
    let sysbol = true
    if (/(e-)/.test(strParam)) {
      sysbol = false
    }
    // 指数
    let index = Number(strParam.match(/\d+$/)[0])
    // 基数
    let basis = strParam.match(/^[\d\.]+/)[0].replace(/\./, '')
  
    if (sysbol) { // 该方法有问题，没有设计指数没有超过基数长度的小数点位置
      return basis.padEnd(index + 1, 0)
    } else {
      return basis.padStart(index + basis.length, 0).replace(/^0/, '0.')
    }
  }

  // 数字千分位正则 123，456，789.000
  // 有小数点的有问题
  function toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }

  // 数字千分位
  function toThousands2(num) {
       var numstr = (num || 0).toString(), result = '';
       var numarry = numstr.split('.')
       var num1 = numarry[0]
       var num2 = numarry[1]||''
       while (num1.length > 3) {
           result = ',' + num1.slice(-3) + result;
           num1 = num1.slice(0, num1.length - 3);
       }
       if (num1) { result = num1 + result; }
       return result+'.'+num2;
  }


  /**
     * 为数字加上单位：万或亿
     *
     * 例如：
     *      1000.01 => 1000.01
     *      10000 => 1万
     *      99000 => 9.9万
     *      566000 => 56.6万
     *      5660000 => 566万
     *      44440000 => 4444万
     *      11111000 => 1111.1万
     *      444400000 => 4.44亿
     *      40000000,00000000,00000000 => 4000万亿亿
     *      4,00000000,00000000,00000000 => 4亿亿亿
     *
     * @param {number} number 输入数字.
     * @param {number} decimalDigit 小数点后最多位数，默认为2
     * @return {string} 加上单位后的数字
     */
    function addChineseUnit() {
      var addWan = function(integer, number, mutiple, decimalDigit) {
          var digit = getDigit(integer);
          if (digit > 3) {
              var remainder = digit % 8;
              if (remainder >= 5) {   // ‘十万’、‘百万’、‘千万’显示为‘万’
                  remainder = 4;
              }
              return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万';
          } else {
              return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit);
          }
      };

      var getDigit = function(integer) {
          var digit = -1;
          while (integer >= 1) {
              digit++;
              integer = integer / 10;
          }
          return digit;
      };

      return function(number, decimalDigit) {
          decimalDigit = decimalDigit == null ? 2 : decimalDigit;
          var integer = Math.floor(number);
          var digit = getDigit(integer);
          // ['个', '十', '百', '千', '万', '十万', '百万', '千万'];
          var unit = [];
          if (digit > 3) {
              var multiple = Math.floor(digit / 8);
              if (multiple >= 1) {
                  var tmp = Math.round(integer / Math.pow(10, 8 * multiple));
                  unit.push(addWan(tmp, number, 8 * multiple, decimalDigit));
                  for (var i = 0; i < multiple; i++) {
                      unit.push('亿');
                  }
                  return unit.join('');
              } else {
                  return addWan(integer, number, 0, decimalDigit);
              }
          } else {
              return number;
          }
      };
  }()

