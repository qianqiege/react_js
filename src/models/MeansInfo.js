import React from "react";
import cookie from "js-cookie";
import { observable, action, runInAction } from "mobx";
import $ from "jquery";

class MeansInfo {

	//产品名称
	@observable proArr= [
		{id: 1, name: "yubang"},
		{id: 2, name: "yubang"},
		{id: 3, name: "yubang"},
		];
	//产品使用说明
	@observable proUse= [];
	@observable kaifang = [];
	//个人信息
	@observable meansUser = {
		
		name : "",
		nation : "",
		sex : "",
		marriage : "",
		birthday : "",
		phone : "",
		address : "",
		id_number : "",
		id : ""
	};

	//疾病谱定位post数据
	@observable evaluate = {
		recipe_number : "",
		doctor_id : "",
		patient_id : "infos.id",
		physiology : "",
		emotion : "",
		nutrition : "",
		life_style : "",
		main_symptom : "",
		emergency_symptom : "",
		part_symptom : "",
		second_part_symptom : "",
		created_at : ""
	};

	//异常处理数据
	@observable dataSource = [];
	@observable totalData ={
		total:''
	};
	@observable isKaifang = {
		kaiBtn: false,
	}
	//底部的信息；
	@observable footerInfo = {
		userName: "",
		registration: "",
		dateTime: "",
	}


	//方案室搜索框身份证号码传给查看记录
	@observable idNumber = "";

	//方案室查看记录数据
	@observable jilu = [];

	//方案室数据记录详情页面个人数据
	@observable userXxData = {
		number:'',
		patient:'',
		disease_location_recipes:[],
		health_manage_recipes:[],
		spine_recipes:[],
	};

	//方案室数据记录详情页面药房数据
	@observable drugData = [{
				key: '',
				name: '',
				how: '',
				number: '',		
	}];

	//方案室个人信息组件
	@action async getInfo(url) {
		const infos = await fetch(url, {
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
			//console.log("getInfo出现错误！");
		});
		if(infos.id_number) {
			runInAction("request success", () => {
				this.meansUser.name = infos.name;
				this.meansUser.nation = infos.nation;
				this.meansUser.sex = infos.sex;
				this.meansUser.marriage = infos.marriage;
				this.meansUser.birthday = infos.birthday;
				this.meansUser.phone = infos.phone;
				this.meansUser.address = infos.address;
				this.meansUser.id_number = infos.id_number;
				this.meansUser.id = infos.id;
			});
			$(".userSlide").slideDown();
			$('.null').hide();
		}else{
			$(".userSlide").hide();
			$('.null').show();
		}
	}

	@action async getProduct(url) {
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
			//console.log("出现错误!");
		});
		runInAction("request success", () => {
			this.proArr = [...products];
		});
	}

	//点击产品自动显示用法
	@action async getProInfo(url) {
		const proInfos= await fetch(url, {
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
		runInAction("success", () => {
			this.proUse = proInfos;
		});
	}
	
	//异常数据获取
	@observable exceptionInfo = {
		meta: {
			"total": 0,
		},
		data: [],
	};
	@action async getUnnormal(url) {
		let unNormal= await fetch(url, {
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

		runInAction("request success", () =>{
			this.totalData.total=unNormal.meta.total;
			unNormal.data = unNormal.data.map((d) => {
				return d = Object.assign({}, { key: d.id, dataNum: d.patient["id"], name: d.patient["name"], number: d.value2 ? `${d.value1}/${d.value2}`: d.value1, prog: d.test_item, abnormal: d.status2 ? `${d.status1}/${d.status2}`: d.status1, date: d.created_at});
			})
			this.exceptionInfo = Object.assign({}, this.exceptionInfo, unNormal);
		});
	}
	@action getKaifang(val) {
		const newData = {
			key: `${val.name}`,
			name: `${val.name}`,
			identifier: `${val.identifier}`,
			usage: `${val.usage}`,
			count: `${val.count}`,
		};
		this.kaifang.push(newData);
		this.isKaifang.kaiBtn = true;
		
	}
	//删除操作；
	@action deletePro(index) {
		const dataSource = this.kaifang;
		dataSource.splice(index, 1);
	}
	//提交开方；
	@action async postKaifang(url, data) {
		const proInfos= await fetch(url, {
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
			return jsonData;
		}).catch( function() {
			//console.log("出现错误!");
		});
		runInAction("success post kaifang", () => {
			//console.log("success");
		});
	}

	//开方调用挂号；
	@action async getRecords(url) {
		const proInfos= await fetch(url, {
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
		runInAction("success post kaifang", () => {
			this.footerInfo.registration = proInfos.number;
		});
	}

	//获取到当前用户；
	@action async getCurrentUser(url) {
		const proInfos= await fetch(url, {
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
		runInAction("success post kaifang", () => {
			this.footerInfo.userName = proInfos.name;
			this.footerInfo.dateTime = proInfos.updated_at;
		});
	}


	//查看记录数据
	@action async getJilu(url) {
		let jiluData= await fetch(url, {
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
		runInAction("success", () => {
			const jiluArr = jiluData.map(data => { 		
				data = Object.assign({}, {key: data.number}, data);
				return data;
			});
			this.jilu = [...jiluArr];
		});
	}

	//查看详细开方记录
	@observable a = {};
	@action async getXxJl(url) {
		let xxData= await fetch(url, {
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
		runInAction("success", () => {
			this.userXxData = Object.assign({}, xxData);
			console.log(this.userXxData);
			console.log(this.userXxData.health_manage_recipes[0].detail);
			// const drug = eval(this.userXxData.health_manage_recipes[0].detail);
			// for(var i = 0; i<drug.length; i++){
			// 	const item = [];
			// 	item.push(drug[i]["产品名"]);
			// 	item.push(drug[i]["用法"]);
			// 	item.push(drug[i]["数量"]);
			// 	this.drugData.push(item);
			// }

			// console.log(this.drugData);
						
		});
	}


}


export default new MeansInfo();


