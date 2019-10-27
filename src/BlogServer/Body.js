import React, { Component } from 'react';
import List from './List.js'
import "./Todolist.css"

export default class Bosies extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="bodies">
                <List title="正在进行" todo={this.props.todo} add={this.props.add} finish={this.props.finish} deleted={this.props.deleted} status="working"/>
                <List title="已经完成" todo={this.props.todo} add={this.props.add} finish={this.props.finish} deleted={this.props.deleted} status="finished"/>
            </div>
        )
    }
}