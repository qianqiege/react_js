import React from "react";
import { Tabs, Row, Col } from 'antd';
import HolographicInfo from "./HolographicInfo";

import Pending from "./Abnormity/Pending"; //待处理异常组件；
import Processed from "./Abnormity/Processed"; //已处理异常组件；
import EssentialInfo from "./ERecord/EssentialInfo"; //基本信息；

import "./HolographicView.scss";

const TabPane = Tabs.TabPane;

class HolographicView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			holoProject: [
				{title: "任务", child: [
					{name: "待处理异常", componentObj: <Pending />},
					{name: "已处理异常", componentObj: <Processed />},
					{name: "随访安排", componentObj: "aaa"},
					{name: "待随访任务", componentObj: "aaa"},
				]},
				{title: "电子档案", child: [
					{name: "基本信息", componentObj: <EssentialInfo />},
					{name: "血糖检测", componentObj: "aaa"},
					{name: "血压监测", componentObj: "aaa"},
					{name: "体温检测", componentObj: "aaa"},
					{name: "体重检测", componentObj: "aaa"},
					{name: "心率检测", componentObj: "aaa"},
					{name: "尿酸检测", componentObj: "aaa"},
					{name: "血脂检测", componentObj: "aaa"},
					{name: "心电图展示", componentObj: "aaa"},
					{name: "TDS数字中医", componentObj: "aaa"},
				]},
				{title: "电子医疗档案", child: []},
				{title: "健康评估", child: []},
				
			]
		}
		this.handleChange = this.handleChange.bind(this);

	}
	handleChange(key) {
		console.log(key);
	}
	renderHolographi() {
		const holoProjects = this.state.holoProject;
		// console.log(holoProjects);
		return (
			holoProjects.map( (holoProject, index) => {
				return (
					<TabPane tab={holoProject.title} key={index+1}>
						<HolographicInfo store={holoProject.child} />
			    	</TabPane>
				)
				
			})
		)
	}
	render() {
		return <div>
			<h1>全息视图</h1>
			<Row>
				<Col span={8}>
					<div className="holo-block">
						<p>房鸣</p>
						<p>性别：男</p>
						<p>联系方式：15986630552</p>
					</div>
				</Col>
				<Col span={24}>
					<Tabs defaultActiveKey="1" onChange={this.handleChange}>
						{this.renderHolographi()}
			  		</Tabs>
				</Col>
			</Row>
		</div>
	}
}

export default HolographicView;