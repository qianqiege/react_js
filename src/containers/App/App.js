import cookie from 'js-cookie';
import React, { PropTypes, Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import { Layout, Menu, Icon, Breadcrumb,  } from 'antd';
import User from 'models/User';
import Menus from "./Menus";

import './App.scss';

import Login from "../Login/Login";

const SubMenu = Menu.SubMenu;
const { Header, Sider, Content } = Layout;

@observer
class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      title: "慢病健康管理平台",
    }
    this.renderAuthorLogin = this.renderAuthorLogin.bind(this);
    this.handleOut = this.handleOut.bind(this);   
  }
  //左侧菜单、头部；
  renderAuthorLogin() {
    return (
      <Layout className="apps">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
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
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff'}}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
  //登出；
  handleOut() {
    const { isAuthenticated } = User.auth;
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
