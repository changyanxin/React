import React, { Component } from 'react'
let url = 'https://api.apiopen.top/musicRankingsDetails?type=1';
function getDisplayName(Com){
    return Com.displayName || Com.name ||'Component';
}
function hoc(Com,url,title){
    class Fetch extends Component{
        constructor(){
            super();
            this.state={
                data:[]
            }
        }
        componentDidMount(){
            // let url = 'https://api.apiopen.top/musicRankingsDetails?type=1'; 
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
        render(){
            return( 
              <div>
                <p>{title}</p>
                <Com {...this.data} data={this.state.data}/>
              </div>
            )
        }
    }
    Fetch.displayName = `Fetch(${getDisplayName (Com)})`;
    return Fetch;
}
class Music extends Component{
    render(){
        return(
            <ul>
                {
                    this.props.data.map(
                        (item)=><li>{item.title}{item.author}</li>
                    )
                }
            </ul>
        )
    }
}
class Music2 extends Component{
    render(){
        return(
            <ul>
                {
                    this.props.data.map(
                        (item)=><p>{item.title}</p>
                    )
                }
            </ul>
        )
    }
}
let Mymusic = hoc(Music,url,'音乐');
let Mymusic2 = hoc(Music2,url,'新闻');

export default class Hoc extends Component {
    render() {
        console.log(this);
        return (
            <div>
                <Mymusic/>
                <Mymusic2/>
            </div>
        )
    }
}
