import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';

import "../../style.scss";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const userInfo = {
      name: "fangming",
      idCard: "142601166202110234",
      birthday: "2017-02-21",
      contactWay: 15986630552,
      postalAddress: "深圳市南山区",
      contactWay: 15986630552,
      nation: "汉族",
      sexValue: "男",
      marrayValue: "未婚",
      occupation: "软件工程师",
    }
    console.log(userInfo.name);
    return (
      <div style={{marginTop: 80}}>
        <Form className="login-form record-block" >
          <Row>
            <Col span={10} style={{float: 'left'}}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: userInfo.name,
                })(
                  <Input className="inpt inpt-left-f" prefix={<span style={{fontSize: 16}}>姓名</span>} placeholder="" disabled />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('idCard', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: userInfo.idCard,
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>身份证号</span>} placeholder="" disabled />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('Birthday', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: userInfo.birthday,
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>出生日期</span>} placeholder="" disabled />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('contactWay', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: userInfo.contactWay,
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>联系方式</span>} placeholder="" disabled />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('postalAddress', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: userInfo.postalAddress,
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>通讯地址</span>} placeholder="" disabled />
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
                  defaultValue={userInfo.nation}
                  optionFilterProp="children"
                  disabled
                >
                  <Option className="optionWidth" value="汉族">汉族</Option>
                </Select>
              </div>
              <div className="mar-b mar-t">
                <p>性别</p>
                  <RadioGroup value={userInfo.sexValue} disabled>
                    <Radio value={"男"}>男</Radio>
                    <Radio value={"女"}>女</Radio>
                  </RadioGroup>
              </div>
              <div className="mar-b mar-t">
                <p>婚姻状况</p>
                  <RadioGroup value={userInfo.marrayValue} disabled>
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
                    initialValue: userInfo.occupation,
                  })(
                    <Input className="inpt inpt-left-f" prefix={<span style={{fontSize: 16}}>职业</span>} placeholder="" disabled />
                  )}
                </FormItem>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      
    );
  }
}

export default Form.create()(NormalLoginForm);