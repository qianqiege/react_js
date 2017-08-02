// 评价客户页面
import React from 'react';
//import ReactDOM from 'react-dom';
import { Rate,Button,Input } from 'antd';
import { observer } from 'mobx-react';
import './Evaluate.css';
import  User  from  'models/User';
import Comment from 'models/Comment';

@observer 
class Evaluate extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			value: 3,
			count: null,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(){
		Comment.getCurr('http://qolm.ybyt.cc/api/v1/users/current_user');
  	}
	
	handleClick=()=>{
		// this.props.textarea.value((err,values)=>{
		// 	if(!err){
				Comment.postComment('http://qolm.ybyt.cc/api/v1/comments/comment',
					`id_number=${this.props.location.query.proNum}&programs_number=${this.props.location.query.idNum}$result=123456$doctor_name=river&category=1`);
				console.log(values);
				message.success('提交成功');

		// 	}else{
		// 		message.error('遇到一些问题，请重新提交');
		// 	}
		// })
		
		message.success('提交成功');
	}

	handleChange = (value) => {
		this.setState({ value });
	}

	render(){
		const { value } = this.state;
		const name=Comment.Currname.name;
		return(
			<div>
				<h1 style={{marginBottom:50}}>管理评价</h1>
				<div className="pjContent">
					<b>姓名：<span>{this.props.location.query.name}</span></b>
					<b style={{marginLeft:50}}>评分：</b>

					<span className="pjStar">
					<Rate onChange={this.handleChange} value={value} />
						{value && <span className="ant-rate-text">{value} 星</span>}
					</span>
					<b className="pjPeople clearfix">审评人：<span>{name}</span>　　　日期：<span>{this.props.location.query.time}</span></b>
					<Input type="textarea" rows="15" cols="20" placeholder="请输入您的评价" className="pjArea"/>
					<Button type="primary" className="pjPost" onClick={this.handleClick}>提交评价</Button>
				</div>
			</div>
		);
	}
}

export default Evaluate;