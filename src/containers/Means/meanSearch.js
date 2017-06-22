//这是方案室三个页面共用的搜索框组件

import React from 'react';
import ReactDOM from 'react-dom';
import { Input,Button } from 'antd';
import $ from "jquery";
import './meanSearch.css';


const Search = Input.Search;

class MeanSearch extends React.Component{
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}
	handleSearch(value) {
		$(".userSlide").slideToggle();
	}
	render(){
		return (
			<div className="meanSearchs">
				<Search
					className="searchInput"
				    placeholder="请输入您的身份证号码"
				    style={{ border:0}}
				    onSearch={this.handleSearch}
				  />			
				<Button className="look">查看记录</Button>
			</div>
		)
	}
}

export default MeanSearch;