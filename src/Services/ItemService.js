import axios from 'axios';
const base_url = "http://localhost:9100/items/"
const getItem = async (id) => {
    return axios.get(`${base_url}get/${id}`)
        .then(result => result.data)
        .catch(error =>
            console.log(error)
        );
}

const getTrendingItems = async () => {
    return axios.get(`${base_url}getAll`)
        .then(result => result.data)
        .catch(error =>{throw error;});
}

const getAllItems = async () => {
    return axios.get(`${base_url}getAll`)
    .then(result => result.data)
    .catch(error => {
      throw error;
    });
}
const searchItems = async (search) => {
    return axios.get(`${base_url}search/${search}`)
    .then(result => result.data)
    .catch(error => {
      throw error;
    });
}
const getCategoryWiseItems= async (category) => {
    return axios.get(`${base_url}category/${category}`)
    .then(result => result.data)
    .catch(error => {
      throw error;
    });
}

export { getItem, getTrendingItems, getAllItems, searchItems, getCategoryWiseItems};