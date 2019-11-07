import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(){
        super();
        this.state = {
            detail:"",
            title:"",
            time:""
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topic/'+this.props.match.params.id)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                detail:res.data.content,
                title:res.data.title,
                time:res.data.create_at
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.time.slice(0,10)}</p>
                <div dangerouslySetInnerHTML = {{ __html: this.state.detail}}></div>
            </div>
        )
    }
}