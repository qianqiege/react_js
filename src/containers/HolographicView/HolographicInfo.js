import React, { PropTypes } from "react";
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class HolographicInfo extends React.Component {
	static propTypes = {
		store: PropTypes.array,
	}
	constructor(props) {
		super(props);
	}
	renderInfo() {
		const childs = this.props.store;
		return (
			childs.map( (child, index) => {
				if ( child ) {
					return (
						<TabPane tab={child.name} key={index}> {child.componentObj} </TabPane>
					);
				}
				
			})
		);
	}
	handleChange() {
		//console.log(1);
	}
	render() {
		return (
			<div>
				<div className="card-container">
					<Tabs type="card">
						{this.renderInfo()}
					</Tabs>
				</div>
			</div>
		);
	}
}
export default HolographicInfo;