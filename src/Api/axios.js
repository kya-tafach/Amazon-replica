import axios from "axios";



const axiosInstance = axios.create({
    // baseURL: "http://localhost:5002",
    baseURL: "https://amazon-replica.onrender.com",
   
});



export  {axiosInstance};