import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';
import AddRecord from "./AddRecord";
import PhysicalInfo from "./PhysicalInfo";

import "../style.scss";



class HeartRate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "心率测量",
			phyName: "心率",
			unit: "次/分",
			name: "heart_rate",
		}
	}
	render() {
		return <div className="record-content">
			<PhysicalInfo store={this.state} />
		</div>
	}
}

export default HeartRate;
