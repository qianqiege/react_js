//这是筑脊模块页面

import React from 'react';
import { Icon,Button,Input,Form,Checkbox,message } from 'antd';
import MeanInfo from './meanInfo';
import MeanSearch from './meanSearch';
import UserInfo from './userInfo';
import MeansInfo from "models/MeansInfo";
import MeansJz from 'models/MeansJz';
import SpineSelect from './SpineSelect';
import { observer } from "mobx-react";
import './spine.css';

const FormItem = Form.Item;

@observer
class Spine extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			disable:false,
		};
	}
	//开方提交；
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log(values, MeansJz.jizhu.slice(), MeansInfo.meansUser.id, MeansJz.isKaifang.levelVal);
				MeansJz.postKaifang("http://qolm.ybyt.cc/api/v1/recipe/create_spine_recipe",
					`patient_id=${MeansInfo.meansUser.id}&blood_letting_times=${values.blood_letting_times}&physical_condition=${values.physical_condition}&diagnostic_advice=${values.diagnostic_advice}&treatment_level=${MeansJz.isKaifang.levelVal}&treatment_times=${values.treatment_times}&single_amount=&total=${MeansJz.isKaifang.prices}&detail=${MeansJz.jizhu.slice()}`);
				this.props.form.resetFields();
				message.success('脊柱开方成功');
			}else {
				message.error('遇到一些问题，请重新提交');
				this.props.form.resetFields();
			}
		});
	}
	//点击放血排毒checkbox;
	onChange (e){
		if( e.target.checked ) {
			//请求放血排毒价格数据，然后选中时将1作为参数传入；
			MeansJz.getBloodletting("http://qolm.ybyt.cc/api/v1/spine/bloodletting").then(() => {
				MeansJz.handleCount(1);
			});
		}else if(!e.target.checked) {
			this.props.form.setFieldsValue({blood_letting_times: 1}); //放血排毒input变为0；
			MeansJz.isKaifang.allPrice = 0; //放血排毒的总价为0；
			MeansJz.isKaifang.prices = MeansJz.isKaifang.jizhuPrice; //总额等于脊柱的总额；
		}
		this.setState({
			disable:e.target.checked,
		})

	}
	//放血排毒输入框
	onBlood(e) {
		if( e.target.value >= 0 ) {
			MeansJz.handleCount(e.target.value);
			MeansJz.isKaifang.jiZhuBtn = true;
		}else {
			e.target.value = 0;
		}
	}
	handleTreatment(e) {
		if( e.target.value >= 0 ) {
			MeansJz.isKaifang.treatmentCount = e.target.value;
			MeansJz.isKaifang.prices = MeansJz.isKaifang.allPrice + MeansJz.isKaifang.jizhuPrice * MeansJz.isKaifang.treatmentCount;
			MeansJz.isKaifang.jiZhuBtn = true;
		}else {
			e.target.value = 0;
		}
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		const {jiZhuBtn} = MeansJz.isKaifang;
		return (
			<div>
				<MeanSearch />
				<div className="userSpine userSlide">
					<UserInfo />
					<div>
						<p><Icon type="edit" style={{ fontSize: 18, color: '#37474f' }} />健康管理师诊断</p>
						<Form onSubmit={this.handleSubmit}>
							<FormItem>
								<span style={{fontSize: "16px"}}>身体状况描述：</span>
								{getFieldDecorator('physical_condition', {
									rules: [{ required: false, message: '' }],
								})(
									<Input type="textarea" rows={4} />
								)}
							</FormItem>
							<FormItem>
								<span style={{fontSize: "16px"}}>诊断建议：</span>
								{getFieldDecorator('diagnostic_advice', {
									rules: [{ required: false, message: '' }],
								})(
									<Input type="textarea" rows={4} />
								)}
							</FormItem>
							<FormItem>
								<p><Icon type="file-text" style={{ fontSize: 18, color: '#37474f' }} />方案</p>
								<Checkbox  onChange={this.onChange.bind(this)}>放血排毒 3600元</Checkbox>
								{getFieldDecorator('blood_letting_times', {
									rules: [{ required: false, message: '' }],
									initialValue: 1,
								})(
									<Input type="number" className="blood"  disabled={!this.state.disable} onChange={this.onBlood}/>
								)}
							</FormItem>
							<FormItem>
								<span>治疗次数</span>
								{getFieldDecorator('treatment_times', {
									rules: [{ required: false, message: '' }],
									initialValue: 1,
								})(
									<Input type="number" className="cishu" onChange={this.handleTreatment}/>
								)}
							</FormItem>
						</Form>
					</div>
					<p>筑脊师级别/脊柱干预步骤</p>
					<SpineSelect />			
				</div>
				<h3 className="null">该账号不存在</h3>
				{ jiZhuBtn ? <Button type="primary" size="large" onClick={this.handleSubmit} style={{margin: "10px auto",display: "block",width: "70%"}}>开方</Button> : null}
				<MeanInfo />
			</div>
		);
	}
}

export default Form.create()(Spine);