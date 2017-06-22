// 基本资料组件
import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';

import "../../style.scss";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sexValue: "男",
      marrayValue: "未婚",

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
  onChangeSex = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      sexValue: e.target.value,
    });
  }
  onChangeMarray = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      marrayValue: e.target.value,
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form record-block" >
          <Row>
            <Col span={10} style={{float: 'left'}}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                })(
                  <Input className="inpt inpt-left-f" prefix={<span style={{fontSize: 16}}>姓名</span>} placeholder="" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('idCard', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>身份证号</span>} placeholder="" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('Birthday', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>出生日期</span>} placeholder="" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('contactWay', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>联系方式</span>} placeholder="" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('postalAddress', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>通讯地址</span>} placeholder="" />
                )}
              </FormItem>
            </Col>
            <Col span={10} style={{ float: 'right', fontSize: 16 }}>
              <div className="mar-b mar-t">
                <p className="mar-b">民族</p>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="请输入民族"
                  defaultValue="汉族"
                  optionFilterProp="children"
                  onChange={this.handleChange}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option className="optionWidth" value="汉族">汉族</Option>
                  <Option className="optionWidth" value="藏族">藏族</Option>
                  <Option className="optionWidth" value="回族">回族</Option>
                </Select>
              </div>
              <div className="mar-b mar-t">
                <p>性别</p>
                  <RadioGroup onChange={this.onChangeSex} value={this.state.sexValue}>
                    <Radio value={"男"}>男</Radio>
                    <Radio value={"女"}>女</Radio>
                  </RadioGroup>
              </div>
              <div className="mar-b mar-t">
                <p>婚姻状况</p>
                  <RadioGroup onChange={this.onChangeMarray} value={this.state.marrayValue}>
                    <Radio value={"未婚"}>未婚</Radio>
                    <Radio value={"已婚"}>已婚</Radio>
                    <Radio value={"离异"}>离异</Radio>
                    <Radio value={"丧偶"}>丧偶</Radio>
                  </RadioGroup>
              </div>
              <div className="mar-b mar-t">
                <FormItem>
                  {getFieldDecorator('profession', {
                    rules: [{ required: false, message: 'Please input your username!' }],
                  })(
                    <Input className="inpt inpt-left-f" prefix={<span style={{fontSize: 16}}>职业</span>} placeholder="" />
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
      
    );
  }
}

export default Form.create()(NormalLoginForm);