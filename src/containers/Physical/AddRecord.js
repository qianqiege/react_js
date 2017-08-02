import React, { PropTypes } from "react";
import	{ Form, Input, Row, Col, Radio } from 'antd';
import	{ observer } from "mobx-react";
import	PhysicalData from "models/PhysicalData";
import	User  from  'models/User';
import	GetIdentityCard from  "models/GetIdentityCard";
import $ from "jquery";
import ".././style.scss";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

@observer
class NormalLoginForm extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
  }
 
  componentDidMount(){
    User.fetchUsers().then(() => {
		GetIdentityCard.getCard(`http://qolm.ybyt.cc/api/v1/examination_input/get_auto_identity_card?id=${User.current_user_info.id}`); 
		const {idcard}=GetIdentityCard.Idcard;
		if(idcard ==="no_id"){
			$(".input-idcard .ant-input").val();
		}else{
			$(".input-idcard .ant-input").val(idcard);
		}
    });
  }

  handleChange(e) {
    // const { name, phone, sex } = PhysicalData.userInfo;
    if( e.target.value.length == 18 ) {
      PhysicalData.checkUser(`http://qolm.ybyt.cc/api/v1/patient/get_by_id_number?id_number=${e.target.value}`);
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { name, phone, sex } = PhysicalData.userInfo;
    
    return (
      <div>
        <Row>
          <Col  xs={26} sm={12} md={12} lg={26} xl={26} span={26} ><h3 style={{paddingLeft: 50, marginBottom: 10}}>添加新记录</h3></Col>
        </Row>
        
        <Form onSubmit={this.handleSubmit} className="login-form record-block">
          <Row>
            <Col  xs={26} sm={12} md={12} lg={26} xl={26} span={26} style={{float: 'left'}}>
              <FormItem>
                {getFieldDecorator('idcard', {
                  rules: [{ required: false, message: 'Please input your idcard!' }],
                })(
                  <Input onChange={this.handleChange.bind(this)} className="inpt inpt-left-t input-style input-idcard" prefix={<span className="fontSize">身份证号</span>}/>
                )}
              </FormItem>
              
              
            </Col>
            <Col xs={26} span={7} >
              <div className="mar-b mar-t">
                <p  className="fontSize">性别</p>
                  <RadioGroup value={sex} disabled>
                    <div className="inline"><Radio className="fontSize input-style" value={"男"}>男</Radio></div>
                    <div className="inline"><Radio className="fontSize" value={"女"}>女</Radio></div>
                  </RadioGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Col  xs={26} sm={12} md={12} lg={12} xl={26} span={26}>
              <FormItem>
                {getFieldDecorator('name',{
                  rules: [{ required: false, message: 'Please input your username!' }],
                  initialValue: `${name}`,
                })(
                  <Input className="inpt input-style inpt-left-t" prefix={<span  className="fontSize">姓 名</span>} disabled/>
                )}
              </FormItem>
              </Col>
              <Col  xs={26} sm={12} md={12} lg={12} xl={26} span={7} >
              <div className="mar-b" style={{}}>
                <FormItem>
                {getFieldDecorator('phone', {
                  rules: [{ required: false, message: 'Please input your phone!' }],
                  initialValue: `${phone}`,
                })(
                  <Input className="inpt input-style inpt-left-t" prefix={<span  className="input-style fontSize">手机号</span>} placeholder="" disabled/>
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