import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://easycar.onrender.com/api",
    withCredentials:true,
})

export default apiRequest;
