import React, { PropTypes } from "react";
import { Tabs, Row, Col } from 'antd';
import { observer } from "mobx-react";
import HolographicInfo from "./HolographicInfo";
// import format from "fromat";

import Pending from "./Abnormity/Pending"; //待处理异常组件；
import Processed from "./Abnormity/Processed"; //已处理异常组件；
import EssentialInfo from "./ERecord/EssentialInfo"; //基本信息；
import HolographyData from "models/HolographyData";

import PatientRecord from 'models/PatientRecord';
import BloodGlucose from "./ERecord/BloodGlucose";//血糖监测
import BloodPressure from "./ERecord/BloodPressure";//血压监测
import Temperature from "./ERecord/Temperature";//体温监测
import Weight from "./ERecord/Weight";//体重监测
import HeartRate from "./ERecord/HeartRate";//心率监测
import Unine from "./ERecord/Unine";//尿酸监测
import BloodFat from "./ERecord/BloodFat";//血脂监测
import Ecg from "./ERecord/Ecg";//心电图监测
import TDSd from "./ERecord/TDS";//tds监测
import "./HolographicView.scss";

const TabPane = Tabs.TabPane;

@observer
class HolographicView extends React.Component {
	static propTypes = {
		location: PropTypes.object,
	}
	constructor(props) {
		super(props);
		this.state = {
			holoProject: [
				{title: "任务", child: [
					{name: "待处理异常", componentObj: <Pending store={this.props.location.query.id} />},
					{name: "已处理异常", componentObj: <Processed store={this.props.location.query.id} />},
					{name: "随访安排", componentObj: "aaa"},
					{name: "待随访任务", componentObj: "aaa"},
				]},
				{title: "电子档案", child: [
					{name: "基本信息", componentObj: <EssentialInfo />},
					{name: "血糖检测", componentObj: <BloodGlucose />},
					{name: "血压监测", componentObj: <BloodPressure />},
					{name: "体温检测", componentObj: <Temperature />},
					{name: "体重检测", componentObj: <Weight />},
					{name: "心率检测", componentObj: <HeartRate />},
					{name: "尿酸检测", componentObj: <Unine />},
					{name: "血脂检测", componentObj: <BloodFat />},
					{name: "心电图展示", componentObj: <Ecg />},
					{name: "TDS数字中医", componentObj: <TDSd store={this.props.location.query.id} />},
				]},
				{title: "电子医疗档案", child: []},
				{title: "健康评估", child: []},
				
			]
		};
		// this.handleChange = this.handleChange.bind(this);

	}
	componentDidMount() {
		const id = this.props.location.query.id;
		HolographyData.getInfo(`http://qolm.ybyt.cc/api/v1/patient/get_by_id?id=${id}`);
		const currDate =new Date().toLocaleDateString();
		const staDate="2016-12-1";
		HolographyData.getHolographyInfo(`http://qolm.ybyt.cc/api/v1/exception/by_id?id=${id}&is_handle=0&page=1&per_page=10`);
		PatientRecord.getRecord(`http://qolm.ybyt.cc/api/v1/patient_record/check?id=${id}`);
		PatientRecord.getBloodGlu(`http://qolm.ybyt.cc/api/v1/examination_check/blood_glucose?patient_id=${id}&start_date=${staDate}&end_date=${currDate}&page=1&per_page=10`);
		PatientRecord.getBloodPre(`http://qolm.ybyt.cc/api/v1/examination_check/blood_pressure?patient_id=${id}&start_date=${staDate}&end_date=${currDate}&page=1&per_page=10`);
		PatientRecord.getTemperature(`http://qolm.ybyt.cc/api/v1/examination_check/temperature?patient_id=${id}&start_date=${staDate}&end_date=${currDate}&page=1&per_page=10`);
		PatientRecord.getWeight(`http://qolm.ybyt.cc/api/v1/examination_check/weight?patient_id=${id}&start_date=${staDate}&end_date=${currDate}&page=1&per_page=10`);
		PatientRecord.getHeartRate(`http://qolm.ybyt.cc/api/v1/examination_check/heart_rate?patient_id=${id}&start_date=${staDate}&end_date=${currDate}&page=1&per_page=10`);
		PatientRecord.getUnine(`http://qolm.ybyt.cc/api/v1/examination_check/heart_rate?patient_id=${id}&start_date=${staDate}&end_date=${currDate}&page=1&per_page=10`);
		PatientRecord.getBlooFat(`http://qolm.ybyt.cc/api/v1/examination_check/blood_fat?patient_id=${id}&start_date=${staDate}&end_date=${currDate}&page=1&per_page=10`);
		PatientRecord.getEcg(`http://qolm.ybyt.cc/api/v1/examination_check/ecg?patient_id=${id}&start_date=${staDate}&end_date=${currDate}&page=1&per_page=10`);
		PatientRecord.getTDS(`http://qolm.ybyt.cc/api/v1/tds/check?patient_id=${id}`);
	}
	renderHolographi() {
		const holoProjects = this.state.holoProject;
		return (
			holoProjects.map( (holoProject, index) => {
				return (
					<TabPane tab={holoProject.title} key={index+1}>
						<HolographicInfo store={holoProject.child} />
					</TabPane>
				);
			})
		);
	}	
	render() {
		const userInfo = HolographyData.userInfo;
		return (
			<div>
				<h1>全息视图</h1>
				<Row>
					<Col span={8}>
						<div className="holo-block">
							<p key="1">姓名：{userInfo.name}</p>
							<p key="2">性别：{userInfo.sex}</p>
							<p key="3">联系方式：{userInfo.phone}</p>
						</div>
					</Col>
					<Col span={24}>
						<Tabs defaultActiveKey="1" onChange={this.handleChange}>
							{this.renderHolographi()}
						</Tabs>
					</Col>
				</Row>
			</div>
		);
	}
}

export default HolographicView;