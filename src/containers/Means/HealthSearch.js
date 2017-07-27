//这是方案室的记录查询
import React, { PropTypes } from "react";
import { Input,Table,Button } from 'antd';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import MeansInfo from 'models/MeansInfo';
import	User	from	'models/User';
import	$	from	"jquery";
import	GetIdentityCard	from	"models/GetIdentityCard";

const Search = Input.Search;

@observer
class HealthSearch extends React.Component {
	static propTypes = {
		location: PropTypes.string,
	}
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
			render: (text, record) => {
				return (
					<Button type="primary" style={{ marginLeft: 80 }}>
						<Link to={`/means/lookMeans?id=${record.number}`}>查看记录</Link>
					</Button>
				);
			},
		}];	

		this.state = {
			count: 2,
		};
	
	}

	componentDidMount(){

		User.fetchUsers().then(() => {
			GetIdentityCard.getCard(`http://qolm.ybyt.cc/api/v1/examination_input/get_auto_identity_card?id=${User.current_user_info.id}`);	
			const	{idcard}=GetIdentityCard.Idcard;
			if(idcard ==="no_id"){
				$(".ant-input").val();
			}else{
				$(".ant-input").val(idcard);
			}
			MeansInfo.idNumber=this.props.location.query.id_number;
			if (MeansInfo.idNumber.length==18) {
				MeansInfo.getJilu(`http://qolm.ybyt.cc/api/v1/registration/check_registration?id_number=${MeansInfo.idNumber}`);
			}
		});
		
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