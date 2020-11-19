import React, { Component } from "react";
import ReactHoc from "../../ReactHoc";
import Hook from "../../Hook";
function Lianxi() {
  return (
    <div>
      <h1>Hello Word!</h1>
      <FunComponent type="函数式" />
      <ClassComponent type="类" />
      {/* <El /> */}
      <List></List>
      <FlavorForm />
      <ReactHoc has={{ name: "王晶", age: "18", sex: "男" }} />
      <Hook />
    </div>
  );
}

const childNode = [<p key="1">123</p>, <p key="2">234</p>];
// jsx语法可以在组件中直接打印，但是不会渲染在页面上
// jsx语法中{}里可以放字符串、数字、表达式、但不可以是函数体或者对象
// jsx中放数组会把数组展开
// jsx中解析规则遇到<>其实转换成了Dom对象，遇到{}按js规则解析
function FunComponent(props) {
  return (
    <div>
      我是{props.type}
      {console.log(props)}组件
      {childNode}
    </div>
  );
}
// render方法是react中Component提供的
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props, "class");
    this.state = { a: 0, b: 3 };
  }
  componentDidMount() {
    document.title = `you click ${this.state.a} count`;
  }
  componentDidUpdate() {
    document.title = `you click ${this.state.a} count`;
  }
  render() {
    return (
      <div>
        我是{this.props.type}组件
        <p>{JSON.stringify(this.state)}</p>
        <button
          onClick={() => {
            this.setState({ c: 3, a: this.state.a + 1 });
          }}
        >
          dianwo
        </button>
      </div>
    );
  }
}
// ReactDOM.render()预期一个字符串或者function或者类，下面这种方式生成的是一个对象
// 但是没有new的话无法调用类，而构造函数不用new也可以调用

// class ClassComponent1 {
//   constructor(){
//     return (<div>我是类组件</div>)
//   }
// }
// const El = new ClassComponent1();

function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.add = function () {
  return this.x + this.y;
};
var p = new Point(2, 3);

class Point1 {
  z = "我是实例属性新写法";
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add() {
    return this.x + this.y + this.z;
  }
}
Object.assign(Point1.prototype, {
  toString() {},
});
var p1 = new Point1(2, 3);
console.log(
  p,
  "fun",
  p1,
  "class",
  Object.keys(p),
  Object.keys(p1),
  Object.keys(Point.prototype),
  Object.keys(Point1.prototype),
  p1.z,
  p1.add()
);

//静态方法可以从super上调用
class Foo {
  static add() {
    console.log("hello");
  }
}
class Bar extends Foo {
  static hah() {
    return super.add();
  }
}
Bar.hah(); //hello

// 箭头函数的this
var obj = {
  bar: function () {
    var x = function () {
      //这里如果是箭头函数那么this是obj，如果是普通函数this是顶层作用域严格模式指向undefind
      return this;
    };
    return x;
  },
};
// 以obj为对象来调用bar()，所以this绑定的是obj
var fn = obj.bar();
console.log(fn()); // undefind

// this
function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
// 把f的作用域(this)指向了对象{a:'azerty'},然后返回了一个和f一样的新函数，g有单独的内存空间，不是f的别名
console.log(g()); //azerty
var h = f.bind({ a: "yaho" });
console.log(h(), h); //function f(){return this.a} yaho
var k = h.bind({ a: "buxing" }); // 给一个bind返回的新函数再次使用bind是无效的
console.log(k(), k); // ƒ () { [native code] } yaho

// 类的继承
// 通过extends 继承了父类的所有属性和方法
// super表示父类的构造函数，用来新建父类的this对象
// 因为子类自己的this对象必须先通过父类构造函数完成塑造，得到父类所有的属性和方法再去构造自己的属性和方法
// 所以super必须调用，如果不调用子类就的得不到this对象,子类新建实例会报错
// ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
// super虽然代表了父类Color的构造函数，但是返回的是子类ColorPoint的实例，即super内部的this指的是ColorPoint的实例，因此super()在这里相当于Color.prototype.constructor.call(this)
class Color {
  _p = 2;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  miaosu() {
    console.log(`x:+${this.x}+y:+${this.y}`);
  }
  static hello() {
    console.log("hello");
  }
}
const c1 = new Color();

// super有两种使用方式，（函数 对象）
// 作为对象使用时在普通方法中，指向父类的原型对象；在静态方法中，指向父类
// 由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。
class ColorPoint extends Color {
  constructor(x, y, a, b) {
    super(x, y);
    console.log(super.miaosu); //Color.prototype.miaosu
    this.a = a;
    this.b = b;
  }
  get p() {
    return super._p;
  }
}
const cp1 = new ColorPoint(255, 255, "#fff", "fff");
console.log(cp1.p); //undefind 因为_p是父类Color实例的属性，super指向父类原型所以并不能读取
console.log(
  c1,
  cp1,
  Color,
  ColorPoint,
  c1.miaosu,
  cp1.miaosu,
  ColorPoint.hello
);
console.log(cp1 instanceof Color, cp1 instanceof ColorPoint);

//  判断一个类是否继承了另一个类
console.log(Object.getPrototypeOf(ColorPoint)); //Color

// 列表渲染
// 最好是使用一个不变的标识来作为key，以帮助react识别哪些元素改变了
// 通常用id，如果你确保每一项的索引不会改变也可以用索引，但是不能确保最好不要用
class List extends Component {
  constructor() {
    super();
    this.state = { arry1: [1, 2, 3, 4] };
  }
  render() {
    return (
      <ul>
        {this.state.arry1.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("你喜欢的风味是: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default Lianxi;
