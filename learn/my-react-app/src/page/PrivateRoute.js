import React, { Component } from 'react'
import {Route, Redirect} from "react-router-dom"
import { connect } from 'react-redux';
import { PresetColorTypes } from 'antd/lib/_util/colors';
class PrivateRoute extends Component {
    render() {
        const {path,component,isLogin} = this.props;
        console.log(this.props,'private')
        if(isLogin){
            return <Route path="/" component={component} />;
        }
        return (
            <Redirect to={{pathname:"/login",state:{redirect:path}}} />
        )
    }
}

export default connect(
    state => {
        return {isLogin:state.user.isLogin}
    }
)(PrivateRoute)
