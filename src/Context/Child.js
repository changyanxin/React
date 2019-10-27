import React, { Component } from 'react'
import {con2} from './Context.js'
//命名引入加{}

export default class Child extends Component {
    render() {
        console.log(this.context);
        return (
            <div>
                Child组件
                <div>{this.context}</div>
                {/* <con.Consumer>
                    {
                        //箭头函数之后不加大括号，如果加大括号需要用return
                        (id)=><div>{id}</div>
                    }
                </con.Consumer> */}
            </div>
        )
    }
}
Child.contextType = con2;

