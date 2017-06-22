//这是方案室三个页面共用的底部管理师及日期等信息显示组件

import React from 'react';
import ReactDOM from 'react-dom';
import './meanInfo.css';



class MeanInfo extends React.Component{
	render(){
		return (
			<div className="info">
				<div className="infoTop">
					<p>健康管理师：<span></span></p>
					<p>病例编号：<span></span></p>					
				</div>
				<div className="infoBottom">
					<p>总额：<span></span></p>
					<p>开具日期：<span></span></p>					
				</div>				
				
			</div>
		)
	}
}

export default MeanInfo;