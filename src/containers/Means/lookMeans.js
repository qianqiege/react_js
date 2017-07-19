//查看记录每条挂号的详细记录

import { Table,Icon } from 'antd';
import React from 'react';
import { observer } from 'mobx-react';
import MeansInfo from 'models/MeansInfo';
import './lookMeans.css';


@observer

class LookMeans extends React.Component {
	constructor(props){
		super(props);

		this.columns=[{
			title:'产品名称',
			dataIndex:'name',
			key:'name',
		},{
			title:'用法用量',
			dataIndex:'how',
			key:'how',
		},{
			title:'数量',
			dataIndex:'number',
			key:'number',
		}];

		this.state = {
			dataSource: [{
				key: '0',
				name: '甘净',
				how: '随便吃',
				number: '2',
			}, {
				key: '1',
				name: '甘11净',
				how: '随便吃',
				number: '3',
			}],
			count: 2,
		};

	}

	componentDidMount(){
		const userIdNum = this.props.location.query.id;
		MeansInfo.getXxJl(`http://qolm.ybyt.cc/api/v1/registration/check_info?number=${userIdNum}`);
	}

	render(){

		const columns = this.columns;
		const { dataSource } = this.state;
		const id = this.props.location.query.id;
		return (
			<div>
				<p className="YBNum">编号：<span>{id}</span></p>
				<p className="allJl">详细记录</p>
				<div className="jiluContent">
					<p><Icon type="smile" />	基本信息</p>
					<ul>
						<li>姓名：{MeansInfo.userXxData.patient.name}</li>
						<li>性别：{MeansInfo.userXxData.patient.sex}</li>
						<li>出生年月：{MeansInfo.userXxData.patient.birthday}</li>
					</ul>
					<ul>
						<li>婚姻状况：{MeansInfo.userXxData.patient.marriage}</li>
						<li>民族：{MeansInfo.userXxData.patient.nation}</li>
						<li>联系方式：{MeansInfo.userXxData.patient.phone}</li>
					</ul>					
				</div>
				<div className="jiluContent">
					<p><Icon type="pushpin" />	疾病谱定位</p>
					<div className="jk">生理方面：{MeansInfo.userXxData.disease_location_recipes[0].physiology}</div>
					<div className="jk">情志方面：{MeansInfo.userXxData.disease_location_recipes[0].emotion}</div>
					<div className="jk">营养方面：{MeansInfo.userXxData.disease_location_recipes[0].nutrition}</div>
					<div className="jk">生活方式方面：{MeansInfo.userXxData.disease_location_recipes[0].life_style}</div>
					<div className="jk">主症：{MeansInfo.userXxData.disease_location_recipes[0].main_symptom}</div>
					<div className="jk">急症：{MeansInfo.userXxData.disease_location_recipes[0].emergency_symptom}</div>
					<div className="jk">兼症：{MeansInfo.userXxData.disease_location_recipes[0].part_symptom}</div>
					<div className="jk">次兼症：{MeansInfo.userXxData.disease_location_recipes[0].second_part_symptom}</div>
				</div>
				<div className="jiluContent noPag">
					<p><Icon type="bar-chart" />	健康管理</p>
					<span className="linchuang">深度临床营养强化干预方案：</span>
					<Table columns={columns} dataSource={dataSource} bordered />
				</div>
				<div className="jiluContent">
					<p><Icon type="api" />	脊柱</p>
					<h5>这里似乎API有问题，不能提交开方，看不到所需内容</h5>
				</div>
			</div>
		);
	}

}

export default LookMeans;