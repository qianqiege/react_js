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
  }
  @observable record = {
    numbers: ""
  }
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
}

export default new User();
