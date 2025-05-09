import axios from "axios";

// for live -https://mehandi-restaurant.onrender.com
//for local - http://localhost:3003/
const axiosinstance = axios.create({
  baseURL: "https://mehandi-restaurant.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosinstance;
