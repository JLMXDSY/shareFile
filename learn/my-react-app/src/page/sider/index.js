import React, { Component } from "react";

import { Link, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import Drag from "../Drag";
import Todo from "../Todo";

import { sidebarData } from "./siderdb";
const { Header, Content, Sider } = Layout;
const { SubMenu, Item } = Menu;

class About3 extends Component {
  constructor(props) {
    super(props);
    this.initValue = [1, 10, 4];
    const sum = this.initValue.reduce((acc, cur) => acc + cur, 0);
    this.state = {
      sum,
    };
  }
  onUpdata = (prevalue, nextvalue) => {
    console.log("------", prevalue, nextvalue, this.state.sum);
    this.setState({ sum: this.state.sum + (nextvalue - prevalue) });
  };
  UNSAFE_componentWillMount() {
    console.log("componentWillMount2:");
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps2:", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate2:", nextState.sum, this.state.sum);
    return nextState.sum !== this.state.sum;
  }
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate2:");
  }
  componentDidCatch(error, info) {
    console.log("componentDidCatch2:", error, info);
  }
  componentDidMount() {
    console.log("componentDidMount2:");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate2:");
  }
  render() {
    console.log("render2:");
    // throw new Error('出错误了');
    return (
      <div>
        <h1>{this.state.sum}</h1>
        {this.initValue.map((item, index) =>
          <About4 key={index} count={item} onUpdata={this.onUpdata} />
        )}
      </div>
    );
  }
}
class About4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.count,
    };
  }
  onChangedata = (isAdditionOrSubtraction) => {
    const preCounter = this.state.counter;
    const newCounter = isAdditionOrSubtraction
      ? this.state.counter + 1
      : this.state.counter - 1;
    this.props.onUpdata(preCounter, newCounter);
    this.setState({ counter: newCounter });
  };
  UNSAFE_componentWillMount() {
    console.log("componentWillMount:");
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps:");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate:",
      nextState.counter,
      this.state.counter,
    );
    return nextState.counter !== this.state.counter;
  }
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate:");
  }
  componentDidCatch(error, info) {
    console.log("componentDidCatch:", error, info);
  }
  componentDidMount() {
    console.log("componentDidMount:");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate:");
  }

  render() {
    console.log("render:");
    return (
      <div style={{ width: "1000px", height: "100px", background: "#c5f0f0" }}>
        {this.state.counter}
        <button onClick={this.onChangedata.bind(this, true)}>+</button>
        <button onClick={this.onChangedata.bind(this, false)}>-</button>
      </div>
    );
  }
}

class SiderMenu extends Component {
  handleClick = (e) => {
    console.log("click ", e);
  };
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["group0"]}
        mode="inline"
        theme="dark"
      >
        {sidebarData.map((sub_menu) => (
          <SubMenu
            key={sub_menu.key}
            title={<span>
              {sub_menu.title.icon}
              <span>{sub_menu.title.text}</span>
            </span>}
          >
            {sub_menu.children &&
              sub_menu.children.map((menu_item) => (
                <Item key={menu_item.key}>
                  <Link to={menu_item.path}>{menu_item.text}</Link>
                </Item>
              ))}
          </SubMenu>
        ))}
      </Menu>
    );
  }
}

class Layouthtml extends Component {
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <SiderMenu></SiderMenu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <Route path="/dashboard/monitor" component={Todo}></Route>
            <Route path="/dashboard/analyze" component={Drag}></Route>
            <Route path="/voice/sxlist" component={About3}></Route>
            <Route path="/voice/calllist" component={About4}></Route>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Layouthtml;
