import React, { Component } from "react";

const context1 = React.createContext();
const { Provider, Consumer } = context1;
// 一定要记住层级这个概念，跨层级传数据才用，兄弟不用

export default class ReactHoc extends Component {
  render() {
    console.log(context1, Provider, Consumer);
    return (
      <div>
        <Provider value={this.props.has}>
          <TopBar></TopBar>
          <Sun />
        </Provider>
      </div>
    );
  }
}
function TopBar(props) {
  return <Store />;
}

function Store(props) {
  return (
    <Consumer>
      {({ name, age, sex }) => <div>{name}{age}{sex}</div>}
    </Consumer>
  );
}
function Sun(props) {
  const data = {
    sun: {
      name: "erzi",
    },
  };
  return HocComponent(LickStore)(data);
}
// 用高阶组件（其实就是封装函数，解决每有一个地方用就要Consumer一次）
const HocComponent = (Component) => {
  return (props) => { //这一层props是为了高阶组件可以接受自己的数据流
    return (
      <Consumer>
        {(ctx) => <Component {...ctx} {...props}></Component>}
      </Consumer>
    );
  };
};
function LickStore(props) {
  const { name, age, sex, sun } = props;
  return <div>{name}{age}{sex}{sun.name}</div>;
}
