import axios from "axios";
import  TokenService  from './services/TokenService';

const api = axios.create({
  //baseURL: "http://localhost:8080/apoloApi",
  //baseURL: "https://apolo-be-qa-dot-apolo-frontend.uc.r.appspot.com/apoloApi",
  baseURL: "https://apolo-be-prod-dot-apolo-frontend.uc.r.appspot.com/apoloApi",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
});

api.interceptors.response.use(
  (response) => response,
  (err) => { 
    if(err.response.status === 401){
      var login = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
      TokenService.logout();
      window.location.replace(login);
    }
    return Promise.reject(err.response.data);
  }
);

export default api;