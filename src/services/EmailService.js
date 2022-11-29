import http from "../http-common";
import TokenService from "./TokenService";

const token = TokenService.getToken();
const cabecera = { headers: {"Authorization" : `Bearer ${token}`} }

const get = (usuario, invitados) => {
    return http.get(`/email/send/${usuario}/${invitados}`, cabecera);
};

export default { get };