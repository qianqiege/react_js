// 健康监测页面
import React from 'react';
//import ReactDOM from 'react-dom';
import { Tabs } from 'antd';
import { observer } from 'mobx-react';
import MonitorDataTable from './MonitorDataTable';
import BloodSugarData from './BloodSugarData';
import TwXzTable from './TwXzTable';
import TizhongTable from './TizhongTable';
import HeartRate from './Heart_rate';
import Unine from './Unine';
import BloodFat from './BloodFat';
import Electro from './Electro';
import TDSd from './TDS';

import "./PatientList.scss";

const TabPane = Tabs.TabPane;

@observer
class HealthMonitor extends React.Component{
	render(){
		return(
			<div>
				<h1 style={{marginBottom:50}}>健康监测</h1>
				<Tabs defaultActiveKey="1" >
					<TabPane tab="血压监测" key="1"><MonitorDataTable/></TabPane>
					<TabPane tab="血糖监测" key="2"><BloodSugarData/></TabPane>
					<TabPane tab="体温监测" key="3"><TwXzTable/></TabPane>
					<TabPane tab="体重监测" key="4"><TizhongTable/></TabPane>
					<TabPane tab="心率监测" key="5"><HeartRate/></TabPane>
					<TabPane tab="尿酸监测" key="6"><Unine/></TabPane>
					<TabPane tab="血脂监测" key="7"><BloodFat/></TabPane>
					<TabPane tab="心电图展示" key="8"><Electro/></TabPane>
					<TabPane tab="TDS数字中医" key="9"><TDSd/></TabPane>
				</Tabs>
			</div>
		);
	}
}

export default HealthMonitor;