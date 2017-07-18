//这是方案室的记录查询
import { Input,Table,Button } from 'antd';
import React from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import MeansInfo from 'models/MeansInfo';

const Search = Input.Search;

@observer
class HealthSearch extends React.Component {
	constructor(props){
		super(props);
		this.columns = [{
			title: '	编号',
			dataIndex: 'name',
			width: '10%',
			render: (text, record, index) => {
				return (
					<span>{index + 1}</span>
				);
			}
			},{
				title: '挂号时间',
				dataIndex: 'created_at',
			},{
				title: '挂号号码',
				dataIndex: 'number',
		    },{
				title: '查看记录',
				dataIndex: 'operation',
			render: (text, record, index) => {
				console.log(record);
				MeansInfo.jlNum = record.number;
				return (
					<Button type='primary' style={{ marginLeft: 80 }}>
						<Link to={`/means/lookMeans?${MeansInfo.jlNum}`}>查看记录</Link>
					</Button>
				)
			},
		}];	

		this.state = {
			count: 2,
		};
	
	}

	componentDidMount(){
		MeansInfo.idNumber=this.props.location.query.id_number;
		MeansInfo.getJilu(`http://qolm.ybyt.cc/api/v1/registration/check_registration?id_number=${MeansInfo.idNumber}`);
	}

	handleSearch(value){
		MeansInfo.getJilu(`http://qolm.ybyt.cc/api/v1/registration/check_registration?id_number=${value}`);
	}

	render() {
		const columns = this.columns;
		const jilu = MeansInfo.jilu.slice();
		return (
			<div className="hsDiv">
				<Search
					className="hsSearch"
					placeholder="请输入您要查询的身份证号码"
					style={{ width: 500 }}
					defaultValue={MeansInfo.idNumber}
					onSearch={this.handleSearch.bind(this)}
				/>
				<Table
					bordered dataSource={jilu}
					columns={columns}
					style={{marginTop:30}}
					className="hsTable"
				/>	

			</div>			
		);
	}
}

export default HealthSearch;