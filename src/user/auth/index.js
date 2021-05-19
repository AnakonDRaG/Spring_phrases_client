import Cookies from "universal-cookie"

export const IsAuth = () =>{
    return Cookies.get('authToken') != null;
}