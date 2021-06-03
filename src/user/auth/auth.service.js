import React from 'react';
import {decodeToken, isExpired} from "react-jwt";
import Cookies from "js-cookie";
import {makeAutoObservable} from "mobx";
import {store} from "react-notifications-component";
import {Client} from "../../Client";


const data = new FormData()
const refreshData = new FormData()
const getAuthCookies = {
    accessToken: Cookies.get('accessToken'),
    refreshToken: Cookies.get('refreshToken')
}

class AuthService {

    _token = getAuthCookies;
    isAuth = false
    user = {}

    constructor() {
        makeAutoObservable(this)

        this.isAuth = !isExpired(this._token.accessToken)
        data.append("accessToken", this._token.accessToken)
        refreshData.append("accessToken", this._token.accessToken)
        refreshData.append("refreshToken", this._token.refreshToken)
        this._activateAuthChecker()
    }


    _activateAuthChecker = () => {
        console.log('qwe')
        if (this._isAuth())
            this._loadUserData()

        window.onload = () => {
            const interval =
                setInterval(() => {
                    console.log(this._isAuth())
                    if (isExpired(this._token.accessToken))
                        if (!isExpired(this._token.refreshToken))
                            Client.post("/auth/token/refresh", refreshData).then(res => {
                                console.log(res)
                                this._token = res.data.resources
                                Cookies.set('accessToken', res.data?.resources.accessToken)
                                Cookies.set('refreshToken', res.data?.resources.refreshToken)
                                this.isAuth = this._isAuth()
                            })
                        else {
                            this.logout()
                            clearInterval(interval)
                        }

                }, 2000)
        }

    }

    getToken = () => this._token

    _loadUserData = async () => {
        await Client.post("/auth/user", data).then(res => {
            this.user = res.data
        })
    }

    _isAuth = () => {
        return !isExpired(this._token.accessToken)
    }

    login = async (formData) => {
        Cookies.set('accessToken', formData['accessToken'])
        Cookies.set('refreshToken', formData['refreshToken'])

        this._token = formData
        this.isAuth = this._isAuth()
        console.log(decodeToken(this._token.accessToken))
        data.set("accessToken", this._token.accessToken)
        await this._loadUserData()
        this._activateAuthChecker()
    }

    registration = async (formData) => {
        await this.login(formData)
    }

    logout = () => {
        Cookies.remove('accessToken')
        Cookies.remove('refreshToken')
        this._token = {}
        this.isAuth = false
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

    }


}


export default new AuthService;