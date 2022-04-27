import axios from "axios";

const instance = axios.create({
    baseURL : "https://vuejs-axios-blog-e0e8a-default-rtdb.firebaseio.com"
});

export default instance;