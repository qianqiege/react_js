import React from "react";
// import { Form, Icon, Input, Button } from 'antd';
// import AddRecord from "./AddRecord";
import PhysicalInfo from "./PhysicalInfo";

import "../style.scss";



class Weight extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "体重测量",
			phyName: "体重",
			unit: "公斤(kg)",
			name: "weight", 
		};
	}
	render() {
		return (
			<div className="record-content">
			<PhysicalInfo store={this.state} />
			</div>
		);
	}
}

export default Weight;
