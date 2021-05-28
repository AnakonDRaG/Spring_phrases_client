import React, {Component} from 'react';
import Form from "./Form";
import Cookies from "universal-cookie/lib";
import {store} from 'react-notifications-component';
import {useAuthService} from "../../user/auth/AuthService";

const LoginForm = () => {

    const {isAuth, login} = useAuthService()


    const URL = "/auth/login";
    const state = {data: {}}
    const inputs = [
        {
            name: "email",
            placeholder: "email",
            type: "text",
            value: "",
            className: "w-100 form-control",
            labelText: "E-mail"
        },
        {
            name: "password",
            placeholder: "password",
            type: "password",
            value: "",
            className: "w-100 form-control",
            labelText: "Password"
        },
        {
            name: "submit",
            placeholder: "",
            type: "submit",
            value: "Login",
            className: "btn w-100 submit"
        }
    ]


    async function handleAfterSubmit(data) {
        await login(data)
    }

    return (
        <div className="d-flex align-items-center min-vh-100">
            <div className="w-50 me-auto ms-auto ">
                {!isAuth() && (<Form link={URL} inputs={inputs} handleAfterSubmit={handleAfterSubmit.bind(this)}/>)}
                {isAuth() && (
                    <h1 className="text-center">You are logged in!</h1>
                )}
            </div>
        </div>
    )

}

export default LoginForm;