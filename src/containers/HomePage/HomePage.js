import './HomePage.scss';
import React,{ Component } from "react";
import { Icon } from 'antd';
import { Link } from 'react-router';

class Home extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			 <div className="con">
			<p>健康管理师首页</p>
			<div className="homeCon">
				<div className="top">
						<div>
							<Link to="/holographicView" style={{display: 'block', color: '#fff'}}>
								<Icon type="question-circle-o" />
								<span>待处理异常</span>
							</Link>
						</div>
					<div>
						<Icon type="phone" />
						<span>随访预约通知</span>
					</div>					
					<div>
						<Icon type="schedule" />
						<span>今日门诊预约</span>
					</div>					
					<div>
						<Icon type="retweet" />
						<span>转诊通知</span>
					</div>					
					<div>
						<Icon type="usergroup-add" />
						<span>会员管理</span>
					</div>					
				</div>

				<div className="bottom">

					<div className="left">
						<span>档案室</span>
						<ul className="clearfix">
							<li> 
								<Link to="/recordManage/newRecord" style={{display: 'block', color: '#726f77'}}>档案新建</Link>
							</li>
							<li> 
								<Link to="/recordManage/patientList" style={{display: 'block', color: '#726f77'}}>客户列表</Link>
							</li>
						</ul>
						<span>方案室</span>
						<ul className="clearfix">
							<li> 
								<Link to="/means/spine" style={{display: 'block', color: '#726f77'}}>筑脊开方</Link>
							</li>
							<li> 
								<Link to="/means/diseaseLocation" style={{display: 'block', color: '#726f77'}}>疾病谱定位</Link>
							</li>
							<li> 
								<Link to="/means/healthManagement" style={{display: 'block', color: '#726f77'}}>健康管理</Link>
							</li>
						</ul>						
					</div>

					<div className="right">
						<span>体检室</span>
						<ul className="clearfix">
							<li>
								<Link to="/physical/bloodPressure" style={{display: 'block', color: '#726f77'}}>
									<Icon type="bar-chart" /> 
									. 血压收录
								</Link>
							</li>
							<li>
								<Link to="/physical/bloodSugar" style={{display: 'block', color: '#726f77'}}>
									<Icon type="dot-chart" />
									. 血糖收录
								</Link>
							</li>
							<li>
								<Link to="/physical/temperature" style={{display: 'block', color: '#726f77'}}>
									<Icon type="fork" />	
									. 体温收录
								</Link>
							</li>
							<li>
								<Link to="/physical/weight" style={{display: 'block', color: '#726f77'}}>
									<Icon type="area-chart" />
									. 体重收录
								</Link>
							</li>
							<li>
								<Link to="/physical/heartRate" style={{display: 'block', color: '#726f77'}}>
									<Icon type="line-chart" />
									. 心率收录
								</Link>
							</li>						
						</ul>						
					</div>					

				</div>

				
			</div>
		</div>
		);
	}
}

export default Home;