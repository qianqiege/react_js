import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';

import "../style.scss";

const FormItem = Form.Item;
const Option = Select.Option;

class FollowUpSurver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceList: [123545, 2345644, 3456534],
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const arr = [];
    this.state.deviceList.map(d => {
      return(
        arr.push(<Option className="optionWidth" key={d}>{ d }</Option>)
      )
    })

    return (
      <div className="record-content">
        <h1>随访包测量</h1>
        <h3 style={{paddingLeft: 80, marginBottom: 40}}>随访包测量</h3>
        <Form onSubmit={this.handleSubmit} className="login-form record-block">
          <Row>
            <Col span={10} style={{float: 'left', fontSize: 16 }}>
              <span>请输入身份证号码</span>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                })(
                  <Input style={{border: 'none', borderBottom: '1px solid #e1e1e1', boxShadown: 'none', borderRadius: 'none'}} className="" placeholder="" />
                )}
              </FormItem>
            </Col>
            <Col span={10} style={{ float: 'right', fontSize: 16 }}>
              <span>请选择设备号码</span>
              <Select
                mode="combobox"
                size="default"
                defaultValue="13567859943"
                onChange={this.handleChange}
                className="border-none"
              >
                {arr}
              </Select>
            </Col>
          </Row>
            
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button"> 提交 </Button>
          </FormItem>
        </Form>
      </div>
      
    );
  }
}

export default Form.create()(FollowUpSurver);