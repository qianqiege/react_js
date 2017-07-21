import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio,message } from 'antd';
import {observer} from "mobx-react";
import AddRecord from "./AddRecord";
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
            //console.log(values);
        PhysicalData.SubmitPhysical("http://qolm.ybyt.cc/api/v1/examination_input/blood_glucose",
          `id_number=${idCard}&value=${values.val}&item_type=${values.item_type}` );
        message.success('提交成功');
      }else {
        message.error('遇到一些问题，请重新提交');
        
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
							{getFieldDecorator('val', {
							rules: [{ required: false, message: 'Please input your username!' }],
							})(
							<Input className="border-n" suffix={<span className="font2">毫克/分升</span>} placeholder="" />
							)}
						</FormItem>
		        </Col>
		        <Col span={10} style={{ float: 'right', fontSize: 16 }}>
		          <div className="mar-b mar-t">
		            <p className="mar-b">测量类型</p>
                    <FormItem>
                      {getFieldDecorator('item_type', {
                        rules: [{ required: false, message: 'Please input your username!' }],
                        initialValue: "餐前血糖"
                      })(
                        <Select
                          showSearch
                          style={{ width: 200 }}
                          placeholder=""
                          optionFilterProp="children"
                          onChange={this.handleChange}
                          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                          <Option className="optionWidth" value="1">餐前血糖</Option>
                          <Option className="optionWidth" value="2">餐后血糖</Option>
                          <Option className="optionWidth" value="3">睡前血糖</Option>
                          <Option className="optionWidth" value="4">睡后血糖</Option>
                        </Select>
                      )}
                    </FormItem>
		            </div>
		          </Col>
		        </Row>
				<FormItem>
					<Button type="primary" htmlType="submit" className="login-form-button"> 提交 </Button>
				</FormItem> 
		  </Form>
			</div>
			
		</div>;
	}
}

export default Form.create()(BloodPressure);
