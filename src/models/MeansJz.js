import React from "react";
import cookie from "js-cookie";
import { observable, action, runInAction, computed } from "mobx";
import { Checkbox } from "antd";
import JzSelect from 'containers/Means/jzSelect';
import JzCheck from 'containers/Means/jzCheck';
//import $ from "jquery";

// let jizhu = [];
class MeansJz {

	//产品名称
	@observable jzArr=[
		{
			"id": 4,
			"treatment_level": "初级"
		}
	]

	//不同级别价格
	@observable price=[{
				key: '0',
				only:'',
				firstOne: '',
				curing:'',
			},{
				key: '1',
				only:'',
				firstOne:'',
				curing:'',
			},{
				key: '2',
				only:'',
				firstOne:'',
				curing:'',
			},{
				key: '3',
				only:'',
				firstOne:'',
				curing:'',
			},{
				key: '4',
				only:'',
				firstOne:'',
				curing:'',
			}]
	@observable jizhu = [];
	@observable dataCount = [];
	@observable isKaifang = {
		jiZhuBtn: false,
		levelVal: "初级",
		boolLevel: false,
		allPrice: 0, //放血总价;
		bloodPrice: "0", 
		jizhuPrice: 0, //脊柱总价;
		prices: 0, //总价;
	}
	@observable isChecked = false;
	@action async getJibie(url) {
		const jibie= await fetch(url, {
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
			this.jzArr = [...jibie];
		});
	}

	//脊柱开方金额计算
	@action handleChange = (e) => {
		// this.isKaifang.boolLevel = e.target.checked;
		// console.log(this.isKaifang.boolLevel);
		// if( e.target.checked ) {
		// 	this.isKaifang.jiZhuBtn = true;
		// 	this.jizhu.push(e.target.value);
		// 	this.isKaifang.allPrice += parseInt(e.target.dataCount);
		// }else if(!e.target.checked){
		// 	this.jizhu.splice(this.jizhu.indexOf(e.target.value), 1);
		// 	this.isKaifang.allPrice -= parseInt(e.target.dataCount);
		// 	return this.jizhu;

		// }
		if(e.target.checked) {
			console.log(e.target.value, e.target.dataCount);
			this.isKaifang.jizhuPrice += parseInt(e.target.dataCount);
			this.isKaifang.prices = this.isKaifang.allPrice + this.isKaifang.jizhuPrice;

		}else if(!e.target.checked) {
			this.isKaifang.jizhuPrice -= parseInt(e.target.dataCount);
			this.isKaifang.prices = this.isKaifang.allPrice + this.isKaifang.jizhuPrice;

		}
	}
	//放血总价的计算；
	@action handleCount(count) {
		this.isKaifang.allPrice = parseInt(this.isKaifang.bloodPrice) * count;
		console.log(this.isKaifang.allPrice);
		this.isKaifang.prices = this.isKaifang.allPrice + this.isKaifang.jizhuPrice;
	}
	//总价的计算；
	@action allPrices() {
		// return console.log(parseInt(this.isKaifang.allPrice + this.isKaifang.jizhuPrice));
	}
	@action async getPay(url) {
		const pay= await fetch(url, {
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
			this.price=[{
				key: '0',
				only:<Checkbox onChange={this.handleChange} value="单次_neck" dataCount={pay[0].neck}>颈椎：{pay[0].neck}</Checkbox>,
				firstOne: <Checkbox onChange={this.handleChange} value="首次疗程_neck" dataCount={pay[1].neck}>颈椎：{pay[1].neck}</Checkbox>,
				curing:<Checkbox onChange={this.handleChange} value="养护(第二次起)_neck" dataCount={pay[2].neck}>颈椎：{pay[2].neck}</Checkbox>,
			},{
				key: '1',
				step:'',
				only:<Checkbox onChange={this.handleChange} value="单次_thoracic" dataCount={pay[0].thoracic}>胸椎：{pay[0].thoracic}</Checkbox>,
				firstOne: <Checkbox onChange={this.handleChange} value="首次疗程_thoracic" dataCount={pay[1].thoracic}>胸椎：{pay[1].thoracic}</Checkbox>,
				curing:<Checkbox onChange={this.handleChange} value="养护(第二次起)_thoracic" dataCount={pay[2].thoracic}>胸椎：{pay[2].thoracic}</Checkbox>
			},{
				key: '2',
				only:<Checkbox onChange={this.handleChange} value="单次_lumbar" dataCount={pay[0].lumbar}>腰椎：{pay[0].lumbar}</Checkbox>,
				firstOne: <Checkbox onChange={this.handleChange} value="首次疗程_lumbar" dataCount={pay[1].lumbar}>腰椎：{pay[1].lumbar}</Checkbox>,
				curing:<Checkbox onChange={this.handleChange} value="养护(第二次起)_lumbar" dataCount={pay[2].lumbar}>腰椎：{pay[2].lumbar}</Checkbox>
			},{
				key: '3',
				only:<Checkbox onChange={this.handleChange} value="单次_pelvis" dataCount={pay[0].pelvis}>骨盆：{pay[0].pelvis}</Checkbox>,
				firstOne: <Checkbox onChange={this.handleChange} value="首次疗程_pelvis" dataCount={pay[0].pelvis}>骨盆：{pay[1].pelvis}</Checkbox>,
				curing:<Checkbox onChange={this.handleChange} value="养护(第二次起)_pelvis" dataCount={pay[0].pelvis}>骨盆：{pay[2].pelvis}</Checkbox>
			},{
				key: '4',
				only:<Checkbox onChange={this.handleChange} value="单次_whole_ridge" dataCount={pay[0].whole_ridge}>全脊：{pay[0].whole_ridge}</Checkbox>,
				firstOne: <Checkbox onChange={this.handleChange} value="首次疗程_whole_ridge" dataCount={pay[0].whole_ridge}>全脊：{pay[1].whole_ridge}</Checkbox>,
				curing:<Checkbox onChange={this.handleChange} value="养护(第二次起)_whole_ridge" dataCount={pay[0].whole_ridge}>全脊：{pay[2].whole_ridge}</Checkbox>
			}
			];

		});

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
			console.log("出现错误!");
	    })
	    runInAction("success post kaifang", () => {
			console.log("success");
	    }) 
  	}
  	//获取放血排毒的价格；
  	@action async getBloodletting(url) {
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
			console.log("出现错误!");
	    })
	    runInAction("success get blood", () => {
			this.isKaifang.bloodPrice = proInfos.price;
	    }) 
  	} 
}

export default new MeansJz();