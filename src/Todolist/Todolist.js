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

    addData=(e)=>{
        //按下回车的时候在增加
            let title=this.refs.title.value;
            let tempList=this.state.list;

            tempList.push({
                title:title,
                checked:false
            })
            //改变后的值赋值给list

            this.setState({

                list:tempList
            })

            //表单置为空
            this.refs.title.value='';

            //执行缓存数据           

            storage.set('todolist',tempList);


        
    }
    checkboxChage=(key)=>{

        // alert('111');
        let tempList=this.state.list;
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
               <Todoinput/>
               <Todoing/>
            </div>
        );
    }
}
