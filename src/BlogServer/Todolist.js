import React, { Component } from 'react';
import Header from './Header';
import Bodies from './Body';


export default class Todolist extends Component{
    constructor() {
        super()
        let todolist = JSON.parse(localStorage.getItem('list'));
        if (todolist === null) {
            this.state = {
                todo:{
                    list: []
            }
                }
        } else {
            this.state = {
                todo:{
                    list: todolist
                }
                
            }
        }
    }

    add=(item)=>{ 
        this.setState(preState => {
            let newTodo = preState.todo;
            let list = Object.assign([], newTodo.list)
            list.push({
                text: item,
                id: new Date().getTime(),
                status: 'working'
            })
            newTodo.list = list
            localStorage.setItem("list",JSON.stringify(newTodo.list));
            return {
                todo: newTodo
            }
        })
    }

    deleted=(id) => {
        this.setState(preState => {
            let newTodo = preState.todo
            let list = newTodo.list.filter(item => id !== item.id)
            newTodo.list = list
            localStorage.setItem("list",JSON.stringify(newTodo.list));
            return {
                todo: newTodo
            }
        })
    }
    finish=(id) => {
        this.setState(preState => {
            let newTodo = preState.todo
            let list = newTodo.list.map(item => {
                if(item.id === id) {
                    item.status = 'finished'
                }
                return item
            })
            newTodo.list = list
            localStorage.setItem("list",JSON.stringify(newTodo.list));
            return {
                todo: newTodo
            }
        })
    }

    render(){
        return(
            <div className="todolist">
                <Header todo={this.state.todo} add={this.add}/>
                <Bodies todo={this.state.todo} add={this.add} finish={this.finish} deleted={this.deleted}/>
            </div>
        )
    }
}