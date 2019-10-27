import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        //当前组件存数据的对象
        // this.state={
        //     inputValue1:'',
        //     inputValue1:'',
        //     inputValue2:''
        // }
    }

    // 不考虑this的情况
    handleInput=(e)=>{
        //绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode === 13){
            this.props.addData(e.target.value);
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
