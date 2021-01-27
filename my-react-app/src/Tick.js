import React, { Component } from "react";
// 渲染时钟的一个方法
// class Tick extends Component{
//   constructor(props){
//     // console.log(this.props); //构造器里使用this，必须先用super()。
//     super()

//   }
//   render(){
//     return (<h2>{this.props.date.toLocaleTimeString()}</h2>)
//   }
// }
// function ren(){
//   ReactDOM.render(<Tick date={new Date()} />,document.getElementById('tick'))
// }
// setInterval(ren,1000)

// 修改使用state
// setState会触发render
class Tick extends Component {
  constructor(props) {
    // console.log(this.props); //构造器里使用this，必须先用super()。
    super(props);
    this.state = {
      date: new Date(),
      countNumber: 0,
    };
  }
  count() {
    this.setState({ date: new Date() });
  }
  handleClick = () => {
    console.log(this.props.children, "谁的子组件？");
    // this.setState()是异步的，把修改state的任务都放在队列中，等到要渲染的时候一起高效的更新了
    // this.setState({
    //   countNumber:this.state.countNumber+1
    // })
    // console.log(this.state.countNumber,'countNumber');
    // 同步实现方式 1
    //  后面的setstate会覆盖前面的所有setState
    // this.setState({
    //   countNumber:this.state.countNumber+1
    // },(nextState)=>{
    //   console.log(nextState,this.state.countNumber,'countNumber同步打印'); // undefined 1 'countNumber同步打印'
    // })
    // 同步实现方式2 这种回调函数方式不会覆盖前面对state的修改
    //nextState是同步的值，但是setState还是异步的
    this.setState((nextState) => {
      console.log(nextState, "nextState");
      return {
        countNumber: nextState.countNumber + 2,
      };
    });
    console.log(this.state.countNumber, "同步2");
    // 同步实现方式3 //也不会覆盖前面的setState
    // setTimeout(()=>{
    //   this.setState({
    //     countNumber:this.state.countNumber+3
    //   })
    //   console.log(this.state.countNumber,'setTimeout实现同步');
    // },0)
  };
  componentDidMount() {
    this.timer = setInterval(this.count.bind(this), 36000);
    // 同步方式4
    document.getElementById("test").addEventListener("click", () => {
      this.setState({
        countNumber: this.state.countNumber + 3,
      });
      console.log(this.state.countNumber, "事件监听实现同步");
    });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  jiesoumsg = (msg) => {
    // this.refs.test.innerText=`${msg}:${this.state.countNumber}` //用了这个后面在执行handleClick事件，setState不能渲染dom了
    let cha = Number(msg);
    if (typeof cha === "number") {
      this.setState({
        countNumber: cha,
      });
    } else {
      alert("清输入数字呀");
    }
  };
  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        {/* 相当于把handelClick方法复制给了onClick方法，那么onClick调用的时候是顶级作用域 */}
        <div id="test" onClick={this.handleClick} ref="test">
          加加：{this.state.countNumber}
        </div>
        <Eventhandel futozi={this.state.countNumber} zitofu={this.jiesoumsg} />
      </div>
    );
  }
}
// 事件传参
// 父子组件通信

// zi
class Eventhandel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.futozi,
    };
  }
  submit = () => {
    console.log(this.props.children, "谁的子组件==子？");
    console.log(
      this.state.value,
      "state.value",
      this.refs,
      this.refs.shuru.value,
    );
    this.props.zitofu(this.state.value); //把值传给父亲
  };
  changeHandel = (e) => {
    console.log(e.target.value, "target.value");
    this.setState({ value: e.target.value });
  };
  //   static getDerivedStateFromProps(nextProps, prevState) {
  //       if(nextProps.futozi!==prevState.value){
  //         console.log(nextProps,prevState,'React生命周期 getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。父组件重新渲染时触发，请注意，不管原因是什么，都会在每次渲染前触发此方法。')
  //         return {value:nextProps.futozi}
  //     }else {
  //         return null;
  //     }
  //   }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "willreciveprops");
    this.setState({ value: nextProps.futozi }); //直接把props的值给state是不好的 这会覆盖组件内其他state的更新
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.changeHandel}
          ref="shuru"
        />
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}

export default Tick;
