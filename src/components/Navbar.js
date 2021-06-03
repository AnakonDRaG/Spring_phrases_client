import React, {Component, useState} from 'react';

import {NavLink} from "react-router-dom";
import NavProfile from "../user/profile/NavProfile";
import {HiAnnotation, HiClipboardList, HiLogin, HiUser} from "react-icons/hi";
import AuthService from "../user/auth/auth.service";
import {observer} from "mobx-react";
import ModalComponent from "./modals/Modal.component";
import LoginForm from "./form/LoginForm";
import RegistrationForm from "./form/RegistrationForm";


const Navbar = observer(() => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 m-0">
            <div
                className="side-navbar  active-nav d-flex justify-content-between flex-wrap flex-column box-sizing-border min-vh-100 left-menu-size"
                id="sidebar">
                <ul className="nav flex-column text-white w-100">
                    <div className="nav-link fs-5 text-uppercase fw-bold text-light bg-primary py-5 text-center  w-100">
                        Catch phrases
                    </div>

                    <li className="nav-link ">
                        <NavLink to="/" className="nav-link" activeClassName="active fw-bold active" exact>
                            <HiAnnotation className="me-3 fs-4"/>Phrases
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/c_author" className="nav-link" activeClassName="active fw-bold">
                            <HiUser className="me-3 fs-4"/>Authors
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/categories" className="nav-link" activeClassName="active fw-bold">
                            <HiClipboardList className="me-3 fs-4"/>Categories
                        </NavLink>
                    </li>
                </ul>
                <div className="">
                    {AuthService.isAuth && <NavProfile/>}
                    {!AuthService.isAuth && (
                        <div className="text-center mb-4">
                            <ModalComponent
                                button={<span className="link-primary">Login<HiLogin className="ms-2"/></span>}
                                title="Login"
                                content={<LoginForm/>}
                                size="sm"/>
                            <ModalComponent
                                button={<span className="link-primary ms-4">Sign up</span>}
                                title="Registration"
                                content={<RegistrationForm/>}
                                size="lg"/>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )


})


export default Navbar;