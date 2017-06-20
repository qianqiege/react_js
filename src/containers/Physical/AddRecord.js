import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';

import ".././style.scss";

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
        <h3 style={{paddingLeft: 80, marginBottom: 10}}>添加新记录</h3>
        <Form onSubmit={this.handleSubmit} className="login-form record-block">
          <Row>
            <Col span={10} style={{float: 'left'}}>
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
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>姓 名</span>} placeholder="" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('contactWay', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>手机号</span>} placeholder="" />
                )}
              </FormItem>
            </Col>
            <Col span={10} style={{ float: 'right', fontSize: 16 }}>
              <div className="mar-b mar-t">
                <p>性别</p>
                  <RadioGroup onChange={this.onChangeSex} value={this.state.sexValue}>
                    <Radio value={"男"}>男</Radio>
                    <Radio value={"女"}>女</Radio>
                  </RadioGroup>
              </div>
            </Col>
          </Row>
           {/*<FormItem>
                       <Button type="primary" htmlType="submit" className="login-form-button"> 提交 </Button>
                      </FormItem>*/}
        </Form>
      </div>
      
    );
  }
}

export default Form.create()(NormalLoginForm);