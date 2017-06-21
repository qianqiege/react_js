import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';
import AddRecord from "./AddRecord";

import "../style.scss";

const FormItem = Form.Item;

class BloodPressure extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
    	const { getFieldDecorator } = this.props.form;
		return <div className="record-content">
			<h1>{this.props.store.title}</h1>
			<AddRecord />
			 <div style={{clear: 'both', marginTop: 30}}>
			 	<Form onSubmit={this.handleSubmit} className="login-form record-block">
		          <Row>
		            <Col span={24} style={{float: 'left', marginTop: 21, fontSize: 16}}>
						<span>{this.props.store.phyName}</span>
						<FormItem>
							{getFieldDecorator('userName', {
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
			
		</div>
	}
}

export default Form.create()(BloodPressure);
