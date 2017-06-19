import React from "react";
import BasicInfo from "./BasicInfo";
import "../../style.scss";

class NewRecord extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="record-content">
			<h1>建立健康档案</h1>
	      	<BasicInfo />
		</div>
	}

}

export default NewRecord;



