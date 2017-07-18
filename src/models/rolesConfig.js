import cookie from 'js-cookie';
import { observable, action, runInAction } from 'mobx';
import cFetch from 'utils/cFetch';
import { API_CONFIG } from 'config/api';

class rolesConfig {
  //角色列表；
  @observable rolesLists = {
    meta: {
      "total": 9,
      "per_page": 50,
      "page": 1
    },
    data: []
  };
  //checkbox的数组；
  @observable options = [
    { label: '', value: '' },
  ];
  //单个角色；
  @observable roleItem = {
    abilities: {
      features: [],
    }
  };
  //checkbox变为选中状态时的数组；
  @observable abilities = [];
  //请求创建角色的权限系列；
  @action async fetchRoles() {
    const ret = await cFetch(API_CONFIG.rolesAbilities, { method: "GET" });
    runInAction('update roles after fetch', () => {
      const arr = ret.map(item => {
        return Object.assign({}, {label: item.menu_name, value: item.features[0].value}, item);
      })
      this.options = arr;
    });
  }
  //创建角色；
  @action addRoles(values) {
    return cFetch(API_CONFIG.roles, { method: "POST", body: JSON.stringify(values) }).then(() => {
      this.getRolesList();
    });
  }
  //获取角色列表；
  @action async getRolesList(params = {page: 1, per_page: 10}) {
    const ret = await cFetch(API_CONFIG.roles, { method: "GET", params: params });
    runInAction("update roles list after fetch", () => {
      this.rolesLists = Object.assign({}, ret);
    })

  }
  //删除单个角色；
  @action deleteRoles(id) {
    return cFetch(`${API_CONFIG.roles}/${id}`, { method: "DELETE" }).then(() => {
      this.getRolesList();
    })
  }
  //获取单个角色；
  @action async getRole(id) {
    const ret = await cFetch(`${API_CONFIG.roles}/${id}`, { method: "GET" });
    runInAction("get role after fetch", () => {
      this.roleItem = Object.assign({}, this.roleItem, ret);
    })
  }
  //更新修改角色；
  @action updateRoles(id, values) {
    return cFetch(`${API_CONFIG.roles}/${id}`, { method: "PUT", body: JSON.stringify(values) }).then(() => {
      this.getRolesList();
    });
  }
}

export default new rolesConfig();
