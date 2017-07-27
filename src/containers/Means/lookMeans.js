//查看记录每条挂号的详细记录
import React, { PropTypes } from "react";
import { Table,Icon } from 'antd';
import { observer } from 'mobx-react';
import MeansInfo from 'models/MeansInfo';
import './lookMeans.css';


@observer

class LookMeans extends React.Component {
	static propTypes = {
		location: PropTypes.string,
	}
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
		const disData = MeansInfo.userXxData.disease_location_recipes[0];
		const healData = MeansInfo.userXxData.health_manage_recipes[0];
		const spineData = MeansInfo.userXxData.spine_recipes[0];
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
				<div className="jiluContent clearfix">
					<p><Icon type="pushpin" />	疾病谱定位</p>
					<div className="jk">生理方面：{disData?<span>{disData.physiology}</span>:null}</div>
					<div className="jk">情志方面：{disData?<span>{disData.emotion}</span>:null}</div>
					<div className="jk">营养方面：{disData?<span>{disData.nutrition}</span>:null}</div>
					<div className="jk">生活方式方面：{disData?<span>{disData.life_style}</span>:null}</div>
					<div className="jk">主症：{disData?<span>{disData.main_symptom}</span>:null}</div>
					<div className="jk">急症：{disData?<span>{disData.emergency_symptom}</span>:null}</div>
					<div className="jk">兼症：{disData?<span>{disData.part_symptom}</span>:null}</div>
					<div className="jk">次兼症：{disData?<span>{disData.second_part_symptom}</span>:null}</div>
					<p className="docUser">健管专家：{disData?<span>{disData.doctor_name}</span>:null}</p>					
				</div>
				<div className="jiluContent noPag clearfix">
					<p><Icon type="bar-chart" />	健康管理</p>
					<span className="linchuang">深度临床营养强化干预方案：</span>
					<Table columns={columns} dataSource={dataSource} bordered />
					<div className="jk">{healData?<span>{healData.detail}</span>:null}</div>
					<p className="docUser">健管专家：{healData?<span>{healData.doctor_name}</span>:null}</p>
				</div>
				<div className="jiluContent clearfix">
					<p><Icon type="api" />	脊柱</p>
					<div className="jk">身体状况描述：{spineData?<span>{spineData.physical_condition}</span>:null}</div>
					<div className="jk">诊断意见：{spineData?<span>{spineData.diagnostic_advice}</span>:null}</div>
					<p className="docUser">健管专家：{spineData?<span>{spineData.doctor_name}</span>:null}</p>
				</div>
			</div>
		);
	}

}

export default LookMeans;