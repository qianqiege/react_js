import React from "react";
import { observable, action, runInAction } from "mobx";
import cookie from "js-cookie";

class UserPhysical {
	@observable deviceList = [];
	@observable statusBool = {
		display: "none",
	};
	@action async getDevice(url) {
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
			//console.log("出现错误!");
		});
		runInAction("request success", () => {
			ret.data.map((dataOne) => {
				return (
					this.deviceList.push(<Option className="optionWidth" key={dataOne.id} value={dataOne.number} >{ dataOne.number }</Option>)
				);
			});

		});
	}


	@action async checkDevice(url, data) {
		const ret = await fetch(url, {
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
			//console.log("出现错误!");
		});
	}
}
export default new UserPhysical();
