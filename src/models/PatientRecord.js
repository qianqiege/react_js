import	{observable,action,runInAction}	from	"mobx";
import	cookie	from	"js-cookie";

class	PatientRecord{
	//全息视图页面的电子档案模块的基本信息获取
	@observable	record={
		name:"",
		idCard:"",
		birthday:"",
		phone:"",
		Address:"",
		nation:"",
		sexValue:"",
		marrayValue:"",
		occupation:"",
	};
	@action	async	getRecord(url){
		const	Record=await	fetch(url, {
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
			return	jsonData;
		}).catch(function(){
			// console.log("请求失败");
		});

		runInAction("success	request",()=>{
			this.record.name=Record.name;
			this.record.idCard=Record.id_number;
			this.record.birthday=Record.birthday;
			this.record.phone=Record.phone;
			this.record.Address=Record.address;
			this.record.nation=Record.nation;
			this.record.sexValue=Record.sex;
			this.record.marrayValue=Record.marriage;
			this.record.occupation=Record.occupation;
		});
	}

	//血糖监测的信息表格
	@observable	bloodGlu={
		"meta":{
			"total":7,
			"per_page":10,
			"page":1
		},
		"data":[{
			updated_at:"",
			value:"",
			status1:"",
		}],
	}

	@action	async	getBloodGlu(url){
		const	BloodGlu=await	fetch(url,{
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
			return	jsonData;
		}).catch(function(){
			// console.log("请求失败");
		});

		runInAction("success	BloodGlucose",()=>{
			this.bloodGlu=Object.assign({},BloodGlu);
		});
	}


	//血压监测的信息表格
	@observable	bloodPre={
		"meta":{
			"total":25,
			"per_page":10,
			"page":1
		},
		"data":[{
			updated_at:"",
			max_blood_pressure:"",
			min_blood_pressure:"",
			status1:"",
			status2:"",
		}],
	}

	@action	async	getBloodPre(url){
		const	BloodPre=await	fetch(url,{
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
			return	jsonData;
		}).catch(function(){
			// console.log("请求失败");
		});

		runInAction("success	BloodPre",()=>{
			this.bloodPre=Object.assign({},BloodPre);
		});
	}


	//体温监测的信息表格
	@observable	temperature={
		"meta":{
			"total":7,
			"per_page":10,
			"page":1
		},
		"data":[{
			updated_at:"",
			value:"",
			status:"",
		}],
	}

	@action	async	getTemperature(url){
		const	Temperature=await	fetch(url,{
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
			return	jsonData;
		}).catch(function(){
			// console.log("请求失败");
		});

		runInAction("success	Temperature",()=>{
			this.temperature=Object.assign({},Temperature);
		});
	}
	//体重检测数据
	@observable	weight={
		"meta":{
			"total":25,
			"per_page":10,
			"page":1
		},
		"data":[{
			updated_at:"",
			value:"",
			status:"",
		}],
	}

	@action	async	getWeight(url){
		const	Weight=await	fetch(url,{
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
			return	jsonData;
		}).catch(function(){
			// console.log("请求失败");
		});

		runInAction("success	Weight",()=>{
			this.weight=Object.assign({},Weight);
		});
	}

	//心率检测数据
	@observable	heartRate={
		"meta":{
			"total":25,
			"per_page":10,
			"page":1
		},
		"data":[{
			updated_at:"",
			value:"",
			status:"",
		}],
	}

	@action	async	getHeartRate(url){
		const	HeartRate=await	fetch(url,{
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
			return	jsonData;
		}).catch(function(){
			// console.log("请求失败");
		});

		runInAction("success	HeartRate",()=>{
			this.heartRate=Object.assign({},HeartRate);
		});
	}

	//尿酸检测数据
	@observable	unine={
		"meta":{
			"total":25,
			"per_page":10,
			"page":1
		},
		"data":[{
			updated_at:"",
			value:"",
			status:"",
		}],
	}

	@action	async	getUnine(url){
		const	Unine=await	fetch(url,{
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
			return	jsonData;
		}).catch(function(){
			// console.log("请求失败");
		});

		runInAction("success	Unine",()=>{
			this.unine=Object.assign({},Unine);
		});
	}

	//血脂检测数据
	@observable	bloodfat={
		"meta":{
			"total":25,
			"per_page":10,
			"page":1
		},
		"data":[{
			updated_at:"",
			value:"",
			status:"",
		}],
	}

	@action	async	getBlooFat(url){
		const	Bloodfat=await	fetch(url,{
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
			return	jsonData;
		}).catch(function(){
			// console.log("请求失败");
		});

		runInAction("success	BloodFat",()=>{
			this.bloodfat=Object.assign({},Bloodfat);
		});
	}

	//心电图检测数据
	@observable	ecg={
		"meta":{
			"total":25,
			"per_page":10,
			"page":1
		},
		"data":[{
			updated_at:"",
			value:"",
		}],
	}

	@action	async	getEcg(url){
		const	Ecg=await	fetch(url,{
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
			return	jsonData;
		}).catch(function(){
			// console.log("请求失败");
		});

		runInAction("success	BloodFat",()=>{
			this.ecg=Object.assign({},Ecg);
		});
	}

	//TDS检测数据
	@observable selfTDS = [];

	@action async getTDS(url) {
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
}


export	default	new	PatientRecord();