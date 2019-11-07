import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class All extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            linum:[1,2,3,4,5,6,7,8,9,10]
        }
    }

    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics/')
        .then(res=>res.json())
        .then(res=>{
            res.data.map((item)=>{
                this.setState({
                    data:res.data
                })
            })
        })
    }

    Page=(page)=>{
        fetch("https://cnodejs.org/api/v1/topics/?tab=all&page="+page)
        .then(res=>res.json())
        .then(res=>{
            res.data.map((item)=>{
                this.setState({
                    data:res.data
                })
            })
        })
    }
    
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.data.map((item,idx)=>
                            <li className="Li" key={idx}>
                                <img className="Img" src={item.author.avatar_url}/>
                                <span className="Span">{item.reply_count}/{item.visit_count}</span>
                                <span style={{width:"20px",height:"20px",backgroundColor:"lightgrey",color:"grey"}}>问答</span>
                                <Link to={'/topic/'+item.id} className="Title">{item.title}</Link>
                                <span className="Time">
                                    <img className="Img2" src={item.author.avatar_url}/>
                                    {item.last_reply_at.slice(0,10)}
                                </span>
                            </li>
                        )
                    }
                </ul>
                <div>
                    <ul className="Pages" >
                       {
                            this.state.linum.map((item)=>{
                                return <li key={item} onClick={this.Page.bind(this,item)}>{item}</li>
                            })
                       }
                    </ul>
                </div>
            </div>
        )
    }    
}