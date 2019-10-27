import React from 'react';
import {useHistory} from 'react-router-dom';
import Hooks from './Hooks'

// 无状态组件
export default class Content extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json()) 
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id == this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json()) 
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div style={{border:'2px solid green',width:'500px',height:'450px',overflow:'hidden'}} key={item.id}>
                            <h2>{item.title}</h2>
                            <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                        </div>
                    ))
                }
                {/* <button onClick={toHoc}>跳转到Hoc组件</button> */}
                {/* {props.id}
                Content */}
                {/* {props.match.params.id} */}
            </div>
        )
    }
}