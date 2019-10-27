import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        // this.state.list.
        var {todo} = this.props;
        return (
            <div>
                <h2>待办事项</h2>

                <ul>
                    {
                        (todo || []).map((value,key)=>{

                            if(!value.checked){

                                return (

                                    <li key={key}>

                                        <input type="checkbox" checked={value.checked} 
                                        onChange={this.checkboxChage.bind(this,key)} />

                                        {value.title}-- 
                                        <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }

                        })


                    }
                </ul>           



                <h2>已完成事项</h2>
                <ul>
                    {
                        (todo || []).map((value,key)=>{

                            if(value.checked){

                                return (

                                    <li key={key}>

                                        <input type="checkbox" checked={value.checked} 
                                        onChange={this.checkboxChage.bind(this,key)} />

                                        {value.title}-- 
                                        <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }

                        })
                    }
                </ul>    
            </div>
        )
    }
}
