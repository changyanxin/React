import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
import All from './All'
import Jinghua from './Jinghua'
import Share from './Share'

export default class Home extends Component {
    render() {
        let {url} = this.props.match;
        console.log(this.props.match.url);
        return (
            <div>
                <div className="home">
                    <Link to={`${url}/all`}>全部</Link>
                    <Link to={`${url}/jinghua`}>精华</Link>
                    <Link to={`${url}/share`}>分享</Link>
                </div>
                <div>
                    <Route path={url+'/all'} component={All}/>
                    <Route path={url+'/jinghua'} component={Jinghua}/>
                    <Route path={url+'/share'} component={Share}/>
                </div>
            </div>
        )
    }
}
