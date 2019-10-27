import React,{Fragment,Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

//组件：返回一个react元素(一个闭合的)即JSX对象当返回多个元素时再套一个进行封装当只起包裹作用时用React.Fragment，
//接收props只读不能修改，
//用到变量时需要大括号
//(1)用函数声明一个组件
// function ShowTime(props){
//     console.log();
//     // return( <React.Fragment>
//     //             <div></div>
//     //             <div>{props.name}{props.age}{new Date().toLocaleString()}</div>
//     //         </React.Fragment>
//     //解构赋值，上下都改
//     return( <Fragment>
//                 <div></div>
//                 <div>{props.name}{props.age}{new Date().toLocaleString()}</div>
//             </Fragment>
//     )
// }
//(2)用类声明一个组件，继承自React
class ShowTime extends Component{
    //初始化
    constructor (){
        super();
        console.log("constructor");
        this.state = {
            time:new Date().toLocaleString(),
            a:100,
            b:200
        };
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        if(this.state.a>10){
            return true
        }
        return false
    }
    componentDidUpdate(preProps,preState,data){
        console.log("didupdate");
        console.log(preProps,preState,data);
    }
    getSnapshotBeforeUpdate(){
        console.log("snapshotbeforeupdate");
        return {name:this.state.a}
    }
    componentDidMount(){
        console.log("didmount");
    }
    render(){
        console.log("render");
        var {name,age} = this.props;
        return (
            <Fragment>
                {/* 条件渲染 */}
                {name.length>5 ? <div>姓名:{name}</div> : ""}
                {name.length>5 && <div>姓名:{name}</div>}
                <div>{this.state.time}</div>
                {/* 循环渲染 */}
                <div>
                    {
                        age.map((item,index)=>{
                            if(index%2 === 0){
                                return <p key={index}>{item}</p>
                            }
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

//显示当前系统时间
// function showTime(){
//     var ele = <div>{new Date().toLocaleString()}</div>;
//     ReactDOM.render(ele,document.querySelector("#root"));
// }
// setInterval(showTime,1000);

//默认导出：只能导出一次，被引入时可以重命名，不用加{}
// export default ShowTime;

//命名导出:可以导出多个，被引入时与导出的名一致，加{}
export {ShowTime};
export const num = 100;
export const num1 = 100;
export const num2 = 100;