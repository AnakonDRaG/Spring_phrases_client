import axios from "axios";
import AuthService from "./user/auth/auth.service"
import {autorun} from "mobx";


export const Client = axios.create({
    baseURL: "http://127.0.0.1:8081/api",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': ""
    }
});

const requestHandler = request => {
    request.headers['Authorization'] = AuthService.getToken().accessToken !== undefined ? AuthService.getToken().accessToken : "";

    return request;
}

Client.interceptors.request.use(request => requestHandler(request));







