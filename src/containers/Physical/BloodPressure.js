import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio,message } from 'antd';
import {observer} from "mobx-react";
import PhysicalData from "models/PhysicalData";
import AddRecord from "./AddRecord";

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
				PhysicalData.SubmitPhysical("http://qolm.ybyt.cc/api/v1/examination_input/blood_pressure",
					`id_number=${idCard}&max_BloodPressure=${values.min_BloodPressure}&min_BloodPressure=${values.max_BloodPressure}` );
				message.success('提交成功');
			}else {
				message.error('遇到一些问题，请重新提交');
				
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="record-content">
				<h1>血压测量</h1>
				<AddRecord />
				<div style={{clear: 'both', marginTop: 40}}>
					<Form onSubmit={this.handleSubmit} className="login-form record-block">
						<Row>
						<Col span={10} style={{float: 'left', marginTop: 0,  fontSize: 16 }}>
							<span>收缩压</span>
							<FormItem>
								{getFieldDecorator('min_BloodPressure', {
										rules: [{ required: false, message: 'Please input your username!' }],
								})(
										<Input className="border-n" suffix={<span className="font2">毫米汞柱</span>} placeholder="" />
								)}
							</FormItem>
						</Col>
						<Col span={10} style={{ float: 'right', fontSize: 16 }}>
							<span>舒张压</span>
							<FormItem>
								{getFieldDecorator('max_BloodPressure', {
									rules: [{ required: false, message: 'Please input your username!' }],
								})(
									<Input className="border-n" suffix={<span className="font2">毫米汞柱</span>} placeholder="" />
								)}
							</FormItem>
						</Col>
						</Row>
					<FormItem>
						<Button type="primary" htmlType="submit" className="login-form-button"> 提交 </Button>
					</FormItem> 
					</Form>
				</div>
			</div>
		);
	}
}

export default Form.create()(BloodPressure);
