import React,{Fragment,Component} from 'react';
import ReactDOM from 'react-dom';
import {ShowTime} from './showTime';//默认为js文件
import './index.css';
import Request from './Request.js';
import Parent from './Context/Parent';
import {con,con2} from './Context/Context';
import Hoc from './Hoc/Hoc';
import Portals from './Portals/Portals';
import ParentPortals from './Portals/ParentPortals';
import App2 from './App2';
import App from './App';

import Todolist from './Todolist/Todolist';
//默认导出(导出名和导入名)不用加大括号
//命名导出？？？？？？？？？？

// 容器组件/UI组件（展示组件）
// 容器组件(container/pages'):逻辑+功能
// UI组件(components):展示,返回React元素

//智能组件/木偶组件

//函数组件/类组件

// Context:
// 1. 生成Context，可写在一个js文件中，export导出
// 2. 在根组件上import Provider配置Provider，加上value属性
// 3. 在需要获取数据的组件（Consumer），配置Consumer
// Consumer组件里是个函数，函数的参数是一个value值

//组件交互
//父组件->子组件:调用子组件时添加属性，子组件通过props拿到传递的数据
//子组件->父组件：
// ReactDOM.render(<Todolist/>,
//         document.querySelector("#root")
//  );

// let {Provider,Consumer} = React.createContext();
// let id = 1234;

ReactDOM.render(
       // <App/>,
       <Todolist/>,
       // <App2/>,
       // <ParentPortals/>,
       // <Portal/>,
       // <Hoc/>,
       document.querySelector("#root")
              // <con.Provider value={id}>
              //        <div>2212</div>
              //        <con2.Provider value='aaaa'>
              //               <Parent/>
              //        </con2.Provider>
              // </con.Provider>,
              // document.querySelector("#root")
);


//2019/10/9
// var num = 100;
// var num = [1,2,3,4,5];
// ReactDOM.render(<ShowTime name="zhangsan" age={num}/>,
//         document.querySelector("#root")
// );

//显示当前系统时间
// function showTime(){
//     var ele = <div>{new Date().toLocaleString()}</div>;
//     ReactDOM.render(ele,document.querySelector("#root"));
// }
// setInterval(showTime,1000);


//2019/10/8
/**
 * JSX的语法创建虚拟DOM
 * h1不是标签，而是react元素即对象
 * 不加引号相当于一个对象{type[,props[,children]]}
 */

// var obj={
//     type:"div",
//     props:{
//         id:"box",
//         class:"box",
//         children:[
//             "hello","react",
//             {
//                 type:"h1",
//                 props:{
//                     id:"tit",
//                     class:"tit",
//                     children:["title","react"]
//                 }
//             }
//         ]
//     }
// }; 

// function render(obj,container){
//     /**解构赋值 */
//     var {type,props} = obj;

//     //文档碎片相当于一个变量，一次性添加节点
//     var fragment = document.createDocumentFragment();

//     var ele = document.createElement(type);
//     for(var item in props){
//         /**item为一个变量用中括号 */
//         if(item === "class"){
//             ele.className = props[item]
//         }else if(item === 'children'){
//             for(var i = 0; i < props.children.length; i++){
//                 if(typeof props.children[i] === 'object'){
//                     render(props.children[i],ele)
//                 }else{
//                     // ele.innerHTML += props.children[i];
//                     var txt = document.createTextNode(props.children[i]);
//                     ele.appendChild(txt);
//                 }
//             }
//         }else{
//             ele[item] = props[item];
//         }
//     }
//     fragment.appendChild(ele);
//     container.appendChild(fragment);
// }
// render(obj,document.getElementById("root"));

// var str = 'react';
// var ele = <h1 class="tit" children="tit">hello {str}</h1>;
// var ele = React.createElement(
//     'h1',
//     {id:"tit",class:"tit"},
//     "hello",
//     React.createElement(
//         'p',
//         {id:"t",class:"tit"},
//         "react"
//     )
// );
// console.log(ele);
// ReactDOM.render(ele, document.getElementById('root'));

//页面渲染过程
//请求html页面、浏览器html解析器解析html文件、生成DOM tree
//link引入css文件、css解析器解析css，生成css对象模型（CSSOM）和DOM tree结合生成render tree（渲染树）
//最后

//页面回流（重排reflow）：DOM结构变化、内容变化、大小位置的变化
//页面重绘（repaint）：颜色变化（背景色，字体，边框），显示（display）

//1. 先用变量进行dom处理，最后一次渲染，与文档碎片类似
// var div = document.getElementById('root');
// var str = "";
// console.time('time');
// for(var i = 0; i < 1000; i++){
//     str += '<p>'+i+'</p>';
// }
// div.innerHTML = str;
// console.timeEnd('time');
//2. 对于样式处理
// var div = document.getElementById("root");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.className = "active";
//3. offsetLeft,offsetWidth等都会引起回流
// var width = div.offsetWidth;
// setInterval(()=>{
//     width += 1;
//     div.style.width = width + 'px';
// },100)
//4. 文档碎片（内存中的一个变量）


