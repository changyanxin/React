import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect,withRouter} from 'react-router-dom';
import Hoc from './Hoc/Hoc';
import Parent from './Context/Parent';
import Sider from './Sider'
import NoMatch from './NoMatch'
import Content from './Router/Content'
import Hooks from './Router/Hooks'

function Login(props){
    console.log(props);
    return <button>登录</button>
}

let LoginWithRouter = withRouter(Login);
export default class App extends Component {
    render() {
        return (
            // <Route basename="/build">
            <Router>
                <LoginWithRouter/>
                <div>
                    
                    
                    <Sider/>
                    <div style={{float:'left',border:'2px red solid',marginLeft:100}}>
                        {/* <Route path='/hoc' component={render=()=><h1>Render方法</h1>}/>     */}
                        {/* <Route exact path='/'>严格匹配 */}
                        {/* Switch与严格匹配类似 */}
                        <Switch>
                            <Route exact path="/hoc" component={Hoc}/>
                            <Route path='/parent' component={Parent}/>
                            {/* <Redirect from="/old" to="/hoc"/> */}
                            <Route path="/old" render={()=><Redirect to='/hoc'/>}/>
                            <Route path='/content/:id' component={Content}/>
                            <Route path="/nomatch">
                                <NoMatch/>
                            </Route>
                            <Route path='/hoc/:id' component={Hooks}/>

                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
