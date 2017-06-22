//这是疾病谱定位页面

import React from 'react';
import ReactDOM from 'react-dom';
import { Icon,Button } from 'antd';

import MeanInfo from './meanInfo.js';
import MeanSearch from './meanSearch.js';
import UserInfo from './userInfo.js';
import './diseaseLocation.css';


class DiseaseLocation extends React.Component{
	render(){
		return (
			<div>
				<MeanSearch />			
				<div className="userHealth userSlide">
					<UserInfo />
					<div className="pingjia">
						<p><Icon type="edit" style={{ fontSize: 18, color: '#37474f' }} />个人健康状况评价</p>
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
					<div className="zhu">
						<p><Icon type="fork" style={{ fontSize: 18, color: '#37474f' }} />主症</p>
						<textarea />
					</div>
    				<div className="ji">
						<p><Icon type="fork" style={{ fontSize: 18, color: '#37474f' }} />急症</p>
						<textarea />
					</div>					
					<div className="jian">
						<p><Icon type="fork" style={{ fontSize: 18, color: '#37474f' }} />兼症</p>
						<textarea />
					</div>					
					<div className="ci">
						<p><Icon type="fork" style={{ fontSize: 18, color: '#37474f' }} />次兼症</p>
						<textarea />
					</div>
					<Button className="submit">提交</Button>				
				</div>
				<MeanInfo />
			</div>
		)
	}
}

export default DiseaseLocation;