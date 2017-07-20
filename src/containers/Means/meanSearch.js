//这是方案室三个页面共用的搜索框组件

import React from 'react';
import { Input,Button } from 'antd';
import { Link } from 'react-router';
import { observer } from "mobx-react";
import MeansInfo from 'models/MeansInfo';
import './meanSearch.css';
//import $ from "jquery";


const Search = Input.Search;

@observer
class MeanSearch extends React.Component{
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSearch(value) {

		MeansInfo.getInfo(`http://qolm.ybyt.cc/api/v1/patient/get_by_id_number?id_number=${value}`);
		MeansInfo.getRecords(`http://qolm.ybyt.cc/api/v1/registration/get_number?id_number=${value}`);
		MeansInfo.getCurrentUser("http://qolm.ybyt.cc/api/v1/users/current_user");
	}

	handleChange(e){
		
		if(e.target.value.length == 18){
			MeansInfo.idNumber = e.target.value;
			//console.log(MeansInfo.idNumber);
		}
	}

	render(){
		return (
			<div className="meanSearchs">
				<Search
					className="searchInput"
					placeholder="请输入您的身份证号码"
					style={{ border:0}}
					onSearch={this.handleSearch}
					onChange = {this.handleChange}
				/>			
				<Button className="look">
					<Link to={`/means/healthSearch?id_number=${MeansInfo.idNumber}`}>查看记录</Link>
				</Button>				
			</div>
		);
	}
}

export default MeanSearch;