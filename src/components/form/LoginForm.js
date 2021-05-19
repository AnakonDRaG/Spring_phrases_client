import React, {Component} from 'react';
import Input from "./Input";
import Client from "../../Client";
import Form from "./Form";
import axios from "axios";

class LoginForm extends Component {
    URL = "/auth/login";
    DATA = {}
    state = {errors:{}, success:""}
    inputs = [
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
        {name: "submit", placeholder: "", type: "submit", value: "Login", className: "btn btn-primary w-100 submit"}
    ]

    constructor() {
        super();
    }

    async handleSubmit() {
        var data = new FormData();

        Object.keys(this.DATA).forEach(key => data.append(key, this.DATA[key]));

        await Client.post(this.URL, data)
            .then(result => {
                this.setState({success: result.data.success})
                this.setState({errors:{}})
                console.log(result)
            }).catch(result => {
                this.inputs.map(item => {
                    item.error = null;
                })
                const errors = result.response.data.errors
                this.setState({errors:errors})
                console.log(result.response)
            })
        console.log(this.DATA)
    }

    render() {

        /*
        if (successMessage != null)
            successBox = <div className="alert alert-dismissible alert-success">{successMessage}</div>

        if (errorMessage != null)
            errorBox = <div className="alert alert-dismissible alert-danger">{errorMessage}</div>

         */
        return (
            <div className="w-25 me-auto ms-auto">
                <Form data={this.DATA} inputs={this.inputs} errors={this.state.errors} handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
        );
    }
}

export default LoginForm;