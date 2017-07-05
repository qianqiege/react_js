import React from "react";
import PhysicalInfo from "./PhysicalInfo";

import "../style.scss";



class BloodFat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "血脂测量",
			phyName: "血脂值",
			unit: "mmol/L",
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
