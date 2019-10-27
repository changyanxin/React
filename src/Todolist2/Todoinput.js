import React, { Component } from 'react'

export default class TodoInput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        //当前组件存数据的对象
        this.state={
            inputValue1:'',
            inputValue1:'',
            inputValue2:''
        }
    }

    // 不考虑this的情况
    handleInput=(e)=>{
        //绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode === 13){
            this.props.add(e.target.value);
        }
    }
    // handleChange=(e)=>{
    //     this.setState({
    //         //属性值是一个字符串
    //         // [e.target.name]:e.target.value
    //         [e.target.name]:parseInt(e.target.value===''?0:e.target.value)
    //     })
    // }
    // componentDidMount(){
    //     // 刷新页面第一个input直接获取焦点
    //     // ref = a;//替代ref={(inp)=>{this.inputValue=inp}}
    //     // this.refs.inputValue.focus()
        
    //     this.inputValue.focus();
    // }
    render() {
        return (
            // 父组件，top的input
            <div>
                <span>ToDoList</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' placeholder='添加ToDo' onKeyDown={this.handleInput}/>
            </div>
            //<div className={this.state.inputValue+this.state.inputValue1+this.state.inputValue2>10?".box1":""}>
                // {/* {}相当于一个js环境，为其添加鼠标按下事件 */}
                // {/* 受控组件：value值被react控制的表单元素 */}
                // {/* 可以实时获取表单元素的值（表单验证）,写法麻烦 */}
                // {/* 受控组件：1. 给input标签添加value属性，赋值为state的值
                //     2. 给input标签添加onChange事件，在数件处理函数中setState
                //     3. 一个事件处理函数控制多个表单元素时，给input添加name属性，事件处理函数中写
                //     setState({[e.target.name]:e.target.value})
                // */}
                // <label htmlFor="inp">请输入第一个数</label>
                // <input id="inp" ref={(inp)=>{this.inputValue=inp}} name="inputValue"  onChange={this.handleChange} onKeyDown={this.handleInput} type="text"/>
                // +
                // <input name="inputValue1"  onChange={this.handleChange} onKeyDown={this.handleInput} type="text"/>
                // +
                // <input name="inputValue2"  onChange={this.handleChange} onKeyDown={this.handleInput} type="text"/>
                // =
                // <p>{this.state.inputValue+this.state.inputValue1+this.state.inputValue2}</p>
                // {/* 非受控组件:一次性获取或处理表单元素的值 */}
                // <input ref={(inp)=>{this.inp=inp}} type="text"/>
                // <button 
                //     // 加css行内样式：大括号加对象,自动加单位
                //     style={ {color:"red",fontSize:"10px"} }
                //     className="box" onClick={()=>{console.log(this.inp.value)}}>提交</button>            
            //</div>
        )
    }
}
