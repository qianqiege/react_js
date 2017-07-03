import cookie from "js-cookie";
import { observable, action, runInAction } from "mobx";
import '../containers/RolesManage/DoctorsList/ManageList.css';

class UserMana {

	@observable ManaList = [];
	@observable totalData={
		'total':''
	}
	@action async getManaList(url) {
		const ret = await fetch(url, {
			mode: "cors",
			method: "GET",
			headers: {"Content-Type": "application/x-www-form-urlencoded",
			"Access-Control-Allow-Headers": "Authorization",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
			"Access-Authorization": `${cookie.get("access_token")}`},
		}).then( function(response) {
			return response.json();
		}).then( function(jsonData) {
			return jsonData;
		}).catch( function() {
			alert('cuole');
		});
		runInAction("request success", () => {
			this.totalData.total=ret.meta.total;
			ret.data.map( mana=>{
				if(mana.name==null||mana.name==''){
					return (
						this.ManaList.push({
						key:mana.id,
						name:'无名氏',
						id:mana.id,
						})
					);
				}else{
					return (
						this.ManaList.push({
						key:mana.id,
						name:mana.name,       
						id:mana.id,
						})
					);
				}
			});
		});		
	} 	


  	@observable RoleList = [];
	@action async getRoleList(url) {
		await fetch(url, {
			mode: "cors",
			method: "GET",
			headers: {"Content-Type": "application/x-www-form-urlencoded",
			"Access-Control-Allow-Headers": "Authorization",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
			"Access-Authorization": `${cookie.get("access_token")}`},
		}).then( function(response) {
			return response.json();
		}).then( function(jsonData) {
			return jsonData.data;
		}).catch( function() {
			alert('cuole');
		});

		// if(ret.id_number) {
		// 	runInAction("request success", () => {
		// 		ret.map((roleCon)=>{
		// 			console.log('123');
		// 		})
		//     })
		//    }else{
		// 	alert("该账号不存在");	    	
		//    }	

	}




	@action async putUser(url) {
		const ret = await fetch(url, {
			mode: "cors",
			method: "PUT",
			headers: {"Content-Type": "application/x-www-form-urlencoded",
			"Access-Control-Allow-Headers": "Authorization",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
			"Access-Authorization": `${cookie.get("access_token")}`},
		}).then( function(response) {
			return response.json();
		}).then( function(jsonData) {
			return jsonData;
		}).catch( function() {
			alert('cuole');
		})
		runInAction("request success", () => {

		})		
	} 	
}
export default new UserMana();