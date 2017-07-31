let host;

if(process.env.NODE_ENV == "test"){
  host = "http://qolm.ybyt.cc";
}else{
  host = "http://qolm.ybyt.cc";
}

const baseUri = host + "/api/v1/";
export const API_CONFIG = {
  host: host,
  baseUri: baseUri,
  auth: 'auth', //用户登录；
  users: 'users',
  current_user: 'users/current_user', //当前登录的用户；
  get_user_by_id: 'users/get_user_by_id', //通过id查询用户；
  menus: 'menus', //菜单项；
  rolesAbilities: 'roles/abilities', //获取用于创建角色的权限系列
  roles: 'roles' //创建角色；
};
