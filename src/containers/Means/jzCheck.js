import { Checkbox } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import MeansJz from 'models/MeansJz';
import { observer } from "mobx-react";



@observer
class JzCheck extends React.Component{

	onChange(e){
		console.log(`checked = ${e.target.checked}`);
	}

	render(){
		return(
		 <Checkbox onChange={this.onChange.bind(this)}></Checkbox>			
		)
	}
}

export default JzCheck;