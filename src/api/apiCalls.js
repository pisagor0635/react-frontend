import axios from "axios";

export const signup = (body) => {
    return axios.post('/api/v1/users/create', body);
}