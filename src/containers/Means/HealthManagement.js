//这是健康管理模块页面
import React from 'react';
import { Icon,Button } from 'antd';

import MeanInfo from './meanInfo.js';
import MeanSearch from './meanSearch.js';
import UserInfo from './userInfo.js';


class HealthManagement extends React.Component{
	constructor(props) {
		super(props);
	}
	
	render(){
		return (
			<div>
				<MeanSearch />	
					<div className="userHealth userSlide">
						<UserInfo />
						<div className="pingjia">
							<p><Icon type="edit" style={{ fontSize: 18, color: '#37474f' }} />健康管理指导意见</p>
							<div className="fangmian">
								<span>生理方面：</span>
								<textarea />
							</div>
							<div className="fangmian">
								<span>情志方面：</span>
								<textarea />
							</div>
							<div className="fangmian">
								<span>营养方面：</span>
								<textarea />
							</div>
							<div className="fangmian">
								<span>生活方式方面：</span>
								<textarea />
							</div>
						</div>
						
						<Button className="submit">提交</Button>				
					</div>		
				<MeanInfo />
			</div>
		)
	}
}

export default HealthManagement;