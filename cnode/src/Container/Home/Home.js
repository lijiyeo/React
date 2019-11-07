import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import All from './All'
import Jinghua from './Jinghua'
import Share from './Share'
import Ask from './Ask'
import Zhaopin from './Zhaopin'
import Test from './Detail'


export default class Home extends Component{
    render(){
        let {url}=this.props.match;
        return(
            <div>
                <div className="hHeader">
                    <Link className="hLink" to={`${url}/all`}>全部</Link>
                    <Link className="hLink" to={`${url}/jinghua`}>精华</Link>
                    <Link className="hLink" to={`${url}/Share`}>分享</Link>
                    <Link className="hLink" to={`${url}/ask`}>问答</Link>
                    <Link className="hLink" to={`${url}/zhaopin`}>招聘</Link>
                    <Link className="hLink" to={`${url}/Test`}>客户端测试</Link>
                </div>
                <div>
                    <Route path={url+'/all'} component={All}/>
                    <Route path={url+'/jinghua'} component={Jinghua}/>
                    <Route path={url+'/Share'} component={Share}/>
                    <Route path={url+'/ask'} component={Ask}/>
                    <Route path={url+'/zhaopin'} component={Zhaopin}/>
                    <Route path={url+'/Test'} component={Test}/>
                </div>
            </div>
        )
    }
}