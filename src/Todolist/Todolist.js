import React,{Component} from 'react';
import storage from './Storage';
import Todoinput from './Todoinput'
import Todoing from './Todoing'
export default class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
             
            ]
        };
    }   

    addData=(data)=>{
            let title=data;
            let tempList=this.state.list;
            console.log(title,tempList);
            tempList.push({
                title:title,
                checked:false
            })
            this.setState({

                list:tempList
            })
            storage.set('todolist',tempList); 
    }
    checkboxChage=(key)=>{
        console.log("000");
        // alert('111');
        let tempList=this.state.list;
        console.log(tempList);
        tempList[key].checked=!tempList[key].checked;
        this.setState({
            list:tempList
        })

        //执行缓存数据
        storage.set('todolist',tempList);

    }
    removeData=(key)=>{
        let tempList=this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
        //执行缓存数据
        storage.set('todolist',tempList);
    }
    //生命周期函数  页面加载就会触发
    componentDidMount(){
        //获取缓存的数据
        var todolist=storage.get('todolist');  
        if(todolist){
            this.setState({

                list:todolist
            })
        }

    }
    render() {
        return (
            
            <div>
               <Todoinput addData={this.addData}/>
               <Todoing addData={this.addData} todo={this.state.list} 
               removeData={this.removeData} checkboxChage={this.checkboxChage}/>
            </div>
        );
    }
}
