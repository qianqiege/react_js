
import cookie from "js-cookie";
import { observable, action, runInAction } from "mobx";
//import { Alert,Icon,Table} from 'antd';
//import AddPermiss from '../containers/RolesManage/DoctorsList/AddPermiss';
import '../containers/RolesManage/DoctorsList/ManageList.css';

class UserMana {

	//从后台获取健康管理师列表的全部数据，展示姓名，ID！
	@observable ManaList = {
		meta: {
			"total": 0,
		},
		data: [],
	};
	@observable totalData={
		'total':''
	}

	@action async getManaList(url){
		// this.list.isFetching = true;
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
			//console.log('cuole');
		});
		runInAction("request success", () => {
			// console.log(ret);
			this.ManaList = Object.assign({}, this.ManaList, ret);
		});
	}

//在健康管理师列表里 搜索某一个健康管理师，设定只能输入身份号，返回当前api请求获得的ID，name！
	@observable RoleList = [];
	@action async getRoleList(url) {
		const roleList = await fetch(url, {
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
			//console.log('cuole');
		});
		
		//console.log(roleList);
		if(roleList.id_number){
			runInAction("request success", () => {
				return (
					this.RoleList.push({
						key:roleList.id,
						name:roleList.name,
						id:roleList.id,
					})
				);
			});
		}
	}

//判断当前登录账户是否有权限给别人添加权限，目前只有river账户有权限，id为4，
//判断拿到的登录账户的ID是否为4，不为4，则选项隐藏！
	@observable roleId=[];
	@action async showModal(url) {
		const showMod = await fetch(url, {
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
			//console.log('cuole');
		});
		runInAction("request success", () => {
			this.roleId.push(showMod.id);
		});	
	}




	@action async putUser(url) {
		fetch(url, {
			mode: "cors",
			method: "PUT",
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
			//console.log('cuole');
		});
	}
}
export default new UserMana();