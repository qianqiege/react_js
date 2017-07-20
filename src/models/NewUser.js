import { observable, action } from "mobx";
import cookie from "js-cookie";
class NewUser {
	@observable userInfo = {
		sexValue: "男",
		marrayValue: "未婚",
	}
	@action async getUserInfo(url, data) {
		fetch(url, {
			mode: "cors",
			method: "POST",
			headers: {"Content-Type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Headers": "Authorization",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": true,
				"Access-Authorization": `${cookie.get("access_token")}`},
			body: data,
		}).then( function(response) {
			return response.json();
		}).then( function(jsonData) {
			//console.log("success");
		}).catch( function() {
			//console.log("请求失败");
		})
	}
}
export default new NewUser();