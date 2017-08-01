import './HomePage.scss';
import React,{ Component } from "react";
import { Icon, Row, Col } from 'antd';
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
				<Row>
					<Col xs={{ span: 26, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						<div className="home-block block1">
							<Icon type="question-circle-o" className="icon-block" />
							<span>待处理异常</span>
						</div>
					</Col>
					<Col xs={{ span: 26, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						<div className="home-block block1">
							<Icon type="phone" className="icon-block" />
							<span>随访预约通知</span>
						</div>
					</Col>
					<Col xs={{ span: 26, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						<div className="home-block block1">
							<Icon type="schedule" className="icon-block" />
							<span>今日门诊预约</span>
						</div>
					</Col>
					<Col xs={{ span: 26, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						<div className="home-block block1">
							<Icon type="schedule" className="icon-block" />
							<span>转诊通知</span>
						</div>
					</Col>
					<Col xs={{ span: 26, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						<div className="home-block block1">
							<Icon type="schedule" className="icon-block" />
							<span>会员管理</span>
						</div>
					</Col>
				</Row>
			</div>
			<div>
				<Row>
					<Col xs={{ span: 12 }} lg={{ span: 6, offset: 2 }} className="list-pro">
						<span>档案室</span>
						<ul className="clearfix">
							<li> 
								<Link to="/newRecord" style={{display: 'block', color: '#726f77'}}>档案新建</Link>
							</li>
							<li> 
								<Link to="/patientList" style={{display: 'block', color: '#726f77'}}>客户列表</Link>
							</li>
						</ul>
					</Col>
					<Col xs={{ span: 12 }} lg={{ span: 6, offset: 2 }} className="list-pro">
						<span>方案室</span>
						<ul className="clearfix">
							<li> 
								<Link to="/spine" style={{display: 'block', color: '#726f77'}}>筑脊开方</Link>
							</li>
							<li> 
								<Link to="/diseaseLocation" style={{display: 'block', color: '#726f77'}}>疾病谱定位</Link>
							</li>
							<li> 
								<Link to="/healthManagement" style={{display: 'block', color: '#726f77'}}>健康管理</Link>
							</li>
						</ul>
					</Col>
				</Row>
				<Row style={{marginTop: 10}}>
					<Col xs={{ span: 12 }} lg={{ span: 6, offset: 2 }} className="list-pro">
						<span>体检室</span>
						<ul className="clearfix">
							<li>
								<Link to="/bloodPressure" style={{display: 'block', color: '#726f77'}}>
									<Icon type="bar-chart" /> 
									. 血压收录
								</Link>
							</li>
							<li>
								<Link to="/bloodSugar" style={{display: 'block', color: '#726f77'}}>
									<Icon type="dot-chart" />
									. 血糖收录
								</Link>
							</li>
							<li>
								<Link to="/temperature" style={{display: 'block', color: '#726f77'}}>
									<Icon type="fork" />	
									. 体温收录
								</Link>
							</li>
							<li>
								<Link to="/weight" style={{display: 'block', color: '#726f77'}}>
									<Icon type="area-chart" />
									. 体重收录
								</Link>
							</li>
							<li>
								<Link to="/heartRate" style={{display: 'block', color: '#726f77'}}>
									<Icon type="line-chart" />
									. 心率收录
								</Link>
							</li>						
						</ul>	
					</Col>
				</Row>
			</div>
		</div>
		);
	}
}

export default Home;