import axios from "axios";
const base_url = "http://localhost:9200/cart/";
const buyItem=async (data)=>{
    return axios.post(`${base_url}add`, data)
    .then(result => result.data)
    .catch(error => {
      throw error;
    });
}

const getOrders =async(userId)=>{
    return axios.get(`${base_url}get/${userId}/ORDERED`)
    .then(result => result.data)
    .catch(error => {
      throw error;
    });
}
export {buyItem, getOrders}