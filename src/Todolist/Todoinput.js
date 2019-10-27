import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }
    
    // 不考虑this的情况
    handleInput=(e)=>{
        //绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode == 13){
            console.log(e.target.value);
            this.props.addData(e.target.value);
            e.target.value='';
        }
    }
    render() {
        return (
            <div>
                <header className="title">
                    TodoList:<input ref="title" onKeyDown={this.handleInput}/> 
                </header>
            </div>
        )
    }
}
