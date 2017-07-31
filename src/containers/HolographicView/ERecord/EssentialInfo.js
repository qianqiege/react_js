import React, { PropTypes } from "react";
import { Form, Input, Row, Col, Select, Radio } from 'antd';
import PatientRecord from 'models/PatientRecord';
import "../../style.scss";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class NormalLoginForm extends React.Component {
  static propTypes = {
    form: PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.object])
  }
  constructor(props) {
    super(props);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const dataRecord=PatientRecord.record;
    return (
      <div style={{marginTop: 80}}>
        <Form className="login-form record-block" >
          <Row>
            <Col span={10} style={{float: 'left'}}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: dataRecord.name,
                })(
                  <Input className="inpt inpt-left-f" prefix={<span style={{fontSize: 16}}>姓名</span>} placeholder="" disabled />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('idCard', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: dataRecord.idCard,
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>身份证号</span>} placeholder="" disabled />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('Birthday', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: dataRecord.birthday,
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>出生日期</span>} placeholder="" disabled />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('contactWay', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: dataRecord.contactWay,
                })(
                  <Input className="inpt inpt-left-t" prefix={<span style={{fontSize: 16}}>联系方式</span>} placeholder="" disabled />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('postalAddress', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: dataRecord.postalAddress,
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
                  defaultValue={dataRecord.nation}
                  optionFilterProp="children"
                  disabled
                >
                  <Option className="optionWidth" value="汉族">汉族</Option>
                </Select>
              </div>
              <div className="mar-b mar-t">
                <p>性别</p>
                  <RadioGroup value={dataRecord.sexValue} disabled>
                    <Radio value={"男"}>男</Radio>
                    <Radio value={"女"}>女</Radio>
                  </RadioGroup>
              </div>
              <div className="mar-b mar-t">
                <p>婚姻状况</p>
                  <RadioGroup value={dataRecord.marrayValue} disabled>
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
                    initialValue: dataRecord.occupation,
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