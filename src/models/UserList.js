
import cookie from "js-cookie";
import { observable, action, runInAction } from "mobx";

class UserList {
	@observable userInfo = {
		uname: "",
		uid:"",
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
				this.userInfo.uid = ret.id;
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


	//客户列表查看个人健康数据-血压

	@observable selfXueya = [];
	@observable sxyTotal ={
		total:"",
	};

	@action async selfXy(url) {
		const selfXy = await fetch(url, {
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
			console.log(jsonData);
			return jsonData;
		}).catch( function() {
			//console.log("出现错误！");
		});
		
		runInAction('update users list after fetch', () => {
			this.sxyTotal.total = selfXy.meta.total;
			const xueyaArr = selfXy.data.map(data => { 		
				data = Object.assign({}, {key: data.id}, {abnormal: `${data.status1}/${data.status2}`},data);
				return data;
			});			
			this.selfXueya = [...xueyaArr];
		});

	}


	//客户列表查看个人健康数据-血糖

	@observable selfXuetang = [];
	@observable sxtTotal ={
		total:"",
	};

	@action async selfXt(url) {
		const selfXt = await fetch(url, {
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
			console.log(jsonData);
			return jsonData;
		}).catch( function() {
			//console.log("出现错误！");
		});
		
		runInAction('update users list after fetch', () => {
			this.sxtTotal.total = selfXt.meta.total;
			const xuetangArr = selfXt.data.map(data => { 		
				data = Object.assign({}, {key: data.id},data);
				return data;
			});			
			this.selfXuetang = [...xuetangArr];
		});

	}


	//客户列表查看个人健康数据-体温

	@observable selfTiwen = [];
	@observable stwTotal ={
		total:"",
	};

	@action async selfTw(url) {
		const selfTw = await fetch(url, {
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
			console.log(jsonData);
			return jsonData;
		}).catch( function() {
			//console.log("出现错误！");
		});
		
		runInAction('update users list after fetch', () => {
			this.stwTotal.total = selfTw.meta.total;
			const tiwenArr = selfTw.data.map(data => { 		
				data = Object.assign({}, {key: data.id},data);
				return data;
			});			
			this.selfTiwen = [...tiwenArr];
		});

	}


	//客户列表查看个人健康数据-体重

	@observable selfTizhong = [];
	@observable stzTotal ={
		total:"",
	};

	@action async selfTz(url) {
		const selfTz = await fetch(url, {
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
			console.log(jsonData);
			return jsonData;
		}).catch( function() {
			//console.log("出现错误！");
		});
		
		runInAction('update users list after fetch', () => {
			this.stzTotal.total = selfTz.meta.total;
			const tizhongArr = selfTz.data.map(data => { 		
				data = Object.assign({}, {key: data.id},data);
				return data;
			});			
			this.selfTizhong = [...tizhongArr];
		});

	}


	//客户列表查看个人健康数据-心率

	@observable selfHeartRate = [];
	@observable shrTotal ={
		total:"",
	};

	@action async selfHr(url) {
		const selfHr = await fetch(url, {
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
			console.log(jsonData);
			return jsonData;
		}).catch( function() {
			//console.log("出现错误！");
		});
		
		runInAction('update users list after fetch', () => {
			this.shrTotal.total = selfHr.meta.total;
			const HeartRateArr = selfHr.data.map(data => { 		
				data = Object.assign({}, {key: data.id},data);
				return data;
			});			
			this.selfHeartRate = [...HeartRateArr];
		});

	}	


	//客户列表查看个人健康数据-尿酸

	@observable selfUnine = [];
	@observable sunTotal ={
		total:"",
	};

	@action async selfUn(url) {
		const selfUn = await fetch(url, {
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
			console.log(jsonData);
			return jsonData;
		}).catch( function() {
			//console.log("出现错误！");
		});
		
		runInAction('update users list after fetch', () => {
			this.sunTotal.total = selfUn.meta.total;
			const UnineArr = selfUn.data.map(data => { 		
				data = Object.assign({}, {key: data.id},data);
				return data;
			});			
			this.selfUnine = [...UnineArr];
		});

	}	


	//客户列表查看个人健康数据-血脂

	@observable selfBloodFat = [];
	@observable sbfTotal ={
		total:"",
	};

	@action async selfBf(url) {
		const selfBf = await fetch(url, {
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
			console.log(jsonData);
			return jsonData;
		}).catch( function() {
			//console.log("出现错误！");
		});
		
		runInAction('update users list after fetch', () => {
			this.sbfTotal.total = selfBf.meta.total;
			const BloodFatArr = selfBf.data.map(data => { 		
				data = Object.assign({}, {key: data.id},data);
				return data;
			});			
			this.selfBloodFat = [...BloodFatArr];
		});

	}


	//客户列表查看个人健康数据-心电

	@observable selfEcg = [];
	@observable secgTotal ={
		total:"",
	};

	@action async selfEc(url) {
		const selfEc = await fetch(url, {
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
		
		runInAction('update users list after fetch', () => {
			this.secgTotal.total = selfEc.meta.total;
			const EcgArr = selfEc.data.map(data => { 		
				data = Object.assign({}, {key: data.id},data);
				return data;
			});			
			this.selfEcg = [...EcgArr];
		});

	}


	//客户列表查看个人健康数据-TDS

	@observable selfTDS = [];

	@action async selfT(url) {
		const selfT = await fetch(url, {
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
		
		runInAction('update users list after fetch', () => {	
			this.selfTDS = [...selfT];
		});

	}


	//客户列表查看个人档案

	@observable userBorder = {};

	@action async getUserBorder(url) {
		const uborder = await fetch(url, {
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
			console.log(jsonData);
			return jsonData;
		}).catch( function() {
			//console.log("出现错误！");
		});
		
		runInAction('update users list after fetch', () => {	
			this.userBorder = Object.assign({},uborder);
			console.log(this.userBorder);
		});

	}	
	//查询建档日期；
	@observable check_date = {};
	@action async checkDate(url) {
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
			//console.log("出现错误！");
		});
		
		runInAction('update users list after fetch', () => {	
			this.check_date = Object.assign({},ret);
		});

	}	

}
export default new UserList();