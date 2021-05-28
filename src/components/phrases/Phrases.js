import React, {Component} from 'react';

import {Button, Col, Form, FormControl, Navbar, Row} from "react-bootstrap";
import {useAuthService} from "../../user/auth/AuthService";
import {Roles} from "../../user/auth/Roles";
import {BrowserRouter as Router, HashRouter, Route, Switch} from "react-router-dom";
import Phrase from "./Phrase";

const Phrases = () => {
    const URL = "/phrases";
    const state = {phrases: []}
    const {getUser} = useAuthService()

    return (
        <>
            <Navbar expand="lg" variant="light" bg="light" className="px-5">
                <Navbar.Text className="d-block w-100">
                    <div inline className="d-flex ">
                        <FormControl type="text" placeholder="Search phrase" className="w-100"/>
                        {getUser().role === Roles.admin && (
                            <a href="/phrases/add" className="btn w-25 ms-4 text-uppercase">Add</a>
                        )}

                    </div>

                </Navbar.Text>
            </Navbar>

            <div className="w-75 me-auto ms-auto">

            </div>
        </>
    );

}

export default Phrases;