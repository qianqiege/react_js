import	{observable,action,runInAction}	from	"mobx";
import	cookie	from	"js-cookie";

class	GetIdentityCard{
	@observable	Idcard={
		idcard:"",
	};
	@action	async	getCard(url){
		const	card=await	fetch(url, {
			mode:"cors",
			method:"GET",
			headers:{"Content-Type":"application/x-www-form-urlencoded",
				"Access-Control-Allow-Headers":"Authorization",
				"Access-Control-Allow-Origin":"*",
				"Access-Control-Allow-Credentials":true,
				"Access-Authorization":`${cookie.get("access_token")}`},
		}).then(function(response){
			return	response.json();
		}).then(function(jsonData){
			console.log(jsonData);
			return	jsonData;
		}).catch(function(){
			// console.log("请求失败");
		})
		runInAction("success	GetIdentityCard",()=>{
			this.Idcard.idcard=card;
		})
	}

}
export	default	new	GetIdentityCard();