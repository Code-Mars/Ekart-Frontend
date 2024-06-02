import axios from 'axios';
const base_url = "http://localhost:9000/users/"

const registerUser = async (user) => {
    return axios.post(`${base_url}register`, user)
        .then(result => result.data)
        .catch(error =>{throw error;});
}
const loginUser = async (user) => {
    return axios.post(`${base_url}login`, user)
        .then(result => result.data)
        .catch(error =>{throw error;});
}

export  {registerUser, loginUser};