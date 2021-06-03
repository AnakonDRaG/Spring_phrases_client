import React, {Component} from 'react';
import AuthService from "../../user/auth/auth.service";
import {observer} from "mobx-react";
import FormCrud from "./Form.crud";
import {useLocation} from 'react-router-dom'
import {store} from "react-notifications-component";

const LoginForm = observer(() => {
    const location = useLocation()
    const URL = "/auth/login";

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
        await AuthService.login(data)

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
    }

    return (
        <>
            {!AuthService.isAuth && (
                <FormCrud link={URL}
                          inputs={inputs}
                          redirectAfterSubmit={location.pathname}
                          handleAfterSubmit={handleAfterSubmit}/>)}
            {AuthService.isAuth && (
                <h1 className="text-center">You are logged in!</h1>
            )}
        </>
    )

})

export default LoginForm;