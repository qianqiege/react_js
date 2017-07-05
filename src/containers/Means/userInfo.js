//这是方案室三个页面共用的个人信息组件

import React from 'react';
import { Icon } from 'antd';
import './userInfo.css';


class UserInfo extends React.Component{
	render(){
		return (
			<div className="userInfos">
				<p><Icon type="user" style={{ fontSize: 18, color: '#37474f' }} />个人信息</p>
				<div className="row">
					<div className="col">姓名：</div>
					<div className="col">民族：</div>
					<div className="col">性别：</div>
				</div>
				<div className="row">
					<div className="col">婚姻状况：</div>
					<div className="col">出生日期：</div>
				</div>	
				<div className="row">
					<div className="col">联系方式：</div>
					<div className="col">通讯地址：</div>
				</div>							
			</div>
		);
	}
}

export default UserInfo;