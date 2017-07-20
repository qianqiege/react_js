
import cookie from "js-cookie";
import { observable, action, runInAction } from "mobx";

class UserList {
	@observable userInfo = {
		uname: "",
		record_number: [],
	}

	@action async getRecord(url) {
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
			
		});
		if(ret.name) {
			runInAction("request success", () => {
				this.userInfo.uname = ret.name;
				this.checkRecord(`http://qolm.ybyt.cc/api/v1/registration/check_registration?id_number=${ret.id_number}`);
			});
		}else{
			alert("该账号不存在");
		}
	}

	@action async checkRecord(url) {
		const check = await fetch(url, {
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
			//console.log("出现错误！");
		});
		if(check) {
			runInAction("request success", () => {
				this.userInfo.record_number = check;
				return this.userInfo.record;
			});
		}

	}
}
export default new UserList();