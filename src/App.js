import React, { Component } from 'react'
import Header from './Components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Container/Home'
import Start from './Container/Start'
import Api from './Container/Api'
import About from './Container/About'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className="content">
                    <div className="left">
                        <Route path="/home" component={Home}/>
                        <Route path="/start" component={Start}/>
                        <Route path="/api" component={Api}/>
                        <Route path="/about" component={About}/>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </Router>
        )
    }
}
