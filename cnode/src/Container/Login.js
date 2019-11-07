import React, { Component } from 'react';

export default function Login(props){
    // 有一个按钮就可以 点它跳到首页
    function login(){
        props.history.push('/home/all');
    }
        return(
            <div>
                <div className="Top"><span>主页</span> / 登录</div>
                <div className="loginBody">
                    <div className="loginInput">
                        用户名 <input type="text" name="username"/>
                    </div>
                    <div style={{marginLeft:"14px"}} className="loginInput">
                        密码 <input type="pwd" name="pwd"/>
                    </div>
                    <div className="loginBut">
                        <button onClick={login}>通过 GitHub 登录</button>
                    </div>
                </div>
            </div>
        )
}