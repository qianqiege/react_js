// 评价客户页面
import React from 'react';
import ReactDOM from 'react-dom';
import { Rate,Button } from 'antd';
import { observer } from 'mobx-react';
import './Evaluate.css';


@observer 
class Evaluate extends React.Component{

	constructor(props){
		super(props);
		this.state = {
		   value: 3,
		   count: null,
		}
	}

	handleChange = (value) => {
    	this.setState({ value });
  	}

	render(){
		const { value } = this.state;
		return(
			<div>
				<h1 style={{marginBottom:50}}>管理评价</h1>
				<div className="pjContent">
					<b>姓名：</b>
					<b style={{marginLeft:50}}>评分：</b>

					 <span className="pjStar">
				        <Rate onChange={this.handleChange} value={value} />
				        {value && <span className="ant-rate-text">{value} 星</span>}
				    </span>
				    <b className="pjPeople clearfix">审评人：巴啦啦小魔仙　　　日期：2017-7-10</b>
				    <textarea placeholder="请输入您的评价" className="pjArea"/>
				    <Button type="primary" className="pjPost">提交评价</Button>
				</div>
			</div>
		)
	}
}

export default Evaluate;