import React, { Component } from 'react';
import Todoinput from './Todoinput';
import './Todolist.css' 

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="header-content">
                    <div style={{float:"left",marginRight:"20px"}} className="header-title">ToDoList</div>
                    <Todoinput style={{float:"left"}} addList={this.props.add}/>
                </div>
            </div>
        )
    }
}