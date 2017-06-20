import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'antd';
import { observer } from 'mobx-react';

import "./PatientList.scss";

const TabPane = Tabs.TabPane;

@observer 
class HealthMonitor extends React.Component{
	render(){
		return(
			<div>
				<h1 style={{marginBottom:50}}>健康监测</h1>
				<Tabs defaultActiveKey="1" >
				    <TabPane tab="血压监测" key="1">Content of Tab Pane 1</TabPane>
				    <TabPane tab="血糖监测" key="2">Content of Tab Pane 2</TabPane>
				    <TabPane tab="体温监测" key="3">Content of Tab Pane 3</TabPane>
				    <TabPane tab="体重监测" key="4">Content of Tab Pane 1</TabPane>
				    <TabPane tab="心率监测" key="5">Content of Tab Pane 2</TabPane>
				    <TabPane tab="尿酸监测" key="6">Content of Tab Pane 3</TabPane>
				    <TabPane tab="血脂监测" key="7">Content of Tab Pane 1</TabPane>
				    <TabPane tab="心电图展示" key="8">Content of Tab Pane 2</TabPane>
				    <TabPane tab="TDS数字中医" key="9">Content of Tab Pane 3</TabPane>
				</Tabs>
			</div>
		)
	}
}

export default HealthMonitor;