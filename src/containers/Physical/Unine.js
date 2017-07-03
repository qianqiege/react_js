import React from "react";
import PhysicalInfo from "./PhysicalInfo";
import "../style.scss";



class Unine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "尿酸测量",
			phyName: "尿酸值",
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

export default Unine;
