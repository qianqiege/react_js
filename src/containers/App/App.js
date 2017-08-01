import cookie from 'js-cookie';
import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

import { Layout  } from 'antd';
import User from 'models/User';
import Menus from "./Menus";

import './App.scss';

import Login from "../Login/Login";

const { Header, Sider, Content, Footer } = Layout;

@observer
class App extends Component {
  static propTypes = {
    children: PropTypes.element,
  };
  constructor(props) { 
    super(props);
    this.state = {
      title: "慢病健康管理平台",
    };
    this.renderAuthorLogin = this.renderAuthorLogin.bind(this);
    this.handleOut = this.handleOut.bind(this);   
  }
  //左侧菜单、头部；
  renderAuthorLogin() {
    return (
      <Layout className="">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={() => {}}
          width={270}
        >
          <div className="logo">
            <img src="../.././images/yblogo.png" />
            <span> { this.state.title } </span>
          </div>
          <Menus />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <span className="out-login-button" onClick={this.handleOut}>退出</span>
          </Header>
          <Content style={{ margin: '24px 16px 0'}}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            慢病健康管理平台 ©2016 Created by 御邦医通
          </Footer>
        </Layout>
      </Layout>
    );
  }
  //登出；
  handleOut() {
  
    cookie.set("access_token", "");
    location.href = "/";
  }
  render() {
    const { isAuthenticated } = User.auth;
    return (
      <div>
        { isAuthenticated ? this.renderAuthorLogin() : <Login /> }
      </div>
    );
  }
}

export default App;
