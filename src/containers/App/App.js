import cookie from 'js-cookie';
import React, { PropTypes, Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import { Layout, Menu, Icon,  } from 'antd';
import User from 'models/User';

import './App.scss';

import Login from "../Login/Login";

const SubMenu = Menu.SubMenu;
const { Header, Sider, Content } = Layout;

@observer
class App extends Component {
 static propTypes = {
    children: PropTypes.element,
  };
  constructor(props) { 
    super(props);
    this.listNav = this.listNav.bind(this);
    this.renderAuthorLogin = this.renderAuthorLogin.bind(this);
    this.handleOut = this.handleOut.bind(this);
    // this.handleOpen = this.handleOpen.bind(this);
    
  }
  state = {
    collapsed: false,
    title: "慢病健康管理平台",
    navTitle: [
                {key: "sub1", ListTitle:"首页", iconType: "skin", childTitle: 
                  [
                    {key: "child1", littleTitle: "健康管理师首页", linkTo: "/" }
                  ]
                },
                {key: "sub2", ListTitle:"角色管理模块", iconType: "user-add", childTitle: 
                  [
                    {key: "child2",littleTitle: "角色配置", linkTo: "/rolesmanage/roles" },
                    {key: "child3",littleTitle: "健康管理师列表", linkTo: "/rolesmanage/doctorsList" },
                  ]
                },
                {key: "sub3", ListTitle:"健康管理记录号", iconType: "skin", childTitle: 
                  [
                    {key: "child4",littleTitle: "记录号", linkTo: "/healthrecord" },
                  ]
                },
                {key: "sub4", ListTitle:"档案室模块", iconType: "skin", childTitle: 
                  [
                    {key: "child5",littleTitle: "新建档案", linkTo: "/recordManage/newRecord" },
                    {key: "child6",littleTitle: "客户列表", linkTo: "/recordManage/patientList" },
                  ]
                },
                {key: "sub5", ListTitle:"体检室模块", iconType: "skin", childTitle: 
                  [
                    {key: "child7",littleTitle: "随访包测量", linkTo: "/physical/followUpSurvey" },
                    {key: "child8",littleTitle: "血压数据录入", linkTo: "/physical/bloodPressure" },
                    {key: "child9",littleTitle: "血糖数据录入", linkTo: "/physical/bloodSugar" },
                    {key: "child10",littleTitle: "体温数据录入", linkTo: "/physical/temperature" },
                    {key: "child11",littleTitle: "体重数据录入", linkTo: "/physical/weight" },
                    {key: "child12",littleTitle: "心率数据录入", linkTo: "/physical/heartRate" },
                    {key: "child13",littleTitle: "血脂数据录入", linkTo: "/physical/blood_fat" },
                    {key: "child14",littleTitle: "尿酸数据录入", linkTo: "/physical/unine" },
                  ]
                },
                {key: "sub6", ListTitle:"方案室模块", iconType: "skin", childTitle: 
                  [
                    {key: "child15",littleTitle: "疾病谱定位", linkTo: "/means/diseaseLocation" },
                    {key: "child16",littleTitle: "筑脊模块", linkTo: "/means/spine" },
                    {key: "child17",littleTitle: "健康管理模块", linkTo: "/means/healthManagement" },
                  ]
                },
                {key: "sub7", ListTitle:"院外动态管理", iconType: "skin", childTitle: 
                  [
                    {key: "child18",littleTitle: "异常管理", linkTo: "/dynamic/exceptionData" },
                    {key: "child19",littleTitle: "随访记录", linkTo: "/dynamic/followUpRecord" },
                  ]
                },
    ],
    auth: true, //判断是否登录；
    current: '1',
    openKeys: [],
  } 

  //菜单项列表；
  listNav() { 
    const navTitles = this.state.navTitle;
    return(
      navTitles.map(navTitle => { 
        const childTitles = navTitle.childTitle;
        const ctl = childTitles.map(childTitle => { 
          return (
            <Menu.Item key={childTitle.key}>
              <Link to={'' + childTitle.linkTo + ''}>
                <Icon type="user" />
                <span className="nav-text"> { childTitle.littleTitle } </span>
              </Link>
            </Menu.Item>
          );
        });
        return(
              <SubMenu className="menu-font" key={navTitle.key} title={<span><Icon type={navTitle.iconType} /><span> {navTitle.ListTitle} </span></span>}>
                { ctl }
              </SubMenu>
        );
      }) 
    );
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    if( !this.state.collapsed ) {
      this.setState({
        title: "",
      });
    }else{
      this.setState({
        title: "慢病健康管理平台",
      });
    }
  }

  //点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  getAncestorKeys = (key) => {
    const map = {
      sub8: ['sub7'],
    };
    return map[key] || [];
  }
  handleClick = (e) => {
    this.setState({ current: e.key });
  }

  renderAuthorLogin() {
    
    return (
      <Layout className="apps">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={270}
          collapsedWidth={90}
        >
          <div className="logo">
            <img src="../.././images/yblogo.png" />
            <span> { this.state.title } </span>
          </div>
          <Menu 
            theme="dark" 
            mode="inline"
            openKeys={this.state.openKeys} 
            defaultSelectedKeys={['1']} 
            className="aside-bar"
            onOpenChange={this.onOpenChange}
            >

            { this.listNav() }
          </Menu>

        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span className="out-login-button" onClick={this.handleOut}>退出</span>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff'}}>
            {this.props.children}
          </Content>
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
