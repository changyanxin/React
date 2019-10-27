import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import {Button} from 'antd'
import {Content} from './Router/Content'

export default class Sider extends Component {
    render() {
        let style = {float:'left'}
        return (
            <div>
                <ul style={style}>
                    <Button type='primary' block>按钮</Button>
                    {/* <li>
                        <Link to={{pathname:'/hoc',state:{id:100},search:'?username=zhangsna'}}>Hoc</Link>
                    </li>
                    <li>
                        <Link to='/parent'>Parent</Link>
                    </li> */}
                    <li>
                        <NavLink activeStyle={{color:'red'}} to={{pathname:'/hoc',state:{id:100},search:'?username=zhangsna'}}>Hoc</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{color:'yellow'}} to='/parent'>Parent</NavLink>
                    </li>
                    {   
                        [1,2,3,4].map((item)=>(
                            <li key={item}>
                                <NavLink activeStyle={{color:'red'}} 
                                to={'/content/'+item}>
                                    帖子{item}
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}
