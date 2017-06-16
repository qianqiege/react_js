let host;

if(process.env.NODE_ENV == "test"){
  host = "http://192.168.1.227:3000";
}else{
  host = location.origin;
}

const baseUri = host + "/api/v1/";
export const API_CONFIG = {
  host: host,
  baseUri: baseUri,
  auth: 'auth',
  users: 'users'
};
