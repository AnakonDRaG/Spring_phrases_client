import React, {Component} from 'react';
import Input from "./Input";
import Client from "../../Client";
import Form from "./Form";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie"

class RegistrationForm extends Component {
    URL = "/auth/signup";
    DATA = {}
    state = {message: {success:null, error:null}}
    inputs = [
        {
            name: "firstname",
            placeholder: "firstName",
            type: "text",
            value: "",
            className: "w-100 form-control",
            labelText: "First name"
        },
        {
            name: "lastname",
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
        {name: "submit", placeholder: "", type: "submit", value: "Login", className: "btn btn-primary w-100 submit"}
    ]

    async handleSubmit() {
        var data = new FormData();

        Object.keys(this.DATA).forEach(key => data.append(key, this.DATA[key]));

        await Client.post(this.URL, data)
            .then(res => {
                //jwt_decode(res.data.resources.token);

                const cookies = new Cookies();
                cookies.set('authToken', res.data.resources.token);
                //console.log(jwt_decode(cookies.get('authToken')))
            });

    }

    render() {
        return (
            <div className="w-25 me-auto ms-auto">
                <Form data={this.DATA} inputs={this.inputs} handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
        );
    }
}

export default RegistrationForm;