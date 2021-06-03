import React, {useState} from 'react';
import AuthService from "../../user/auth/auth.service";
import {store} from "react-notifications-component";
import FormCrud from "./Form.crud";
import {observer} from "mobx-react";
import {useLocation} from "react-router-dom";

const RegistrationForm = observer(() => {
    const URL = "/auth/signup";
    const location = useLocation()

    const inputs = [
        {
            name: "firstName",
            placeholder: "firstName",
            type: "text",
            value: "",
            className: "w-100 form-control",
            labelText: "First name"
        },
        {
            name: "lastName",
            placeholder: "lastName",
            type: "text",
            value: "",
            className: "w-100 form-control",
            labelText: "Last name"
        },
        {
            name: "email",
            placeholder: "email",
            type: "email",
            value: "",
            className: "w-100 form-control",
            labelText: "Email"
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
            name: "confirmPassword",
            placeholder: "password",
            type: "password",
            value: "",
            className: "w-100 form-control",
            labelText: "Confirm password"
        },
        {name: "submit", placeholder: "", type: "submit", value: "Registration", className: "btn w-100 submit"}
    ]

    const handleAfterSubmit = async (data) => {


        await AuthService.registration(data.body.resources)

        store.addNotification({
            title: "User was created!",
            message: "redirect after some seconds",
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

export default RegistrationForm;