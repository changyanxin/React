import TodoInput from './Todoinput'
import Todoing from './Todoing'
import Todo from './todo.css'

import React, { Component } from 'react'

// 父组件
export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[]
        };
        /**
         * 深拷贝/浅拷贝
         * 
         var obj = {a:100,b:[1,2,3]}
         var obj1 = {c:100}
         var o = obj;
         var o Object.assign({},obj,obj1);对象的整合 a,b,c
         var oo = JSON.parse(JSON.stringify(obj));
         o.b[0] = 4;
         o.a = 200;
         console.log(obj);
         Object.keys(obj).forEach((item)=>{
             console.log(item);
             console.log(obj[item]);
         });//结果是一个数组
        */
         
    }
    addItem = (data)=>{
        //使用this方法传入数据，展开运算符 
        this.setState({  
            todo:[...this.state.todo,data]
        },()=>{
            // localStorage.setItem();
        })
    }
    delItem=(idx,e)=>{
        //1. 不能直接改变或处理state，通过setState改变
        console.log(idx,e);
        //2. setState是异步执行
         this.setState((state,props)=>{
            let todo=[...this.state.todo];
            todo.splice(idx,1);
            console.log(state.todo);
            return {
                todo:todo
                //  todo:state.todo.filter((item,index)=>{idx!==index})
            }
        })
    }
    render() {
        return (
            <div>
                {/* add为属性 */}
                <TodoInput add={this.addItem} del={this.delItem}/>
                {/* 一个组件上可以绑定多个属性 */}
                <Todoing del={this.delItem} add={this.addItem}/>
            </div>
        )
    }
}

