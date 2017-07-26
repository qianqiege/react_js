//档案查看页面

import React from "react";
import { Button,Icon } from 'antd';
import './fileview.css';
import { observer } from 'mobx-react';
import UserList from 'models/UserList';



@observer


class FileView extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		const userId = this.props.location.query.id;
		UserList.getUserBorder(`http://qolm.ybyt.cc/api/v1/patient_record/check?id=${userId}`);
	}

	render() {
		return (
			<div>
				<div className="userBorder">
					<Button type="primary" className="modify">修改</Button>
					<h3>用户基本信息</h3>
					<div className="basicInfo">
						<Icon type="idcard" className="idLeft"/>
						<div className="idRight">
							<p><span>{`姓名：${UserList.userBorder.name}`}</span><span>{`性别：${UserList.userBorder.sex}`}</span><span>{`民族：${UserList.userBorder.nation}`}</span></p>
							<p><span>{`生日：${UserList.userBorder.birthday}`}</span><span>{`证件：${UserList.userBorder.id_number}`}</span><span>{`住址：${UserList.userBorder.address}`}</span></p>							
						</div>
					</div>
					<div className="healthStatus ubColor">
						<h4>基本健康状况</h4>
						<div className="hsLfet left">
							<p>您在过去的一段时间感觉疲劳吗：{undefined?null:<span>{UserList.userBorder.health_status.item_b1}</span>}</p>
							<p>您近半年内测过血压吗：{undefined?null:<span>{UserList.userBorder.health_status.item_b4}</span>}</p>
							<p>您近半年内测过血脂吗：{undefined?null:<span>{UserList.userBorder.health_status.item_b5}</span>}</p>
						</div>
						<div className="hsRight right">
							<p>您是否经常有颈部、腰部、骨关节疼痛：{undefined?null:<span>{UserList.userBorder.health_status.item_b6}</span>}</p>
							<p>您近一年住过医院吗：{undefined?null:<span>{UserList.userBorder.health_status.item_b7}</span>}</p>
							<p>您不歇气一次可以爬几层楼梯：{undefined?null:<span>{UserList.userBorder.health_status.item_b8}</span>}</p>
						</div>						
					</div>
					<div className="eatStatus ubColor">
						<h4>饮食习惯</h4>
						<div className="eatLfet left">
							<p>每日的主副食比例：{undefined?null:<span>{UserList.userBorder.eating_habit.item_1}</span>}</p>
							<p>平均每天吃蔬菜：{undefined?null:<span>{UserList.userBorder.eating_habit.item_3}</span>}</p>
						</div>
						<div className="eatRight right">
							<p>平均每天吃水果：{undefined?null:<span>{UserList.userBorder.eating_habit.item_4}</span>}</p>
							<p>平均每天吃鸡蛋：{undefined?null:<span>{UserList.userBorder.eating_habit.item_5}</span>}</p>
						</div>						
					</div>	
					<div className="sportsStatus ubColor">
						<h4>运动习惯</h4>
						<div className="eatLfet left">
							<p>您每周的运动次数是：{undefined?null:<span>{UserList.userBorder.exercise_habit.item_1}</span>}</p>
							<p>您每次的运动时间是：{undefined?null:<span>{UserList.userBorder.exercise_habit.item_2}</span>}</p>
						</div>
						<div className="eatRight right">
							<p>您目前运动方式是：{undefined?null:<span>{UserList.userBorder.exercise_habit.item_4}</span>}</p>
						</div>						
					</div>
					<div className="sleepStatus ubColor">
						<h4>睡眠</h4>
						<div className="spLfet left">
							<p>请问您是否有：{undefined?null:<span>{UserList.userBorder.sleep_habit.item_1}</span>}</p>
							<p>每天睡眠时间：{undefined?null:<span>{UserList.userBorder.sleep_habit.item_2}</span>}</p>
						</div>
						<div className="spRight right">
							<p>午睡时间：{undefined?null:<span>{UserList.userBorder.sleep_habit.item_3}</span>}</p>
							<p>您经常熬夜吗：{undefined?null:<span>{UserList.userBorder.sleep_habit.item_4}</span>}</p>
						</div>						
					</div>			
				</div>
			</div>
		);
	}

}

export default FileView;