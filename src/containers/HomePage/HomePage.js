import './HomePage.scss';



import React,{ Component } from "react";
import { Icon } from 'antd';
// import './home.css';

class Home extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return <div className="con">
			<p>健康管理师首页</p>
			<div className="homeCon">
				<div className="top">
					<div>
						<Icon type="question-circle-o" />
						<span>待处理异常</span>
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
							<li>档案新建</li>
							<li>客户列表</li>
						</ul>
						<span>方案室</span>
						<ul className="clearfix">
							<li>筑脊开方</li>
							<li>疾病谱定位</li>
							<li>健康管理</li>
						</ul>						
					</div>

					<div className="right">
						<span>体检室</span>
						<ul className="clearfix">
							<li>
							<Icon type="bar-chart" /> 
							. 血压收录</li>
							<li>
							<Icon type="dot-chart" />
							. 血糖收录</li>
							<li>
							<Icon type="fork" />
							. 体温收录</li>
							<li>
							<Icon type="area-chart" />
							. 体重收录</li>
							<li>
							<Icon type="line-chart" />
							. 心率收录</li>						
						</ul>						
					</div>					

				</div>

				
			</div>
		</div>;
	}
}

export default Home;