import React, {Component} from 'react';
import Input from "./Input";
import Client from "../../Client";
import Form from "./Form";
import axios from "axios";

class LoginForm extends Component {
    URL = "/auth/login";
    DATA = {}

    inputs = [
        {
            name: "username",
            placeholder: "username",
            type: "text",
            value: "",
            className: "w-100 form-control",
            labelText: "User name"
        },
        {
            name: "password",
            placeholder: "password",
            type: "password",
            value: "",
            className: "w-100 form-control",
            labelText: "Password"
        },
        {name: "submit", placeholder: "", type: "submit", value: "Login", className: "btn btn-primary w-100 submit"}
    ]

    async handleSubmit() {
        var data = new FormData();

        Object.keys(this.DATA).forEach(key => data.append(key, this.DATA[key]));

        await Client.post(this.URL, data)
            .then(res => console.log(res));

    }

    render() {
        return (
            <div className="w-25 me-auto ms-auto">
                <Form data={this.DATA} inputs={this.inputs} handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
        );
    }
}

export default LoginForm;