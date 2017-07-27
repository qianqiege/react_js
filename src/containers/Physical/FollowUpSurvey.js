import React, { PropTypes } from "react";
import { observer } from "mobx-react";
import { Form,Input, Button, Row, Col, Select,  Alert,message } from 'antd';
import UserPhysical from "models/UserPhysical";
import	User	from	'models/User';
import	$	from	"jquery";
import  GetIdentityCard from  "models/GetIdentityCard";
import "../style.scss";

const FormItem = Form.Item;

@observer
class FollowUpSurver extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
	User.fetchUsers().then(() => {
		GetIdentityCard.getCard(`http://qolm.ybyt.cc/api/v1/examination_input/get_auto_identity_card?id=${User.current_user_info.id}`);		
	}); 
	UserPhysical.getDevice("http://qolm.ybyt.cc/api/v1/examination_input/number");
  }
  handleSubmit = (e) => {
    const { validateFields, resetFields } = this.props.form;
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
            UserPhysical.checkDevice("http://qolm.ybyt.cc/api/v1/examination_input/check", `id_number=${values.idCord}&phone=${values.deviceNum}`);
            //console.log(values.idCord);
            resetFields();
            UserPhysical.statusBool.display = "block";
            setTimeout( function() {
              UserPhysical.statusBool.display = "none";
            }, 3000);
        message.success('提交成功');
      }else {
        message.error('遇到一些问题，请重新提交');
        
      }
    });
  }
  handleStatus() {
    this.setState({
      statusBool: "true",
    });
  }
 
  render() {
	const {idcard}=GetIdentityCard.Idcard;
    if(idcard ==="no_id"){
		$(".ant-form-item-control:first").text();
    }else{
      $(".ant-form-item-control:first").text(idcard);
    }
    const { getFieldDecorator } = this.props.form;
    const { display } = UserPhysical.statusBool;
    return (
      <div className="record-content">
        <h1>随访包测量</h1>
        <h3 style={{paddingLeft: 80, marginBottom: 40}}>随访包测量</h3>
        <Form onSubmit={this.handleSubmit} className="login-form record-block">
          <Row>
            <Col span={10} style={{float: 'left', fontSize: 16 }}>
              <span>请输入身份证号码</span>
              <FormItem>
                {getFieldDecorator('idCord', {
                  rules: [{ required: true, message: '请输入身份证号码!' }],
                })(
                  <Input className="inpt-idcard" 
                  style={{border: 'none', borderBottom: '1px solid #e1e1e1', 
                  boxShadown: 'none', borderRadius: 'none'}}/>
                )}
              </FormItem>
            </Col>
            <Col span={10} style={{ float: 'right', fontSize: 16 }}>
              <span>请选择设备号码</span>
              <FormItem>
                {getFieldDecorator('deviceNum', {
                  rules: [{ required: false, message: '请选择设备号码!' }],
                  initialValue: "13530803462",
                })(
                    <Select
                      mode="combobox"
                      size="default"
                      className="border-none"
                    >
                      {UserPhysical.deviceList}
                    </Select>
                )}
              </FormItem>
             
            </Col>
          </Row>           
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button"> 提交 </Button>
          </FormItem>
        </Form>
        <Alert message="提交成功" type="success" style={{ display: `${display}`, position: "absolute", top: "20px", width: "100%" }} />
      </div>
      
    );
  }
}

export default Form.create()(FollowUpSurver);
