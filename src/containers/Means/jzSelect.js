import { Select } from 'antd';
import React from 'react';
import MeansJz from 'models/MeansJz';
import { observer } from "mobx-react";


const Option = Select.Option;

@observer
class JzSelect extends React.Component{

	componentDidMount(){
		MeansJz.getJibie("http://qolm.ybyt.cc/api/v1/spine/spine_level");

	}

	handleChange(value){
		MeansJz.getPay(`http://qolm.ybyt.cc/api/v1/spine/spine_level_charge?spine_level_id=${value}`)
	}

	render(){
		return(
		<Select defaultValue="初级" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
			{MeansJz.jzArr}
		</Select>			
		)
	}
}

export default JzSelect;