const setToken = data => {
    window.localStorage.removeItem("Token")
    window.localStorage.setItem("Token", data);
};

const getToken = () => {
    return localStorage.getItem("Token");
};

const setId = data => {
    window.localStorage.removeItem("Id")
    window.localStorage.setItem("Id", data);
};

const getId = () => {
    return localStorage.getItem("Id");
};

const setRuc = data => {
    window.localStorage.removeItem("Ruc")
    window.localStorage.setItem("Ruc", data);
};

const getRuc = () => {
    return localStorage.getItem("Ruc");
};

const setUsername = data => {
    window.localStorage.removeItem("Username")
    window.localStorage.setItem("Username", data);
};

const getUsername = () => {
    return localStorage.getItem("Username");
};

const setInitials = data => {
    window.localStorage.removeItem("Initials")
    window.localStorage.setItem("Initials", data);
};

const getInitials = () => {
    return localStorage.getItem("Initials");
};

const setNames = data => {
    window.localStorage.removeItem("Names")
    window.localStorage.setItem("Names", data);
};

const getNames = () => {
    return localStorage.getItem("Names");
};

const setAuthorities = data => {
    window.localStorage.removeItem("Authorities");
    window.localStorage.setItem("Authorities", data);
    //window.localStorage.setItem("Authorities", JSON.stringify(data));
};

const getAuthorities = () => {
    /*var roles = [];
    if (localStorage.getItem("Authorities")) {
      JSON.parse(localStorage.getItem("Authorities")).forEach(authority => {
        roles.push(authority.authority);
      });
    }
    return roles;*/
    return localStorage.getItem("Authorities");
};

const logout = () => {
    window.localStorage.clear();
};


export default { setToken, getToken, setId, getId, setUsername, getUsername, setInitials, getInitials, setNames, getNames, setRuc, getRuc, setAuthorities, getAuthorities, logout };