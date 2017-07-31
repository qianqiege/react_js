//这是健康管理模块页面
import React, { PropTypes } from "react";
import { Icon,Button,Form,Input,message } from 'antd';
import {observer} from "mobx-react";
import MeanInfo from './meanInfo';
import MeanSearch from './meanSearch';
import UserInfo from './userInfo';
import MeansTable from './meansTable';
import MeansInfo from "models/MeansInfo";

const FormItem = Form.Item;

@observer
class HealthManagement extends React.Component{
	static propTypes = {
		form: PropTypes.object.isRequired,
	}
	constructor(props) {
		super(props);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		let arr = [];
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				MeansInfo.kaifang.map(pro => {
					arr.push(`{"产品名":${pro.name},"用法":${pro.usage},"数量":${pro.count}}`);
				});
				MeansInfo.postKaifang("http://qolm.ybyt.cc/api/v1/recipe/create_health_manage_recipe",
					`patient_id=${MeansInfo.meansUser.id}&physiology=${values.physiology}&emotion=${values.emotion}&nutrition=${values.nutrition}&life_style=${values.life_style}&detail=${arr}&number=${MeansInfo.meansUser.id_number}`);
				this.props.form.resetFields();
				message.success('开方成功');
			}else {
				message.error('遇到一些问题，请重新提交');
				this.props.form.resetFields();
			}
		});
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		const {kaiBtn} = MeansInfo.isKaifang;
		return (
			<div>
				<MeanSearch />
					
				<div className="userHealth userSlide">
					<UserInfo />
					<div className="pingjia">
						<p><Icon type="edit" style={{ fontSize: 18, color: '#37474f' }} />健康管理指导意见</p>
						<div className="fangmian">
							<Form onSubmit={this.handleSubmit}>        
								<FormItem>
									<span style={{fontSize: "16px"}}>生理方面：</span>
									{getFieldDecorator('physiology', {
									rules: [{ required: false, message: '' }],
								})(

									<Input type="textarea" rows={4} />
								)}
								</FormItem>
								<FormItem>
									<span style={{fontSize: "16px"}}>情志方面：</span>
									{getFieldDecorator('emotion', {
									rules: [{ required: false, message: '' }],
								})(
									<Input type="textarea" rows={4} />
								)}
								</FormItem>
								<FormItem>
									<span style={{fontSize: "16px"}}>营养方面：</span>
									{getFieldDecorator('nutrition', {
									rules: [{ required: false, message: '' }],
								})(
									<Input type="textarea" rows={4} />
								)}
								</FormItem>
								<FormItem>
									<span style={{fontSize: "16px"}}>生活方式方面：</span>
									{getFieldDecorator('life_style', {
									rules: [{ required: false, message: '' }],
								})(
									<Input type="textarea" rows={4} />
								)}
								</FormItem>
							</Form>
						</div>
					</div>
					<div className="pingjia">
						<p><Icon type="file-text" style={{ fontSize: 18, color: '#37474f' }} />方案</p>
						<MeansTable />
					</div>				
				</div>
				<h3 className="null">该账号不存在</h3>
				{ kaiBtn ? <Button type="primary" size="large" onClick={this.handleSubmit} style={{margin: "10px auto",display: "block",width: "70%"}}>开方</Button> : null}
				<MeanInfo />
				
			</div>
		);
	}
}

export default Form.create()(HealthManagement);