import React from "react";
import { Form, Input, Button, Row, Col,message } from 'antd';
import AddRecord from "./AddRecord";
import {observer} from "mobx-react";
import PhysicalData from "models/PhysicalData";

import "../style.scss";

const FormItem = Form.Item;

@observer
class BloodPressure extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit = ( e) => {
		e.preventDefault();
		const { idCard } = PhysicalData.userInfo;
		this.props.form.validateFields((err, values) => {
			if (!err) {
				PhysicalData.clearInfo();
				PhysicalData.SubmitPhysical(`http://qolm.ybyt.cc/api/v1/examination_input/${this.props.store.name}`,
					`id_number=${idCard}&${this.props.store.name}=${values.val}` );
				//console.log(values)
				message.success('提交成功');
			}else {
				message.error('遇到一些问题，请重新提交');
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (<div className="record-content">
			<h1>{this.props.store.title}</h1>
			<AddRecord />
			<div style={{clear: 'both', marginTop: 30}}>
				<Form onSubmit={this.handleSubmit} className="login-form record-block">
				<Row>
					<Col span={24} style={{float: 'left', marginTop: 21, fontSize: 16}}>
						<span>{this.props.store.phyName}</span>
						<FormItem>
							{getFieldDecorator('val', {
								rules: [{ required: false, message: 'Please input your username!' }],
							})(
								<Input className="border-n" suffix={<span className="font2">{this.props.store.unit}</span>} placeholder="" />
							)}
						</FormItem>
					</Col>
					</Row>
				<FormItem>
					<Button type="primary" htmlType="submit" className="login-form-button"> 提交 </Button>
				</FormItem>
				</Form>
			</div>
			
		</div>);
	}
}

export default Form.create()(BloodPressure);
