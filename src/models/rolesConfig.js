import cookie from 'js-cookie';
import { observable, action, runInAction } from 'mobx';
import cFetch from 'utils/cFetch';
import { API_CONFIG } from 'config/api';

class rolesConfig {
  @observable options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];

  @action async fetchRoles() {
    const ret = await cFetch(API_CONFIG.rolesAbilities, { method: "GET" });
    runInAction('update roles after fetch', () => {
      const arr = ret.map(item => {
        return Object.assign({}, {label: item.menu_name, value: item.menu_name}, item);
      })
      this.options = arr;
    });
  }

}

export default new rolesConfig();
