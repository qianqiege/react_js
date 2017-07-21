// 健康监测页面
import React from 'react';
//import ReactDOM from 'react-dom';
import { Tabs } from 'antd';
import { observer } from 'mobx-react';
import MonitorDataTable from './MonitorDataTable';
import TwXzTable from './TwXzTable';
import Electro from './Electro';

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
					<TabPane tab="血糖监测" key="2"><MonitorDataTable/></TabPane>
					<TabPane tab="体温监测" key="3"><TwXzTable/></TabPane>
					<TabPane tab="体重监测" key="4"><TwXzTable/></TabPane>
					<TabPane tab="心率监测" key="5"><TwXzTable/></TabPane>
					<TabPane tab="尿酸监测" key="6"><TwXzTable/></TabPane>
					<TabPane tab="血脂监测" key="7"><TwXzTable/></TabPane>
					<TabPane tab="心电图展示" key="8"><Electro/></TabPane>
					<TabPane tab="TDS数字中医" key="9"><Electro/></TabPane>
				</Tabs>
			</div>
		);
	}
}

export default HealthMonitor;