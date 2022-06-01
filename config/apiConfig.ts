import axios from "axios";
import { credentials } from "../utils";

 const apiEcommerce = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers:{
        Authorization: credentials.getToken() || ""
    }
})

export default apiEcommerce;