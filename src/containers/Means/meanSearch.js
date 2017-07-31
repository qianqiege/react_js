//这是方案室三个页面共用的搜索框组件

import	React	from	'react';
import	{ Input,Button, message }	from	'antd';
import	{ Link }	from	'react-router';
import	{ observer }	from	"mobx-react";
import	MeansInfo	from	'models/MeansInfo';
import	User	from	'models/User';
import	GetIdentityCard from	"models/GetIdentityCard";
import	$	from	"jquery";
import	'./meanSearch.css';


const	Search=Input.Search;

@observer
class	MeanSearch	extends	React.Component{
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
		this.handleSearch=this.handleSearch.bind(this);
	}

	componentDidMount(){
		User.fetchUsers().then(() => {
			GetIdentityCard.getCard(`http://qolm.ybyt.cc/api/v1/examination_input/get_auto_identity_card?id=${User.current_user_info.id}`);	
			const	{idcard}=GetIdentityCard.Idcard;
			if(idcard==="no_id"){
				$(".searchInput .ant-input").val();
			}else{
				$(".searchInput .ant-input").val(idcard);
			}
		});
	}
	handleChange(e){
		if(e.target.value.length==18){
			MeansInfo.idNumber=e.target.value;
			MeansInfo.getInfo(`http://qolm.ybyt.cc/api/v1/patient/get_by_id_number?id_number=${e.target.value}`);
			MeansInfo.getRecords(`http://qolm.ybyt.cc/api/v1/registration/get_number?id_number=${e.target.value}`);
			MeansInfo.getCurrentUser("http://qolm.ybyt.cc/api/v1/users/current_user");
		}
	}
	handleSearch(val){
		if(val.length==18){
			MeansInfo.idNumber=val;
			MeansInfo.getInfo(`http://qolm.ybyt.cc/api/v1/patient/get_by_id_number?id_number=${val}`);
			MeansInfo.getRecords(`http://qolm.ybyt.cc/api/v1/registration/get_number?id_number=${val}`);
			MeansInfo.getCurrentUser("http://qolm.ybyt.cc/api/v1/users/current_user");
		}else {
			message.warning("身份证格式不正确");
		}
	}
	render(){
		
		return(
			<div className="meanSearchs">
				<Search
					className="searchInput"
					placeholder="请输入您的身份证号码"
					style={{border:0}}
					onChange={this.handleChange}
					onSearch={this.handleSearch}
				/>			
				<Button	className="look">
					<Link	to={`/means/healthSearch?id_number=${MeansInfo.idNumber}`}>查看记录</Link>
				</Button>				
			</div>
		);
	}
}

export	default	MeanSearch;