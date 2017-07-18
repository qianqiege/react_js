import cookie from 'js-cookie';
import { observable, action, runInAction } from 'mobx';
import cFetch from 'utils/cFetch';
import { API_CONFIG } from 'config/api';
import User from "./User";

class Menu {
	@observable menuList = {
		isFetching: false,
		"meta": {
		"total": 7,
		"per_page": 20,
		"page": null
		},
		"data": [],
	}
	@action async getMenus() {
		const ret = await cFetch(API_CONFIG.menus, { method: "GET" });
		runInAction('update munus list after fetch', () => {
			this.isFetching = true;
			this.menuList = Object.assign({}, {
			isFetching: false
			}, ret);
		});
	}
}

export default new Menu();