//这是方案室三个页面共用的个人信息组件

import React from 'react';
import { Icon } from 'antd';
import MeansInfo from 'models/MeansInfo';
import './userInfo.css';
import { observer } from 'mobx-react';



@observer

class UserInfo extends React.Component{
	render(){
		const { name,nation,sex,marriage,birthday,phone,address } = MeansInfo.meansUser;
		return (
			<div className="userInfos">
				<p><Icon type="user" style={{ fontSize: 18, color: '#37474f' }} />个人信息</p>
				<div className="row">
					<div className="col">姓名：{name}</div>
					<div className="col">民族：{nation}</div>
					<div className="col">性别：{sex}</div>
				</div>
				<div className="row">
					<div className="col">婚姻状况：{marriage}</div>
					<div className="col">出生日期：{birthday}</div>
				</div>	
				<div className="row">
					<div className="col">联系方式：{phone}</div>
					<div className="col">通讯地址：{address}</div>
				</div>							
			</div>
		);
	}
}

export default UserInfo;