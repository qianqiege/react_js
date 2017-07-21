import cookie from 'js-cookie';
import { observable, action, runInAction } from 'mobx';
import cFetch from 'utils/cFetch';
import { API_CONFIG } from 'config/api';

class User {
  @observable list = {
    isFetching: false,
    meta: {
      total: 0,
      perPage: 10,
      page: 1
    },
    data: []
  };

  @observable auth = {
    isFetching: false,
    isAuthenticated: cookie.get('access_token') ? true : false
  };
  @observable record = {
    numbers: ""
  };
  @observable role_ids = []; //用户的角色权限；
  @action async fetchUsers(params = {page: 1, per_page: 10 }) {
    this.list.isFetching = true;
    const ret = await cFetch(API_CONFIG.users, { method: "GET", params: params });
    runInAction('update users list after fetch', () => {
      this.list = Object.assign({}, {
        isFetching: false
      }, ret);
    });
  }

  @action async login(creds, cbk) {
    const ret = await cFetch(API_CONFIG.auth, { method: "POST", body: JSON.stringify(creds) }).catch((error) => {
      cbk(creds.email, error.msg);
    });
    if (ret) {
      runInAction('login success', () => {
        cookie.set('access_token', ret.access_token);
        this.auth.isAuthenticated = true;
      });
    }
  }

  @action create(values) {
    return cFetch(API_CONFIG.users, { method: "POST", body: JSON.stringify(values)}).then(() => {
      this.fetchUsers();
    });
  }

  @action destroy(id) {
    return cFetch(`${API_CONFIG.users}/${id}`, { method: "DELETE" }).then(() => {
      this.fetchUsers();
    });
  }
  //通过id查询用户；
  @action async get_user(id) {
    const ret = await cFetch(`${API_CONFIG.get_user_by_id}?id=${id}`, { method: "GET" });
    runInAction("success require fetch", () => {
      this.role_ids = ret.role_ids;

    })
  }
  //通过id查询用户；
  @action update_user(id, values) {
    return cFetch(`${API_CONFIG.users}/${id}`, { method: "PUT", body: JSON.stringify(values) });
  }
}

export default new User();
