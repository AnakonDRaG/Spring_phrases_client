import React, {useState} from "react";
import Cookies from 'js-cookie'
import {isExpired, decodeToken} from "react-jwt";
import Client from "../../Client";
import {store, useCallback, useEffect} from "react-notifications-component";
import {useAuthContext, useAuthState} from "./AuthProvider";

const __URL = "/auth"
const __URL_ACCESS_TOKEN = __URL + "/token/access"
const __URL_FOR_REFRESH_TOKEN = __URL + "/token/refresh"
const __URL_LOGOUT = __URL + "/logout"


export const useAuthService = () => {
    const [auth, dispatch] = useAuthContext()


    const data = new FormData()

    const login = async (formData) => {

        if (formData === undefined) return
        if (formData['accessToken'] === null || formData['refreshToken'] == null) return

        Cookies.set('accessToken', formData['accessToken'], {path: ''})
        Cookies.set('refreshToken', formData['refreshToken'], {path: ''})

        auth.authorization = {
            accessToken: Cookies.get("accessToken"),
            refreshToken: Cookies.get("refreshToken")
        }

        store.addNotification({
            title: "Login was SUCCESS!",
            message: "redirect after some seconds",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 1000,
                onScreen: true
            }

        });

        setTimeout(() => {

            window.location.replace("/");
        }, 1000)

    }
    const isAuth = () => {
        if (auth.authorization.accessToken === "") return false
        return !isExpired(auth.authorization.accessToken);
    }
    const register = () => {
    }

    const logout = () => {
        Cookies.remove("accessToken")
        Cookies.remove("refreshToken")
        auth.authorization = {
            accessToken: "",
            refreshToken: ""
        }

        store.addNotification({
            title: "bye Bye",
            message: "You are logout",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 500,
                onScreen: true
            }

        });
        setTimeout(() => {
            window.location.replace("/")
        }, 500)

        // Client.post(__URL_LOGOUT, this.__data).then(res => {
        //    console.log(res)
        // })
    }


    const setUser = (user) => {
        dispatch({user: user})
        return auth.user
    }

    const getUser = () => {
        if (!isAuth()) return {}
        return auth.user
    }

    const getAccessToken = () => auth.authorization.accessToken

    return {init, login, isAuth, logout, data, setUser, getUser, getAccessToken}
}
