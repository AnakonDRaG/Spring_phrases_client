import React, {Component} from 'react';
import Form from "./Form";
import Cookies from "universal-cookie"
import {store} from "react-notifications-component";

class RegistrationForm extends Component {
    URL = "/auth/signup";
    DATA = {}
    state = {message: {success: null, error: null}}
    inputs = [
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

    async handleAfterSubmit(data) {
        console.log(data)
        data = data.body.resources
        if (data === undefined) return
        if (data['accessToken'] === null || data['refreshToken'] == null) return


        const cookies = new Cookies();
        cookies.set('accessToken', data['accessToken'])
        cookies.set('refreshToken', data['refreshToken'])
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
        setTimeout(() => {

            window.location.replace("/");
        }, 500)
    }

    render() {
        return (
            <div className="d-flex align-items-center min-vh-100">
                <div className="w-25 me-auto ms-auto">
                    <Form link={this.URL} inputs={this.inputs} handleAfterSubmit={this.handleAfterSubmit.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default RegistrationForm;