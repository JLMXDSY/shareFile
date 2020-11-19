import React, { Component } from 'react'
import './index.scss';
export default class Drag extends Component {
    constructor(props){
        super(props);
        this.state = {
            thinkData:[{id:1,value:'明星',color:'#fcfcfc'},{id:2,value:'风景',color:'#fcfcfc'},{id:3,value:'动画',color:'#fcfcfc'},{id:4,value:'流行',color:'#fcfcfc'},{id:5,value:'颜色',color:'#fcfcfc'}]
        }
    }
    render() {
        const {thinkData} = this.state;
        return (
            <div className="drag_warp">
                {thinkData.map(item=><div className="drag_item" key={item.id} style={{backgroundColor:item.color}}>
                    <div className="item_content" draggable={true}>{item.value}</div>
                </div>)}
            </div>
        )
    }
}
