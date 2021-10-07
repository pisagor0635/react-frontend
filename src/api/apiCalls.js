import axios from "axios";

export const signup = (body) => {
    return axios.post('/api/v1/users/create', body);
}

export const login = creds => {
    return axios.post('/api/v1/users/auth', {}, {auth: creds});
}

export const changeLanguage = language => {
    axios.defaults.headers['accept-language'] = language;
}