import { observable, action } from "mobx";
import cookie from "js-cookie";

class PhysicalData {
	@observable userInfo = {
		name: "",
		phone: "",
		sex: "",
	}
	@action async checkUser(url) {
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
			alert("出现错误!");
		});
		if( ret ) {
		this.userInfo = Object.assign({}, this.userInfo, { name: `${ret.name}`, phone: `${ret.phone}`, sex: `${ret.sex}`, idCard: `${ret.id_number}` });
		};
	}
	@action async SubmitPhysical(url, data) {
		await fetch(url, {
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
			return console.log(jsonData);
	    }).catch( function() {
			alert("出现错误!");
	    });
	}
	@action clearInfo() {
		this.userInfo = Object.assign( {}, {name: "", phone: "", sex: ""} );
	}
}
export default new PhysicalData();