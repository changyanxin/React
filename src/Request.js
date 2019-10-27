import React, { Component } from 'react'
//数据请求：axios
import Axios from 'axios';

export default class Request extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        // Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1')
        //     .then((res)=>{
        //         console.log(res);
        //         this.setState({
        //             data:res.data.result
        //     })
        // })
        let url = 'https://api.apiopen.top/musicRankingsDetails?type=1'; 
        //默认是get请求，可配置第二个参数，配置请求的信息
        fetch(url,{method:'post'})
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data: res.result
                })
            })
    }
    render() {
        return (
            
            <div>
                <h1>请求数据:</h1>
                <ul>
                    {
                        this.state.data.map(
                            (item,idx)=><li key={idx}>
                                    <p>歌名：{item.title}</p>
                                    <p>作者：{item.author}</p>
                                </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
