import React, { Component } from 'react'
import "./Todolist.css"


export default class Todoinput extends Component {
    theAddList = (event) => {
        if(event.key === 'Enter') {
            this.props.addList(event.target.value)
            event.target.value = ''
        }
    }
    render() {
        return (
            <div>
                <input type="text" onKeyPress={this.theAddList} className="header-input" placeholder="添加" required="required"></input>
            </div>
        )
    }
}
