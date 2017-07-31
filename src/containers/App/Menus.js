import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import { Menu, Icon  } from 'antd';
import MenuData from "models/MenuData";

import './App.scss';

const SubMenu = Menu.SubMenu;

@observer 
class Menus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: '1',
			openKeys: [],
		};
	}
	componentDidMount() {
		MenuData.getMenus();
	}
	//设置菜单项的折叠和展开；
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
	handleSelect = ( obj ) => {
		//console.log(obj.key);
		if(obj.key == 100) {
			location.href="/registeredPost";
		}		
	}
	renderMenuItem() {
		const data = MenuData.menuList.data;
		return(
			data.map(d => { 
				const items = d.children;
				// if(!items) {
				// 	console.log()
				// }
				const ctl = items.map(item => { 
				return (
					<Menu.Item key={item.id}>
						<Link to={'' + item.url + ''}>
						<Icon type="user" />
						<span className="nav-text"> { item.name } </span>
						</Link>
						</Menu.Item>
						);
					});
					return(
					<SubMenu 
						className="menu-font" 
						key={d.id} 
						title={<span><Icon type={d.icon} /><span> {d.name} </span></span>}
						onTitleClick={this.handleSelect}
					>
						{ ctl }
					</SubMenu>
				);
			}) 
		);
	}
	render() {
		return (
			<Menu 
				theme="dark" 
				mode="inline"
				openKeys={this.state.openKeys} 
				defaultSelectedKeys={['1']} 
				className="aside-bar"
				onOpenChange={this.onOpenChange}
			>
				{ this.renderMenuItem() }
			</Menu>
		);
	}
}
export default Menus;