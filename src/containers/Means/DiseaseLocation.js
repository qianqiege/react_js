//这是疾病谱定位页面

import React from 'react';
import { Icon,Button,Form,Input,message } from 'antd';
import cookie from 'js-cookie';
import MeanInfo from './meanInfo';
import MeanSearch from './meanSearch';
import UserInfo from './userInfo';
import './diseaseLocation.css';
import MeansInfo from "models/MeansInfo";
import { observer } from 'mobx-react';

const FormItem=Form.Item;

@observer
class DiseaseLocation extends React.Component{

	constructor(props) {
		super(props);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				MeansInfo.postKaifang("http://qolm.ybyt.cc/api/v1/recipe/create_disease_location_recipe",
					`patient_id=${MeansInfo.meansUser.id}&physiology=${values.physiology}&emotion=${values.emotion}&nutrition=${values.nutrition}&life_style=${values.life_style}&main_symptom=${values.main_symptom}&emergency_symptom=${values.emergency_symptom}&part_symptom=${values.part_symptom}&second_part_symptom=${values.second_part_symptom}`);
				this.props.form.resetFields();
				message.success('定位开方成功');
			}else {
				message.error('遇到一些问题，请重新提交');
				this.props.form.resetFields();
			}
		});
	}
	render(){
		const { getFieldDecorator }=this.props.form;
		return (
			<div>
				<MeanSearch />
											
				<div className="userHealth userSlide">
					<UserInfo />
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
						<FormItem>
							<p><Icon type="fork" style={{ fontSize: 18, color: '#37474f' }} />主症</p>
							{getFieldDecorator('main_symptom', {
							rules: [{ required: false, message: '' }],
						})(
							<Input type="textarea" rows={4} />
						)}
						</FormItem>
						<FormItem>
							<p><Icon type="fork" style={{ fontSize: 18, color: '#37474f' }} />急症</p>
							{getFieldDecorator('emergency_symptom', {
							rules: [{ required: false, message: '' }],
						})(
							<Input type="textarea" rows={4} />
						)}
						</FormItem><FormItem>
							<p><Icon type="fork" style={{ fontSize: 18, color: '#37474f' }} />兼症</p>
							{getFieldDecorator('part_symptom', {
							rules: [{ required: false, message: '' }],
						})(
							<Input type="textarea" rows={4} />
						)}
						</FormItem><FormItem>
							<p><Icon type="fork" style={{ fontSize: 18, color: '#37474f' }} />次兼症</p>
							{getFieldDecorator('second_part_symptom', {
							rules: [{ required: false, message: '' }],
						})(
							<Input type="textarea" rows={4} />
						)}
						</FormItem>
						<FormItem>
							<Button className="submit" type="primary" onClick={this.handleSubmit}>提交</Button>
						</FormItem>
					</Form>
				</div>
				<h3 className="null">该账号不存在</h3>
				<MeanInfo />
			</div>
		);
	}
}

export default Form.create()(DiseaseLocation);