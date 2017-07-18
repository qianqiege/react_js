// 基本资料组件
import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select, Radio } from 'antd';
import NewUser from "models/NewUser";
import "../../style.scss";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        //NewUser.getUserInfo("http://qolm.ybyt.cc/api/v1/patient_record/create", `name=${values.userName}&nation=${values.nation}&id_number=${values.idCard}&birthday=${values.Birthday}&phone=${values.phone}&occupation=${values.profession}&address=${values.postalAddress}&sex=${values.userSex}&marriage=${values.marrayState}&health_status={item_b1=null&item_b2=null&item_b3=null&item_b4=null&item_b5=null&item_b6=null&item_b7=null&item_b8=null&item_a =[]}&family_history={father=[]&mother=[]&brother=[]&child=[]}&health_status={item_b1=null&item_b2=null&item_b3=null&item_b4=null&item_b5=null&item_b6=null&item_b7=null&item_b8=null&item_a =[]}&family_history={father=[]&mother=[]&brother=[]&child=[]}&sleep_habit={item_1=null&item_2=null&item_3=null&item_4=null}&emotional_state={item_1=null&item_2=null&item_3=null&item_4=null}&environment_state={itemitemitem_3=null=item_4=null}&drink_history={dry_out_years=[]&item_1=[]&item_2=[]&item_3=[]&item_4=[]}&smoke_history={quit_smoking_years=[]&item_1=[]&item_2=[]&item_3=[]&item_4=[]}&eating_habit={item_1=[]&item_2=[]&item_3=[]&item_4=[]&item_5=[]&item_6=[]&item_7=[]&item_8=[]&item_9=[]&item_10=[]&item_11=[]}&exercise_habit={item_1=[]&item_2=[]&item_4=[]&item_3=[]}&professional_state={item_1=null&item_2=null&item_3=[]}&excretion={nocturnal_enuresis_times=""&constipation_times=""&item_1=null&item_2=null}&check_body={item_1=null&item_2=null&item_3=[]&item_4=[]}&physical_examination={height=""&weight=""&baric_index=""&hipline=""&waistline=""&waist_to_hipratio=""&min_BloodPressure=""&max_BloodPressure=""&total_cholesterol=""&triglyceride=""&high_density_lipoprotein=""&low_density_lipoprotein=""&b_BloodGlucose=""&glycosylated_hemoglobin=""&homocysteine=""&glutamic_oxaloacetic_transaminase=""&glutamic_pyruvic_transaminase=""&creatinine=""&usea_nitrogen=""&blood_uric_acid=""&ultrasound=""&electrocardiogram=""&image_analysis=""}`);
        
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
                  <Input className="inpt inpt-left-f" addonBefore={<span style={{fontSize: 16}}>姓　　名</span>} placeholder="" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('idCard', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                })(
                  <Input className="inpt inpt-left-t" addonBefore={<span style={{fontSize: 16}}>身份证号</span>} placeholder="" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('Birthday', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                })(
                  <Input className="inpt inpt-left-t" addonBefore={<span style={{fontSize: 16}}>出生日期</span>} placeholder="" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('phone', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                })(
                  <Input className="inpt inpt-left-t" addonBefore={<span style={{fontSize: 16}}>联系方式</span>} placeholder="" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('postalAddress', {
                  rules: [{ required: false, message: 'Please input your username!' }],
                })(
                  <Input className="inpt inpt-left-t" addonBefore={<span style={{fontSize: 16}}>通讯地址</span>} placeholder="" />
                )}
              </FormItem>
            </Col>
            <Col span={10} style={{ float: 'right', fontSize: 16 }}>
              <div className="mar-b mar-t">
                <p className="mar-b">民族</p>
                  <FormItem>
                    {getFieldDecorator('nation', {
                      rules: [{ required: false, message: 'Please input your username!' }],
                      initialValue: "汉族",
                    })(
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="请输入民族"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                      >
                        <Option className="optionWidth" value="汉族">汉族</Option>
                        <Option className="optionWidth" value="藏族">藏族</Option>
                        <Option className="optionWidth" value="回族">回族</Option>
                      </Select>
                    )}
                  </FormItem> 
              </div>
              <div className="mar-b mar-t">
                <p>性别</p>
                  <FormItem>
                    {getFieldDecorator('userSex', {
                      rules: [{ required: false, message: 'Please input your username!' }],
                      initialValue: "男",
                    })(
                      <RadioGroup onChange={this.onChangeSex}>
                        <Radio value={"男"}>男</Radio>
                        <Radio value={"女"}>女</Radio>
                      </RadioGroup>
                    )}
                  </FormItem>
              </div>
              <div className="mar-b mar-t">
                <p>婚姻状况</p>
                  <FormItem>
                    {getFieldDecorator('marrayState', {
                      rules: [{ required: false, message: 'Please input your username!' }],
                      initialValue: "未婚",
                    })(
                      <RadioGroup onChange={this.onChangeMarray}>
                        <Radio value={"未婚"}>未婚</Radio>
                        <Radio value={"已婚"}>已婚</Radio>
                        <Radio value={"离异"}>离异</Radio>
                        <Radio value={"丧偶"}>丧偶</Radio>
                      </RadioGroup>
                    )}
                  </FormItem>
              </div>
              <div className="mar-b mar-t">
                <FormItem>
                  {getFieldDecorator('profession', {
                    rules: [{ required: false, message: 'Please input your username!' }],
                  })(
                    <Input className="inpt inpt-left-f" addonBefore={<span style={{fontSize: 16}}>职业</span>} placeholder="" />
                  )}
                </FormItem>
              </div>
            </Col>
          </Row>
          <h3 style={{ marginBottom: 10,fontSize:15}}>目前健康状况</h3>
          <p style={{fontSize: 16,marginTop:10}}>1.您在过去的一段时间感觉疲劳吗？</p>
            <FormItem >
              <RadioGroup onChange={this.onChangeMarray} >
                <Radio value={"无疲劳"}>无疲劳</Radio>
                <Radio value={"稍微疲劳"}>稍微疲劳</Radio>
                <Radio value={"很疲劳"}>很疲劳</Radio>
                <Radio value={"非常疲劳"}>非常疲劳</Radio>
              </RadioGroup>
            </FormItem>
            <p style={{fontSize: 16}}>2.您近半年内测过血压吗？</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"未测过"}>未测过</Radio>
                <Radio value={"测过"}>测过</Radio>
              </RadioGroup>
            </FormItem>

            <p style={{fontSize: 16}}>3.您近半年内测过血脂吗？</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"未测过"}>未测过</Radio>
                <Radio value={"测过"}>测过</Radio>
              </RadioGroup>
            </FormItem>
            <p style={{fontSize: 16}}>4.您是否经常有颈部、腰部、骨关节疼痛？</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"是"}>是</Radio>
                <Radio value={"否"}>否</Radio>
              </RadioGroup>
            </FormItem>

            <p style={{fontSize: 16}}>5.您近一年住过医院吗？</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"没有"}>没有</Radio>
                <Radio value={"有"}>有</Radio>
              </RadioGroup>
            </FormItem>
            <p style={{fontSize: 16}}>6.您不歇气一次可以爬几层楼梯？</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"1 层"}>1 层</Radio>
                <Radio value={"3 层"}>3 层</Radio>
                <Radio value={"5 层"}>5 层</Radio>
                <Radio value={"7 层"}>7 层</Radio>
              </RadioGroup>
            </FormItem>
            <h3 style={{ marginBottom: 10,fontSize:15}}>饮食习惯</h3> 
            <p style={{fontSize: 16}}>1.每日的主副食比例:</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"主食为主"}>主食为主</Radio>
                <Radio value={"主副食各半"}>主副食各半</Radio>
                <Radio value={"主食为辅"}>主食为辅</Radio>
              </RadioGroup>
            </FormItem>
            <p style={{fontSize: 16}}>2.平均每天吃蔬菜：</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"不吃"}>不吃</Radio>
                <Radio value={"<100 克"}> 100 克</Radio>
                <Radio value={"100-200 克"}>100-200 克</Radio>
                <Radio value={"250-350 克"}>250-350 克</Radio>
                <Radio value={">400 克"}>>400 克</Radio>
              </RadioGroup>
            </FormItem>
            <p style={{fontSize: 16}}>3.平均每天吃水果：</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"不吃"}>不吃</Radio>
                <Radio value={"<100 克"}> 100 克</Radio>
                <Radio value={"100-200 克"}>100-200 克</Radio>
                <Radio value={"250-350 克"}>250-350 克</Radio>
              </RadioGroup>
            </FormItem>
            <p style={{fontSize: 16}}>4.平均每天吃鸡蛋：</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"不吃"}>不吃</Radio>
                <Radio value={"1 个"}> 1 个</Radio>
                <Radio value={"2 个"}>2 个</Radio>
                <Radio value={">3 个"}>>3 个</Radio>
              </RadioGroup>
            </FormItem>

            <h3 style={{ marginBottom: 10,fontSize:15}}>运动习惯</h3> 
            <p style={{fontSize: 16}}>1.您每周的运动次数是：</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"从不运动"}>从不运动</Radio>
                <Radio value={"1 次∕周"}> 1 次∕周</Radio>
                <Radio value={"2-3次∕周"}>2-3次∕周</Radio>
                <Radio value={"4-5次∕周"}>4-5次∕周</Radio>
                <Radio value={">5次∕周"}>>5次∕周</Radio>
              </RadioGroup>
            </FormItem>
            <p style={{fontSize: 16}}>2.您每次的运动时间是：</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"30分钟∕次"}>30分钟∕次</Radio>
                <Radio value={"30-60 分钟∕次"}> 30-60 分钟∕次</Radio>
                <Radio value={">1小时∕次"}>1小时∕次</Radio>
              </RadioGroup>
            </FormItem>
            <p style={{fontSize: 16}}>3.您目前运动方式是：</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"30分钟∕次"}>30分钟∕次</Radio>
                <Radio value={"30-60 分钟∕次"}>30-60 分钟∕次</Radio>
                <Radio value={">1小时∕次"}>>1小时∕次</Radio>
              </RadioGroup>
            </FormItem>

            <h3 style={{ marginBottom: 10,fontSize:15}}>睡眠</h3> 
            <p style={{fontSize: 16}}>1.请问您是否有：</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"多梦易醒"}>多梦易醒</Radio>
                <Radio value={"入睡困难"}>入睡困难</Radio>
                <Radio value={"醒后难以入睡"}>醒后难以入睡</Radio>
                <Radio value={"辅助药物"}>辅助药物</Radio>
                <Radio value={"否"}>否</Radio>
              </RadioGroup>
            </FormItem>
            <p style={{fontSize: 16}}>2.每天睡眠时间：</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"小于6小时"}>小于6小时</Radio>
                <Radio value={"6-8小时"}>6-8小时</Radio>
                <Radio value={"8-10小时"}>8-10小时</Radio>
                <Radio value={"大于10小时"}>大于10小时</Radio>
              </RadioGroup>
            </FormItem>
            <p style={{fontSize: 16}}>3.午睡时间：</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"30分钟左右"}>30分钟左右</Radio>
                <Radio value={"30-60分钟"}>30-60分钟</Radio>
                <Radio value={"1小时"}>1小时</Radio>
                <Radio value={"2小时"}>2小时</Radio>
                <Radio value={"从来不午睡"}>从来不午睡</Radio>
              </RadioGroup>
            </FormItem>
            <p style={{fontSize: 16}}>4.您经常熬夜吗？</p>
            <FormItem>
              <RadioGroup onChange={this.onChangeMarray}>
                <Radio value={"经常"}>经常</Radio>
                <Radio value={"偶尔"}>偶尔</Radio>
                <Radio value={"很少"}>很少</Radio>
                <Radio value={"无"}>无</Radio>
              </RadioGroup>
            </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button"> 提交 </Button>
          </FormItem>
        </Form>
      </div>
      
    );
  }
}

export default Form.create()(NormalLoginForm);