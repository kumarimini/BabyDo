const axios =require("axios")
const baseURL = "http://192.168.29.51:5000";
axios.default.baseURL=baseURL;

axios.get(baseURL+"/ping").then(res=>console.log("--Response:",res.data))
export default axios;



