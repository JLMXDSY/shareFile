import React, { Component } from 'react'
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'
class LoginPage extends Component {
    render() {
        console.log(this.props,'props')
        const {redirect='/'} = this.props.location.state||{}
        if(this.props.isLogin){
            console.log('hhaha')
            return <Redirect to={redirect} />
        }
        return (
            <div>
                用户：<input />
                密码：<input />
                <button onClick={this.props.login}>login</button>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    isLogin:state.user.isLogin
})
// mapDispatchToProps 可以是一个函数也可以是一个对象
// 如果是一个函数，可以传入dispatch,ownProps,返回调用dispatch，触发action
// 如果是一个对象，那么定义在该对象中的函数都将被当作Redux action creator，对象所定义的方法名作为属性名；每个方法将返回一个新函数，函数中的dispatch方法会将action creator 返回值作为参数执行
const mapDispatchToProps = dispatch => ({
    login:()=>dispatch({type:"loginSuccess"})
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
