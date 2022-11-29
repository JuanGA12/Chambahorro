import http from "../http-common";

const login = data => {
    return http.post(`/auth/login`, data);
};


export default { login };