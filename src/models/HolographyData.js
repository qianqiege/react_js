import cookie from "js-cookie";
import React from "react";
import { observable, action, runInAction } from "mobx";

class HolographyData {
	//患者的基本信息
	@observable userInfo = {
		name: "",
		sex: "",
		phone: "",
	}
	//未处理异常
	@observable exData = {
		"meta": {
			"total": 7,
			"per_page": 10,
			"page": 1
		},
		"data": [{
			patient: {
				name: "",
				sex: "",
				phone: ""
			}
		}],
	}
	//已处理异常
	@observable exDataTwo = {
		"meta": {
			"total": 7,
			"per_page": 10,
			"page": 1
		},
		"data": [],
	}
	//提交处理异常需要的信息；
	@observable exceptionalData = {
		ids: "",
		is_phone: 0,
		is_wechat: 0,
		health_advice: "",

	}
	//通过patient_id获取用户信息；
	@action async getInfo(url) {
		const products= await fetch(url, {
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
	      console.log("出现错误!");
	    }) 
	    runInAction("request success", () => {
			this.userInfo = Object.assign({}, products);
	    })
  	}
	//获取用户‘待处理’信息的请求；
	@action async getHolographyInfo(url) {
		const products= await fetch(url, {
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
	      console.log("出现错误!");
	    }) 
	    runInAction("request success", () => {
			this.exData = Object.assign({}, products);
	    })
  	}
  	//获取用户‘已处理’信息的请求；
  	@action async get(url) {
		const products= await fetch(url, {
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
	      console.log("出现错误!");
	    }) 
	    runInAction("request success", () => {
			this.exDataTwo = Object.assign({}, products);
	    })
  	}
  	//提交‘处理异常’信息
  	@action async putMessage(url, data) {
		const products= await fetch(url, {
	      mode: "cors",
	      method: "PUT",
	      headers: {"Content-Type": "application/json",
	        "Access-Control-Allow-Headers": "Authorization",
	        "Access-Control-Allow-Origin": "*",
	        "Access-Control-Allow-Credentials": true,
	        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
	        "Access-Authorization": `${cookie.get("access_token")}`},
	      body: data,
	    }).then( function(response) {
	      return response.json();

	    }).then( function(jsonData) {
	      return jsonData;
	    }).catch( function() {
	      console.log("出现错误!");
	    }) 
	    runInAction("request success", () => {
			alert("请求");
	    })
  	}
}
export default new HolographyData();