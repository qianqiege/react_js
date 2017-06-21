import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';
import AddRecord from "./AddRecord";
import PhysicalInfo from "./PhysicalInfo";

import HolographicView from "../HolographicView/HolographicView";

import "../style.scss";



class Unine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "尿酸测量",
			phyName: "尿酸值",
			unit: "mmol/L",
		}
	}
	render() {
		return <div className="record-content">
			<PhysicalInfo store={this.state} />

			<a href="/holographicView">全息视图</a>
		</div>
	}
}

export default Unine;
