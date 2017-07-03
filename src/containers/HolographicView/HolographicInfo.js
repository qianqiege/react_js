import React, {PropTypes} from "react";
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class HolographicInfo extends React.Component {
	static propTypes = {
		store: PropTypes.object.required,
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
	render() {
		return (	
			<div className="card-container">
				<Tabs type="card">
					{this.renderInfo()}
				</Tabs>
			</div>
		);
	}
}
export default HolographicInfo;