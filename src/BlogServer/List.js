import React, { Component } from 'react';
import Child from './child';
import "./Todolist.css"

export default class Thelist extends Component{
    render(){
        return(
            <div className="list">
                <p className="list-title">
                {this.props.title}
                    <span className="todo-num">
                        {this.props.todo.list.filter(item => {
                            return item.status === this.props.status
                        }).length}
                    </span>    
                </p>
                <div>
                {
                    this.props.todo.list.filter(item => {
                        return item.status === this.props.status
                    }).map(item => {
                        return <Child item={item} toChangeStatus={this.props.finish} toBackStatus={this.props.add} key={item.id} clickDelete={this.props.deleted}/>
                    })
                }
                </div>
            </div>
        )
    }
}