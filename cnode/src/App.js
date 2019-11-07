import React, { Component } from 'react';
import Header from './Components/Header';
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './Container/Home/Home';
import Start from './Container/Start';
import Api from './Container/Api';
import About from './Container/About';
import Right from './Components/Right';
import Login from './Container/Login';
import Detail from './Container/Home/Detail';
import {Redirect} from 'react-router-dom'

export default class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Header/>
                </div>
                <div className="content">
                    <div className="content-left">
                        <Redirect from="/" to="/home/all"/>
                        <Redirect from="/home" to="/home/all"/>
                        <Route path="/home" component={Home} />
                        <Route path="/start" component={Start} />
                        <Route path="/api" component={Api} />
                        <Route path="/about" component={About} />
                        <Route path="/login" component={Login} />
                        <Route path="/topic/:id" component={Detail}/>
                    </div>
                    <div className="content-right">
                        <Right/>
                    </div>
                </div>
            </Router>
        )
    }
}