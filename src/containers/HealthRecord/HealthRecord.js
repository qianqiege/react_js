//健康管理记录号页面
import	cookie	from	'js-cookie';
import	React	from	'react';
import	{observer}	from	'mobx-react';
import	{Input}	from	'antd';
import	User	from	'models/User';
import	$	from	"jquery";
import	GetIdentityCard	from	"models/GetIdentityCard";
import	'./HealthRecord.scss';

const	Search=Input.Search;

@observer
class	HealthRecord	extends	React.Component{
	constructor(props){
		super(props);
		this.handleSearch=this.handleSearch.bind(this);
	}
	componentDidMount(){
		User.fetchUsers().then(() => {
			GetIdentityCard.getCard(`http://qolm.ybyt.cc/api/v1/examination_input/get_auto_identity_card?id=${User.current_user_info.id}`);	
		});
	}

	handleSearch(value){
		fetch("http://qolm.ybyt.cc/api/v1/registration/create_number",{
			mode:"cors",
			method:"POST",
			headers:{"Content-Type":"application/x-www-form-urlencoded",
				"Access-Control-Allow-Headers":"Authorization",
				"Access-Control-Allow-Origin":"*",
				"Access-Control-Allow-Credentials":true,
				"Access-Authorization":`${cookie.get("access_token")}`},
			body:`id_number=${value}`
		}).then(function(response){
			return	response.json();
		}).then(function(jsonData){
			$(".healthrecord").slideToggle(function(){
				$(this).text(jsonData.number);
			});
		}).catch(function(){
		});
	}
	render(){
		const	{number}=User.record;
		const	{idcard}=GetIdentityCard.Idcard;
		if(idcard==="no_id"){
			$(".ant-input").val();
		}else{
			$(".ant-input").val(idcard);
		}
		return	(
			<div>
				<h1	className="role">健康管理记录号</h1>
				<span	className="inputNum"	style={{marginLeft:30,fontSize:16}}>
					请输入身份证号码&nbsp;&nbsp;&nbsp;&nbsp;
				<Search	style={{width:450,height:35,marginTop:50,border:0,borderBottom:0}}
					onSearch={this.handleSearch}/>
				</span>
				<p	className="healthrecord"	style={{display:'none'}}>
					{number}
				</p>
			</div>
		);
	}
}

export	default	HealthRecord;
