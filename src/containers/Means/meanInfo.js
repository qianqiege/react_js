//这是方案室三个页面共用的底部管理师及日期等信息显示组件

import React from 'react';
import {observer} from "mobx-react";
import MeansInfo from "models/MeansInfo";
import MeansJz from "models/MeansJz";

import './meanInfo.css';

@observer
class MeanInfo extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const { userName, registration, dateTime } = MeansInfo.footerInfo;
		const { prices } = MeansJz.isKaifang;
		return (
			<div className="info">
				<div className="infoTop">
					<p>健康管理师：<span>{ userName }</span></p>
					<p>病例编号：<span>{ registration }</span></p>					
				</div>
				<div className="infoBottom">
					<p>总额：<span>{ prices }</span></p>
					<p>开具日期：<span>{ dateTime }</span></p>					
				</div>				
				
			</div>
		);
	}
}

export default MeanInfo;