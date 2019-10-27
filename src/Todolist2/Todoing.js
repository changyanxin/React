import React, { Component } from 'react'
import PropsTypes from 'prop-types' 

export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        var index;
        return (
          <div>
            <ul>
              <div>正在进行</div>
              {
                todo.map((item,idx)=>{
                    return (
                      <div>
                        <input class="one" type="checkbox" onChange={(e)=>this.props.del(idx,e)}/>
                        <li class="two" key={idx}>{item}&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                        </li>
                      </div>
                    )
                })  //其中this.props.del不能直接加小括号，因为这表示调用
              }              
            </ul>
            <ul>
              <div>已经完成</div>
              {
                todo.map((item,idx)=>{
                    return <div>
                      <div>
                        <input class="one" type="checkbox"/>
                        <li class="two" key={idx}>{item}&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                        </li>
                      </div>
                    </div>
                })  //其中this.props.del不能直接加小括号，因为这表示调用
              }              
            </ul>
          </div>
        )
    }
}
//定义Todoing类的属性
// Todoing.propTypes = {
//   todo:PropsTypes.array,
//   del:PropsTypes.func
// }

// Todoing.defaultProps = {
//   todo:[1,2,3,4,4]
// }

