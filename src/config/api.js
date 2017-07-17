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
  auth: 'auth',
  users: 'users'
  
};
