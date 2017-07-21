import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';
import AddRecord from "./AddRecord";
import PhysicalInfo from "./PhysicalInfo";

import "../style.scss";



class BloodFat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "血脂测量",
			phyName: "血脂值",
			unit: "mmol/L",
			name: "blood_fat",
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

export default BloodFat;
