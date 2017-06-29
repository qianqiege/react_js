import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';
import AddRecord from "./AddRecord";

import "../style.scss";

const FormItem = Form.Item;

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
					`id_number=${idCard}&max_BloodPressure=${values.max_BloodPressure}&min_BloodPressure=${values.min_BloodPressure}` );
			}
		});
	}
	render() {
    	const { getFieldDecorator } = this.props.form;
		return <div className="record-content">
			<h1>血糖测量</h1>
			<AddRecord />
			 <div style={{clear: 'both', marginTop: 30}}>
			 	<Form onSubmit={this.handleSubmit} className="login-form record-block">
		          <Row>
		            <Col span={10} style={{float: 'left', marginTop: 21, fontSize: 16}}>
						<span>血糖值</span>
						<FormItem>
							{getFieldDecorator('userName', {
							  rules: [{ required: false, message: 'Please input your username!' }],
							})(
							  <Input className="border-n" suffix={<span className="font2">毫克/分升</span>} placeholder="" />
							)}
						</FormItem>
		            </Col>
		            <Col span={10} style={{ float: 'right', fontSize: 16 }}>
		              <div className="mar-b mar-t">
		                <p className="mar-b">测量类型</p>
		                <Select
		                  showSearch
		                  style={{ width: 200 }}
		                  placeholder=""
		                  defaultValue="餐前血糖"
		                  optionFilterProp="children"
		                  onChange={this.handleChange}
		                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
		                >
		                  <Option className="optionWidth" value="餐前血糖">餐前血糖</Option>
		                  <Option className="optionWidth" value="餐后血糖">餐后血糖</Option>
		                  <Option className="optionWidth" value="睡前血糖">睡前血糖</Option>
		                  <Option className="optionWidth" value="睡后血糖">睡后血糖</Option>
		                </Select>
		              </div>
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
