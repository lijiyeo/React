import React, { Component } from 'react';
import "./Todolist.css"

export default class child extends Component{
    theChange = () => {
        if(this.props.item.status === 'working'){
            this.props.toChangeStatus(this.props.item.id)
        }else if(this.props.item.status === 'finished'){
            this.props.toBackStatus(this.props.item.text)
            this.props.clickDelete(this.props.item.id)
        }
    }
    clickDelete = () => {
        this.props.clickDelete(this.props.item.id)
    }
    render() {
        return (
            <div className="list-li">
                <input className="list-input" type="checkbox" onChange={this.theChange} checked={this.props.item.status === 'finished'} ></input>
                <p className="list-p">{this.props.item.text}</p>
                <button className="list-button" onClick={this.clickDelete}>删除</button> 
            </div>
        )
    }
}