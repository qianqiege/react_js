
//这是健康管理页面下面的开方表格组件

import React from 'react';
//import ReactDOM from 'react-dom';
// import { Select,Table, Input, Icon, Popconfirm,Form, Button } from 'antd';
import './meansTable.css';
import WrappedHorizontalLoginForm from './productInput';


// const Option = Select.Option;

class MeansTable extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="healManaTab">
				
				<div className="kaifang">
					<WrappedHorizontalLoginForm />
				</div>								
			</div>
		);
	}
}


export default MeansTable;