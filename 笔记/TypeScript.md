# 数据类型

## boolean

```ts
let bool:boolean = true
// 赋给 bool 的值也可以是一个计算之后结果是布尔值的表达式
let bool:boolean = !!0
```
## number

```ts
let num:number = 123
num = 0b1111011 // 二进制 123
num = 0o173 // 八进制 123
num = 0x7b // 十六进制 123

```
## string

```ts
let str:string='wangjing'
```
另外还又一个和字符串相关的类型：字面量字符串类型
当把一个变量指定为一个字符串字面量类型的时候，就不能赋值为其他字符串值了

```ts
let str:'wangjing'
str = 'lihe' // error 不能将类型lihe分配给类型wangjing
```

## null 和 undefined

null 和 undefined 默认可以赋值给任意类型的值
当你在tsconfig中的complierOptions里设置了"strickNullChecks":true 时，undefined和null将只能赋值给他们自身和void类型

```ts
let u:undefined = undefined
let n:null = null
```
## 数组

在typescript中有两种定义数组的方式

第一种是推荐写法，number是指数组中元素的类型

```ts
let list1:number｜string[] = [1,2,'3'] 
let list2:Array<number> = [1,2,3]
```

## object

当我们希望一个变量和函数的参数的类型是一个对象，使用这个类型

```ts
let obj:object
obj = {name:'wangjing'}
obj = 123 // error 不能将类型123分配给类型object
console.log(obj.name) // error 类型object上不存在属性name
```

##  symbol


## 元组
数组的拓展：已知数组中元素数量和每一个元素类型的数组

```ts
let tuple:[number,string,boolean]

```

