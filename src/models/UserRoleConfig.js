import React from "react";
import cookie from "js-cookie";
import { observable, action, runInAction } from "mobx";

class UserRoleConfig {
	//获取角色配置页面的数据 返回ID，name！
	@observable dataSource = [];
	@observable options = [
		{ label: 'Apple', value: 'Apple' },
		{ label: 'Pear', value: 'Pear' },
		{ label: 'Orange', value: 'Orange' },
	];
	@action async getRoleConfig(url) {
	    const roleConfig = await fetch(url, {
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
	        console.log('cuole');
	    })

	    runInAction("request success", () => {
	    	roleConfig.map(roles=>{	    		
    			this.dataSource.push({
    				key: roles.id,
   					number:roles.id,
   					role:roles.name,
   				})	 		
	    	})
	    })		  
  	} 

   //添加角色按钮请求的api
  	@observable addValue=[];
  	@action async getAddRole(url) {
	    const addRole = await fetch(url, {
	      mode: "cors",
	      method: "POST",
	      headers: {"Content-Type": "application/x-www-form-urlencoded",
	        "Access-Control-Allow-Headers": "Authorization",
	        "Access-Control-Allow-Origin": "*",
	        "Access-Control-Allow-Credentials": true,
	        "Access-Authorization": `${cookie.get("access_token")}`},
	      	"body":``,
	    }).then( function(response) {
      		return response.json();
	    }).then( function(jsonData) {
	    	console.log(jsonData.data);
      		return jsonData.data;
	    }).catch( function() {
	        console.log('cuole');
	    })

	    runInAction("request success", () => {
	    	addRole.map(values=>{	    		
    			this.addValue.push({
   					number:values.id,
   					role:values.name,
   				})	 		
	    	})
	    })		  
  	} 


  	//删除角色
  	@observable delete=[];
  	@action async deleteRole(url) {
	   	const deleteR = await fetch(url, {
	      mode: "cors",
	      method: "DELETE",
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
	        console.log('cuole');
	    })

	    runInAction("request success", () => {
	    	this.delete.push(deleteR.id);
	    })		  
  	} 
}
export default new UserRoleConfig();